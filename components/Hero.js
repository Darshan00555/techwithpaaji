"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const badges = [
  "500+ couples supported",
  "92% communication improvement",
  "4.9/5 client rating",
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <section id="home" ref={sectionRef} className="section-pad relative">
      <div className="ambient-light" />
      <div className="container-premium grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <p className="inline-flex rounded-full border border-[#2A9D8F]/20 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3D3E]">
            Luxury Relationship Consulting
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold text-[#0F3D3E] sm:text-5xl lg:text-6xl">
            Build Stronger Relationships With Clarity, Structure {"&"} Emotional
            Intelligence.
          </h1>
          <p className="max-w-2xl text-base text-[#0E1E1E]/80 sm:text-lg">
            Private relationship consulting for couples who want calm
            communication, deeper connection, and measurable growth.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="premium-button bg-[#F4A261] text-[#0F3D3E] shadow-[0_12px_26px_rgba(244,162,97,0.32)] hover:bg-[#f6b178]"
            >
              Book Private Consultation
            </Link>
            <Link
              href="/services"
              className="premium-button border border-[#0F3D3E]/26 bg-white/36 text-[#0F3D3E] hover:border-[#2A9D8F] hover:text-[#2A9D8F]"
            >
              Explore Programs
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/40 bg-white/48 px-3 py-1.5 text-xs font-medium text-[#0E1E1E]/85"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          style={{ y: cardY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card p-7 lg:p-8"
        >
          <Image
            src="/images/logo-mark.svg"
            alt="Paaji Connect logo mark"
            width={42}
            height={42}
            className="rounded-full border border-[#0F3D3E]/10 bg-white p-1"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
            Signature Session
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#0F3D3E]">
            Strategy + emotional depth in every engagement.
          </h2>
          <p className="mt-4 text-sm text-[#0E1E1E]/78">
            Every consulting journey begins with a detailed relationship
            diagnostic and transitions into a guided implementation sprint
            designed for consistent momentum.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Relational pattern mapping",
              "Structured communication playbook",
              "Weekly private implementation review",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#0F3D3E]/10 bg-white/70 px-4 py-3 text-sm font-medium text-[#0E1E1E]/82"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
