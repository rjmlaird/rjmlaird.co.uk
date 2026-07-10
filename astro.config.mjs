import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://rjmlaird.co.uk",
  integrations: [icon()],
  scopedStyleStrategy: "class",
});
