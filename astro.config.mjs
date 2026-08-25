import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maxsapo.me',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/stats') })],
  redirects: {
    '/about': '/',
    '/contact': '/now',
    '/speaking': '/watch',
    '/writing': '/',
  },
});
