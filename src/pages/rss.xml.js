import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    let blog = await getCollection('blog');

    // Sort posts by publishDate in descending order
    blog = blog.sort((a, b) => new Date(b.data.publishDate) - new Date(a.data.publishDate));

    return rss({
        title: "The Doras Blog",
        description: "Get all the latest news and keep up to date with what's happening at Doras",
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publishDate,
            description: post.data.snippet,
            author: post.data.author,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
    });
}