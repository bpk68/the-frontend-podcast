import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://thefrontendpodcast.site',
  integrations: [sitemap(), prefetch(), compress({ logger: 1 })],
  markdown: {
    shikiConfig: {
      theme: 'nord',
      wrap: true,
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
});
