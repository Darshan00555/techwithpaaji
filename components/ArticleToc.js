import Link from "next/link";

/**
 * Server-rendered table of contents.
 *
 * Rendered as real anchors so Google can build jump-to-section sitelinks, and
 * so answer engines can see the article's structure without executing JS.
 */
export default function ArticleToc({ headings = [] }) {
  const items = headings.filter((h) => h.level === 2);
  if (items.length < 3) return null;

  return (
    <nav
      aria-labelledby="toc-heading"
      className="mb-8 rounded-2xl border border-[#0F3D3E]/12 bg-white/70 p-5"
    >
      <h2
        id="toc-heading"
        className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]"
      >
        What this guide covers
      </h2>
      <ol className="mt-3 space-y-1.5">
        {items.map((h, i) => (
          <li key={h.id} className="text-sm leading-snug">
            <Link
              href={`#${h.id}`}
              className="text-[#0E1E1E]/78 transition-colors hover:text-[#2A9D8F]"
            >
              <span className="mr-2 text-xs font-semibold text-[#2A9D8F]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {h.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
