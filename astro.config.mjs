// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // Production domain — drives canonical URLs, OG tags, sitemap and robots.
  site: 'https://eldarda.com',
  integrations: [preact()],
});
