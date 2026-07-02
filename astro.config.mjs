// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucenthindu.vercel.app',  // 🔥 IMPORTANT: Apna live domain daalo
  integrations: [sitemap()],
  vite: {
    // Tailwind already added via astro add
  }
});