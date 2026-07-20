globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { h as renderTemplate, z as renderHead } from "./server_ClKh5Vov.mjs";
import { t as createComponent } from "./astro-component_BnF3XP8W.mjs";
import "./compiler_DBmqIfWE.mjs";
//#region src/pages/analytics/index.astro
var analytics_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const MOCK_STATS = {
		visitors: 4218,
		pageviews: 11940,
		bounceRate: 41,
		visitDuration: 132,
		topPages: [
			{
				page: "/",
				visitors: 1820
			},
			{
				page: "/labs",
				visitors: 640
			},
			{
				page: "/cv",
				visitors: 512
			},
			{
				page: "/dashboards/green-hosting",
				visitors: 398
			},
			{
				page: "/blog",
				visitors: 301
			}
		],
		topSources: [
			{
				source: "Direct",
				visitors: 1690
			},
			{
				source: "Google",
				visitors: 1240
			},
			{
				source: "LinkedIn",
				visitors: 610
			},
			{
				source: "GitHub",
				visitors: 340
			},
			{
				source: "Bluesky",
				visitors: 180
			}
		]
	};
	async function fetchPlausibleStats() {
		return MOCK_STATS;
	}
	const stats = await fetchPlausibleStats();
	return renderTemplate`<html lang="en" class="astro-lm2u5lwk"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Analytics — rjmlaird.co.uk</title><meta name="robots" content="noindex, nofollow">${renderHead($$result)}</head><body class="astro-lm2u5lwk"><div class="page astro-lm2u5lwk"><header class="header astro-lm2u5lwk"><div class="astro-lm2u5lwk"><div class="eyebrow astro-lm2u5lwk">RJMLAIRD · TRAFFIC</div><h1 class="astro-lm2u5lwk">Site analytics</h1></div><div class="updated astro-lm2u5lwk">Last 30 days${" · mock data (set PLAUSIBLE_API_KEY)"}</div></header><section class="stat-rail astro-lm2u5lwk"><div class="stat-card astro-lm2u5lwk"><div class="stat-label astro-lm2u5lwk">Visitors</div><div class="stat-value astro-lm2u5lwk">${stats.visitors.toLocaleString()}</div></div><div class="stat-card astro-lm2u5lwk"><div class="stat-label astro-lm2u5lwk">Pageviews</div><div class="stat-value astro-lm2u5lwk">${stats.pageviews.toLocaleString()}</div></div><div class="stat-card astro-lm2u5lwk"><div class="stat-label astro-lm2u5lwk">Bounce rate</div><div class="stat-value astro-lm2u5lwk">${stats.bounceRate}%</div></div><div class="stat-card astro-lm2u5lwk"><div class="stat-label astro-lm2u5lwk">Avg. visit duration</div><div class="stat-value astro-lm2u5lwk">${Math.floor(stats.visitDuration / 60)}m ${stats.visitDuration % 60}s</div></div></section><section class="columns astro-lm2u5lwk"><div class="astro-lm2u5lwk"><h2 class="astro-lm2u5lwk">Top pages</h2><div class="list astro-lm2u5lwk">${stats.topPages.map((p) => renderTemplate`<div class="row astro-lm2u5lwk"><span class="row-label astro-lm2u5lwk">${p.page}</span><span class="row-value astro-lm2u5lwk">${p.visitors.toLocaleString()}</span></div>`)}</div></div><div class="astro-lm2u5lwk"><h2 class="astro-lm2u5lwk">Top sources</h2><div class="list astro-lm2u5lwk">${stats.topSources.map((s) => renderTemplate`<div class="row astro-lm2u5lwk"><span class="row-label astro-lm2u5lwk">${s.source}</span><span class="row-value astro-lm2u5lwk">${s.visitors.toLocaleString()}</span></div>`)}</div></div></section><footer class="astro-lm2u5lwk">Password-protected via Cloudflare Pages Functions Basic Auth · data via Plausible Stats API</footer></div></body></html>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/analytics/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/analytics/index.astro";
var $$url = "/analytics";
//#endregion
//#region \0virtual:astro:page:src/pages/analytics/index@_@astro
var page = () => analytics_exports;
//#endregion
export { page };
