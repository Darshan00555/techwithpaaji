"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does relationship consulting usually take?",
    answer:
      "Most couples notice meaningful improvements in 4 to 6 weeks. Lasting transformation typically develops over 8 to 12 weeks with consistent implementation.",
  },
  {
    question: "Is Paaji Connect only for married couples?",
    answer:
      "No. We work with dating, engaged, and married couples who want deeper emotional safety and stronger communication patterns.",
  },
  {
    question: "Do you provide online consulting sessions?",
    answer:
      "Yes. We provide secure online consulting globally and private in-person formats based on availability.",
  },
  {
    question: "What makes this different from generic couple advice?",
    answer:
      "Paaji Connect combines emotional intelligence with strategic structure, so you do not just discuss issues. You execute a measurable weekly roadmap.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-pad divider-line">
      <div className="container-premium">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            Questions couples ask before they start.
          </h2>
        </div>

        <div className="mt-12 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#0F3D3E]/12 bg-white/68"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-[#0F3D3E]">
                    {faq.question}
                  </span>
                  <span className="text-lg text-[#2A9D8F]">{isActive ? "-" : "+"}</span>
                </button>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm text-[#0E1E1E]/80">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
