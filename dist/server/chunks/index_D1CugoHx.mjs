globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_ClKh5Vov.mjs";
import { t as createComponent } from "./astro-component_BnF3XP8W.mjs";
import "./compiler_DBmqIfWE.mjs";
import { t as $$Layout } from "./Layout_CcJ0WvQr.mjs";
import { t as getCollection } from "./_astro_content_BXAQCl9Y.mjs";
//#region src/pages/tags/index.astro
var tags_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = await getCollection("blog", ({ data }) => !data.draft);
	const normalizeTag = (value) => value.trim().toLowerCase().replace(/\s+/g, "-");
	const prettyTag = (value) => value.replace(/-/g, " ");
	const allTags = Array.from(new Set(posts.flatMap((post) => post.data.tags))).filter(Boolean).sort((a, b) => a.localeCompare(b));
	const tagCounts = Object.fromEntries(allTags.map((tag) => [tag, posts.filter((post) => post.data.tags.map(normalizeTag).includes(normalizeTag(tag))).length]));
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<ul class="tag-list">${allTags.map((tag) => renderTemplate`<li><a${addAttribute(`/tags/${encodeURIComponent(normalizeTag(tag))}/`, "href")}>${prettyTag(tag)} (${tagCounts[tag]})</a></li>`)}</ul>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/tags/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/tags/index.astro";
var $$url = "/tags";
//#endregion
//#region \0virtual:astro:page:src/pages/tags/index@_@astro
var page = () => tags_exports;
//#endregion
export { page };
