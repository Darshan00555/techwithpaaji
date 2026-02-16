"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-pad divider-line">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl bg-[#0B2E2F] px-6 py-12 text-white sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_circle_at_12%_18%,rgba(244,162,97,0.28),transparent_62%),radial-gradient(420px_circle_at_90%_82%,rgba(80,154,148,0.22),transparent_65%)]" />
          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4A261]">
                Private Strategy Call
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
                Ready to transform your relationship dynamic?
              </h2>
              <p className="mt-4 text-sm text-white/82 sm:text-base">
                Start with a confidential consultation and leave with a clear
                strategy for communication, trust, and connection.
              </p>
            </div>
            <Link
              href="/contact"
              className="premium-button bg-[#F4A261] text-[#0F3D3E] shadow-[0_12px_24px_rgba(244,162,97,0.3)] hover:bg-[#f7b880]"
            >
              Book Your First Session
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
