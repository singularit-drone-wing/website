// ============================================================
// Mission — SINGULARIT's mission statement
// Cyberpunk layout with terminal prompts and chamfered focus cards.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Cpu, Wrench, Lightbulb } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const focusIcons = [Cpu, Wrench, Lightbulb];

export default function Mission() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="mission"
      ref={ref}
      className="relative z-10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <Target size={20} className="text-[var(--sit-blue)]" />
              <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--sit-blue)] font-label">
                // {siteConfig.mission.headline}
              </p>
            </div>
          </motion.div>

          {/* Blue accent line */}
          <motion.div
            className="mt-4 h-1 w-16 bg-[var(--sit-blue)] cyber-border-glow"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Mission statement */}
          <motion.h3
            className="mt-8 md:mt-12 text-2xl md:text-3xl lg:text-4xl font-heading font-bold uppercase tracking-widest text-white leading-snug"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {siteConfig.mission.statement}
          </motion.h3>

          {/* Bridge text */}
          <motion.p
            className="mt-10 text-base md:text-lg text-[var(--sit-text-muted)] font-mono leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
            {siteConfig.mission.bridge}
          </motion.p>

          {/* Focus areas */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.mission.focusAreas.map((area, i) => {
              const Icon = focusIcons[i];
              return (
                <motion.div
                  key={area.title}
                  className="glass-card cyber-chamfer p-6 group hover:border-[var(--sit-blue)] hover:cyber-border-glow transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4 }}
                >
                  {/* Decorative background grid in card */}
                  <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sit-blue)]/10 text-[var(--sit-blue)] mb-4 border border-[var(--sit-blue)]/20 group-hover:border-[var(--sit-blue)]/50 transition-colors">
                      <Icon size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" />
                    </div>
                    <h4 className="text-sm font-label uppercase tracking-widest text-white">
                      {area.title}
                    </h4>
                    <p className="mt-2 text-xs md:text-sm font-mono text-[var(--sit-text-muted)] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Goal */}
          <motion.div
            className="mt-12 p-6 border-l-2 border-[var(--sit-blue)] bg-[var(--sit-blue)]/5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          >
            <p className="text-xs font-label text-[var(--sit-blue)] tracking-[0.2em] mb-2 uppercase">
              // IMMEDIATE_GOAL
            </p>
            <p className="text-base md:text-lg text-[var(--sit-text-muted)] font-mono leading-relaxed max-w-3xl">
              {siteConfig.mission.goal}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

