// astro.config.mjs
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://rjmlaird.co.uk",
  output: "server",
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  scopedStyleStrategy: "class",
  integrations: [icon(), mdx(), sitemap()],
});