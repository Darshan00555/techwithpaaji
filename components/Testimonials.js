"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Paaji Connect brought clarity to our most difficult conversations. We now know how to pause, listen, and reconnect instead of escalating.",
    name: "Aarav and Nisha",
    initials: "AN",
    context: "Married for 8 years",
  },
  {
    quote:
      "The structure was exceptional. Every session ended with a practical action plan, and we felt measurable change within a month.",
    name: "Rohan and Meera",
    initials: "RM",
    context: "Engaged couple",
  },
  {
    quote:
      "Warm, direct, and deeply intelligent consulting. We stopped repeating old patterns and started building trust intentionally.",
    name: "Kabir and Sana",
    initials: "KS",
    context: "Founders and partners",
  },
  {
    quote:
      "This was the first time we felt both emotionally understood and strategically guided. It transformed our relationship rhythm.",
    name: "Ishaan and Riya",
    initials: "IR",
    context: "Dual-career couple",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="section-pad divider-line">
      <div className="container-premium">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            Real outcomes from real couples.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_220px]">
          <div className="glass-card min-h-[320px] p-7 sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-lg leading-relaxed text-[#0E1E1E]/86 sm:text-xl">
                  {current.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0F3D3E] text-sm font-semibold text-white">
                    {current.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0F3D3E]">
                      {current.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#2A9D8F]">
                      {current.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`rounded-xl border px-3 py-3 text-left text-xs font-medium transition-colors duration-200 ${
                  active === index
                    ? "border-[#0F3D3E]/25 bg-[#0F3D3E] text-white"
                    : "border-[#0F3D3E]/12 bg-white/60 text-[#0F3D3E]"
                }`}
                aria-label={`Show testimonial from ${item.name}`}
              >
                {item.initials}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
