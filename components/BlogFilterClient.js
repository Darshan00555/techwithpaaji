"use client";

import Link from "next/link";
import { useState, useMemo, useRef } from "react";

const POSTS_PER_PAGE = 12;

function formatDate(date) {
    return new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}

/** Generates a smart page number array like [1, 2, "…", 7, 8, 9, "…", 15] */
function getPageNumbers(currentPage, totalPages) {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [];
    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);
    pages.push(1);
    if (left > 2) pages.push("…");
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < totalPages - 1) pages.push("…");
    pages.push(totalPages);
    return pages;
}

export default function BlogFilterClient({ posts }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const gridRef = useRef(null);

    // Build unique category list from posts
    const categories = useMemo(() => {
        const cats = ["All", ...new Set(posts.map((p) => p.category).filter(Boolean))];
        return cats;
    }, [posts]);

    // Filter posts based on search query and active category
    const filteredPosts = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        return posts.filter((post) => {
            const matchesCategory =
                activeCategory === "All" || post.category === activeCategory;
            const matchesSearch =
                !q ||
                post.title.toLowerCase().includes(q) ||
                post.description.toLowerCase().includes(q) ||
                (post.tags || []).some((tag) => tag.toLowerCase().includes(q)) ||
                (post.keywords || []).some((kw) => kw.toLowerCase().includes(q)) ||
                (post.category || "").toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        });
    }, [posts, searchQuery, activeCategory]);

    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
    const safePage = Math.min(currentPage, totalPages);
    const pageStart = (safePage - 1) * POSTS_PER_PAGE;
    const pagePosts = filteredPosts.slice(pageStart, pageStart + POSTS_PER_PAGE);
    const pageNumbers = getPageNumbers(safePage, totalPages);

    function goToPage(page) {
        setCurrentPage(page);
        setTimeout(() => {
            gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    }

    function handleSearch(val) {
        setSearchQuery(val);
        setCurrentPage(1);
    }

    function handleCategory(cat) {
        setActiveCategory(cat);
        setSearchQuery("");
        setCurrentPage(1);
    }

    function handleReset() {
        setSearchQuery("");
        setActiveCategory("All");
        setCurrentPage(1);
    }

    return (
        <section className="section-pad divider-line pt-0">
            <div className="container-premium">

                {/* ── Search + Filter Bar ── */}
                <div className="blog-controls">
                    <div className="blog-search-wrap">
                        <svg
                            className="blog-search-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="search"
                            placeholder="Search articles… e.g. breakup, anxiety, love bombing"
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="blog-search-input"
                            aria-label="Search blog articles"
                        />
                        {searchQuery && (
                            <button
                                onClick={handleReset}
                                className="blog-search-clear"
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <div className="blog-filters" role="group" aria-label="Filter by category">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategory(cat)}
                                className={`blog-filter-chip${activeCategory === cat ? " active" : ""}`}
                                aria-pressed={activeCategory === cat}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Results count ── */}
                <p className="blog-results-count" ref={gridRef}>
                    {filteredPosts.length === posts.length
                        ? `${posts.length} articles`
                        : `${filteredPosts.length} of ${posts.length} articles`}
                    {activeCategory !== "All" && (
                        <span> in <strong>{activeCategory}</strong></span>
                    )}
                    {searchQuery && (
                        <span> matching <strong>"{searchQuery}"</strong></span>
                    )}
                    {totalPages > 1 && (
                        <span className="page-info"> · Page {safePage} of {totalPages}</span>
                    )}
                </p>

                {/* ── Blog cards grid ── */}
                {pagePosts.length > 0 ? (
                    <>
                        <div className="blog-grid">
                            {pagePosts.map((post) => (
                                <article key={post.slug} className="glass-card blog-card">
                                    <p className="blog-card-category">{post.category}</p>
                                    <h2 className="blog-card-title">{post.title}</h2>
                                    <p className="blog-card-desc">{post.description}</p>
                                    <div className="blog-card-meta">
                                        <span>{formatDate(post.date)}</span>
                                        <span>·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="blog-card-link">
                                        Read full article →
                                    </Link>
                                </article>
                            ))}
                        </div>

                        {/* ── Pagination controls ── */}
                        {totalPages > 1 && (
                            <nav className="pagination" aria-label="Blog page navigation">
                                <button
                                    onClick={() => goToPage(safePage - 1)}
                                    disabled={safePage === 1}
                                    className="page-btn page-arrow"
                                    aria-label="Previous page"
                                >
                                    ← Prev
                                </button>

                                <div className="page-numbers">
                                    {pageNumbers.map((p, idx) =>
                                        p === "…" ? (
                                            <span key={`dots-${idx}`} className="page-dots">…</span>
                                        ) : (
                                            <button
                                                key={p}
                                                onClick={() => goToPage(p)}
                                                className={`page-btn page-num${p === safePage ? " active" : ""}`}
                                                aria-label={`Go to page ${p}`}
                                                aria-current={p === safePage ? "page" : undefined}
                                            >
                                                {p}
                                            </button>
                                        )
                                    )}
                                </div>

                                <button
                                    onClick={() => goToPage(safePage + 1)}
                                    disabled={safePage === totalPages}
                                    className="page-btn page-arrow"
                                    aria-label="Next page"
                                >
                                    Next →
                                </button>
                            </nav>
                        )}
                    </>
                ) : (
                    <div className="blog-empty">
                        <p className="blog-empty-icon">🔍</p>
                        <h3 className="blog-empty-title">No articles found</h3>
                        <p className="blog-empty-sub">
                            Try a different keyword or{" "}
                            <button onClick={handleReset} className="blog-empty-reset">
                                clear filters
                            </button>
                        </p>
                    </div>
                )}
            </div>

            <style jsx>{`
        .blog-controls {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .blog-search-wrap {
          position: relative;
          width: 100%;
        }
        .blog-search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.1rem;
          height: 1.1rem;
          color: #0f3d3e;
          opacity: 0.55;
          pointer-events: none;
        }
        .blog-search-input {
          width: 100%;
          padding: 0.85rem 3rem 0.85rem 2.75rem;
          font-size: 0.95rem;
          font-family: "Inter", "Segoe UI", sans-serif;
          border: 1.5px solid rgba(15, 61, 62, 0.2);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          color: #0e1e1e;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          -webkit-appearance: none;
        }
        .blog-search-input::placeholder { color: rgba(14, 30, 30, 0.4); }
        .blog-search-input:focus {
          border-color: #2a9d8f;
          box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.15);
        }
        .blog-search-input::-webkit-search-cancel-button { -webkit-appearance: none; }
        .blog-search-clear {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(15, 61, 62, 0.1);
          border: none;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          color: #0f3d3e;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .blog-search-clear:hover { background: rgba(15, 61, 62, 0.2); }

        .blog-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .blog-filter-chip {
          padding: 0.45rem 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: "Inter", "Segoe UI", sans-serif;
          border-radius: 50px;
          border: 1.5px solid rgba(15, 61, 62, 0.2);
          background: rgba(255, 255, 255, 0.6);
          color: #0f3d3e;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .blog-filter-chip:hover {
          border-color: #2a9d8f;
          background: rgba(42, 157, 143, 0.08);
          color: #2a9d8f;
        }
        .blog-filter-chip.active {
          background: #0f3d3e;
          border-color: #0f3d3e;
          color: #f5f1e8;
          box-shadow: 0 4px 12px rgba(15, 61, 62, 0.3);
        }

        .blog-results-count {
          font-size: 0.82rem;
          color: rgba(14, 30, 30, 0.5);
          margin-bottom: 1.5rem;
          font-family: "Inter", "Segoe UI", sans-serif;
          scroll-margin-top: 100px;
        }
        .blog-results-count strong { color: #0f3d3e; }
        .page-info { opacity: 0.8; }

        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        .blog-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .blog-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(11, 46, 47, 0.16);
        }
        .blog-card-category {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #2a9d8f;
          margin: 0 0 0.6rem;
          font-family: "Inter", "Segoe UI", sans-serif;
        }
        .blog-card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0f3d3e;
          margin: 0 0 0.75rem;
          line-height: 1.3;
        }
        .blog-card-desc {
          font-size: 0.875rem;
          color: rgba(14, 30, 30, 0.75);
          margin: 0 0 0.9rem;
          line-height: 1.65;
          flex: 1;
        }
        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: rgba(14, 30, 30, 0.5);
          margin-bottom: 1rem;
          font-family: "Inter", "Segoe UI", sans-serif;
        }
        .blog-card-link {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0f3d3e;
          text-decoration: none;
          transition: color 0.2s ease;
          align-self: flex-start;
        }
        .blog-card-link:hover { color: #f4a261; }

        /* Pagination */
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }
        .page-numbers {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .page-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.4rem;
          height: 2.4rem;
          padding: 0 0.7rem;
          border-radius: 50px;
          border: 1.5px solid rgba(15, 61, 62, 0.18);
          background: rgba(255, 255, 255, 0.65);
          color: #0f3d3e;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: "Inter", "Segoe UI", sans-serif;
          cursor: pointer;
          transition: all 0.18s ease;
          white-space: nowrap;
        }
        .page-btn:hover:not(:disabled) {
          border-color: #2a9d8f;
          background: rgba(42, 157, 143, 0.1);
          color: #2a9d8f;
        }
        .page-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .page-btn.active {
          background: #0f3d3e;
          border-color: #0f3d3e;
          color: #f5f1e8;
          box-shadow: 0 4px 14px rgba(15, 61, 62, 0.3);
        }
        .page-arrow { font-size: 0.82rem; }
        .page-dots {
          font-size: 0.9rem;
          color: rgba(14, 30, 30, 0.4);
          padding: 0 0.25rem;
          user-select: none;
        }

        /* Empty state */
        .blog-empty { text-align: center; padding: 4rem 1rem; }
        .blog-empty-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .blog-empty-title { font-size: 1.4rem; color: #0f3d3e; margin: 0 0 0.5rem; }
        .blog-empty-sub {
          font-size: 0.9rem;
          color: rgba(14, 30, 30, 0.6);
          font-family: "Inter", "Segoe UI", sans-serif;
        }
        .blog-empty-reset {
          background: none;
          border: none;
          color: #2a9d8f;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0;
          text-decoration: underline;
        }

        /* Tablet */
        @media (min-width: 640px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-card-title { font-size: 1.3rem; }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .blog-controls {
            flex-direction: row;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .blog-search-wrap {
            max-width: 440px;
            flex-shrink: 0;
          }
          .blog-filters { flex: 1; }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .blog-card { padding: 1.75rem; }
        }
      `}</style>
        </section>
    );
}
