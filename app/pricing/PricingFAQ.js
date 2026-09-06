"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What happens after my first month?",
    answer: "Your membership continues at the regular price of the selected plan unless otherwise stated in the applicable terms."
  },
  {
    question: "Can I use my calls anytime during the month?",
    answer: "Calls should be scheduled according to available consultation slots and the applicable membership terms."
  },
  {
    question: "What if I finish all my calls before the month ends?",
    answer: "If all included calls and on-site meetings are used before the membership period ends, you may renew the same plan at its regular monthly price."
  },
  {
    question: "Are on-site meeting travel expenses included?",
    answer: "No. Travel, transportation, accommodation, parking, and other location-related expenses are handled by the client."
  },
  {
    question: "Do you guarantee relationship success?",
    answer: "No. Paaji Connect does not guarantee reconciliation, marriage, relationship success, or any specific relationship outcome."
  },
  {
    question: "Can I upgrade my plan?",
    answer: "Yes, you can choose a new plan according to the applicable terms."
  },
  {
    question: "Is WhatsApp support unlimited?",
    answer: "Only the Diamond and Premium Membership plans include unlimited WhatsApp support. Silver and Gold include WhatsApp support according to the applicable plan terms."
  }
];

export default function PricingFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-pad divider-line">
      <div className="container-premium">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
            Common Questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-3">
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
                  aria-expanded={isActive}
                >
                  <span className="text-base font-semibold text-[#0F3D3E]">
                    {faq.question}
                  </span>
                  <span className="text-lg text-[#2A9D8F]" aria-hidden="true">
                    {isActive ? "-" : "+"}
                  </span>
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
