globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
import { t as $$ProjectCard } from "./ProjectCard_0RWafleH.mjs";
//#region src/pages/projects/index.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const entries = (await getCollection("projects", ({ data }) => data.draft !== true)).sort((a, b) => (b.data.startDate?.valueOf() ?? 0) - (a.data.startDate?.valueOf() ?? 0));
	const typeList = [...new Set(entries.map((entry) => entry.data.type).filter(Boolean))].sort();
	const statusList = [...new Set(entries.map((entry) => entry.data.status).filter(Boolean))].sort();
	const tagList = [...new Set(entries.flatMap((entry) => entry.data.tags))].sort();
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section projects-gallery"><div class="container pg-shell"><header class="pg-head"><p class="eyebrow">Projects</p><h1 class="ch fade">Writing across <em>space, sustainability &amp; science policy</em></h1><div class="pg-intro"><p class="pg-lead">Selected articles, reports, and commentary across space systems, climate intelligence, and innovation ecosystems.</p><p class="pg-note">Browse the full set of published case studies below.</p></div></header><div class="rp-filters" aria-label="Project filters"><label class="filter-field" for="typeSelect"><span>Type</span><select id="typeSelect"><option value="all">All types</option>${typeList.map((type) => renderTemplate`<option${addAttribute(type, "value")}>${type}</option>`)}</select></label><label class="filter-field" for="statusSelect"><span>Status</span><select id="statusSelect"><option value="all">All statuses</option>${statusList.map((status) => renderTemplate`<option${addAttribute(status, "value")}>${status}</option>`)}</select></label><label class="filter-field" for="tagSelect"><span>Tag</span><select id="tagSelect"><option value="all">All tags</option>${tagList.map((tag) => renderTemplate`<option${addAttribute(tag, "value")}>${tag}</option>`)}</select></label></div><div class="rp-grid" id="projectGrid">${entries.map((entry) => {
		const tags = entry.data.tags;
		return renderTemplate`<div class="research-item"${addAttribute(entry.data.type || "", "data-type")}${addAttribute(entry.data.status || "", "data-status")}${addAttribute(tags.join(","), "data-tags")}>${renderComponent($$result, "ProjectCard", $$ProjectCard, {
			"project": {
				...entry.data,
				slug: entry.id,
				id: Number(entry.data.id ?? 0)
			},
			"slug": entry.id
		})}</div>`;
	})}</div></div></section><script>
    const norm = (s) => (s ?? "").toLowerCase().trim();

    const typeSelect = document.getElementById("typeSelect");
    const statusSelect = document.getElementById("statusSelect");
    const tagSelect = document.getElementById("tagSelect");
    const items = document.querySelectorAll("#projectGrid .research-item");

    const applyFilters = () => {
      const activeType = norm(typeSelect?.value || "all");
      const activeStatus = norm(statusSelect?.value || "all");
      const activeTag = norm(tagSelect?.value || "all");

      items.forEach((el) => {
        const type = norm(el.dataset.type);
        const status = norm(el.dataset.status);
        const tags = (el.dataset.tags || "").split(",").map(norm).filter(Boolean);

        const typeOk = activeType === "all" || type === activeType;
        const statusOk = activeStatus === "all" || status === activeStatus;
        const tagOk = activeTag === "all" || tags.includes(activeTag);

        el.hidden = !(typeOk && statusOk && tagOk);
      });
    };

    typeSelect?.addEventListener("change", applyFilters);
    statusSelect?.addEventListener("change", applyFilters);
    tagSelect?.addEventListener("change", applyFilters);
    applyFilters();
  <\/script>` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/projects/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/projects/index.astro";
var $$url = "/projects";
//#endregion
//#region \0virtual:astro:page:src/pages/projects/index@_@astro
var page = () => projects_exports;
//#endregion
export { page };
