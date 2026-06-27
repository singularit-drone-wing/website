// ============================================================
// Competitions — Our competitive goals
// Cyberpunk holographic panel layout showcasing SUAS 2025.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, MapPin, Award, CheckCircle, Plane } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Competitions() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { competitions } = siteConfig;

  return (
    <section
      id="competitions"
      ref={ref}
      className="relative z-10 py-24 md:py-32 lg:py-40 bg-[var(--sit-bg-primary)] border-y border-[var(--sit-border)]"
    >
      {/* Background scanlines specific to this section */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[var(--sit-bg-secondary)]/50 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3">
              <Trophy size={20} className="text-[var(--sit-blue)]" />
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--sit-blue)] font-label">
                // {competitions.headline}
              </p>
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-heading font-black tracking-widest text-white uppercase cyber-glitch">
              {competitions.subtitle}
            </h2>
            <div className="mt-6 mx-auto h-1 w-24 bg-[var(--sit-blue)] cyber-border-glow" />
          </motion.div>

          {/* THARANG intro */}
          <motion.p
            className="mt-12 text-base md:text-lg text-[var(--sit-text-muted)] font-mono leading-relaxed max-w-4xl text-center mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
            {competitions.intro}
          </motion.p>

          {/* SUAS 2025 — Featured Competition Card */}
          <motion.div
            className="mt-12 md:mt-16 glass-card p-1 cyber-chamfer overflow-hidden group hover:cyber-border-glow transition-all duration-500 relative"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.95, y: 40 }
            }
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Animated holographic gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--sit-blue)] via-transparent to-[var(--sit-blue-light)] opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Card Content Area */}
            <div className="relative bg-[var(--sit-bg-secondary)] p-8 md:p-10 lg:p-12 cyber-chamfer z-10">
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--sit-blue)]/50 bg-[var(--sit-blue)]/10 text-[var(--sit-blue)] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Plane size={28} />
                </div>
                <div className="flex-1 min-w-0 mt-1">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-widest uppercase">
                    {competitions.suas.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-[var(--sit-text-muted)] font-mono">
                    <MapPin size={16} className="text-[var(--sit-blue)]" />
                    <span>LOC // {competitions.suas.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievement */}
              <div className="mt-8 flex items-start gap-4 p-5 cyber-chamfer-sm bg-[var(--sit-blue)]/5 border border-[var(--sit-blue)]/20">
                <Award
                  size={24}
                  className="shrink-0 mt-1 text-[var(--sit-blue)] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                />
                <p className="text-base md:text-lg text-white/90 leading-relaxed font-mono">
                  {competitions.suas.achievement}
                </p>
              </div>

              {/* Results */}
              <div className="mt-10 border-t border-[var(--sit-border)] pt-8">
                <p className="text-sm font-label tracking-[0.2em] uppercase text-[var(--sit-blue)] mb-6 flex items-center gap-2">
                  <span className="h-px w-4 bg-[var(--sit-blue)]"></span>
                  MISSION_RESULTS
                </p>
                <ul className="space-y-4">
                  {competitions.suas.results.map((result, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + i * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <CheckCircle
                        size={20}
                        className="shrink-0 mt-0.5 text-[var(--sit-blue)] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]"
                      />
                      <span className="text-base text-[var(--sit-text-muted)] font-mono leading-relaxed">
                        {result}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
