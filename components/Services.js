"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Breakup Recovery Coaching",
    description:
      "Structured breakup recovery help for individuals who want emotional stability, confidence, and a healthy reconnection plan.",
    href: "/breakup-recovery",
    color: "#e85d75",
    colorLight: "rgba(232,93,117,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 21s-6.5-4.8-8.7-8.4C1.3 9.2 2.5 5 6.3 4.3c2.1-.4 4 .6 5.7 2.4 1.7-1.8 3.6-2.8 5.7-2.4 3.8.7 5 4.9 3 8.3C18.5 16.2 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Communication Coaching",
    description:
      "A practical communication coaching model for couples to stop fights, listen better, and rebuild emotional safety.",
    href: "/communication-coaching",
    color: "#2a9d8f",
    colorLight: "rgba(42,157,143,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 12.5v-6Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: "Relationship Reset Program",
    description:
      "A focused relationship consultant framework for couples who want to repair trust and create a new partnership rhythm.",
    href: "/relationship-reset",
    color: "#f4a261",
    colorLight: "rgba(244,162,97,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path
          d="M12 3.8 4.7 7.3v5.2c0 4.2 2.8 7.8 7.3 8.9 4.5-1.1 7.3-4.7 7.3-8.9V7.3L12 3.8Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="m9.2 12 1.8 1.9 3.6-3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad divider-line">
      <div className="container-premium">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2A9D8F]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#0F3D3E] sm:text-5xl">
            Premium consulting programs for modern couples.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="glass-card group relative overflow-hidden"
              style={{ padding: "1.75rem" }}
              whileHover={{ y: -6, boxShadow: "0 28px 60px rgba(11,46,47,0.18)" }}
            >
              {/* Colored top border */}
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${service.color}, ${service.color}88)`,
                  borderRadius: "20px 20px 0 0",
                }}
              />

              {/* Icon */}
              <div
                className="inline-flex rounded-2xl p-3.5"
                style={{
                  background: `linear-gradient(135deg, ${service.colorLight}, transparent)`,
                  border: `1.5px solid ${service.color}25`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>

              <h3
                className="mt-5 text-xl font-semibold text-[#0F3D3E] transition-colors duration-200 group-hover:text-[#2A9D8F]"
                style={{ lineHeight: 1.25 }}
              >
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[#0E1E1E]/75 leading-relaxed">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F3D3E] transition-all duration-200 hover:text-[#F4A261] hover:gap-2.5"
              >
                View Program Details
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
