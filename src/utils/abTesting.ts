import { useState, useEffect } from 'react';
import { trackEvent } from '../services/analytics';

export interface ABTestVariant {
  id: string;
  name: string;
  weight: number; // Percentage of traffic (0-100)
  component: string | React.ComponentType<any>; // Allow both string identifiers and component types
  props?: Record<string, any>;
}

export interface ABTest {
  id: string;
  name: string;
  variants: readonly ABTestVariant[]; // Allow readonly arrays
  enabled: boolean;
  startDate?: Date;
  endDate?: Date;
  targetAudience?: {
    trafficPercentage: number; // 0-100
    userSegments?: string[];
  };
}

interface ABTestResult {
  testId: string;
  variantId: string;
  conversions: number;
  impressions: number;
  conversionRate: number;
  confidence: number;
}

// Simple hash function for consistent user bucketing
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

// Get user bucket for A/B testing (0-100)
function getUserBucket(userId?: string): number {
  const identifier = userId || getAnonymousId();
  return hashString(identifier) % 100;
}

// Generate anonymous user ID for consistent bucketing
function getAnonymousId(): string {
  let id = localStorage.getItem('ab_test_user_id');
  if (!id) {
    id = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('ab_test_user_id', id);
  }
  return id;
}

// Check if user is in test audience
function isInTestAudience(test: ABTest, userBucket: number): boolean {
  if (!test.targetAudience) return true;

  const { trafficPercentage } = test.targetAudience;
  return userBucket < trafficPercentage;
}

// Select variant based on user bucket and weights
function selectVariant(test: ABTest, userBucket: number): ABTestVariant | null {
  if (!isInTestAudience(test, userBucket)) return null;

  let cumulativeWeight = 0;
  const bucket = userBucket; // User bucket is already 0-99

  for (const variant of test.variants) {
    cumulativeWeight += variant.weight;
    if (bucket < cumulativeWeight) {
      return variant;
    }
  }

  // Fallback to first variant if weights don't add up to 100
  return test.variants[0] || null;
}

// Track test exposure and conversions
export function trackABTestExposure(testId: string, variantId: string) {
  trackEvent('ab_test_exposure', {
    test_id: testId,
    variant_id: variantId,
    event_category: 'experiment',
    event_label: `${testId}_${variantId}`
  });
}

export function trackABTestConversion(testId: string, variantId: string, conversionType: string = 'general') {
  trackEvent('ab_test_conversion', {
    test_id: testId,
    variant_id: variantId,
    conversion_type: conversionType,
    event_category: 'experiment',
    event_label: `${testId}_${variantId}_${conversionType}`
  });
}

// Hook for using A/B tests in components
export function useABTest(test: ABTest) {
  const [selectedVariant, setSelectedVariant] = useState<ABTestVariant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!test.enabled) {
      setIsLoading(false);
      return;
    }

    const userBucket = getUserBucket();
    const variant = selectVariant(test, userBucket);

    setSelectedVariant(variant);
    setIsLoading(false);

    // Track exposure if variant was selected
    if (variant) {
      trackABTestExposure(test.id, variant.id);
    }
  }, [test]);

  return {
    variant: selectedVariant,
    isLoading,
    isInTest: selectedVariant !== null,
    trackConversion: (conversionType: string = 'general') => {
      if (selectedVariant) {
        trackABTestConversion(test.id, selectedVariant.id, conversionType);
      }
    }
  };
}

// Predefined A/B test configurations
export const AB_TESTS = {
  hero_cta: {
    id: 'hero_cta_test',
    name: 'Hero CTA Button Text',
    enabled: true,
    variants: [
      {
        id: 'variant_a',
        name: 'Get Free Consultation',
        weight: 50,
        component: 'button',
        props: {
          text: 'Get Free Consultation — + Custom Roadmap',
          variant: 'primary'
        }
      },
      {
        id: 'variant_b',
        name: 'Schedule Free Call',
        weight: 50,
        component: 'button',
        props: {
          text: 'Schedule Free Call — Pick a Slot',
          variant: 'primary'
        }
      }
    ],
    targetAudience: {
      trafficPercentage: 100 // Test on all traffic
    }
  },

  hero_subtitle: {
    id: 'hero_subtitle_test',
    name: 'Hero Subtitle Timeline',
    enabled: true,
    variants: [
      {
        id: 'with_timeline',
        name: 'With Timeline',
        weight: 50,
        component: 'text',
        props: {
          text: '**Featured outcome:** First demo in 2 weeks • Project delivered with demo, handoff docs & 1 month free support.'
        }
      },
      {
        id: 'without_timeline',
        name: 'Without Timeline',
        weight: 50,
        component: 'text',
        props: {
          text: '**Featured outcome:** Project delivered with demo, handoff docs & 1 month free support.'
        }
      }
    ],
    targetAudience: {
      trafficPercentage: 100
    }
  },

  guarantee_text: {
    id: 'guarantee_text_test',
    name: 'Guarantee Copy Variation',
    enabled: true,
    variants: [
      {
        id: 'conservative',
        name: 'Conservative',
        weight: 50,
        component: 'text',
        props: {
          text: "We'll make it right — free fixes until you're satisfied (terms apply)."
        }
      },
      {
        id: 'bold',
        name: 'Bold Guarantee',
        weight: 50,
        component: 'text',
        props: {
          text: '1 month free support + unlimited revisions until you love it.'
        }
      }
    ],
    targetAudience: {
      trafficPercentage: 100
    }
  }
} as const;

// Utility function to get test results (for admin dashboard)
export function getABTestResults(testId: string): ABTestResult[] {
  // In a real implementation, this would fetch from your analytics backend
  // For now, return mock data structure
  return [];
}

// Statistical significance calculator
export function calculateStatisticalSignificance(
  variantA: { conversions: number; impressions: number },
  variantB: { conversions: number; impressions: number }
): { isSignificant: boolean; confidence: number; winner?: 'A' | 'B' } {
  // Simplified statistical significance calculation
  // In production, use proper statistical libraries

  const rateA = variantA.conversions / variantA.impressions;
  const rateB = variantB.conversions / variantB.impressions;

  // Simple z-test approximation
  const pooledRate = (variantA.conversions + variantB.conversions) /
                     (variantA.impressions + variantB.impressions);

  if (pooledRate === 0) return { isSignificant: false, confidence: 0 };

  const se = Math.sqrt(pooledRate * (1 - pooledRate) *
              (1/variantA.impressions + 1/variantB.impressions));

  const zScore = Math.abs(rateA - rateB) / se;
  const confidence = Math.min(zScore * 10, 99.9); // Rough approximation

  return {
    isSignificant: confidence > 95,
    confidence: Math.round(confidence * 10) / 10,
    winner: confidence > 95 ? (rateA > rateB ? 'A' : 'B') : undefined
  };
}