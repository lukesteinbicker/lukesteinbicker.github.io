import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lukesteinbicker.github.io',
	base: 'lukesteinbicker.github.io',
	integrations: [mdx(), sitemap()]
});
