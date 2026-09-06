import fs from "fs";
import path from "path";
import { getAllPosts, getPostsByCategory } from "../lib/mdxUtils";
import { CATEGORIES, getCategoryHref } from "../lib/taxonomy";
import { SITE_URL } from "../lib/seo";

const staticRoutes = [
    { route: "/", changeFrequency: "weekly", priority: 1.0, lastModified: "2024-05-15" },
    { route: "/services", changeFrequency: "monthly", priority: 0.9, lastModified: "2024-05-15" },
    { route: "/breakup-recovery", changeFrequency: "monthly", priority: 0.9, lastModified: "2024-05-15" },
    { route: "/communication-coaching", changeFrequency: "monthly", priority: 0.9, lastModified: "2024-05-15" },
    { route: "/relationship-reset", changeFrequency: "monthly", priority: 0.9, lastModified: "2024-05-15" },
    { route: "/pricing", changeFrequency: "monthly", priority: 0.9, lastModified: "2024-05-15" },
    { route: "/blog", changeFrequency: "weekly", priority: 0.85, lastModified: "2024-05-15" },
    { route: "/about", changeFrequency: "monthly", priority: 0.7, lastModified: "2024-05-15" },
    { route: "/contact", changeFrequency: "monthly", priority: 0.8, lastModified: "2024-05-15" },
    { route: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, lastModified: "2024-05-15" },
    { route: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3, lastModified: "2024-05-15" },
];

export default function sitemap() {
    const staticEntries = staticRoutes.map(({ route, changeFrequency, priority, lastModified }) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(lastModified),
        changeFrequency,
        priority,
    }));

    // Category hubs sit between /blog and the articles, so they carry a higher
    // priority than individual posts.
    const categoryEntries = CATEGORIES.map((category) => {
        const posts = getPostsByCategory(category.slug);
        const newest = posts[0];
        return {
            url: `${SITE_URL}${getCategoryHref(category.slug)}`,
            lastModified: newest ? new Date(newest.updatedAt || newest.date) : new Date("2024-05-15"),
            changeFrequency: "weekly",
            priority: 0.85,
        };
    });

    const blogEntries = getAllPosts().map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.date),
        // "daily" on a post that never changes trains Google to distrust the
        // whole sitemap; monthly matches how these are actually maintained.
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticEntries, ...categoryEntries, ...blogEntries];
}
