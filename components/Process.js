"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "Step 1",
    title: "Diagnose",
    description:
      "We map your relationship dynamic and identify the precise triggers creating repeated conflict or emotional withdrawal.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Step 2",
    title: "Design Strategy",
    description:
      "You receive a tailored structure with scripts, rituals, and boundaries engineered for sustainable progress.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Step 3",
    title: "Weekly Implementation",
    description:
      "We review outcomes weekly, adapt your strategy in real time, and ensure measurable relationship improvements.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="approach" className="section-pad divider-line">
      <div className="container-premium">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2A9D8F]">
            The Framework
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            A modern 3-step relationship architecture.
          </h2>
        </motion.div>

        <div className="relative mt-12">
          {/* Horizontal connector — desktop only */}
          <div
            className="absolute hidden md:block"
            style={{
              top: "2.4rem",
              left: "calc(16.7% + 2rem)",
              right: "calc(16.7% + 2rem)",
              height: "2px",
              background: "linear-gradient(90deg, rgba(42,157,143,0.25), rgba(244,162,97,0.4), rgba(42,157,143,0.25))",
            }}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="glass-card relative p-7"
                style={{ textAlign: "left" }}
              >
                {/* Numbered badge — sits on connector line */}
                <div
                  className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #0F3D3E, #2A9D8F)",
                    boxShadow: "0 6px 18px rgba(15,61,62,0.3)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span>{step.num}</span>
                </div>

                <div className="mb-3 flex items-center gap-2 text-[#2A9D8F]">
                  {step.icon}
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
                    {step.label}
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-[#0F3D3E]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#0E1E1E]/75 leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
