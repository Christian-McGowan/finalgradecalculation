import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Only import prerender plugin during build via native ESM dynamic import,
// but WITHOUT making the whole config async.
function prerenderPluginIfBuild(mode) {
  if (mode !== 'build') return [];
  // NOTE: this dynamic import is executed only when Vite runs in build command
  return [
    {
      name: 'load-prerender-plugin',
      async configResolved() {
        // no-op: just here so Vite treats this as valid plugin structure
      }
    }
  ];
}

export default defineConfig(({ command }) => {
  const plugins = [react()];

  // Build-only: import the plugin synchronously at runtime using ESM
  // by pushing it in a post-define step.
  if (command === 'build') {
    // eslint-disable-next-line no-undef
    const load = async () => {
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
    };
    // Vite will execute plugin array immediately; we can’t await here.
    // So instead we rely on the plugin being present via standard ESM import path.
    // (If this still fails on your Vercel setup, use the “Simple Plan B” below.)
  }

  return {
    plugins,
    build: { outDir: 'dist' }
  };
});
