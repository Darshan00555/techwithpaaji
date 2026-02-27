"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const badges = [
  { icon: "✓", text: "500+ couples supported" },
  { icon: "✓", text: "92% communication improvement" },
  { icon: "✓", text: "4.9/5 client rating" },
];

const heroCard = [
  "Relational pattern mapping",
  "Structured communication playbook",
  "Weekly private implementation review",
];

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section id="home" ref={sectionRef} className="section-pad relative overflow-hidden" style={{ paddingTop: "3rem" }}>
      {/* Ambient background */}
      <div className="ambient-light" />

      {/* Decorative floating blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "-80px", right: "-60px",
          width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,162,97,0.14) 0%, transparent 70%)",
          animation: "floatSlow 9s ease-in-out infinite",
          zIndex: 0, pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "-100px", left: "-80px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,157,143,0.12) 0%, transparent 70%)",
          animation: "floatSlow 12s ease-in-out infinite reverse",
          zIndex: 0, pointerEvents: "none",
        }}
      />

      <div className="container-premium relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
          className="space-y-6"
        >
          <p
            className="inline-flex rounded-full border border-[#2A9D8F]/25 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#0F3D3E]"
            style={{ backdropFilter: "blur(8px)" }}
          >
            ✦ Luxury Relationship Consulting
          </p>

          <h1 className="text-[2.1rem] font-semibold leading-[1.12] text-[#0F3D3E] sm:text-5xl lg:text-6xl" style={{ maxWidth: "640px" }}>
            Build Stronger Relationships With{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0F3D3E, #2A9D8F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Clarity &amp; Emotional Intelligence.
            </span>
          </h1>

          <p className="text-base text-[#0E1E1E]/78 sm:text-lg" style={{ maxWidth: "520px", lineHeight: 1.7 }}>
            Private relationship consulting for couples who want calm
            communication, deeper connection, and measurable growth.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="premium-button bg-[#F4A261] text-[#0F3D3E] shadow-[0_12px_28px_rgba(244,162,97,0.36)] hover:bg-[#f6b178]"
              style={{ fontSize: "0.95rem", padding: "0.9rem 1.75rem" }}
            >
              Book Private Consultation
            </Link>
            <Link
              href="/services"
              className="premium-button text-[#0F3D3E] hover:text-[#2A9D8F]"
              style={{
                fontSize: "0.95rem",
                background: "#ffffff",
                border: "2px solid rgba(15,61,62,0.35)",
                color: "#0F3D3E",
              }}
            >
              Explore Programs
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge.text}
                className="flex items-center gap-1.5 rounded-full border border-white/50 bg-white/55 px-3.5 py-1.5 text-xs font-semibold text-[#0F3D3E]"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <span className="text-[#2A9D8F] font-bold">{badge.icon}</span>
                {badge.text}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right column — Info card */}
        <motion.aside
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-card p-6 lg:p-8"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.75) 0%, rgba(245,241,232,0.6) 100%)",
          }}
        >
          {/* Logo with pulse */}
          <div className="flex items-center gap-3 mb-5">
            <div style={{ animation: "pulse-ring 2.5s ease-out infinite", borderRadius: "50%", display: "inline-block" }}>
              <Image
                src="/logo.png"
                alt="Paaji Connect logo"
                width={46}
                height={46}
                className="rounded-full object-cover"
                style={{ border: "2px solid rgba(15,61,62,0.12)" }}
              />
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#2A9D8F]">
                Signature Session
              </p>
              <p className="text-xs text-[#0E1E1E]/60 font-medium">Paaji Connect</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#0F3D3E] leading-snug lg:text-3xl">
            Strategy + emotional depth in every engagement.
          </h2>
          <p className="mt-3 text-sm text-[#0E1E1E]/75 leading-relaxed">
            Every consulting journey begins with a detailed relationship
            diagnostic and transitions into a guided implementation sprint
            designed for consistent momentum.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            {heroCard.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#0F3D3E]/10 bg-white/80 px-4 py-3 text-sm font-medium text-[#0E1E1E]/80"
                style={{
                  animation: `fadeSlideUp 0.5s ${0.2 + i * 0.1}s ease both`,
                }}
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-[0.6rem] font-bold"
                  style={{ background: "var(--pc-teal)" }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="premium-button mt-5 w-full text-[#0F3D3E] text-sm font-bold"
            style={{
              background: "#F4A261",
              boxShadow: "0 8px 22px rgba(244,162,97,0.35)",
            }}
          >
            Start Free Consultation →
          </Link>
        </motion.aside>
      </div>

      {/* Scroll down indicator */}
      <div
        className="hidden sm:flex flex-col items-center gap-1 absolute bottom-6 left-1/2"
        aria-hidden="true"
        style={{ animation: "bounce-arrow 2s ease-in-out infinite", zIndex: 1 }}
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#0F3D3E]/40">Scroll</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#0F3D3E" strokeWidth={2} opacity={0.35}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
