"use client";

import { motion } from "framer-motion";

const steps = [
  {
    label: "Step 1",
    title: "Diagnose",
    description:
      "We map your relationship dynamic and identify the precise triggers creating repeated conflict or emotional withdrawal.",
  },
  {
    label: "Step 2",
    title: "Design Strategy",
    description:
      "You receive a tailored structure with scripts, rituals, and boundaries engineered for sustainable progress.",
  },
  {
    label: "Step 3",
    title: "Weekly Implementation",
    description:
      "We review outcomes weekly, adapt your strategy in real time, and ensure measurable relationship improvements.",
  },
];

export default function Process() {
  return (
    <section id="approach" className="section-pad divider-line">
      <div className="container-premium">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
            The Framework
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            A modern 3-step relationship architecture.
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-[#0F3D3E]/15 md:block lg:left-[16.7%] lg:w-[66.6%] lg:h-px lg:top-8 lg:translate-y-0" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="glass-card relative p-7"
              >
                <div className="absolute left-6 top-6 h-2.5 w-2.5 rounded-full bg-[#F4A261] lg:left-1/2 lg:-translate-x-1/2 lg:-top-8" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                  {step.label}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0F3D3E]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm text-[#0E1E1E]/80">
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
