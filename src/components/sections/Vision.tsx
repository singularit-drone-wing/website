// ============================================================
// Vision — SingularIT's forward-looking vision
// Complementary to Mission — uses right-aligned layout.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

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
        <div className="max-w-4xl ml-auto text-right">
          {/* Section label */}
          <motion.p
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--sit-blue)] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {siteConfig.vision.headline}
          </motion.p>

          {/* Blue accent line — right aligned */}
          <motion.div
            className="mt-4 ml-auto h-px w-12 bg-[var(--sit-blue)]"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          />

          {/* Vision statement */}
          <motion.blockquote
            className="mt-8 md:mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-white/90 tracking-tight">
              &ldquo;{siteConfig.vision.body}&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
