import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://rjmlaird.co.uk",
  scopedStyleStrategy: "class",
  integrations: [icon(), sitemap(), mdx()],
});
