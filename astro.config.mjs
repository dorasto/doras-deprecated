import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), mdx()],
	output: "server",
	server: {
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	adapter: cloudflare()
});