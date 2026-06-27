// ============================================================
// About — Who is SINGULARIT?
// Cyberpunk layout with chamfered cards and glowing borders.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-widest text-white leading-[1.05] uppercase">
            {siteConfig.about.headline}
          </h2>
          <div className="mt-6 h-1 w-24 bg-[var(--sit-blue)] cyber-border-glow" />
        </motion.div>

        {/* Intro + Foundation */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-sm font-label text-[var(--sit-blue)] tracking-[0.2em] mb-4 uppercase">
              // SYS.INFO: Introduction
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[var(--sit-text-muted)] font-mono">
              {siteConfig.about.intro}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-sm font-label text-[var(--sit-blue)] tracking-[0.2em] mb-4 uppercase">
              // SYS.INFO: Foundation
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[var(--sit-text-muted)] font-mono">
              {siteConfig.about.foundation}
            </p>
          </motion.div>
        </div>

        {/* Focus paragraph — full width */}
        <motion.div
          className="mt-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p className="text-sm font-label text-[var(--sit-blue)] tracking-[0.2em] mb-4 uppercase">
            // SYS.INFO: Current_Focus
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[var(--sit-text-muted)] font-mono border-l-2 border-[var(--sit-border)] pl-6">
            {siteConfig.about.focus}
          </p>
        </motion.div>

        {/* What makes us different? */}
        <motion.div
          className="mt-16 md:mt-20 glass-card p-8 md:p-12 border-l-4 border-l-[var(--sit-blue)] cyber-chamfer hover:cyber-border-glow transition-all duration-500 relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Decorative background grid in card */}
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-black text-white tracking-widest uppercase">
              {siteConfig.about.differentiator.question}
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90 font-mono">
              <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
              {siteConfig.about.differentiator.answer}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

