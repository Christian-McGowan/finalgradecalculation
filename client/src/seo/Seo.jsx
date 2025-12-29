import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeta } from './routeMeta';

function upsertMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
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

export default function Seo() {
  const { pathname } = useLocation();
  const meta = getMeta(pathname);

  useEffect(() => {
    document.title = meta.title;
    upsertMeta('description', meta.description);
    upsertLink('canonical', meta.canonical);
  }, [meta.title, meta.description, meta.canonical]);

  return null;
}
