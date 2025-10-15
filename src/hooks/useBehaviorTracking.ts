import { useEffect, useRef, useCallback } from 'react';
import {
  trackUserInteraction,
  trackRageClick,
  trackDeadClick,
  trackFormFieldInteraction,
  trackMouseMovement,
  trackTimeOnPage
} from '../services/analytics';

interface UseBehaviorTrackingOptions {
  trackClicks?: boolean;
  trackMouseMovement?: boolean;
  trackFormInteractions?: boolean;
  trackTimeOnPage?: boolean;
  pageName?: string;
}

export function useBehaviorTracking(options: UseBehaviorTrackingOptions = {}) {
  const {
    trackClicks = true,
    trackMouseMovement: trackMouse = false,
    trackFormInteractions = true,
    trackTimeOnPage: trackTime = true,
    pageName = window.location.pathname
  } = options;

  const clickCountsRef = useRef<Map<string, { count: number; timestamp: number }>>(new Map());
  const mousePositionsRef = useRef<Array<{ x: number; y: number; timestamp: number }>>([]);
  const pageStartTimeRef = useRef<number>(Date.now());

  // Track rage clicks (multiple rapid clicks on same element)
  const handleClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const elementId = target.id || target.className || target.tagName.toLowerCase();
    const key = `${elementId}_${target.textContent?.slice(0, 20) || ''}`.trim();

    const now = Date.now();
    const existing = clickCountsRef.current.get(key);

    if (existing && (now - existing.timestamp) < 1000) { // Within 1 second
      existing.count += 1;
      if (existing.count >= 3) { // Rage click threshold
        trackRageClick(key, existing.count);
        clickCountsRef.current.delete(key); // Reset after tracking
      }
    } else {
      clickCountsRef.current.set(key, { count: 1, timestamp: now });
    }

    // Track general user interaction
    trackUserInteraction('click', key, {
      element_type: target.tagName.toLowerCase(),
      element_text: target.textContent?.slice(0, 50) || '',
      x: event.clientX,
      y: event.clientY
    });
  }, []);

  // Track dead clicks (clicks that don't lead to navigation/interaction)
  const handlePotentialDeadClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const startTime = Date.now();

    // Check if click leads to meaningful interaction after a short delay
    setTimeout(() => {
      const timeSpent = Date.now() - startTime;
      if (timeSpent > 2000 && timeSpent < 10000) { // Between 2-10 seconds of no response
        const elementId = target.id || target.className || target.tagName.toLowerCase();
        trackDeadClick(elementId, timeSpent);
      }
    }, 2000);
  }, []);

  // Track mouse movement patterns
  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!trackMouse) return;

    const now = Date.now();
    const position = { x: event.clientX, y: event.clientY, timestamp: now };

    mousePositionsRef.current.push(position);

    // Keep only last 10 positions for analysis
    if (mousePositionsRef.current.length > 10) {
      mousePositionsRef.current.shift();
    }

    // Analyze movement pattern
    if (mousePositionsRef.current.length >= 5) {
      const recent = mousePositionsRef.current.slice(-5);
      const distances = [];
      const times = [];

      for (let i = 1; i < recent.length; i++) {
        const dx = recent[i].x - recent[i-1].x;
        const dy = recent[i].y - recent[i-1].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const timeDiff = recent[i].timestamp - recent[i-1].timestamp;

        distances.push(distance);
        times.push(timeDiff);
      }

      const avgDistance = distances.reduce((a, b) => a + b, 0) / distances.length;
      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      const speed = avgDistance / avgTime; // pixels per ms

      // Classify movement pattern
      let pattern: 'rapid' | 'hesitant' | 'normal' = 'normal';
      let intensity = 0;

      if (speed > 2) {
        pattern = 'rapid';
        intensity = Math.min(speed / 5, 1); // Normalize
      } else if (speed < 0.5) {
        pattern = 'hesitant';
        intensity = Math.max((1 - speed / 0.5), 0); // Normalize
      }

      trackMouseMovement(pattern, intensity);
    }
  }, [trackMouse]);

  // Track form field interactions
  const handleFormFocus = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (target.form) {
      const formType = target.form.id || target.form.className || 'unknown_form';
      trackFormFieldInteraction(target.name || target.id || 'unnamed_field', 'focus', formType);
    }
  }, []);

  const handleFormBlur = useCallback((event: FocusEvent) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (target.form) {
      const formType = target.form.id || target.form.className || 'unknown_form';
      trackFormFieldInteraction(target.name || target.id || 'unnamed_field', 'blur', formType);
    }
  }, []);

  // Track time on page before unload
  const handleBeforeUnload = useCallback(() => {
    if (trackTime) {
      const timeSpent = Date.now() - pageStartTimeRef.current;
      trackTimeOnPage(timeSpent, pageName);
    }
  }, [trackTime, pageName]);

  // Track visibility changes (tab switching)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden && trackTime) {
      const timeSpent = Date.now() - pageStartTimeRef.current;
      trackTimeOnPage(timeSpent, pageName);
      pageStartTimeRef.current = Date.now(); // Reset for when they return
    } else if (!document.hidden) {
      pageStartTimeRef.current = Date.now(); // Reset start time
    }
  }, [trackTime, pageName]);

  useEffect(() => {
    if (trackClicks) {
      document.addEventListener('click', handleClick);
      document.addEventListener('click', handlePotentialDeadClick);
    }

    if (trackMouse) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    if (trackFormInteractions) {
      document.addEventListener('focusin', handleFormFocus);
      document.addEventListener('focusout', handleFormBlur);
    }

    if (trackTime) {
      window.addEventListener('beforeunload', handleBeforeUnload);
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    // Cleanup
    return () => {
      if (trackClicks) {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('click', handlePotentialDeadClick);
      }

      if (trackMouse) {
        document.removeEventListener('mousemove', handleMouseMove);
      }

      if (trackFormInteractions) {
        document.removeEventListener('focusin', handleFormFocus);
        document.removeEventListener('focusout', handleFormBlur);
      }

      if (trackTime) {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };
  }, [trackClicks, trackMouse, trackFormInteractions, trackTime, handleClick, handlePotentialDeadClick, handleMouseMove, handleFormFocus, handleFormBlur, handleBeforeUnload, handleVisibilityChange]);

  // Return functions for manual tracking if needed
  return {
    trackCustomInteraction: (element: string, action: string, details?: Record<string, any>) => {
      trackUserInteraction(element, action, details);
    }
  };
}