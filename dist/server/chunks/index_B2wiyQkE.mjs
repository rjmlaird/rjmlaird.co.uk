globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
//#region src/pages/case-studies/index.astro
var case_studies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const caseStudies = (await getCollection("caseStudy", ({ data }) => data.draft !== true)).sort((a, b) => {
		const aDate = a.data.startDate?.valueOf() ?? 0;
		return (b.data.startDate?.valueOf() ?? 0) - aDate;
	});
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section cs-gallery"><div class="container pg-shell"><header class="pg-head"><p class="eyebrow">Case Studies</p><h1 class="ch fade">Writing across <em>space, sustainability &amp; science policy</em></h1><div class="pg-intro"><p class="pg-lead">Selected articles, reports, and commentary across space systems, climate intelligence, and innovation ecosystems.</p><p class="pg-note">Browse the full set of published case studies below.</p></div></header><div class="pg-grid">${caseStudies.map((entry) => {
		return renderTemplate`<article class="publication-item"><a${addAttribute(`/case-studies/${entry.id.split("/").pop()?.replace(/\.[^.]+$/, "") ?? entry.id}/`, "href")}><h2>${entry.data.title}</h2>${entry.data.description && renderTemplate`<p>${entry.data.description}</p>`}</a></article>`;
	})}</div></div></section>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/case-studies/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/case-studies/index.astro";
var $$url = "/case-studies";
//#endregion
//#region \0virtual:astro:page:src/pages/case-studies/index@_@astro
var page = () => case_studies_exports;
//#endregion
export { page };
