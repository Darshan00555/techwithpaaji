export const SITE_URL = "https://techwithpaaji.in";
export const SITE_NAME = "Paaji Connect";
export const OG_IMAGE = "/images/og-cover.png";

export function getCanonical(path = "/") {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getAbsoluteUrl(path = "/") {
  return `${SITE_URL}${getCanonical(path)}`;
}

/**
 * Meta description capped for SERP display.
 *
 * Descriptions are authored long enough to work as the on-page lede, so the
 * meta tag takes whole sentences up to the limit rather than cutting mid-word.
 */
export function toMetaDescription(text = "", limit = 160) {
  const clean = text.trim();
  if (clean.length <= limit) return clean;

  const sentences = clean.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [];
  let out = "";
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > limit) break;
    out += sentence;
  }

  out = out.trim();
  if (out.length >= 80) return out;

  // A single long opening sentence — fall back to a clean word boundary.
  const words = clean.slice(0, limit - 1).split(" ");
  words.pop();
  return `${words.join(" ").replace(/[\s,;:—-]+$/, "")}…`;
}

/**
 * Smart SERP title shortener.
 *
 * Unlike a blind 60-character cut, this function understands how article titles
 * are structured and picks the most meaningful portion:
 *
 *   "Ghostlighting: The Toxic Relationship Hybrid You Need to Spot in 2026"
 *     → "Ghostlighting: The Toxic Relationship Hybrid to Spot"
 *
 *   "How to Get Your Ex Back: The Dark Psychology and The Healthy Way (India)"
 *     → "How to Get Your Ex Back: Psychology & The Healthy Way"
 *
 * Strategy (in order):
 *   1. If the title is already ≤ limit, return it.
 *   2. Strip trailing parenthetical like "(India)", "(2026)", "(And What to Do)".
 *   3. If title has a colon, keep the left side if it's ≥ 25 chars, otherwise
 *      keep both sides but trim the right side to fit.
 *   4. Remove common filler suffixes: "in India", "for Indian Couples", "2026",
 *      "The Complete Guide", "A Practical Guide", etc.
 *   5. Last resort: cut at a word boundary and add ellipsis.
 */
export function toSerpTitle(title = "", limit = 60) {
  const clean = title.trim();
  if (clean.length <= limit) return clean;

  // Step 1: Strip trailing parenthetical
  const withoutParen = clean.replace(/\s*\([^)]{0,40}\)\s*$/, "").trim();
  if (withoutParen.length <= limit && withoutParen.length >= 25) return withoutParen;

  // Step 2: Try colon split — keep left side if it's meaningful on its own
  const colonIdx = (withoutParen || clean).indexOf(": ");
  if (colonIdx > 0) {
    const base = withoutParen || clean;
    const left = base.slice(0, colonIdx).trim();
    const right = base.slice(colonIdx + 2).trim();

    // If left side alone is substantial enough (≥40 chars) to work as a
    // standalone title, use it. Shorter lefts should keep the right side too.
    if (left.length >= 40 && left.length <= limit) return left;

    // Try left + trimmed right
    const combined = `${left}: ${right}`;
    if (combined.length <= limit) return combined;

    // Trim the right side to fit — cut filler words from the right
    const rightTrimmed = trimFillerSuffix(right);
    const combinedTrimmed = `${left}: ${rightTrimmed}`;
    if (combinedTrimmed.length <= limit) return combinedTrimmed;

    // Cut right side at word boundary
    const spaceForRight = limit - left.length - 2; // 2 for ": "
    if (spaceForRight >= 15) {
      const rightWords = right.slice(0, spaceForRight).split(" ");
      rightWords.pop();
      const shortened = rightWords.join(" ").replace(/[\s,;:—&-]+$/, "");
      if (shortened.length >= 10) return `${left}: ${shortened}`;
    }

    // Left alone if decent length
    if (left.length >= 20) return left;
  }

  // Step 3: Remove common filler suffixes
  const trimmed = trimFillerSuffix(withoutParen || clean);
  if (trimmed.length <= limit && trimmed.length >= 25) return trimmed;

  // Step 4: Last resort — word-boundary truncation
  const words = (withoutParen || clean).slice(0, limit - 1).split(" ");
  words.pop();
  return words.join(" ").replace(/[\s,;:—&-]+$/, "");
}

/** Remove common trailing filler from a title segment. */
function trimFillerSuffix(text) {
  return text
    .replace(/\s*[-–—|]\s*(The\s+)?Complete\s+Guide\s*$/i, "")
    .replace(/\s*[-–—|]\s*(A\s+)?Practical\s+Guide\s*$/i, "")
    .replace(/\s*[-–—|]\s*(A\s+)?Realistic.*Guide\s*$/i, "")
    .replace(/\s*[-–—|]\s*(A\s+)?Survival\s+Guide\s*$/i, "")
    .replace(/\s*[-–—|]\s*(A\s+)?Recovery\s+Guide\s*$/i, "")
    .replace(/\s*:\s*(A\s+)?(Complete|Practical|Realistic|Ultimate)\s+(Guide|Playbook)\s*$/i, "")
    .replace(/\s+for\s+(Indian\s+)?(Couples|Wives|Men|Women|Singles)\s*$/i, "")
    .replace(/\s+in\s+India\s*$/i, "")
    .replace(/\s+India\s*$/i, "")
    .replace(/\s+India\s+2026\s*$/i, "")
    .replace(/\s+2026\s*$/i, "")
    .replace(/\s+in\s+2026\s*$/i, "")
    .replace(/\s+India:\s+/i, ": ")
    .trim();
}
