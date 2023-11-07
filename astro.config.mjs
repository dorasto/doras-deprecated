import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	site: "https://doras.to",
	image: {
		service: sharpImageService()
	},
	integrations: [tailwind(), mdx(), sitemap(), react()]
});