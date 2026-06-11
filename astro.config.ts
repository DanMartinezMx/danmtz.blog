import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import spectre from "./package/src";
import { spectreDark } from "./src/ec-theme";

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
					description: "Blog personal — Tech, Cocina, Gaming y la vida.",
				},
				blog: {
					title: "Blog",
					description: "Blog personal — Tech, Cocina, Gaming y la vida.",
				},
			},
		}),
	],
});

export default config;