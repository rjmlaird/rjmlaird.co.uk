globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { a as renderEntry, n as getEntry, t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
//#region src/pages/case-studies/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://rjmlaird.co.uk");
async function getStaticPaths() {
	return (await getCollection("caseStudy", ({ data }) => data.draft !== true)).map((entry) => ({
		params: { slug: entry.id },
		props: { entry }
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { entry } = Astro.props;
	const slug = Astro.params.slug;
	const caseStudy = entry ? entry.data : {};
	const { Content } = entry ? await renderEntry(entry) : { Content: null };
	const dateLabel = caseStudy.startDate ? new Date(caseStudy.startDate).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long"
	}) : "";
	const tools = Array.isArray(caseStudy.tools_tech) ? caseStudy.tools_tech : [];
	const features = Array.isArray(caseStudy.features) ? caseStudy.features : [];
	const tags = Array.isArray(caseStudy.tags) ? caseStudy.tags : [];
	const links = caseStudy.links || {};
	const relatedProjects = Array.isArray(caseStudy.relatedProjects) ? (await Promise.all(caseStudy.relatedProjects.map((ref) => getEntry(ref)))).filter(Boolean) : [];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": caseStudy.title || "Case Study",
		"description": caseStudy.description || ""
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section publications-gallery"><div class="container pg-shell"><header class="pg-head"><p class="eyebrow">Case Studies</p><h1 class="ch fade">${caseStudy.title || slug}</h1><dl class="project-meta" aria-label="Case study metadata">${caseStudy.type && renderTemplate`<div><dd>${caseStudy.type}</dd></div>`}${caseStudy.status && renderTemplate`<div><dd>${caseStudy.status}</dd></div>`}${dateLabel && renderTemplate`<div><dd>${dateLabel}</dd></div>`}</dl></header><div class="project-layout"><aside class="project-sidebar" aria-label="Case study details"><div class="pg-intro">${caseStudy.description && renderTemplate`<p class="pg-lead">${caseStudy.description}</p>`}<p class="pg-note">A full case study with metadata, links, related projects, and supporting detail.</p></div>${caseStudy.client && renderTemplate`<section class="sidebar-block"><h2>Client</h2><p>${caseStudy.client}</p></section>`}${caseStudy.organisation && renderTemplate`<section class="sidebar-block"><h2>Organisation</h2><p>${caseStudy.organisation}</p></section>`}${caseStudy.institution && renderTemplate`<section class="sidebar-block"><h2>Institution</h2><p>${caseStudy.institution}</p></section>`}${tools.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Tools</h2><ul class="chip-list">${tools.map((tool) => renderTemplate`<li>${tool}</li>`)}</ul></section>`}${features.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Features</h2><ul class="bullet-list">${features.map((feature) => renderTemplate`<li>${feature}</li>`)}</ul></section>`}${tags.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Tags</h2><ul class="chip-list">${tags.map((tag) => renderTemplate`<li>${tag}</li>`)}</ul></section>`}${(links.github || links.live || links.demo || links.docs || links.video) && renderTemplate`<section class="sidebar-block"><h2>Links</h2><ul class="link-list">${links.github && renderTemplate`<li><a${addAttribute(links.github, "href")} target="_blank" rel="noreferrer">GitHub</a></li>`}${links.live && renderTemplate`<li><a${addAttribute(links.live, "href")} target="_blank" rel="noreferrer">Live site</a></li>`}${links.demo && renderTemplate`<li><a${addAttribute(links.demo, "href")} target="_blank" rel="noreferrer">Demo</a></li>`}${links.docs && renderTemplate`<li><a${addAttribute(links.docs, "href")} target="_blank" rel="noreferrer">Docs</a></li>`}${links.video && renderTemplate`<li><a${addAttribute(links.video, "href")} target="_blank" rel="noreferrer">Video</a></li>`}</ul></section>`}${relatedProjects.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Related projects</h2><ul class="link-list">${relatedProjects.map((project) => project ? renderTemplate`<li><a${addAttribute(`/projects/${project.id}/`, "href")}>${project.data.title}</a></li>` : null)}</ul></section>`}</aside><article class="project-content"><div class="project-body">${Content && renderTemplate`${renderComponent($$result, "Content", Content, {})}`}</div><section class="sidebar-block"><h2>Impact</h2>${caseStudy.impact && Object.keys(caseStudy.impact).length > 0 ? renderTemplate`<pre>${JSON.stringify(caseStudy.impact, null, 2)}</pre>` : renderTemplate`<p>No impact data provided yet.</p>`}</section></article></div></div></section>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/case-studies/[slug].astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/case-studies/[slug].astro";
var $$url = "/case-studies/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/case-studies/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
