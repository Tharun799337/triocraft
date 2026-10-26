import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://triocraft-5cix.onrender.com';
const DEFAULT_IMAGE = `${BASE_URL}/triocraft-logo.png`;

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  /** Pass false to disable canonical injection (e.g. for 404 page) */
  canonical?: string | false;
  /** Optional JSON-LD structured data object */
  structuredData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'TrioCraft — Digital Marketing, Web Development & AI Agency',
  description = 'TrioCraft is a full-service digital design, custom engineering, and AI agency in Hyderabad. We build web applications, hospital management systems, AI chatbots, and revenue-scaling platforms.',
  image = DEFAULT_IMAGE,
  canonical,
  structuredData,
}) => {
  const location = useLocation();

  useEffect(() => {
    // ── Title ──────────────────────────────────────────────
    document.title = title;

    // ── Helper: upsert a <meta> tag ─────────────────────────
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace(/[\[\]']/g, '').split('=');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: upsert a <link> tag ─────────────────────────
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Canonical ───────────────────────────────────────────
    if (canonical !== false) {
      const canonicalUrl = canonical ?? `${BASE_URL}${location.pathname}`;
      setLink('canonical', canonicalUrl);
    }

    // ── Primary meta ────────────────────────────────────────
    setMeta('meta[name="description"]', 'content', description);

    // ── Open Graph ──────────────────────────────────────────
    const ogUrl = `${BASE_URL}${location.pathname}`;
    setMeta("meta[property='og:title']", 'content', title);
    setMeta("meta[property='og:description']", 'content', description);
    setMeta("meta[property='og:url']", 'content', ogUrl);
    setMeta("meta[property='og:image']", 'content', image);
    setMeta("meta[property='og:type']", 'content', 'website');

    // ── Twitter Cards ───────────────────────────────────────
    setMeta("meta[name='twitter:card']", 'content', 'summary_large_image');
    setMeta("meta[name='twitter:title']", 'content', title);
    setMeta("meta[name='twitter:description']", 'content', description);
    setMeta("meta[name='twitter:image']", 'content', image);

    // ── JSON-LD Structured Data ─────────────────────────────
    const existingLd = document.getElementById('page-structured-data');
    if (structuredData) {
      const script = existingLd ?? document.createElement('script');
      script.id = 'page-structured-data';
      (script as HTMLScriptElement).type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      if (!existingLd) document.head.appendChild(script);
    } else if (existingLd) {
      existingLd.remove();
    }

    // ── Scroll to top on route change ───────────────────────
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, image, canonical, structuredData, location.pathname]);

  return null;
};
