"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-pad divider-line">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#0B2E2F] px-6 py-12 text-white sm:px-10 sm:py-16"
        >
          {/* Animated gradient orbs */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "-60px", left: "-40px",
              width: "340px", height: "340px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(244,162,97,0.3) 0%, transparent 70%)",
              animation: "orb-drift-1 14s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute", bottom: "-80px", right: "-50px",
              width: "380px", height: "380px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(80,154,148,0.25) 0%, transparent 70%)",
              animation: "orb-drift-2 18s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "40%", left: "40%",
              width: "200px", height: "200px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(244,162,97,0.1) 0%, transparent 70%)",
              animation: "floatSlow 10s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10 flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              {/* Trust badge */}
              <span
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: "rgba(244,162,97,0.18)", color: "#F4A261", border: "1px solid rgba(244,162,97,0.28)" }}
              >
                ✦ Free First Consultation
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4A261] mt-2">
                Private Strategy Call
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl leading-tight">
                Ready to transform your relationship dynamic?
              </h2>
              <p className="mt-4 text-sm text-white/78 sm:text-base leading-relaxed">
                Start with a confidential consultation and leave with a clear
                strategy for communication, trust, and connection.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[200px]">
              <Link
                href="/contact"
                className="premium-button bg-[#F4A261] text-[#0F3D3E] shadow-[0_12px_28px_rgba(244,162,97,0.38)] hover:bg-[#f7b880] w-full md:w-auto"
                style={{ padding: "1rem 2rem", fontSize: "0.95rem", justifyContent: "center" }}
              >
                Book Your First Session
              </Link>
              <Link
                href="/services"
                className="premium-button border border-white/25 bg-white/10 text-white hover:bg-white/18 w-full md:w-auto text-sm"
                style={{ justifyContent: "center" }}
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
