import { getAllPosts } from "../lib/mdxUtils";
import { SITE_URL } from "../lib/seo";

export default function sitemap() {
    const now = new Date();

    // Priority map: homepage = 1.0, service pages = 0.9, blog = 0.85, blog posts = 0.8
    const staticRoutes = [
        { path: "", changeFrequency: "daily", priority: 1.0 },
        { path: "/services", changeFrequency: "weekly", priority: 0.9 },
        { path: "/breakup-recovery", changeFrequency: "weekly", priority: 0.9 },
        { path: "/communication-coaching", changeFrequency: "weekly", priority: 0.9 },
        { path: "/relationship-reset", changeFrequency: "weekly", priority: 0.9 },
        { path: "/blog", changeFrequency: "daily", priority: 0.85 },
        { path: "/about", changeFrequency: "monthly", priority: 0.7 },
        { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    ];

    const staticEntries = staticRoutes.map(({ path, changeFrequency, priority }) => ({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));

    const blogEntries = getAllPosts().map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date || now),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    return [...staticEntries, ...blogEntries];
}
