globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
import { t as $$PostCard } from "./PostCard_DExcPItg.mjs";
import { t as slugify } from "./slugify_cu70Nncv.mjs";
//#region src/pages/tags/[tag].astro
var _tag__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tag,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://rjmlaird.co.uk");
async function getStaticPaths() {
	const posts = await getCollection("blog", (p) => !p.data.draft);
	const tagMap = /* @__PURE__ */ new Map();
	for (const post of posts) if (Array.isArray(post.data.tags)) for (const tag of post.data.tags) tagMap.set(slugify(tag), tag);
	return Array.from(tagMap.entries()).map(([slug, label]) => ({
		params: { tag: slug },
		props: { label }
	}));
}
var $$Tag = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tag;
	const { tag } = Astro.params;
	const { label } = Astro.props;
	const posts = (await getCollection("blog", (p) => !p.data.draft && Array.isArray(p.data.tags) && p.data.tags.some((t) => slugify(t) === tag))).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `#${label} — Blog`,
		"description": `Posts tagged ${label}`,
		"class": "astro-aezt6mnq"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="archive astro-aezt6mnq"><p class="eyebrow astro-aezt6mnq">Tag</p><h1 class="astro-aezt6mnq">#${label}</h1><div class="grid astro-aezt6mnq">${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, {
		"post": post,
		"class": "astro-aezt6mnq"
	})}`)}</div></section>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/tags/[tag].astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/tags/[tag].astro";
var $$url = "/tags/[tag]";
//#endregion
//#region \0virtual:astro:page:src/pages/tags/[tag]@_@astro
var page = () => _tag__exports;
//#endregion
export { page };
