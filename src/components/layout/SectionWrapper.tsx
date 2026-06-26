// ============================================================
// SectionWrapper — Reusable section container
// Provides consistent spacing, max-width, titles, and
// Framer Motion entrance animations for all content sections.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  /** HTML id for scroll-to targeting */
  id: string;
  /** Section headline */
  title?: string;
  /** Supporting description below the title */
  subtitle?: string;
  /** Section content */
  children: React.ReactNode;
  /** Additional classes for the outer section */
  className?: string;
  /** Whether to show the title block */
  showHeader?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  showHeader = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative z-10 py-24 md:py-32 lg:py-40",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {showHeader && title && (
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base md:text-lg text-[var(--sit-text-muted)] leading-relaxed">
                {subtitle}
              </p>
            )}
            {/* Blue accent line */}
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--sit-blue)] to-transparent" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.15,
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
