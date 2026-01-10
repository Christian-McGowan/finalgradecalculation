import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeta } from './routeMeta';

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, obj) {
  if (!obj) return;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(obj);
}

export default function Seo() {
  const { pathname } = useLocation();
  const meta = getMeta(pathname);

  useEffect(() => {
    document.title = meta.title;

    upsertMetaByName('description', meta.description);
    upsertLink('canonical', meta.canonical);

    // OG/Twitter basics
    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:title', meta.title);
    upsertMetaByProperty('og:description', meta.description);
    upsertMetaByProperty('og:url', meta.canonical);

    upsertMetaByName('twitter:card', 'summary');
    upsertMetaByName('twitter:title', meta.title);
    upsertMetaByName('twitter:description', meta.description);

    // Per-route schema
    if (meta.schema) upsertJsonLd('route-schema', meta.schema);
  }, [meta.title, meta.description, meta.canonical, meta.schema]);

  return null;
}
