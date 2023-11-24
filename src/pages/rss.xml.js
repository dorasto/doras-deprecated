import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    console.log('blog: ', blog);
    return rss({
        title: 'The Doras Blog',
        description: 'Get the latest news with some tips and tricks about your brand',
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