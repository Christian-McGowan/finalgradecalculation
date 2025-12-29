import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async ({ command }) => {
  const plugins = [react()];

  // Only include prerender during `vite build`
  if (command === 'build') {
    const mod = await import('vite-prerender-plugin');
    const { vitePrerenderPlugin } = mod;

    plugins.push(
      vitePrerenderPlugin({
        renderTarget: '#root',
        additionalPrerenderRoutes: [
          '/',
          '/final-grade-calculator',
          '/what-do-i-need-on-my-final',
          '/weighted-grade-calculator',
          '/grade-planner',
          '/faq',
          '/privacy-policy',
          '/terms',
          '/contact'
        ]
      })
    );
  }

  return {
    plugins,
    build: { outDir: 'dist' }
  };
});
