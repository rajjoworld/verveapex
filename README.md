# Verve Apex Website

Production-ready marketing site for Verve Apex, a new product studio focused on MVPs and full builds.

Key features:
- Honest positioning and conversion-focused copy
- Consistent CTA to book a call (Contact page with scheduler)
- Per-page SEO (titles, descriptions, canonical, OpenGraph, Twitter)
- Structured data (Organization, WebSite)
- Analytics integration (GA4 + LinkedIn) with UTM capture
- Accessibility improvements and reduced-motion support
- Performance-conscious animations (lazy-loaded where heavy)

## Quick start

1) Install dependencies
	npm install

2) Create a .env file at the project root and set the following (optional keys are safe to omit):

	REACT_APP_FORMS_ENDPOINT=https://example.com/api/form
	REACT_APP_SCHEDULER_URL=https://calendly.com/your-link
	REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
	REACT_APP_LINKEDIN_PARTNER_ID=1234567

3) Run locally
	npm start

4) Build for production
	npm run build

## Environment Variables

- REACT_APP_FORMS_ENDPOINT: Optional HTTP endpoint used by Contact form. If unset, form will be disabled.
- REACT_APP_SCHEDULER_URL: Optional scheduler iframe URL (Calendly, Cal.com, etc.). If unset, Contact page shows fallback instructions.
- REACT_APP_GA_MEASUREMENT_ID: Optional GA4 Measurement ID. Enables analytics when present.
- REACT_APP_LINKEDIN_PARTNER_ID: Optional LinkedIn Insight Tag partner ID.

## Analytics & Attribution

- Analytics initialization and helpers live in `src/services/analytics.ts`.
- UTM params are captured and stored in sessionStorage via `src/utils/utm.ts`.
- Key events: `book_call_click`, `contact_submit_success`, `contact_submit_error`, `scheduler_view`, and `scheduler_event_scheduled`.

## SEO

- Reusable SEO component in `src/components/SEO.tsx` sets per-page meta (title, description, OG/Twitter) and canonical.
- Adds JSON-LD for Organization and WebSite. Update logo path and company details as needed.
- Sitemap served at `/sitemap.xml` and referenced in `public/robots.txt`.

## Accessibility & UX

- Skip-to-content link, aria-current on active nav links, aria-expanded on mobile menu.
- Auto route-scroll feature with user toggle and reduced-motion respect.

## Project Structure

- Pages in `src/pages/` (Home, Services, Portfolio, ProjectCaseStudy, About, Contact, Privacy, Terms)
- Layout/components in `src/components/`
- Config in `src/config/env.ts`
- Hooks in `src/hooks/`
- Services and utilities in `src/services/` and `src/utils/`

## Deployment

- Any static host works (Vercel, Netlify, S3/CloudFront, Firebase Hosting).
- Ensure environment variables are set at build time for features you want enabled.
- After deploy, verify `/sitemap.xml` is accessible and that analytics scripts load when IDs are present.

## Maintenance

- To add a new page: create under `src/pages/`, add a route in `src/App.tsx`, and include `SEO` for proper meta.
- Update `public/og-image.jpg` with a branded asset (1200x630 recommended).
