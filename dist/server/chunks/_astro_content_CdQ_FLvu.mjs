globalThis.process ??= {};
globalThis.process.env ??= {};
import { A as object, C as array, E as date, H as createHeadAndContent, K as unescapeHTML, L as safeParseAsync, N as string, P as union, Z as escape, h as renderTemplate, i as renderUniqueStylesheet, k as number, n as spreadAttributes, r as renderScriptElement, s as renderComponent, v as generateCspDigest } from "./server_DB2RPiSg.mjs";
import { c as isRemotePath, d as removeBase, u as prependForwardSlash } from "./path_BqUacSWD.mjs";
import { n as unflatten } from "./parse_DYC_yjKv.mjs";
import { D as LiveContentConfigError, K as RenderUndefinedEntryError, n as AstroError, r as AstroUserError, tt as UnknownContentCollectionError } from "./shorthash_Xgn77Kwt.mjs";
import { t as createComponent } from "./astro-component_gu_vkqUf.mjs";
import { r as VALID_INPUT_FORMATS } from "./consts_HylFXJJn.mjs";
//#region node_modules/neotraverse/dist/modern/min/modern.js
var e = (e) => Object.prototype.toString.call(e);
var t = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView);
var o = (t) => "[object Date]" === e(t);
var n = (t) => "[object RegExp]" === e(t);
var r = (t) => "[object Error]" === e(t);
var s = (t) => "[object Boolean]" === e(t);
var l = (t) => "[object Number]" === e(t);
var i = (t) => "[object String]" === e(t);
var c = Array.isArray;
var u = Object.getOwnPropertyDescriptor;
var a = Object.prototype.propertyIsEnumerable;
var f = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty;
var h = Object.keys;
function d(e) {
	const t = h(e), o = f(e);
	for (let n = 0; n < o.length; n++) a.call(e, o[n]) && t.push(o[n]);
	return t;
}
function b(e, t) {
	return !u(e, t)?.writable;
}
function y(e, u) {
	if ("object" == typeof e && null !== e) {
		let a;
		if (c(e)) a = [];
		else if (o(e)) a = new Date(e.getTime ? e.getTime() : e);
		else if (n(e)) a = new RegExp(e);
		else if (r(e)) a = { message: e.message };
		else if (s(e) || l(e) || i(e)) a = Object(e);
		else {
			if (t(e)) return e.slice();
			a = Object.create(Object.getPrototypeOf(e));
		}
		const f = u.includeSymbols ? d : h;
		for (const t of f(e)) a[t] = e[t];
		return a;
	}
	return e;
}
var g = {
	includeSymbols: !1,
	immutable: !1
};
function m(e, t, o = g) {
	const n = [], r = [];
	let s = !0;
	const l = o.includeSymbols ? d : h, i = !!o.immutable;
	return function e(u) {
		const a = i ? y(u, o) : u, f = {};
		let h = !0;
		const d = {
			node: a,
			node_: u,
			path: [].concat(n),
			parent: r[r.length - 1],
			parents: r,
			key: n[n.length - 1],
			isRoot: 0 === n.length,
			level: n.length,
			circular: void 0,
			isLeaf: !1,
			notLeaf: !0,
			notRoot: !0,
			isFirst: !1,
			isLast: !1,
			update: function(e, t = !1) {
				d.isRoot || (d.parent.node[d.key] = e), d.node = e, t && (h = !1);
			},
			delete: function(e) {
				delete d.parent.node[d.key], e && (h = !1);
			},
			remove: function(e) {
				c(d.parent.node) ? d.parent.node.splice(d.key, 1) : delete d.parent.node[d.key], e && (h = !1);
			},
			keys: null,
			before: function(e) {
				f.before = e;
			},
			after: function(e) {
				f.after = e;
			},
			pre: function(e) {
				f.pre = e;
			},
			post: function(e) {
				f.post = e;
			},
			stop: function() {
				s = !1;
			},
			block: function() {
				h = !1;
			}
		};
		if (!s) return d;
		function g() {
			if ("object" == typeof d.node && null !== d.node) {
				d.keys && d.node_ === d.node || (d.keys = l(d.node)), d.isLeaf = 0 === d.keys.length;
				for (let e = 0; e < r.length; e++) if (r[e].node_ === u) {
					d.circular = r[e];
					break;
				}
			} else d.isLeaf = !0, d.keys = null;
			d.notLeaf = !d.isLeaf, d.notRoot = !d.isRoot;
		}
		g();
		const m = t(d, d.node);
		if (void 0 !== m && d.update && d.update(m), f.before && f.before(d, d.node), !h) return d;
		if ("object" == typeof d.node && null !== d.node && !d.circular) {
			r.push(d), g();
			for (const [t, o] of Object.entries(d.keys ?? [])) {
				n.push(o), f.pre && f.pre(d, d.node[o], o);
				const r = e(d.node[o]);
				i && p.call(d.node, o) && !b(d.node, o) && (d.node[o] = r.node), r.isLast = !!d.keys?.length && +t == d.keys.length - 1, r.isFirst = 0 == +t, f.post && f.post(d, r), n.pop();
			}
			r.pop();
		}
		return f.after && f.after(d, d.node), d;
	}(e).node;
}
var j = class {
	#e;
	#t;
	constructor(e, t = g) {
		this.#e = e, this.#t = t;
	}
	get(e) {
		let t = this.#e;
		for (let o = 0; t && o < e.length; o++) {
			const n = e[o];
			if (!p.call(t, n) || !this.#t.includeSymbols && "symbol" == typeof n) return;
			t = t[n];
		}
		return t;
	}
	has(e) {
		let t = this.#e;
		for (let o = 0; t && o < e.length; o++) {
			const n = e[o];
			if (!p.call(t, n) || !this.#t.includeSymbols && "symbol" == typeof n) return !1;
			t = t[n];
		}
		return !0;
	}
	set(e, t) {
		let o = this.#e, n = 0;
		for (n = 0; n < e.length - 1; n++) {
			const t = e[n];
			p.call(o, t) || (o[t] = {}), o = o[t];
		}
		return o[e[n]] = t, t;
	}
	map(e) {
		return m(this.#e, e, {
			immutable: !0,
			includeSymbols: !!this.#t.includeSymbols
		});
	}
	forEach(e) {
		return this.#e = m(this.#e, e, this.#t), this.#e;
	}
	reduce(e, t) {
		const o = 1 === arguments.length;
		let n = o ? this.#e : t;
		return this.forEach(((t, r) => {
			t.isRoot && o || (n = e(t, n, r));
		})), n;
	}
	paths() {
		const e = [];
		return this.forEach(((t) => {
			e.push(t.path);
		})), e;
	}
	nodes() {
		const e = [];
		return this.forEach(((t) => {
			e.push(t.node);
		})), e;
	}
	clone() {
		const e = [], o = [], n = this.#t;
		return t(this.#e) ? this.#e.slice() : function t(r) {
			for (let t = 0; t < e.length; t++) if (e[t] === r) return o[t];
			if ("object" == typeof r && null !== r) {
				const s = y(r, n);
				e.push(r), o.push(s);
				const l = n.includeSymbols ? d : h;
				for (const e of l(r)) s[e] = t(r[e]);
				return e.pop(), o.pop(), s;
			}
			return r;
		}(this.#e);
	}
};
//#endregion
//#region node_modules/astro/dist/assets/runtime.js
function createSvgComponent({ meta, attributes, children, styles }) {
	const hasStyles = styles.length > 0;
	const Component = createComponent({
		async factory(result, props) {
			const normalizedProps = normalizeProps(attributes, props);
			if (hasStyles && result.cspDestination) for (const style of styles) {
				const hash = await generateCspDigest(style, result.cspAlgorithm);
				result._metadata.extraStyleHashes.push(hash);
			}
			return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
		},
		propagation: hasStyles ? "self" : "none"
	});
	Object.defineProperty(Component, "toJSON", {
		value: () => meta,
		enumerable: false
	});
	return Object.assign(Component, meta);
}
var ATTRS_TO_DROP = [
	"xmlns",
	"xmlns:xlink",
	"version"
];
var DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
	for (const attr of ATTRS_TO_DROP) delete attributes[attr];
	return attributes;
}
function normalizeProps(attributes, props) {
	return dropAttributes({
		...DEFAULT_ATTRS,
		...attributes,
		...props
	});
}
var CONTENT_IMAGE_FLAG = "astroContentImageFlag";
var IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
var CONTENT_LAYER_TYPE = "content_layer";
var LIVE_CONTENT_TYPE = "live";
//#endregion
//#region node_modules/astro/dist/assets/utils/resolveImports.js
function imageSrcToImportId(imageSrc, filePath) {
	imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
	if (isRemotePath(imageSrc)) return;
	const ext = imageSrc.split(".").at(-1)?.toLowerCase();
	if (!ext || !VALID_INPUT_FORMATS.includes(ext)) return;
	const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
	if (filePath) params.set("importer", filePath);
	return `${imageSrc}?${params.toString()}`;
}
//#endregion
//#region node_modules/astro/dist/content/config.js
function getImporterFilename() {
	const stackLine = (/* @__PURE__ */ new Error()).stack?.split("\n").find((line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error"));
	if (!stackLine) return;
	return /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine)?.[1] ?? void 0;
}
function defineCollection$1(config) {
	const importerFilename = getImporterFilename();
	if (importerFilename?.includes("live.config")) throw new AstroError({
		...LiveContentConfigError,
		message: LiveContentConfigError.message("Collections in a live config file must use `defineLiveCollection`.", importerFilename)
	});
	if ("loader" in config) {
		if (config.type && config.type !== "content_layer") throw new AstroUserError(`A content collection is defined with legacy features (e.g. missing a \`loader\` or has a \`type\`). Check your collection definitions in ${importerFilename ?? "your content config file"} to ensure that all collections are defined using the current properties.`);
		if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) throw new AstroUserError(`Live content collections must be defined in "src/live.config.ts" file. Check the loaders used in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader to define a build-time content collection.`);
		config.type = CONTENT_LAYER_TYPE;
	}
	if (!config.type) config.type = "content";
	return config;
}
//#endregion
//#region node_modules/astro/dist/content/data-store.js
var ImmutableDataStore = class ImmutableDataStore {
	_collections = /* @__PURE__ */ new Map();
	constructor() {
		this._collections = /* @__PURE__ */ new Map();
	}
	get(collectionName, key) {
		return this._collections.get(collectionName)?.get(String(key));
	}
	entries(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).entries()];
	}
	values(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).values()];
	}
	keys(collectionName) {
		return [...(this._collections.get(collectionName) ?? /* @__PURE__ */ new Map()).keys()];
	}
	has(collectionName, key) {
		const collection = this._collections.get(collectionName);
		if (collection) return collection.has(String(key));
		return false;
	}
	hasCollection(collectionName) {
		return this._collections.has(collectionName);
	}
	collections() {
		return this._collections;
	}
	/**
	* Attempts to load a DataStore from the virtual module.
	* This only works in Vite.
	*/
	static async fromModule() {
		try {
			const data = await import("./_astro_data-layer-content_Bd_nooTS.mjs");
			if (data.default instanceof Map) return ImmutableDataStore.fromMap(data.default);
			const map = unflatten(data.default);
			return ImmutableDataStore.fromMap(map);
		} catch {}
		return new ImmutableDataStore();
	}
	static async fromMap(data) {
		const store = new ImmutableDataStore();
		store._collections = data;
		return store;
	}
};
function dataStoreSingleton() {
	let instance = void 0;
	return {
		get: async () => {
			if (!instance) instance = ImmutableDataStore.fromModule();
			return instance;
		},
		set: (store) => {
			instance = store;
		}
	};
}
var globalDataStore = dataStoreSingleton();
//#endregion
//#region node_modules/astro/dist/content/loaders/errors.js
function formatZodError(error) {
	return error.issues.map((issue) => `  **${issue.path.join(".")}**: ${issue.message}`);
}
var LiveCollectionError = class LiveCollectionError extends Error {
	collection;
	message;
	cause;
	constructor(collection, message, cause) {
		super(message);
		this.collection = collection;
		this.message = message;
		this.cause = cause;
		this.name = "LiveCollectionError";
		if (cause?.stack) this.stack = cause.stack;
	}
	static is(error) {
		return error instanceof LiveCollectionError;
	}
};
var LiveEntryNotFoundError = class extends LiveCollectionError {
	constructor(collection, entryFilter) {
		super(collection, `Entry ${collection} \u2192 ${typeof entryFilter === "string" ? entryFilter : JSON.stringify(entryFilter)} was not found.`);
		this.name = "LiveEntryNotFoundError";
	}
	static is(error) {
		return error?.name === "LiveEntryNotFoundError";
	}
};
var LiveCollectionValidationError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${collection} \u2192 ${entryId}** data does not match the collection schema.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionValidationError";
	}
	static is(error) {
		return error?.name === "LiveCollectionValidationError";
	}
};
var LiveCollectionCacheHintError = class extends LiveCollectionError {
	constructor(collection, entryId, error) {
		super(collection, [
			`**${String(collection)}${entryId ? ` \u2192 ${String(entryId)}` : ""}** returned an invalid cache hint.
`,
			...formatZodError(error),
			""
		].join("\n"));
		this.name = "LiveCollectionCacheHintError";
	}
	static is(error) {
		return error?.name === "LiveCollectionCacheHintError";
	}
};
//#endregion
//#region node_modules/astro/dist/content/runtime.js
var cacheHintSchema = object({
	tags: array(string()).optional(),
	lastModified: date().optional()
});
async function parseLiveEntry(entry, schema, collection) {
	try {
		const parsed = await safeParseAsync(schema, entry.data);
		if (!parsed.success) return { error: new LiveCollectionValidationError(collection, entry.id, parsed.error) };
		if (entry.cacheHint) {
			const cacheHint = cacheHintSchema.safeParse(entry.cacheHint);
			if (!cacheHint.success) return { error: new LiveCollectionCacheHintError(collection, entry.id, cacheHint.error) };
			entry.cacheHint = cacheHint.data;
		}
		return { entry: {
			...entry,
			data: parsed.data
		} };
	} catch (error) {
		return { error: new LiveCollectionError(collection, `Unexpected error parsing entry ${entry.id} in collection ${collection}`, error) };
	}
}
function createGetCollection({ liveCollections }) {
	return async function getCollection(collection, filter) {
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
		});
		const hasFilter = typeof filter === "function";
		const store = await globalDataStore.get();
		if (store.hasCollection(collection)) {
			const { default: imageAssetMap } = await import("./content-assets_CdozlZz2.mjs");
			const result = [];
			for (const rawEntry of store.values(collection)) {
				const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
				let entry = {
					...rawEntry,
					data,
					collection
				};
				if (hasFilter && !filter(entry)) continue;
				result.push(entry);
			}
			return result;
		} else {
			console.warn(`The collection ${JSON.stringify(collection)} does not exist or is empty. Please check your content config file for errors.`);
			return [];
		}
	};
}
function createGetEntry({ liveCollections }) {
	return async function getEntry(collectionOrLookupObject, lookup) {
		let collection, lookupId;
		if (typeof collectionOrLookupObject === "string") {
			collection = collectionOrLookupObject;
			if (!lookup) throw new AstroError({
				...UnknownContentCollectionError,
				message: "`getEntry()` requires an entry identifier as the second argument."
			});
			lookupId = lookup;
		} else {
			collection = collectionOrLookupObject.collection;
			lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
		}
		if (collection in liveCollections) throw new AstroError({
			...UnknownContentCollectionError,
			message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
		});
		if (typeof lookupId === "object") throw new AstroError({
			...UnknownContentCollectionError,
			message: `The entry identifier must be a string. Received object.`
		});
		const store = await globalDataStore.get();
		if (store.hasCollection(collection)) {
			const entry = store.get(collection, lookupId);
			if (!entry) {
				console.warn(`Entry ${collection} → ${lookupId} was not found.`);
				return;
			}
			const { default: imageAssetMap } = await import("./content-assets_CdozlZz2.mjs");
			const data = updateImageReferencesInData(entry.data, entry.filePath, imageAssetMap);
			const result = {
				...entry,
				data,
				collection
			};
			warnForPropertyAccess(result.data, "slug", `[content] Attempted to access deprecated property on "${collection}" entry.
The "slug" property is no longer automatically added to entries. Please use the "id" property instead.`);
			warnForPropertyAccess(result, "render", `[content] Invalid attempt to access "render()" method on "${collection}" entry.
To render an entry, use "render(entry)" from "astro:content".`);
			return result;
		}
	};
}
function warnForPropertyAccess(entry, prop, message) {
	if (!(prop in entry)) {
		let _value = void 0;
		Object.defineProperty(entry, prop, {
			get() {
				if (_value === void 0) console.error(message);
				return _value;
			},
			set(v) {
				_value = v;
			},
			enumerable: false
		});
	}
}
function createGetLiveCollection({ liveCollections }) {
	return async function getLiveCollection(collection, filter) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveCollection() to load regular content collections.`) };
		try {
			const context = {
				filter,
				collection
			};
			const response = await liveCollections[collection].loader?.loadCollection?.(context);
			if (response && "error" in response) return { error: response.error };
			const { schema } = liveCollections[collection];
			let processedEntries = response.entries;
			if (schema) {
				const entryResults = await Promise.all(response.entries.map((entry) => parseLiveEntry(entry, schema, collection)));
				for (const result of entryResults) if (result.error) return { error: result.error };
				processedEntries = entryResults.map((result) => result.entry);
			}
			let cacheHint = response.cacheHint;
			if (cacheHint) {
				const cacheHintResult = cacheHintSchema.safeParse(cacheHint);
				if (!cacheHintResult.success) return { error: new LiveCollectionCacheHintError(collection, void 0, cacheHintResult.error) };
				cacheHint = cacheHintResult.data;
			}
			if (processedEntries.length > 0) {
				const entryTags = /* @__PURE__ */ new Set();
				let latestModified;
				for (const entry of processedEntries) if (entry.cacheHint) {
					if (entry.cacheHint.tags) entry.cacheHint.tags.forEach((tag) => entryTags.add(tag));
					if (entry.cacheHint.lastModified instanceof Date) {
						if (latestModified === void 0 || entry.cacheHint.lastModified > latestModified) latestModified = entry.cacheHint.lastModified;
					}
				}
				if (entryTags.size > 0 || latestModified || cacheHint) {
					const mergedCacheHint = {};
					if (cacheHint?.tags || entryTags.size > 0) mergedCacheHint.tags = [.../* @__PURE__ */ new Set([...cacheHint?.tags || [], ...entryTags])];
					if (cacheHint?.lastModified && latestModified) mergedCacheHint.lastModified = cacheHint.lastModified > latestModified ? cacheHint.lastModified : latestModified;
					else if (cacheHint?.lastModified || latestModified) mergedCacheHint.lastModified = cacheHint?.lastModified ?? latestModified;
					cacheHint = mergedCacheHint;
				}
			}
			return {
				entries: processedEntries,
				cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading collection ${collection}${error instanceof Error ? `: ${error.message}` : ""}`, error) };
		}
	};
}
function createGetLiveEntry({ liveCollections }) {
	return async function getLiveEntry(collection, lookup) {
		if (!(collection in liveCollections)) return { error: new LiveCollectionError(collection, `Collection "${collection}" is not a live collection. Use getCollection() instead of getLiveEntry() to load regular content collections.`) };
		try {
			const lookupObject = {
				filter: typeof lookup === "string" ? { id: lookup } : lookup,
				collection
			};
			let entry = await liveCollections[collection].loader?.loadEntry?.(lookupObject);
			if (entry && "error" in entry) return { error: entry.error };
			if (!entry) return { error: new LiveEntryNotFoundError(collection, lookup) };
			const { schema } = liveCollections[collection];
			if (schema) {
				const result = await parseLiveEntry(entry, schema, collection);
				if (result.error) return { error: result.error };
				entry = result.entry;
			}
			return {
				entry,
				cacheHint: entry.cacheHint
			};
		} catch (error) {
			return { error: new LiveCollectionError(collection, `Unexpected error loading entry ${collection} → ${typeof lookup === "string" ? lookup : JSON.stringify(lookup)}`, error) };
		}
	};
}
var CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
	const { default: imageAssetMap } = await import("./content-assets_CdozlZz2.mjs");
	const imageObjects = /* @__PURE__ */ new Map();
	const { getImage } = await import("./_virtual_astro_get-image_CWZbEom_.mjs");
	for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) try {
		const decodedImagePath = JSON.parse(imagePath.replace(/&(?:#x22|quot);/g, "\"").replace(/&(?:#x27|apos);/g, "'"));
		let image;
		if (URL.canParse(decodedImagePath.src)) image = await getImage(decodedImagePath);
		else {
			const id = imageSrcToImportId(decodedImagePath.src, fileName);
			const imported = imageAssetMap.get(id);
			if (!id || imageObjects.has(id) || !imported) continue;
			image = await getImage({
				...decodedImagePath,
				src: imported
			});
		}
		imageObjects.set(imagePath, image);
	} catch {
		throw new Error(`Failed to parse image reference: ${imagePath}`);
	}
	return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
		const image = imageObjects.get(imagePath);
		if (!image) return full;
		const { index, ...attributes } = image.attributes;
		return Object.entries({
			...attributes,
			src: image.src,
			srcset: image.srcSet.attribute
		}).filter(([, value]) => value != null).map(([key, value]) => value === "" ? `${key}=""` : `${key}="${escape(String(value))}"`).join(" ");
	});
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
	const copy = structuredClone(data);
	new j(copy).forEach(function(ctx, val) {
		if (typeof val === "string" && val.startsWith("__ASTRO_IMAGE_")) {
			const src = val.replace(IMAGE_IMPORT_PREFIX, "");
			const id = imageSrcToImportId(src, fileName);
			if (!id) {
				ctx.update(src);
				return;
			}
			const imported = imageAssetMap?.get(id);
			if (imported) if (imported.__svgData) {
				const { __svgData: svgData, ...meta } = imported;
				ctx.update(createSvgComponent({
					meta,
					...svgData
				}));
			} else ctx.update(imported);
			else ctx.update(src);
		}
	});
	return copy;
}
async function renderEntry(entry) {
	if (!entry) throw new AstroError(RenderUndefinedEntryError);
	if (entry.deferredRender) try {
		const { default: contentModules } = await import("./content-modules_BZEqD5YT.mjs");
		const renderEntryImport = contentModules.get(entry.filePath);
		return render({
			collection: "",
			id: entry.id,
			renderEntryImport
		});
	} catch (e) {
		console.error(e);
	}
	const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
	return {
		Content: createComponent(() => renderTemplate`${unescapeHTML(html)}`),
		headings: entry?.rendered?.metadata?.headings ?? [],
		remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
	};
}
async function render({ collection, id, renderEntryImport }) {
	const UnexpectedRenderError = new AstroError({
		...UnknownContentCollectionError,
		message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
	});
	if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
	const baseMod = await renderEntryImport();
	if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
	const { default: defaultMod } = baseMod;
	if (isPropagatedAssetsModule(defaultMod)) {
		const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
		if (typeof getMod !== "function") throw UnexpectedRenderError;
		const propagationMod = await getMod();
		if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
		return {
			Content: createComponent({
				factory(result, baseProps, slots) {
					let styles = "", links = "", scripts = "";
					if (Array.isArray(collectedStyles)) styles = collectedStyles.map((style) => {
						return renderUniqueStylesheet(result, {
							type: "inline",
							content: style
						});
					}).join("");
					if (Array.isArray(collectedLinks)) links = collectedLinks.map((link) => {
						return renderUniqueStylesheet(result, {
							type: "external",
							src: isRemotePath(link) ? link : prependForwardSlash(link)
						});
					}).join("");
					if (Array.isArray(collectedScripts)) scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
					let props = baseProps;
					if (id.endsWith("mdx")) props = {
						components: propagationMod.components ?? {},
						...baseProps
					};
					return createHeadAndContent(unescapeHTML(styles + links + scripts), renderTemplate`${renderComponent(result, "Content", propagationMod.Content, props, slots)}`);
				},
				propagation: "self"
			}),
			headings: propagationMod.getHeadings?.() ?? [],
			remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
		};
	} else if (baseMod.Content && typeof baseMod.Content === "function") return {
		Content: baseMod.Content,
		headings: baseMod.getHeadings?.() ?? [],
		remarkPluginFrontmatter: baseMod.frontmatter ?? {}
	};
	else throw UnexpectedRenderError;
}
function createReference() {
	return function reference(collection) {
		return union([
			number().transform((num) => num.toString(10)),
			string(),
			object({
				id: string(),
				collection: string()
			}),
			object({
				slug: string(),
				collection: string()
			})
		]).transform((lookup, ctx) => {
			if (typeof lookup === "object") {
				if (lookup.collection !== collection) {
					const flattenedErrorPath = ctx.issues[0]?.path?.join(".");
					ctx.addIssue({
						code: "custom",
						message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
					});
					return;
				}
				return lookup;
			}
			return {
				id: lookup,
				collection
			};
		});
	};
}
function isPropagatedAssetsModule(module) {
	return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
	if (config.type === "live") throw new AstroError({
		...LiveContentConfigError,
		message: LiveContentConfigError.message("Collections with type `live` must be defined in a `src/live.config.ts` file.")
	});
	return defineCollection$1(config);
}
//#endregion
//#region \0astro:content
var liveCollections = {};
var getCollection = createGetCollection({ liveCollections });
var getEntry = createGetEntry({ liveCollections });
var reference = createReference();
createGetLiveCollection({ liveCollections });
createGetLiveEntry({ liveCollections });
//#endregion
export { renderEntry as a, defineCollection as i, getEntry as n, CONTENT_LAYER_TYPE as o, reference as r, LIVE_CONTENT_TYPE as s, getCollection as t };
