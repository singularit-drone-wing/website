"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Letters scale toward the viewer
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 14]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.95],
    reduce ? [1, 1, 1] : [1, 1, 0],
  );
  const blur = useTransform(scrollYProgress, [0.6, 0.95], [0, 12]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Soft atmospheric vignette local to hero */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 60%, rgba(59,130,246,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute top-[22vh] left-1/2 -translate-x-1/2 text-center"
          style={{ opacity: mounted ? indicatorOpacity : 1 }}
        >
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />
            CUSAT · Engineering Team
            <span className="h-px w-8 bg-primary" />
          </p>
        </motion.div>

        {/* The title */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            scale: mounted ? scale : 1,
            opacity: mounted ? opacity : 1,
            filter: mounted ? filter : "blur(0px)",
          }}
          className="font-display select-none text-center text-[18vw] font-bold leading-none tracking-[-0.04em] text-foreground will-change-transform sm:text-[15vw] md:text-[14vw]"
        >
          SINGULARIT
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{ opacity: mounted ? indicatorOpacity : 1 }}
          className="absolute bottom-[22vh] left-1/2 max-w-md -translate-x-1/2 px-6 text-center text-sm text-muted-foreground sm:text-base"
        >
          Robotics, autonomous systems, and intelligent machines —
          engineered by students, built to last.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: mounted ? indicatorOpacity : 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="eyebrow text-[10px]">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}