globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
//#region src/pages/authors/index.astro
var authors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const authors = await getCollection("authors");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="authors-page"><header class="container"><p class="eyebrow">Authors</p><h1>Authors</h1><p class="lede">People who write for this site.</p></header><section class="container"><ul class="author-list">${authors.map((author) => renderTemplate`<li><a${addAttribute(`/authors/${author.id}`, "href")}>${author.data.name}</a>${author.data.role ? renderTemplate`<p>${author.data.role}</p>` : null}${author.data.bio ? renderTemplate`<p>${author.data.bio}</p>` : null}</li>`)}</ul></section></article>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/authors/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/authors/index.astro";
var $$url = "/authors";
//#endregion
//#region \0virtual:astro:page:src/pages/authors/index@_@astro
var page = () => authors_exports;
//#endregion
export { page };
