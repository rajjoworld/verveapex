import { env } from '../config/env';

type EventPayload = Record<string, any> | undefined;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
  }
}

export function initAnalytics() {
  // GA4
  if (env.gaMeasurementId && typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    const gtagFn = (...args: any[]) => {
      window.dataLayer!.push(args);
    };
    window.gtag = gtagFn;
    gtagFn('js', new Date());
    gtagFn('config', env.gaMeasurementId);

    // Inject GA4 script tag
    const s1 = document.createElement('script');
    s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${env.gaMeasurementId}`;
    document.head.appendChild(s1);
    const s2 = document.createElement('script');
  s2.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${env.gaMeasurementId}');`;
    document.head.appendChild(s2);
  }

  // LinkedIn Insight Tag
  if (env.linkedinPartnerId && typeof window !== 'undefined') {
    window._linkedin_partner_id = env.linkedinPartnerId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(env.linkedinPartnerId);
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = `
      (function(){var s = document.getElementsByTagName('script')[0];
      var b = document.createElement('script');
      b.type = 'text/javascript';b.async = true;
      b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      s.parentNode.insertBefore(b, s);})();
    `;
    document.head.appendChild(s);
  }
}

export function trackEvent(name: string, params: EventPayload = {}) {
  try {
    if (window.gtag && env.gaMeasurementId) {
      window.gtag('event', name, params || {});
    }
  } catch {}
}

export function trackPageView(path?: string, title?: string) {
  try {
    if (window.gtag && env.gaMeasurementId) {
      const page_path = path || window.location.pathname + window.location.search;
      const page_location = window.location.href;
      const page_title = title || document.title;
      window.gtag('event', 'page_view', { page_path, page_location, page_title });
      // Also update config for SPA routing
      window.gtag('config', env.gaMeasurementId, { page_path });
    }
  } catch {}
}
