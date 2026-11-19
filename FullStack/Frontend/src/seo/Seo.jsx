import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMeta, buildSeo } from "./seoConfig";

// Lightweight head manager (no react-helmet needed).
//   <Seo />            -> mounted once in App.jsx, sets title/description/canonical/OG/robots per route
//   useSeo({...})      -> optional, for dynamic pages (e.g. blog detail) to override title/description/image

let routeMeta = null;
let override = null;

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(data) {
  let el = document.head.querySelector('script[data-seo="jsonld"]');
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo", "jsonld");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function render() {
  if (!routeMeta || typeof document === "undefined") return;
  const seo = buildSeo({ ...routeMeta, ...(override || {}) });

  document.title = seo.title;
  upsertMeta("name", "description", seo.description);
  upsertMeta("name", "robots", seo.robots);
  upsertCanonical(seo.canonical);
  Object.entries(seo.og).forEach(([k, v]) => upsertMeta("property", k, v));
  Object.entries(seo.twitter).forEach(([k, v]) => upsertMeta("name", k, v));
  upsertJsonLd(seo.jsonLd);
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    routeMeta = getMeta(pathname);
    render();
  }, [pathname]);
  return null;
}

/**
 * Override SEO for a dynamic page once its data has loaded.
 *   useSeo(blog ? { title: `${blog.title} | TechTorch`, description: ..., image: blog.coverImage } : null);
 * Accepts: title, description, image, imageAlt, type ("article"), noindex, canonical, jsonLd
 */
export function useSeo(meta) {
  const key = meta ? JSON.stringify(meta) : "";
  useEffect(() => {
    if (!meta) return undefined;
    override = meta;
    render();
    return () => {
      if (override === meta) {
        override = null;
        render();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
