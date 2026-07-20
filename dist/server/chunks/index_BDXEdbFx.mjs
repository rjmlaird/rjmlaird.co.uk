globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import { t as CATEGORIES } from "./content.config_CQQjdSp0.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
import { t as $$PostCard } from "./PostCard_DExcPItg.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const allPosts = (await getCollection("blog", ({ data }) => !data.draft)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const featured = allPosts.find((p) => p.data.featured) ?? allPosts[0];
	const rest = allPosts.filter((p) => p.id !== featured?.id);
	const safeCategories = Array.isArray(CATEGORIES) ? CATEGORIES : [];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Blog",
		"description": "Writing on space, science communication, and building things.",
		"class": "astro-x255k2k2"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="blog-index astro-x255k2k2"><header class="index-header astro-x255k2k2"><h1 class="astro-x255k2k2">Blog</h1><nav class="category-nav astro-x255k2k2" aria-label="Filter by category">${safeCategories.map((c) => renderTemplate`<a${addAttribute(`/blog/category/${c}`, "href")} class="astro-x255k2k2">${c.replace(/-/g, " ")}</a>`)}</nav></header>${featured && renderTemplate`<div class="featured-slot astro-x255k2k2">${renderComponent($$result, "PostCard", $$PostCard, {
		"post": featured,
		"featured": true,
		"class": "astro-x255k2k2"
	})}</div>`}<div class="grid astro-x255k2k2">${rest.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"post": post,
		"class": "astro-x255k2k2"
	})}`)}</div></section>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/blog/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
