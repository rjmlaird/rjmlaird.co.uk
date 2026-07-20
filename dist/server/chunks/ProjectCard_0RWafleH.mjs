globalThis.process ??= {};
globalThis.process.env ??= {};
import { B as addAttribute, J as createAstro, R as maybeRenderHead, h as renderTemplate } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
//#region src/components/Projects/ProjectCard.astro
createAstro("https://rjmlaird.co.uk");
var $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProjectCard;
	const { project, slug } = Astro.props;
	const dateValue = project.date ? new Date(project.date) : null;
	const links = project.links ?? {};
	const liveLink = links.live || links.demo || links.github || links.docs;
	const formattedDate = dateValue ? dateValue.toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	}) : "";
	return renderTemplate`${maybeRenderHead($$result)}<article class="pr pub" style="display: flex; flex-direction: column; width: 100%; max-width: none; flex: 1 1 100%;"><div class="pub-main" style="flex: 1; width: 100%;"><div class="pm" style="width: 100%; max-width: none;"><div class="pub-top"><h3><a${addAttribute(`/projects/${slug}/`, "href")} class="project-title-link">${project.title}</a></h3><time class="date"${addAttribute(dateValue?.toISOString(), "datetime")}>${formattedDate}</time></div><div class="client-badge">${project.type}</div><div class="client-badge">${project.status}</div><p>${project.description}</p>${project.features?.length ? renderTemplate`<div class="pt">${project.features.slice(0, 3).map((feature) => renderTemplate`<span class="tag">${feature}</span>`)}</div>` : null}${project.tools_tech?.length ? renderTemplate`<div class="pt">${project.tools_tech.slice(0, 4).map((tool) => renderTemplate`<span class="tag">${tool}</span>`)}</div>` : null}</div></div><div class="pub-links">${liveLink ? renderTemplate`<a class="btn-link"${addAttribute(`/projects/${slug}/#projects`, "href")} target="_blank" rel="noreferrer">View project</a>` : null}</div></article>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/Projects/ProjectCard.astro", void 0);
//#endregion
export { $$ProjectCard as t };
