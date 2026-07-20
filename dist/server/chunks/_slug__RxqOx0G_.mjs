globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, J as createAstro, R as maybeRenderHead, f as renderSlot, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { n as $$Image } from "./_astro_assets_DdN30NvY.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { a as renderEntry, t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
//#region src/components/FactBox.astro
createAstro("https://rjmlaird.co.uk");
var $$FactBox = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FactBox;
	const { title = "Fact box" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<aside class="fact-box astro-w4livwtr"><p class="label astro-w4livwtr">${title}</p><div class="content astro-w4livwtr">${renderSlot($$result, $$slots["default"])}</div></aside>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/FactBox.astro", void 0);
//#endregion
//#region src/components/Callout.astro
createAstro("https://rjmlaird.co.uk");
var $$Callout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Callout;
	const { type = "note" } = Astro.props;
	const { icon, label } = {
		note: {
			icon: "ℹ",
			label: "Note"
		},
		tip: {
			icon: "✦",
			label: "Tip"
		},
		warning: {
			icon: "▲",
			label: "Warning"
		}
	}[type];
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute([["callout", type], "astro-q2ml7llr"], "class:list")} role="note"><span class="icon astro-q2ml7llr" aria-hidden="true">${icon}</span><div class="body astro-q2ml7llr"><p class="label astro-q2ml7llr">${label}</p><div class="content astro-q2ml7llr">${renderSlot($$result, $$slots["default"])}</div></div></div>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/Callout.astro", void 0);
//#endregion
//#region src/components/QuoteBlock.astro
createAstro("https://rjmlaird.co.uk");
var $$QuoteBlock = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$QuoteBlock;
	const { quote = "", cite } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="not-prose my-8 border-l-4 border-sky-500 bg-slate-50 px-5 py-4"><blockquote class="text-lg leading-8 text-slate-900">“${quote}”</blockquote>${cite && renderTemplate`<figcaption class="mt-3 text-sm text-slate-500">— ${cite}</figcaption>`}</figure>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/QuoteBlock.astro", void 0);
//#endregion
//#region src/components/Figure.astro
createAstro("https://rjmlaird.co.uk");
var $$Figure = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Figure;
	const { src, alt, caption, credit, wide = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure${addAttribute([["post-figure", { wide }], "astro-khyig4bw"], "class:list")}>${renderComponent($$result, "Image", $$Image, {
		"src": src,
		"alt": alt,
		"loading": "lazy",
		"class": "astro-khyig4bw"
	})}${(caption || credit) && renderTemplate`<figcaption class="astro-khyig4bw">${caption}${credit && renderTemplate`<span class="credit astro-khyig4bw"> — ${credit}</span>`}</figcaption>`}</figure>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/Figure.astro", void 0);
//#endregion
//#region src/components/ComparisonTable.astro
createAstro("https://rjmlaird.co.uk");
var $$ComparisonTable = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ComparisonTable;
	const { leftTitle = "Old approach", rightTitle = "2026 approach", rows } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200"><table class="w-full border-collapse text-left text-sm"><thead class="bg-slate-100"><tr><th class="border-b border-slate-200 px-4 py-3 font-semibold">${leftTitle}</th><th class="border-b border-slate-200 px-4 py-3 font-semibold">${rightTitle}</th></tr></thead><tbody>${rows.map((row, i) => renderTemplate`<tr${addAttribute(i % 2 === 0 ? "bg-white" : "bg-slate-50", "class")}><td class="border-b border-slate-200 px-4 py-3 align-top">${row.left}</td><td class="border-b border-slate-200 px-4 py-3 align-top">${row.right}</td></tr>`)}</tbody></table></div>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/ComparisonTable.astro", void 0);
//#endregion
//#region src/components/Checklist.astro
createAstro("https://rjmlaird.co.uk");
var $$Checklist = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Checklist;
	const { items, title = "Checklist" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-5"><p class="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">${title}</p><ul class="space-y-3">${items.map((item) => renderTemplate`<li class="flex gap-3"><span class="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span><span class="leading-7">${item}</span></li>`)}</ul></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/Checklist.astro", void 0);
//#endregion
//#region src/components/StatCard.astro
createAstro("https://rjmlaird.co.uk");
var $$StatCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$StatCard;
	const { label, value, note } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="not-prose rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-sm font-medium text-slate-500">${label}</p><p class="mt-2 text-3xl font-bold tracking-tight text-slate-950">${value}</p>${note && renderTemplate`<p class="mt-2 text-sm leading-6 text-slate-600">${note}</p>`}</div>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/StatCard.astro", void 0);
//#endregion
//#region src/pages/blog/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://rjmlaird.co.uk");
async function getStaticPaths() {
	return (await getCollection("blog")).filter((post) => post.id).map((post) => ({
		params: { slug: post.id },
		props: { post }
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { post } = Astro.props;
	if (!post) return Astro.redirect("/404");
	const { Content, headings } = await renderEntry(post);
	const relatedPosts = (await getCollection("blog", ({ data }) => !data.draft)).filter((p) => p.id !== post.id).map((p) => {
		const pTags = p.data.tags || [];
		const postTags = post.data.tags || [];
		const sharedTags = pTags.filter((t) => postTags.includes(t)).length;
		const pCat = p.data.category || [];
		const postCat = post.data.category || [];
		const sameCategory = pCat.some((c) => postCat.includes(c)) ? 1 : 0;
		return {
			post: p,
			score: sharedTags * 2 + sameCategory
		};
	}).filter((p) => p.score > 0).sort((a, b) => b.score - a.score).slice(0, 3).map((p) => p.post);
	const components = {
		Image: $$Image,
		FactBox: $$FactBox,
		Callout: $$Callout,
		QuoteBlock: $$QuoteBlock,
		Figure: $$Figure,
		ComparisonTable: $$ComparisonTable,
		Checklist: $$Checklist,
		StatCard: $$StatCard
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		post,
		headings,
		relatedPosts
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, { "components": components })}` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/blog/[slug].astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/blog/[slug].astro";
var $$url = "/blog/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
