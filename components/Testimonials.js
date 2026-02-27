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
    stars: 5,
  },
  {
    quote:
      "The structure was exceptional. Every session ended with a practical action plan, and we felt measurable change within a month.",
    name: "Rohan and Meera",
    initials: "RM",
    context: "Engaged couple",
    stars: 5,
  },
  {
    quote:
      "Warm, direct, and deeply intelligent consulting. We stopped repeating old patterns and started building trust intentionally.",
    name: "Kabir and Sana",
    initials: "KS",
    context: "Founders and partners",
    stars: 5,
  },
  {
    quote:
      "This was the first time we felt both emotionally understood and strategically guided. It transformed our relationship rhythm.",
    name: "Ishaan and Riya",
    initials: "IR",
    context: "Dual-career couple",
    stars: 5,
  },
];

const INTERVAL = 6500;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const frame = requestAnimationFrame(function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);
      if (elapsed < INTERVAL) {
        requestAnimationFrame(tick);
      }
    });
    const timer = setTimeout(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, INTERVAL);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [active]);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="section-pad divider-line">
      <div className="container-premium">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2A9D8F]">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            Real outcomes from real couples.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_200px]">
          {/* Quote card */}
          <div
            className="glass-card relative overflow-hidden"
            style={{ minHeight: "300px", padding: "2rem 2rem 1.5rem" }}
          >
            {/* Large decorative quote mark */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute", top: "1rem", left: "1.5rem",
                fontSize: "7rem", lineHeight: 1,
                color: "rgba(42,157,143,0.1)",
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.32 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: current.stars }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="#F4A261">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-[#0E1E1E]/85 sm:text-xl" style={{ fontStyle: "italic" }}>
                  {current.quote}
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #0F3D3E, #2A9D8F)" }}
                  >
                    {current.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#0F3D3E]">{current.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]">
                      {current.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-progress bar */}
            <div
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "3px",
                background: "rgba(42,157,143,0.15)",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #2A9D8F, #f4a261)",
                  transition: "width 0.1s linear",
                  borderRadius: "0 2px 2px 0",
                }}
              />
            </div>
          </div>

          {/* Selector buttons */}
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-2.5">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className="rounded-xl border px-3 py-3 text-left transition-all duration-250"
                style={{
                  border: active === index ? "1.5px solid rgba(15,61,62,0.3)" : "1.5px solid rgba(15,61,62,0.12)",
                  background: active === index
                    ? "linear-gradient(135deg, #0F3D3E, #1e5455)"
                    : "rgba(255,255,255,0.65)",
                  color: active === index ? "white" : "#0F3D3E",
                  transform: active === index ? "scale(1.03)" : "scale(1)",
                  boxShadow: active === index ? "0 6px 18px rgba(15,61,62,0.25)" : "none",
                }}
                aria-label={`Show testimonial from ${item.name}`}
                aria-pressed={active === index}
              >
                <p className="text-xs font-bold">{item.initials}</p>
                <p
                  className="mt-1 text-[0.65rem] font-medium leading-tight hidden lg:block"
                  style={{ opacity: active === index ? 0.85 : 0.65 }}
                >
                  {item.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
