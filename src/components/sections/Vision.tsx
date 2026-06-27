// ============================================================
// Vision — SingularIT's vision statement
// Cyberpunk HUD layout with monospace text and sharp lines.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Rocket, Users, Network, Globe } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const visionIcons = [Rocket, Users, Network, Globe];

export default function Vision() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      ref={ref}
      className="relative z-10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl ml-auto text-right">
          {/* Section label */}
          <motion.div
            className="flex items-center justify-end gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--sit-blue)] font-label">
              {siteConfig.vision.headline} //
            </p>
            <Eye size={20} className="text-[var(--sit-blue)]" />
          </motion.div>

          {/* Blue accent line */}
          <motion.div
            className="mt-4 h-1 w-16 bg-[var(--sit-blue)] ml-auto cyber-border-glow"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          />

          {/* Vision statement */}
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
            {siteConfig.vision.statement}
          </motion.h3>

          {/* Future points */}
          <div className="mt-12 flex flex-col gap-6 text-left">
            {siteConfig.vision.pillars.map((point, i) => {
              const Icon = visionIcons[i];
              return (
                <motion.div
                  key={point.title}
                  className="group flex flex-col md:flex-row items-start md:items-center gap-6 glass-card border-r-4 border-r-[var(--sit-blue)]/50 p-6 cyber-chamfer hover:border-r-[var(--sit-blue)] hover:cyber-border-glow transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--sit-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-[var(--sit-border)] bg-[var(--sit-bg-tertiary)] text-[var(--sit-blue)] group-hover:border-[var(--sit-blue)]/50 transition-colors">
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm md:text-base font-label uppercase tracking-widest text-white flex items-center gap-2">
                      <span className="text-[10px] text-[var(--sit-blue)] opacity-70 font-mono">[{String(i + 1).padStart(2, '0')}]</span>
                      {point.title}
                    </h4>
                    <p className="mt-2 text-sm md:text-base font-mono text-[var(--sit-text-muted)] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing empowerment statement */}
          <motion.p
            className="mt-12 md:mt-16 text-lg md:text-xl text-[var(--sit-blue)] leading-relaxed max-w-3xl ml-auto font-mono text-shadow-neon"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            &gt; {siteConfig.vision.closing}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
