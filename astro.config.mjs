import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://thefrontendpodcast.site',
  integrations: [
    sitemap(),
    compress({
      logger: 1,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  prefetch: true,
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
