globalThis.process ??= {};
globalThis.process.env ??= {};
//#region src/utils/slugify.ts
function slugify(text) {
	return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
}
//#endregion
export { slugify as t };
