globalThis.process ??= {};
globalThis.process.env ??= {};
import { r as __exportAll } from "./rolldown-runtime_BVj4LQFE.mjs";
import { B as addAttribute, J as createAstro, R as maybeRenderHead, h as renderTemplate, s as renderComponent } from "./server_DB2RPiSg.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import "./compiler_4BVSYHPt.mjs";
import { t as $$Layout } from "./Layout_D3xKyLxx.mjs";
import { t as getCollection } from "./_astro_content_CdQ_FLvu.mjs";
import { t as $$ProjectCard } from "./ProjectCard_0RWafleH.mjs";
//#region src/sections/hero.section.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="hero astro-gizlbyyt"><div class="hero__content astro-gizlbyyt"><p class="kk astro-gizlbyyt">Chartered Marketer · MPhys · Space · Sustainability</p><h1 class="nm astro-gizlbyyt">Ryan<br class="astro-gizlbyyt"><span class="d astro-gizlbyyt">Laird</span></h1><p class="creds astro-gizlbyyt">MPhys (Hons) · CMktr · MInstP · MCIPR</p><p class="hp astro-gizlbyyt">Turning science into story for the space sector.</p><div class="hb astro-gizlbyyt"><a href="#story" class="bp astro-gizlbyyt">Read story</a><a href="#work" class="bo astro-gizlbyyt">Projects</a></div></div><div class="hero__visual astro-gizlbyyt"><div class="hero__portrait astro-gizlbyyt"><img src="/assets/img/person/ryan-laird.jpg" alt="Ryan Laird portrait" width="720" height="900" loading="eager" decoding="async" class="astro-gizlbyyt"></div></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/hero.section.astro", void 0);
//#endregion
//#region src/sections/proof.section.astro
var $$Proof = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="proof-strip astro-s3c42yzk" aria-labelledby="proof-strip-title"><div class="proof-strip__inner astro-s3c42yzk"><h2 id="proof-strip-title" class="sr-only astro-s3c42yzk">Key areas</h2><ul class="proof-strip__row astro-s3c42yzk">${[
		{
			label: "Strategy",
			value: "Commercial thinking",
			tone: "teal"
		},
		{
			label: "Neurodiversity",
			value: "Inclusive communication",
			tone: "violet"
		},
		{
			label: "Space sector",
			value: "Science-led storytelling",
			tone: "amber"
		},
		{
			label: "Sustainability",
			value: "ESG and purpose-led work",
			tone: "sky"
		}
	].map((point) => renderTemplate`<li${addAttribute(`proof-pill proof-pill--${point.tone} astro-s3c42yzk`, "class")}><span class="proof-pill__label astro-s3c42yzk">${point.label}</span><span class="proof-pill__value astro-s3c42yzk">${point.value}</span></li>`)}</ul></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/proof.section.astro", void 0);
//#endregion
//#region src/sections/projects.section.astro
var $$Projects = createComponent(async ($$result, $$props, $$slots) => {
	const projects = (await getCollection("projects", ({ data }) => data.draft !== true && data.featured === true)).filter((entry) => typeof entry.data.id === "number");
	return renderTemplate`${maybeRenderHead($$result)}<section id="projects"><div class="container pg-shell"><p class="sl">Featured Projects</p>${projects.map((entry) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, {
		"project": entry.data,
		"slug": entry.id
	})}`)}</div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/projects.section.astro", void 0);
//#endregion
//#region src/components/Publications/BlogCard.astro
createAstro("https://rjmlaird.co.uk");
var $$BlogCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogCard;
	const { post } = Astro.props;
	const data = post?.data ?? {};
	const href = `/${post?.collection ?? "blog"}/${post?.slug ?? post?.id ?? "untitled"}`;
	const title = data.title ?? "Untitled";
	const excerpt = data.excerpt ?? data.description ?? "";
	const dateValue = data.date ? new Date(data.date) : null;
	const formattedDate = dateValue && !Number.isNaN(dateValue.getTime()) ? dateValue.toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "long",
		year: "numeric"
	}) : "";
	const authorSlug = typeof data.author === "string" ? data.author.trim() : "";
	const authorLabel = authorSlug ? authorSlug.replace(/(^|-)\w/g, (m) => m.toUpperCase()).replace(/-/g, " ") : "";
	const avatar = typeof data.avatar === "string" ? data.avatar.trim() : "";
	const tags = Array.isArray(data.tags) ? data.tags : data.tag ? [data.tag] : [];
	const image = data.image || "/images/placeholder.jpg";
	const imageCredit = data.imageCredit ?? "";
	const tagSlug = (tag) => encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"));
	return renderTemplate`${maybeRenderHead($$result)}<article class="pr pub">${image ? renderTemplate`<a${addAttribute(href, "href")} class="pub-media pub-image"${addAttribute(title, "aria-label")}><img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy">${imageCredit && renderTemplate`<span class="image-credit">${imageCredit}</span>`}</a>` : null}<div class="pm"><div class="pub-top"><h3><a${addAttribute(href, "href")} class="pub-title-link">${title}</a></h3>${formattedDate ? renderTemplate`<time class="date">${formattedDate}</time>` : null}</div>${excerpt && renderTemplate`<p>${excerpt}</p>`}${authorSlug ? renderTemplate`<div class="author-badge">${avatar ? renderTemplate`<img class="author-avatar"${addAttribute(avatar, "src")}${addAttribute(authorLabel || authorSlug, "alt")} width="32" height="32" loading="lazy">` : null}<span class="author-by">By</span><a class="author-link"${addAttribute(`/authors/${authorSlug}`, "href")}>${authorLabel || authorSlug}</a></div>` : null}${tags.length > 0 ? renderTemplate`<div class="pt">${tags.map((tag) => renderTemplate`<a class="tag"${addAttribute(`/tags/${tagSlug(tag)}/`, "href")}>${tag}</a>`)}</div>` : null}</div><a${addAttribute(href, "href")} class="pa"><span class="pa-i">↗</span><span>View</span></a></article>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/components/Publications/BlogCard.astro", void 0);
//#endregion
//#region src/sections/blog.section.astro
var $$Blog = createComponent(async ($$result, $$props, $$slots) => {
	const entries = (await getCollection("blog")).filter((entry) => !entry.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`${maybeRenderHead($$result)}<section id="blog"><div class="container pg-shell"><p class="sl">Blog</p><h2 class="story-lede">From telescope data to strategic communications.</h2><div class="pg-grid" id="blogGrid">${entries.slice(0, 3).map((entry) => renderTemplate`<div class="publication-item">${renderComponent($$result, "BlogCard", $$BlogCard, { "post": entry })}</div>`)}</div></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/blog.section.astro", void 0);
//#endregion
//#region src/sections/initiatives.section.astro
var $$Initiatives = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="initiatives" class="astro-z23y4t3k"><div class="container pg-shell astro-z23y4t3k"><p class="sl astro-z23y4t3k">Research & Initiatives</p><div class="ri-grid astro-z23y4t3k">${[
		{
			title: "Research",
			description: "Exploring space, science communication, and sustainability through data, writing, and curated insight.",
			href: "/research",
			accent: "teal",
			icon: "◌"
		},
		{
			title: "Initiatives",
			description: "Building and supporting mission-led projects that connect community, creativity, and impact.",
			href: "/initiatives",
			accent: "violet",
			icon: "◐"
		},
		{
			title: "Teaching",
			description: "Sharing knowledge through workshops, talks, and practical guidance across digital and science topics.",
			href: "/teaching",
			accent: "sky",
			icon: "✦"
		},
		{
			title: "Mentoring",
			description: "Helping people and teams grow with clearer thinking, better systems, and useful feedback.",
			href: "/mentoring",
			accent: "green",
			icon: "↗"
		}
	].map((item) => renderTemplate`<a${addAttribute(`ri-card ri-card--${item.accent} astro-z23y4t3k`, "class")}${addAttribute(item.href, "href")}><span class="ri-card__icon astro-z23y4t3k" aria-hidden="true">${item.icon}</span><span class="ri-card__title astro-z23y4t3k">${item.title}</span><span class="ri-card__desc astro-z23y4t3k">${item.description}</span><span class="ri-card__link astro-z23y4t3k">Explore</span></a>`)}</div></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/initiatives.section.astro", void 0);
//#endregion
//#region src/sections/story.section.astro
var $$Story = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="story" class="astro-jss6735o"><div class="container pg-shell astro-jss6735o"><p class="sl astro-jss6735o">Brand Story</p><h2 class="story-lede astro-jss6735o">From astrophysics to sustainable space strategy.</h2><p class="story-intro astro-jss6735o">Ryan Laird bridges science, communication, and sustainability to help space organisations tell clearer stories and build more responsible futures.</p><ol class="brand-story__timeline astro-jss6735o">${[
		{
			number: "01",
			title: "Science",
			label: "Astrophysics",
			description: "I started in astrophysics, working with data, evidence, and the scale of the universe.",
			icon: "✦",
			tone: "teal",
			motif: "Data / stars"
		},
		{
			number: "02",
			title: "Communication",
			label: "ESA / Copernicus storytelling",
			description: "I moved into space communication, helping shape narratives that made complex missions more accessible and meaningful.",
			icon: "◌",
			tone: "violet",
			motif: "Orbit / mission"
		},
		{
			number: "03",
			title: "Sustainability",
			label: "Green Orbit Digital",
			description: "Today I lead Green Orbit Digital, helping space organisations communicate clearly while embedding sustainability into how they work.",
			icon: "◐",
			tone: "green",
			motif: "Leaf / Earth observation"
		}
	].map((item) => renderTemplate`<li${addAttribute(`brand-story__item brand-story__item--${item.tone} astro-jss6735o`, "class")}><div class="brand-story__top astro-jss6735o"><span class="brand-story__number astro-jss6735o">${item.number}</span><span class="brand-story__motif astro-jss6735o">${item.motif}</span></div><div class="brand-story__visual astro-jss6735o" aria-hidden="true"><span class="brand-story__icon astro-jss6735o">${item.icon}</span><span class="brand-story__glow astro-jss6735o"></span></div><div class="brand-story__content astro-jss6735o"><h3 class="astro-jss6735o">${item.title}</h3><p class="brand-story__label astro-jss6735o">${item.label}</p><p class="astro-jss6735o">${item.description}</p></div></li>`)}</ol></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/story.section.astro", void 0);
var profile_default = {
	name: "Ryan Laird",
	preferredName: "Ryan",
	pronouns: "he/him",
	headline: "Strategic and Sustainable Marketing in the Space Sector",
	location: "Leicester, United Kingdom",
	email: "ryan@greenorbit.space",
	avatar: "/images/profile/ryan-laird.jpg",
	role: "Director, Green Orbit Digital.",
	credentials: "MPhys (Hons) · MInstP · CMktr · MCIPR",
	biography: [
		"Director and founder of Green Orbit Digital, specialising in sustainable marketing systems for the global space sector. Focused on data-led growth strategies aligned with environmental responsibility across the space ecosystem.",
		"Results-driven communications and marketing professional with over a decade of experience in the space industry. As a Chartered Marketer (CMktr), I have led numerous successful campaigns, driving brand growth and engagement through data-informed strategy, content creation, and audience-focused communications. I combine technical knowledge in physics and space studies with marketing, digital strategy, and public relations to communicate complex topics clearly and persuasively across diverse audiences.",
		"Beyond Green Orbit Digital, I maintain a portfolio of projects spanning software development, marketing, and space research, bridging disciplines to create meaningful connections between complex subjects and the audiences they serve."
	],
	tags: [
		"Digital Marketing",
		"SEO",
		"Content Marketing",
		"Social Media Strategy",
		"Lead Generation",
		"Sustainability",
		"Space Industry",
		"Earth Observation",
		"Brand Strategy",
		"Data Analytics",
		"Project Management",
		"Leadership"
	],
	portfolioLinks: [
		{
			"label": "Green Orbit Digital",
			"href": "https://greenorbit.space"
		},
		{
			"label": "Space Integrity Initiative",
			"href": "https://spaceintegrity.org"
		},
		{
			"label": "Space Impact Forum",
			"href": "https://spaceimpactforum.com"
		},
		{
			"label": "Space for Neurodiversity",
			"href": "https://spaceforneurodiversity.org"
		},
		{
			"label": "CV",
			"href": "https://cv.rjmlaird.co.uk"
		},
		{
			"label": "Dev",
			"href": "https://dev.rjmlaird.co.uk"
		}
	],
	contact: [{
		"label": "E-mail",
		"href": "mailto:mail@rjmlaird.co.uk"
	}, {
		"label": "ORCID",
		"href": "https://orcid.org/0000-0002-5992-684X"
	}]
};
//#endregion
//#region src/sections/about.section.astro
var $$About = createComponent(($$result, $$props, $$slots) => {
	const profile = profile_default;
	const headline = profile.headline?.trim() ?? "";
	const biography = Array.isArray(profile.biography) ? profile.biography : [];
	const credentials = profile.credentials?.trim() ?? "";
	const links = Array.isArray(profile.portfolioLinks) ? profile.portfolioLinks : Array.isArray(profile.socials) ? profile.socials : [];
	const contact = Array.isArray(profile.contact) ? profile.contact : [];
	return renderTemplate`${maybeRenderHead($$result)}<section id="about" aria-labelledby="about-title"><p class="sl">About</p><div class="about-grid"><div><h2 id="about-title" class="ah fade in">${profile.name ?? ""}<br><em>${headline}</em></h2>${biography.length > 0 && renderTemplate`<div class="ab fade in">${biography.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)}</div>`}${credentials && renderTemplate`<div class="cred-row fade in" aria-label="Credentials"><span class="cred-badge cb-m">${credentials}</span></div>`}</div><aside class="sp fade in" aria-label="Find me elsewhere"><div class="sp-h">Find me elsewhere</div>${links.map((link) => renderTemplate`<a class="si"${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer"><div class="sl2"><span class="su">${link.label}</span></div><span class="sa" aria-hidden="true">→</span></a>`)}${contact.map((item) => renderTemplate`<a class="si"${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer"><div class="sl2"><span class="su">${item.label}</span></div><span class="sa" aria-hidden="true">→</span></a>`)}</aside></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/about.section.astro", void 0);
//#endregion
//#region src/sections/contact.section.astro
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="contact" class="astro-abyyff4s"><div class="container pg-shell astro-abyyff4s"><p class="sl astro-abyyff4s">Contact</p><div class="contact-card astro-abyyff4s"><div class="contact-card__content astro-abyyff4s"><h2 class="astro-abyyff4s">Let’s build something meaningful.</h2><p class="astro-abyyff4s">Open to strategy, ESG comms, writing, speaking, and collaboration across the space sector, sustainability, and digital.</p></div><div class="contact-card__actions astro-abyyff4s"><a class="contact-form astro-abyyff4s" href="/contact">Use the contact form</a><a class="contact-book astro-abyyff4s" href="https://cal.com/rjmlaird/discovery" target="_blank" rel="noopener noreferrer">Book a call</a><p class="contact-note astro-abyyff4s">Best for project inquiries, partnerships, editorial work, and speaking requests.</p></div></div></div></section>`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/sections/contact.section.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Proof", $$Proof, {})}${renderComponent($$result, "Projects", $$Projects, {})}${renderComponent($$result, "Story", $$Story, {})}${renderComponent($$result, "Blog", $$Blog, {})}${renderComponent($$result, "Initiatives", $$Initiatives, {})}${renderComponent($$result, "About", $$About, {})}${renderComponent($$result, "Contact", $$Contact, {})}` })}`;
}, "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/index.astro", void 0);
var $$file = "/Volumes/DevProjects/rjmlaird/rjmlaird.co.uk/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
