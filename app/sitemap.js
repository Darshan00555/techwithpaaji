import { getAllPosts } from "../lib/mdxUtils";
import { SITE_URL } from "../lib/seo";

export default function sitemap() {
    // Priority map: homepage = 1.0, service pages = 0.9, blog = 0.85, blog posts = 0.8
    const staticRoutes = [
        { path: "", changeFrequency: "daily", priority: 1.0, lastModified: "2026-02-27" },
        { path: "/services", changeFrequency: "weekly", priority: 0.9, lastModified: "2026-02-27" },
        { path: "/breakup-recovery", changeFrequency: "weekly", priority: 0.9, lastModified: "2026-02-27" },
        { path: "/communication-coaching", changeFrequency: "weekly", priority: 0.9, lastModified: "2026-02-27" },
        { path: "/relationship-reset", changeFrequency: "weekly", priority: 0.9, lastModified: "2026-02-27" },
        { path: "/blog", changeFrequency: "daily", priority: 0.85, lastModified: "2026-03-01" },
        { path: "/about", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-02-25" },
        { path: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-02-25" },
        { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-02-25" },
        { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-02-25" },
    ];

    const staticEntries = staticRoutes.map(({ path, changeFrequency, priority, lastModified }) => ({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(lastModified),
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
