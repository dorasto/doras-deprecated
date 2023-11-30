import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
// import node from "@astrojs/node";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://doras.to",
  integrations: [tailwind({
    applyBaseStyles: true
  }), react(), mdx(),
    //  sitemap()
  ],
  output: "server",
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  compressHTML: true,
  adapter: cloudflare({
    routes: {
      strategy: "include"
    }
  }),
  experimental: {
    optimizeHoistedScript: true
  }
});