import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://ijnad.org',
  base: '/',
  output: 'static',
  integrations: [tailwind(), mdx()],
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: 'Содержание', maxDepth: 3 } ] ],
  }
});
