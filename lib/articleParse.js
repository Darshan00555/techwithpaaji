/**
 * Article body parsing for structured data and on-page navigation.
 *
 * The previous FAQ extractor only understood `**Question**` followed by a
 * plain-text answer, so the 22 posts written as `### 1. Question` emitted no
 * FAQPage schema at all. Everything here handles both shapes.
 */

const FAQ_HEADING = /^##\s+Frequently Asked Questions.*$/im;

export function slugifyHeading(text = "") {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Strip markdown decoration so schema text reads as plain prose. */
function toPlainText(md = "") {
  return md
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> label
    .replace(/\*\*([^*]*)\*\*/g, "$1") // bold
    .replace(/\*([^*]*)\*/g, "$1") // italic
    .replace(/`([^`]*)`/g, "$1") // code
    .replace(/^>\s?/gm, "") // blockquote
    .replace(/^[-*]\s+/gm, "") // list bullets
    .replace(/\s+/g, " ")
    .trim();
}

/** Drop a leading enumerator like "1. " or "Q3. " from a question. */
function cleanQuestion(q = "") {
  return toPlainText(q)
    .replace(/^(?:Q\s*)?\d+[.):]\s*/i, "")
    .trim();
}

/**
 * Pull the "## Frequently Asked Questions" block out of the article body.
 * Returns "" when the article has no FAQ section.
 */
export function getFaqSection(content = "") {
  const match = content.match(FAQ_HEADING);
  if (!match) return "";

  const start = match.index + match[0].length;
  const rest = content.slice(start);

  // Section ends at the next H2 (an H3 is still part of the FAQ).
  const nextH2 = rest.search(/^##\s+(?!#)/m);
  return nextH2 === -1 ? rest : rest.slice(0, nextH2);
}

/**
 * Extract Q&A pairs from an article, supporting both authoring styles:
 *   **Question?**            and   ### 3. Question?
 *   Answer paragraph.              Answer paragraph.
 */
export function extractFaqs(content = "") {
  const section = getFaqSection(content);
  if (!section) return [];

  const lines = section.split("\n");
  const faqs = [];
  let current = null;

  const flush = () => {
    if (!current) return;
    const question = cleanQuestion(current.question);
    const answer = toPlainText(current.answer.join("\n"));
    if (question && answer) faqs.push({ question, answer });
    current = null;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    // `### Question` / `#### Question`
    const headingQ = trimmed.match(/^#{3,6}\s+(.*\S)\s*$/);
    // `**Question**` alone on its line
    const boldQ = trimmed.match(/^\*\*(.+?)\*\*:?\s*$/);

    if (headingQ || boldQ) {
      flush();
      current = { question: (headingQ || boldQ)[1], answer: [] };
      continue;
    }

    // A horizontal rule or a new H2 closes the current answer.
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed) || /^##\s+(?!#)/.test(trimmed)) {
      flush();
      continue;
    }

    if (current && trimmed) current.answer.push(trimmed);
  }

  flush();

  // Schema.org answers should be self-contained; drop anything vestigial.
  return faqs.filter((f) => f.answer.length >= 20 && f.question.length >= 5);
}

/** Collect H2/H3 headings for an on-page table of contents. */
export function extractHeadings(content = "") {
  const faqSection = getFaqSection(content);
  const headings = [];

  for (const line of content.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.*\S)\s*$/);
    if (!match) continue;

    const level = match[1].length;
    const text = toPlainText(match[2]);
    if (!text) continue;

    // Both of these are stripped from the body and re-rendered elsewhere on
    // the page, so listing them here would produce dead anchors. The FAQ is
    // re-added by <ArticleToc>; Key Takeaways sits above the contents already.
    if (FAQ_HEADING.test(line)) continue;
    if (/^##\s+Key Takeaways\s*$/i.test(line)) continue;

    // Skip H3s that are really FAQ questions — they belong to the FAQ block.
    if (level === 3 && faqSection.includes(match[2])) continue;

    headings.push({ level, text, id: slugifyHeading(text) });
  }

  return headings;
}

/** Word count of the prose body, excluding frontmatter and markdown syntax. */
export function countWords(content = "") {
  return toPlainText(content.replace(/^#{1,6}\s+/gm, "")).split(/\s+/).filter(Boolean)
    .length;
}

/** Honest read time at 220 wpm, rounded up, minimum 1 minute. */
export function computeReadTime(content = "") {
  const minutes = Math.max(1, Math.ceil(countWords(content) / 220));
  return `${minutes} min read`;
}

/**
 * The "Key Takeaways" block, when the author wrote one.
 * Answer engines quote this block directly, so it is parsed into a list.
 */
export function extractKeyTakeaways(content = "") {
  const match = content.match(/^##\s+Key Takeaways\s*$/im);
  if (!match) return [];

  const rest = content.slice(match.index + match[0].length);
  const end = rest.search(/^##\s+(?!#)/m);
  const block = end === -1 ? rest : rest.slice(0, end);

  return block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => /^[-*]\s+/.test(l))
    .map((l) => toPlainText(l))
    .filter(Boolean);
}

/**
 * First substantive paragraph, trimmed to a length answer engines will lift
 * cleanly as a direct answer.
 */
export function extractLede(content = "", maxLength = 320) {
  const paragraphs = content
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(
      (p) =>
        p &&
        !p.startsWith("#") &&
        !p.startsWith(">") &&
        !p.startsWith("-") &&
        !p.startsWith("*") &&
        !/^(-{3,}|\*{3,})$/.test(p)
    );

  const first = toPlainText(paragraphs[0] || "");
  if (first.length <= maxLength) return first;

  const clipped = first.slice(0, maxLength);
  const lastStop = clipped.lastIndexOf(". ");
  return lastStop > 120 ? clipped.slice(0, lastStop + 1) : `${clipped.trim()}…`;
}

/** Cut one H2 section (heading and body) out of the article. */
function removeSection(content, headingPattern) {
  const match = content.match(headingPattern);
  if (!match) return content;

  const before = content.slice(0, match.index);
  const rest = content.slice(match.index + match[0].length);
  const nextH2 = rest.search(/^##\s+(?!#)/m);

  const after = nextH2 === -1 ? "" : rest.slice(nextH2);
  return `${before.replace(/\n*(-{3,}|\*{3,})\s*$/, "\n")}\n\n${after}`.trim();
}

/**
 * Remove the FAQ block from the body so it can be re-rendered by <ArticleFaq>
 * as expandable, schema-backed markup instead of plain prose.
 */
export function stripFaqSection(content = "") {
  return removeSection(content, FAQ_HEADING);
}

/**
 * Remove the Key Takeaways block, which the page renders as a highlighted
 * aside above the article rather than inline.
 */
export function stripKeyTakeaways(content = "") {
  return removeSection(content, /^##\s+Key Takeaways\s*$/im);
}
