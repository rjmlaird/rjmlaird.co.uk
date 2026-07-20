globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as getImage$1 } from "./assets_Co_4YRVX.mjs";
//#region \0virtual:astro:get-image
var imageConfig = {
	"endpoint": {
		"route": "/_image",
		"entrypoint": "@astrojs/cloudflare/image-passthrough-endpoint"
	},
	"service": {
		"entrypoint": "astro/assets/services/noop",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: void 0,
	enumerable: false,
	configurable: true
});
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
export { getImage };
