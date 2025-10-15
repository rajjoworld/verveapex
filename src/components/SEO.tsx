import React, { useEffect } from 'react';

type SEOProps = {
  title?: string;
  description?: string;
  path?: string; // for canonical & og:url
  image?: string; // absolute or root-relative
};

const DEFAULTS = {
  title: 'Verve Apex — New Product Studio for MVPs and Full Builds',
  description:
    'We are a new studio partnering with ambitious founders to design and build MVPs and full-stack products—honest, fast, and focused on real outcomes.',
  image: '/og-image.jpg',
};

export const SEO: React.FC<SEOProps> = ({ title, description, path, image }) => {
  useEffect(() => {
    const t = title || DEFAULTS.title;
    const d = description || DEFAULTS.description;
    const i = image || DEFAULTS.image;
    const url = path ? `${window.location.origin}${path}` : window.location.href;

    document.title = t;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Basic description
    setMeta('name', 'description', d);

    // OpenGraph
    setMeta('property', 'og:title', t);
    setMeta('property', 'og:description', d);
    setMeta('property', 'og:image', i);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', t);
    setMeta('name', 'twitter:description', d);
    setMeta('name', 'twitter:image', i);

    // Canonical link
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // Structured Data (JSON-LD): Organization and WebSite
    const origin = window.location.origin;
    const orgData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: 'Verve Apex',
      url: origin,
      logo: `${origin}/logo512.png`,
    } as const;

    const siteData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: origin,
      name: 'Verve Apex',
      inLanguage: 'en',
    } as const;

    const setJsonLd = (id: string, data: unknown) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    };

    setJsonLd('ld-org', orgData);
    setJsonLd('ld-website', siteData);
  }, [title, description, path, image]);

  return null;
};

export default SEO;
