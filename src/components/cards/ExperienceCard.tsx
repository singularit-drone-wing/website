// ============================================================
// ExperienceCard — Single experience/achievement entry
// Timeline-style card with year badge, title, and description.
// ============================================================

"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="group relative flex gap-6 md:gap-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--sit-border)] bg-[var(--sit-bg-tertiary)] text-xs font-mono text-[var(--sit-blue)] group-hover:border-[var(--sit-blue)]/30 group-hover:bg-[var(--sit-blue)]/5 transition-all duration-300">
          {experience.year.slice(-2)}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-[var(--sit-border)] to-transparent" />
      </div>

      {/* Content */}
      <div className="pb-12">
        <p className="text-xs font-mono tracking-wider text-[var(--sit-blue)] uppercase">
          {experience.year}
        </p>
        <h3 className="mt-2 text-lg md:text-xl font-semibold text-white group-hover:text-[var(--sit-blue-light)] transition-colors duration-300">
          {experience.title}
        </h3>
        <p className="mt-2 text-sm md:text-base text-[var(--sit-text-muted)] leading-relaxed max-w-lg">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}
