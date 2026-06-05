import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import spectre, { type GiscusMapping } from "./package/src";
import { spectreDark } from "./src/ec-theme";

const {
	GISCUS_REPO,
	GISCUS_REPO_ID,
	GISCUS_CATEGORY,
	GISCUS_CATEGORY_ID,
	GISCUS_MAPPING,
	GISCUS_STRICT,
	GISCUS_REACTIONS_ENABLED,
	GISCUS_EMIT_METADATA,
	GISCUS_LANG,
} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");

// https://astro.build/config
const config = defineConfig({
	site: "https://eldanmtz.com",
	output: "static",
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Dan Mtz.",
			openGraph: {
				home: {
					title: "Dan Mtz",
					description: "Write something funny",
				},
				blog: {
					title: "Blog",
					description: "Bloggin on 2026? what are you? Old?",
				},
				projects: {
					title: "Projects",
				},
			},
			giscus: {
				repository: "DanMartinezMx/danmtz.blog",
				repositoryId: "R_kgDOSxpI3g",
				category: "Announcements",
				categoryId: "DIC_kwDOSxpI3s4C-iya",
				mapping: "pathname" as GiscusMapping,
				strict: "1" === "true",
				reactionsEnabled: "1" === "true",
				emitMetadata: "0" === "true",
				lang: "en",
			},
		}),
	],
});

export default config;
