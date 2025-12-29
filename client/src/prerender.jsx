import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { getMeta } from './seo/routeMeta';

export async function prerender(data) {
  const url = data.url || '/';
  const meta = getMeta(url);

  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  // Inject per-page head tags into the prerendered HTML
  const headElements = new Set([
    { type: 'meta', props: { name: 'description', content: meta.description } },
    { type: 'link', props: { rel: 'canonical', href: meta.canonical } },

    // OpenGraph
    { type: 'meta', props: { property: 'og:type', content: 'website' } },
    { type: 'meta', props: { property: 'og:title', content: meta.title } },
    { type: 'meta', props: { property: 'og:description', content: meta.description } },
    { type: 'meta', props: { property: 'og:url', content: meta.canonical } },

    // Twitter
    { type: 'meta', props: { name: 'twitter:card', content: 'summary' } },
    { type: 'meta', props: { name: 'twitter:title', content: meta.title } },
    { type: 'meta', props: { name: 'twitter:description', content: meta.description } }
  ]);

  return {
    html,
    head: {
      lang: 'en',
      title: meta.title,
      elements: headElements
    }
  };
}
