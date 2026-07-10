import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://rjmlaird.co.uk",
  scopedStyleStrategy: "class",
  integrations: [icon()],
});
