globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import { t as CATEGORIES } from "./content.config_CQQjdSp0.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
import { t as $$PostCard } from "./PostCard_DExcPItg.mjs";
import { t as slugify } from "./slugify_cu70Nncv.mjs";
//#region src/pages/category/[category].astro
var _category__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Category,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://rjmlaird.co.uk");
async function getStaticPaths() {
	return (Array.isArray(CATEGORIES) ? CATEGORIES : []).map((category) => ({
		params: { category: slugify(category) },
		props: { category }
	}));
}
var $$Category = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Category;
	const { category } = Astro.params;
	const { category: originalCategory } = Astro.props;
	const posts = (await getCollection("blog", (p) => {
		if (p.data.draft) return false;
		const cat = p.data.category;
		if (Array.isArray(cat)) return cat.some((c) => slugify(c) === category);
		return slugify(cat) === category;
	})).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const label = (originalCategory || category || "").replace(/-/g, " ");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${label} — Blog`,
		"description": `Posts in ${label}`,
		"class": "astro-elr3iqgh"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="archive astro-elr3iqgh"><p class="eyebrow astro-elr3iqgh">Category</p><h1 class="astro-elr3iqgh">${label}</h1><div class="grid astro-elr3iqgh">${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"post": post,
		"class": "astro-elr3iqgh"
	})}`)}</div></section>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/category/[category].astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/category/[category].astro";
var $$url = "/category/[category]";
//#endregion
//#region \0virtual:astro:page:src/pages/category/[category]@_@astro
var page = () => _category__exports;
//#endregion
export { page };
