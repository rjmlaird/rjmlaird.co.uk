globalThis.process ??= {};
globalThis.process.env ??= {};
import { B as addAttribute, J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { n as $$Image } from "./_astro_assets_DdN30NvY.mjs";
//#region src/components/CategoryBadge.astro
createAstro("https://rjmlaird.co.uk");
var $$CategoryBadge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CategoryBadge;
	const { category, as = "link" } = Astro.props;
	const label = category.replace(/-/g, " ");
	const href = `/category/${category}`;
	return renderTemplate`${renderComponent($$result, "Tag", as === "link" ? "a" : "span", {
		"href": as === "link" ? href : void 0,
		"class": "category-badge astro-qonxvewj"
	}, { "default": ($$result) => renderTemplate`${label}` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/CategoryBadge.astro", void 0);
//#endregion
//#region src/utils/readingTime.ts
var WORDS_PER_MINUTE = 200;
/** Estimate reading time from raw markdown/MDX body text. */
function getReadingTime(rawBody) {
	const words = rawBody.replace(/```[\s\S]*?```/g, "").trim().split(/\s+/).length;
	return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}
//#endregion
//#region src/components/PostCard.astro
createAstro("https://rjmlaird.co.uk");
var $$PostCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostCard;
	const { post, featured = false } = Astro.props;
	const { title, description, pubDate, category, heroImage, heroAlt } = post.data;
	const readingTime = getReadingTime(post.body || "");
	const safeCategory = Array.isArray(category) ? category[0] || "" : category;
	const imageSrc = typeof heroImage === "string" ? heroImage : heroImage?.src;
	const imageAlt = (heroImage && typeof heroImage === "object" && "alt" in heroImage ? heroImage.alt : null) || heroAlt || title || "Post thumbnail";
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/blog/${post.id}`, "href")}${addAttribute([["post-card", { featured }], "astro-sbmovh4h"], "class:list")}>${imageSrc && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"src": imageSrc,
		"alt": imageAlt,
		"width": featured ? 800 : 400,
		"height": featured ? 450 : 225,
		"class": "thumb astro-sbmovh4h"
	})}`}<div class="body astro-sbmovh4h">${safeCategory && renderTemplate`${renderComponent($$result, "CategoryBadge", $$CategoryBadge, {
		"category": safeCategory,
		"as": "span",
		"class": "astro-sbmovh4h"
	})}`}<h3 class="astro-sbmovh4h">${title}</h3>${description && renderTemplate`<p class="description astro-sbmovh4h">${description}</p>`}<div class="footer astro-sbmovh4h"><time${addAttribute(pubDate.toISOString(), "datetime")} class="astro-sbmovh4h">${pubDate.toLocaleDateString("en-GB", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})}</time>${readingTime && renderTemplate`<span class="astro-sbmovh4h">· ${readingTime}</span>`}</div></div></a>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/PostCard.astro", void 0);
//#endregion
export { $$PostCard as t };
