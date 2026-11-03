// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://citadelsolutions.tech',

  integrations: [
    vue(),
    sitemap({
      // Keep individual team portfolio pages and the 404 page out of the sitemap.
      // The /about-us deck page itself stays in.
      filter: (page) => {
        const path = new URL(page).pathname;
        const isMemberPage = /^\/about-us\/[^/]+\/?$/.test(path);
        const isErrorPage = path.startsWith('/404');
        return !isMemberPage && !isErrorPage;
      },
    }),
  ],

  // Replaces the old vue-router redirects.
  redirects: {
    '/services/bundles': '/services',
    '/policies': '/policies/privacy-policy',
  },

  // Astro writes the Content-Security-Policy as a <meta> tag on every page,
  // with hashes for its own inline scripts generated on each build.
  // This replaces the CSP header that nginx used to send.
  // frame-ancestors is NOT here: browsers ignore it in a meta tag.
  // nginx's X-Frame-Options: DENY header covers clickjacking instead.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api.citadelsolutions.tech https://cloudflareinsights.com",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ],
      scriptDirective: {
        resources: ["'self'", 'https://static.cloudflareinsights.com'],
      },
      styleDirective: {
        // Inline style="" attributes (deck transforms, holo effect, team colors)
        // go in style-src-attr. <style> elements stay restricted to hashes.
        resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }],
      },
    },
  },

  prefetch: {
    prefetchAll: true,
  },

  vite: {
    plugins: [tailwindcss()]
  }
});