import { getAllPosts } from "../lib/blogData";
import { SITE_URL } from "../lib/seo";

export default function sitemap() {
    const now = new Date();
    const staticRoutes = [
        "",
        "/services",
        "/breakup-recovery",
        "/communication-coaching",
        "/relationship-reset",
        "/blog",
        "/about",
        "/contact"
    ];

    const staticEntries = staticRoutes.map((path, index) => ({
        url: `${SITE_URL}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : index <= 3 ? 0.9 : 0.8
    }));

    const blogEntries = getAllPosts().map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "weekly",
        priority: 0.7
    }));

    return [...staticEntries, ...blogEntries];
}
