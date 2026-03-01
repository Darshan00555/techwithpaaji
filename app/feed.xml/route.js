import { getAllPosts } from "../../lib/mdxUtils";
import { SITE_URL, SITE_NAME } from "../../lib/seo";

export async function GET() {
    const posts = getAllPosts();

    const items = posts
        .map((post) => {
            const postUrl = `${SITE_URL}/blog/${post.slug}`;
            const pubDate = new Date(post.date).toUTCString();
            return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>contact@techwithpaaji.in (${post.author})</author>
    </item>`;
        })
        .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME} — Relationship Advice Blog India</title>
    <link>${SITE_URL}</link>
    <description>68+ expert relationship advice articles on breakup recovery, communication coaching, trust rebuilding, and emotional intelligence for India — by Paaji Connect.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>${SITE_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
    ${items}
  </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
    });
}
