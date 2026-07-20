// astro.config.mjs
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rjmlaird.co.uk",
  output: "static",
  scopedStyleStrategy: "class",
  integrations: [icon(), mdx(), sitemap()],
});