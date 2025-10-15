import { env } from '../config/env';

type EventPayload = Record<string, any> | undefined;

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    hj?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
    FS?: (...args: any[]) => void;
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

  // Hotjar Heatmaps & Recordings
  if (env.hotjarSiteId && typeof window !== 'undefined') {
    const s = document.createElement('script');
    s.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${env.hotjarSiteId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(s);
  }

  // Microsoft Clarity
  if (env.clarityProjectId && typeof window !== 'undefined') {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${env.clarityProjectId}");
    `;
    document.head.appendChild(s);
  }

  // FullStory Session Recordings
  if (env.fullstoryOrgId && typeof window !== 'undefined') {
    const s = document.createElement('script');
    s.innerHTML = `
      window['_fs_host'] = 'fullstory.com';
      window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
      window['_fs_org'] = '${env.fullstoryOrgId}';
      window['_fs_namespace'] = 'FS';
      (function(m,n,e,t,l,o,g,y){
        if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
        g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
        o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
        g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
        g.anonymize=function(){g.identify(!!0)};
        g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
        g.log = function(a,b){g("log",[a,b])};
        g.consent=function(a){g("consent",!arguments.length||a)};
        g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
        g.clearUserCookie=function(){};
        g.setVars=function(n, p){g('setVars',[n,p]);};
        g._w={};
        y='XMLHttpRequest';
        g._w[y]=m[y];
        y='fetch';
        g._w[y]=m[y];
        if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
        g._v="1.3.0";
      })(window,document,window['_fs_namespace'],'script','user');
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

// Conversion tracking functions
export function trackCTAConversion(ctaType: string, ctaText: string, location: string) {
  trackEvent('cta_click', {
    cta_type: ctaType, // 'hero_primary', 'hero_secondary', 'contact_form', 'exit_popup', etc.
    cta_text: ctaText,
    location: location, // 'hero', 'contact_section', 'exit_popup', etc.
    event_category: 'conversion',
    event_label: `${ctaType}_${location}`
  });
}

export function trackFormSubmission(formType: string, formData?: Record<string, any>) {
  trackEvent('form_submit', {
    form_type: formType, // 'contact_form', 'exit_popup_form', etc.
    event_category: 'conversion',
    event_label: formType,
    ...formData && { custom_parameters: formData }
  });
}

export function trackExitIntent() {
  trackEvent('exit_intent_triggered', {
    event_category: 'engagement',
    event_label: 'exit_popup_shown'
  });
}

export function trackFAQInteraction(question: string, action: 'expand' | 'collapse') {
  trackEvent('faq_interaction', {
    question: question,
    action: action,
    event_category: 'engagement',
    event_label: `faq_${action}`
  });
}

export function trackProjectCardInteraction(projectTitle: string, action: 'view' | 'cta_click') {
  trackEvent('project_card_interaction', {
    project_title: projectTitle,
    action: action,
    event_category: 'engagement',
    event_label: `project_${action}`
  });
}

export function trackScrollDepth(percentage: number) {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
    event_category: 'engagement',
    event_label: `${percentage}%_scrolled`
  });
}

// User Behavior & Heatmap Tracking Functions
export function trackUserInteraction(element: string, action: string, details?: Record<string, any>) {
  // Track in GA4
  trackEvent('user_interaction', {
    element: element,
    action: action,
    event_category: 'behavior',
    event_label: `${element}_${action}`,
    ...details
  });

  // Track in heatmap services
  try {
    // Hotjar custom event
    if (window.hj) {
      window.hj('event', `${element}_${action}`);
    }

    // FullStory custom event
    if (window.FS) {
      window.FS('event', `${element}_${action}`, details || {});
    }
  } catch {}
}

export function trackRageClick(element: string, clickCount: number) {
  trackEvent('rage_click', {
    element: element,
    click_count: clickCount,
    event_category: 'behavior',
    event_label: `rage_click_${element}`
  });

  // Track in heatmap services
  try {
    if (window.hj) {
      window.hj('event', `rage_click_${element}`);
    }
    if (window.FS) {
      window.FS('event', 'rage_click', { element, clickCount });
    }
  } catch {}
}

export function trackDeadClick(element: string, timeSpent: number) {
  trackEvent('dead_click', {
    element: element,
    time_spent: timeSpent,
    event_category: 'behavior',
    event_label: `dead_click_${element}`
  });

  // Track in heatmap services
  try {
    if (window.hj) {
      window.hj('event', `dead_click_${element}`);
    }
    if (window.FS) {
      window.FS('event', 'dead_click', { element, timeSpent });
    }
  } catch {}
}

export function trackFormFieldInteraction(fieldName: string, action: 'focus' | 'blur' | 'change', formType: string) {
  trackEvent('form_field_interaction', {
    field_name: fieldName,
    action: action,
    form_type: formType,
    event_category: 'behavior',
    event_label: `${formType}_${fieldName}_${action}`
  });
}

export function trackTimeOnPage(timeSpent: number, page: string) {
  trackEvent('time_on_page', {
    time_spent: timeSpent,
    page: page,
    event_category: 'engagement',
    event_label: `time_${page}`
  });
}

export function trackMouseMovement(pattern: 'rapid' | 'hesitant' | 'normal', intensity: number) {
  // Only track significant patterns to avoid noise
  if (intensity > 0.7) {
    trackEvent('mouse_pattern', {
      pattern: pattern,
      intensity: intensity,
      event_category: 'behavior',
      event_label: `mouse_${pattern}`
    });
  }
}

// Heatmap Service Management
export function identifyUser(userId: string, traits?: Record<string, any>) {
  try {
    // FullStory user identification
    if (window.FS) {
      window.FS('setUserVars', traits || {});
      window.FS('identify', userId, traits || {});
    }

    // Hotjar user attributes
    if (window.hj) {
      window.hj('identify', userId, traits || {});
    }
  } catch {}
}

export function setUserProperties(properties: Record<string, any>) {
  try {
    // FullStory user properties
    if (window.FS) {
      window.FS('setUserVars', properties);
    }

    // Hotjar user properties
    if (window.hj) {
      window.hj('identify', null, properties);
    }
  } catch {}
}
