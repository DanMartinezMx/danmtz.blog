import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
    const posts = await getCollection("posts", ({ data }) => !data.draft);

    return rss({
        title: "Dan Mtz Blog",
        description: "Blog personal — tech, cocina, gaming y vida.",
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: new Date(post.data.createdAt),
            link: `/posts/${post.id}/`,
        })),
    });
}