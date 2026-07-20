globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_ClKh5Vov.mjs";
import { t as createComponent } from "./astro-component_BnF3XP8W.mjs";
import "./compiler_DBmqIfWE.mjs";
import { t as $$Layout } from "./Layout_CcJ0WvQr.mjs";
import { a as renderEntry, t as getCollection } from "./_astro_content_BXAQCl9Y.mjs";
//#region src/pages/projects/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://rjmlaird.co.uk");
async function getStaticPaths() {
	return (await getCollection("projects", ({ data }) => data.draft !== true)).map((entry) => ({
		params: { slug: entry.id },
		props: { entry }
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { entry } = Astro.props;
	const slug = Astro.params.slug;
	const project = entry.data;
	const { Content } = await renderEntry(entry);
	const dateLabel = project.startDate ? new Date(project.startDate).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "long"
	}) : "";
	const tools = Array.isArray(project.tools_tech) ? project.tools_tech : [];
	const features = Array.isArray(project.features) ? project.features : [];
	const tags = Array.isArray(project.tags) ? project.tags : [];
	const links = project.links || {};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section publications-gallery"><div class="container pg-shell"><header class="pg-head"><p class="eyebrow">Projects</p><h1 class="ch fade">${project.title || slug}</h1><dl class="project-meta" aria-label="Project metadata">${project.type && renderTemplate`<div><dd>${project.type}</dd></div>`}${project.status && renderTemplate`<div><dd>${project.status}</dd></div>`}${dateLabel && renderTemplate`<div><dd>${dateLabel}</dd></div>`}</dl></header><div class="project-layout"><aside class="project-sidebar" aria-label="Project details"><div class="pg-intro">${project.description && renderTemplate`<p class="pg-lead">${project.description}</p>`}<p class="pg-note">A full project case study with metadata, links, and supporting detail.</p></div>${tools.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Tools</h2><ul class="chip-list">${tools.map((tool) => renderTemplate`<li>${tool}</li>`)}</ul></section>`}${features.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Features</h2><ul class="bullet-list">${features.map((feature) => renderTemplate`<li>${feature}</li>`)}</ul></section>`}${tags.length > 0 && renderTemplate`<section class="sidebar-block"><h2>Tags</h2><ul class="chip-list">${tags.map((tag) => renderTemplate`<li>${tag}</li>`)}</ul></section>`}${(links.github || links.live) && renderTemplate`<section class="sidebar-block"><h2>Links</h2><ul class="link-list">${links.github && renderTemplate`<li><a${addAttribute(links.github, "href")} target="_blank" rel="noreferrer">GitHub</a></li>`}${links.live && renderTemplate`<li><a${addAttribute(links.live, "href")} target="_blank" rel="noreferrer">Live site</a></li>`}</ul></section>`}</aside><article class="project-content"><div class="project-body">${renderComponent($$result, "Content", Content, {})}</div><section class="sidebar-block"><h2>Impact</h2>${project.impact && Object.keys(project.impact).length > 0 ? renderTemplate`<pre>${JSON.stringify(project.impact, null, 2)}</pre>` : renderTemplate`<p>No impact data provided yet.</p>`}</section></article></div></div></section>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/projects/[slug].astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/projects/[slug].astro";
var $$url = "/projects/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/projects/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
