globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { a as renderEntry, t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
//#region src/pages/authors/[author].astro
var _author__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Author,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://rjmlaird.co.uk");
async function getStaticPaths() {
	return (await getCollection("authors")).map((author) => ({
		params: { author: author.id },
		props: { author }
	}));
}
var $$Author = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Author;
	const { author } = Astro.props;
	const { Content } = await renderEntry(author);
	const posts = (await getCollection("blog")).filter((post) => !post.data.draft).filter((post) => {
		const postAuthor = post.data.author;
		if (!postAuthor) return false;
		if (typeof postAuthor === "string") return postAuthor.toLowerCase() === author.data.name.toLowerCase() || postAuthor.toLowerCase() === author.id.toLowerCase();
		if (typeof postAuthor === "object" && postAuthor !== null && "id" in postAuthor) return postAuthor.id.toLowerCase() === author.id.toLowerCase();
		return false;
	}).sort((a, b) => {
		const aDate = a.data.pubDate instanceof Date ? a.data.pubDate.getTime() : 0;
		return (b.data.pubDate instanceof Date ? b.data.pubDate.getTime() : 0) - aDate;
	});
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": author.data.name,
		"description": author.data.bio ?? ""
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="author-page"><header class="container author-head"><p class="eyebrow">Author</p><h1>${author.data.name}</h1>${author.data.role ? renderTemplate`<p class="lede">${author.data.role}</p>` : null}</header><div class="container author-bio">${renderComponent($$result, "Content", Content, {})}</div><section class="container author-posts" aria-labelledby="author-posts-title"><h2 id="author-posts-title">Published posts</h2>${posts.length > 0 ? renderTemplate`<ul class="post-list">${posts.map((post) => renderTemplate`<li><a${addAttribute(`/blog/${post.id}`, "href")}>${post.data.title ?? post.id}</a>${post.data.description ? renderTemplate`<p>${post.data.description}</p>` : null}</li>`)}</ul>` : renderTemplate`<p>No posts found for this author yet.</p>`}</section></article>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/authors/[author].astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/authors/[author].astro";
var $$url = "/authors/[author]";
//#endregion
//#region \0virtual:astro:page:src/pages/authors/[author]@_@astro
var page = () => _author__exports;
//#endregion
export { page };
