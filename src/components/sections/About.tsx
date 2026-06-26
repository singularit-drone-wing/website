// ============================================================
// About — Who is SingularIT?
// Editorial layout with large headline and rich body text.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = siteConfig.about.body.split("\n\n");

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {siteConfig.about.headline}
          </h2>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-[var(--sit-blue)] to-transparent" />
        </motion.div>

        {/* Body */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="text-base md:text-lg leading-relaxed text-[var(--sit-text-muted)]"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          {[
            { value: "30+", label: "Active Members" },
            { value: "15+", label: "Projects Built" },
            { value: "8+", label: "Competitions" },
            { value: "5+", label: "Years Active" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[var(--sit-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
