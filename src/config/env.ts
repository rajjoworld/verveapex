// Centralized environment configuration for the app
// CRA exposes env vars prefixed with REACT_APP_

interface AppEnv {
  formsEndpoint?: string; // e.g., Formspree/Basin endpoint URL
  schedulerUrl?: string;  // e.g., Calendly/Cal.com scheduling URL
  gaMeasurementId?: string; // Google Analytics 4 Measurement ID (G-XXXXXXX)
  linkedinPartnerId?: string; // LinkedIn Insight Tag partner ID
}

export const env: AppEnv = {
  formsEndpoint: process.env.REACT_APP_FORMS_ENDPOINT,
  schedulerUrl: process.env.REACT_APP_SCHEDULER_URL,
  gaMeasurementId: process.env.REACT_APP_GA_MEASUREMENT_ID,
  linkedinPartnerId: process.env.REACT_APP_LINKEDIN_PARTNER_ID,
};
