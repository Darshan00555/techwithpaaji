/**
 * FAQ block rendered from parsed Q&A pairs.
 *
 * Uses native <details>/<summary> so it is expandable with zero JavaScript and
 * the answer text is present in the served HTML — which is what both Google's
 * FAQ parsing and AI answer engines actually read.
 */
export default function ArticleFaq({ faqs = [], topic = "" }) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-12">
      <h2
        id="faq-heading"
        className="mt-10 mb-4 border-b border-[#0F3D3E]/10 pb-2 text-[1.25rem] font-semibold text-[#0F3D3E] sm:text-3xl"
      >
        Frequently asked questions{topic ? ` about ${topic}` : ""}
      </h2>

      <div className="space-y-3">
        {faqs.map(({ question, answer }) => (
          <details
            key={question}
            className="group rounded-2xl border border-[#0F3D3E]/12 bg-white/72 px-5 py-4 transition-colors open:border-[#2A9D8F]/40"
          >
            <summary className="cursor-pointer list-none text-[0.95rem] font-semibold text-[#0F3D3E] marker:content-none sm:text-base">
              <span className="flex items-start justify-between gap-4">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#2A9D8F] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-[0.9375rem] leading-[1.7] text-[#0E1E1E]/84 sm:text-base">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
