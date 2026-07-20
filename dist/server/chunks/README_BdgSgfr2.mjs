globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { K as unescapeHTML, R as maybeRenderHead, h as renderTemplate } from "./server_ClKh5Vov.mjs";
import { t as createComponent } from "./astro-component_BnF3XP8W.mjs";
//#region src/pages/analytics/README.md
var README_exports = /* @__PURE__ */ __exportAll({
	Content: () => Content,
	compiledContent: () => compiledContent,
	default: () => Content,
	file: () => file,
	frontmatter: () => frontmatter,
	getHeadings: () => getHeadings,
	rawContent: () => rawContent,
	url: () => url
});
var html = () => "<h1 id=\"analyticsrjmlairdcouk--setup\">analytics.rjmlaird.co.uk — setup</h1>\n<h2 id=\"1-password-protection\">1. Password protection</h2>\n<p><code>functions/_middleware.ts</code> uses Cloudflare Pages Functions to enforce HTTP\nBasic Auth on every route under this project, before any Astro code runs.</p>\n<p>Set these in the Cloudflare Pages project (Settings → Environment variables,\nmark both <strong>Encrypt</strong>):</p>\n<ul>\n<li><code>ANALYTICS_USER</code></li>\n<li><code>ANALYTICS_PASS</code></li>\n</ul>\n<p>Or via Wrangler:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npx</span><span style=\"color:#9ECBFF\"> wrangler</span><span style=\"color:#9ECBFF\"> pages</span><span style=\"color:#9ECBFF\"> secret</span><span style=\"color:#9ECBFF\"> put</span><span style=\"color:#9ECBFF\"> ANALYTICS_USER</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">npx</span><span style=\"color:#9ECBFF\"> wrangler</span><span style=\"color:#9ECBFF\"> pages</span><span style=\"color:#9ECBFF\"> secret</span><span style=\"color:#9ECBFF\"> put</span><span style=\"color:#9ECBFF\"> ANALYTICS_PASS</span></span></code></pre>\n<p>Visiting the site will prompt a native browser Basic Auth dialog. There’s no\nsession/cookie — the browser re-sends credentials on every request, which is\nfine for a low-traffic personal dashboard and needs zero extra code.</p>\n<p><strong>Alternative</strong>: if you’d rather not manage credentials yourself, Cloudflare\nAccess (Zero Trust) can gate the whole subdomain with one-time email codes or\nSSO instead — no code required, configured entirely in the Cloudflare\ndashboard. Worth it if you want to share access with others without sharing\na shared password.</p>\n<h2 id=\"2-plausible-stats-api\">2. Plausible Stats API</h2>\n<p>Create a Stats API key in Plausible (Site Settings → API Keys), then set:</p>\n<ul>\n<li><code>PLAUSIBLE_API_KEY</code></li>\n</ul>\n<p>as another encrypted env var. Without it, the page falls back to mock data\nautomatically, so the dashboard is safe to deploy before the key exists.</p>\n<p>The page currently queries a single <code>site_id</code> (<code>rjmlaird.co.uk</code>). To break\nout per-subdomain traffic later, add a <code>filters</code> array to each query body,\ne.g. <code>filters: [[\"is\", \"visit:hostname\", [\"dashboards.rjmlaird.co.uk\"]]]</code>.</p>\n<h2 id=\"3-folder-structure\">3. Folder structure</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>functions/_middleware.ts       — Basic Auth, runs on every request</span></span>\n<span class=\"line\"><span>src/pages/analytics/index.astro — the dashboard page (SSR)</span></span></code></pre>\n<p>Drop <code>functions/</code> and <code>src/pages/analytics/</code> into your existing\n<code>rjmlaird.co.uk</code> Astro project, or deploy as its own Pages project mapped to\nthe <code>analytics.rjmlaird.co.uk</code> subdomain — either works, since the\nmiddleware only protects routes within its own project.</p>\n";
var frontmatter = {};
var file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/analytics/README.md";
var url = "/analytics/README";
function rawContent() {
	return "# analytics.rjmlaird.co.uk — setup\n\n## 1. Password protection\n\n`functions/_middleware.ts` uses Cloudflare Pages Functions to enforce HTTP\nBasic Auth on every route under this project, before any Astro code runs.\n\nSet these in the Cloudflare Pages project (Settings → Environment variables,\nmark both **Encrypt**):\n\n- `ANALYTICS_USER`\n- `ANALYTICS_PASS`\n\nOr via Wrangler:\n\n```bash\nnpx wrangler pages secret put ANALYTICS_USER\nnpx wrangler pages secret put ANALYTICS_PASS\n```\n\nVisiting the site will prompt a native browser Basic Auth dialog. There's no\nsession/cookie — the browser re-sends credentials on every request, which is\nfine for a low-traffic personal dashboard and needs zero extra code.\n\n**Alternative**: if you'd rather not manage credentials yourself, Cloudflare\nAccess (Zero Trust) can gate the whole subdomain with one-time email codes or\nSSO instead — no code required, configured entirely in the Cloudflare\ndashboard. Worth it if you want to share access with others without sharing\na shared password.\n\n## 2. Plausible Stats API\n\nCreate a Stats API key in Plausible (Site Settings → API Keys), then set:\n\n- `PLAUSIBLE_API_KEY`\n\nas another encrypted env var. Without it, the page falls back to mock data\nautomatically, so the dashboard is safe to deploy before the key exists.\n\nThe page currently queries a single `site_id` (`rjmlaird.co.uk`). To break\nout per-subdomain traffic later, add a `filters` array to each query body,\ne.g. `filters: [[\"is\", \"visit:hostname\", [\"dashboards.rjmlaird.co.uk\"]]]`.\n\n## 3. Folder structure\n\n```\nfunctions/_middleware.ts       — Basic Auth, runs on every request\nsrc/pages/analytics/index.astro — the dashboard page (SSR)\n```\n\nDrop `functions/` and `src/pages/analytics/` into your existing\n`rjmlaird.co.uk` Astro project, or deploy as its own Pages project mapped to\nthe `analytics.rjmlaird.co.uk` subdomain — either works, since the\nmiddleware only protects routes within its own project.\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [
		{
			"depth": 1,
			"slug": "analyticsrjmlairdcouk--setup",
			"text": "analytics.rjmlaird.co.uk — setup"
		},
		{
			"depth": 2,
			"slug": "1-password-protection",
			"text": "1. Password protection"
		},
		{
			"depth": 2,
			"slug": "2-plausible-stats-api",
			"text": "2. Plausible Stats API"
		},
		{
			"depth": 2,
			"slug": "3-folder-structure",
			"text": "3. Folder structure"
		}
	];
}
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = url;
	return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
//#region \0virtual:astro:page:src/pages/analytics/README@_@md
var page = () => README_exports;
//#endregion
export { page };
