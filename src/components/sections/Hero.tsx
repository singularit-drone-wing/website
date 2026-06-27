"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Lock scroll on mount while shutter animation is loading
    document.body.style.overflow = "hidden";

    // Safety fallback to ensure scrolling is never permanently locked
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 1600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Letters scale toward the viewer - completed by the end of the sticky phase
  const scale = useTransform(scrollYProgress, [0, 0.28], reduce ? [1, 1] : [1, 14]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.28],
    reduce ? [1, 1, 1] : [1, 1, 0],
  );
  const blur = useTransform(scrollYProgress, [0.15, 0.28], [0, 12]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[140vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Soft atmospheric vignette local to hero */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 60%, rgba(0,240,255,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Telemetry Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute top-[22vh] left-1/2 -translate-x-1/2 text-center w-full max-w-2xl px-6"
          style={{ opacity: mounted ? indicatorOpacity : 1 }}
        >
          <div className="flex items-center justify-center gap-4 text-[10px] sm:text-xs font-label uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[var(--sit-blue)] opacity-80">
            <span className="hidden sm:block h-px flex-1 max-w-[4rem] bg-gradient-to-r from-transparent to-[var(--sit-blue)]" />
            <span className="flex items-center gap-2 whitespace-nowrap"><span className="animate-pulse"></span> STUDENT INNOVATION CLUB</span>
            <span className="hidden sm:block h-px flex-1 max-w-[4rem] bg-gradient-to-l from-transparent to-[var(--sit-blue)]" />
          </div>
        </motion.div>

        {/* The title - Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)", y: 12 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            scale: mounted ? scale : 1,
            opacity: mounted ? opacity : 1,
            filter: mounted ? filter : "blur(0px)",
          }}
          className="font-heading select-none text-center text-[12vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] xl:text-[9vw] font-black leading-none text-white will-change-transform cyber-glitch drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] uppercase whitespace-nowrap flex justify-center items-center gap-[0.1em]"
        >
          {"SINGULARIT".split("").map((char, i) => (
            <div
              key={i}
              className="relative px-[0.1vw] overflow-hidden group inline-block"
            >
              {/* Main Character */}
              <motion.span
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
                onAnimationComplete={
                  i === "SINGULARIT".length - 1
                    ? () => {
                        document.body.style.overflow = "";
                      }
                    : undefined
                }
                className="inline-block"
              >
                {char}
              </motion.span>

              {/* Top Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.04,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-[var(--sit-blue)] z-10 pointer-events-none inline-block"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
              >
                {char}
              </motion.span>

              {/* Middle Slice Layer */}
              <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "-100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.04 + 0.1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-white/70 z-10 pointer-events-none inline-block"
                style={{
                  clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                }}
              >
                {char}
              </motion.span>

              {/* Bottom Slice Layer */}
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.04 + 0.2,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 text-[var(--sit-blue)] z-10 pointer-events-none inline-block"
                style={{
                  clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                }}
              >
                {char}
              </motion.span>
            </div>
          ))}
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{ opacity: mounted ? indicatorOpacity : 1 }}
          className="absolute bottom-[22vh] left-1/2 w-full max-w-lg -translate-x-1/2 px-6 text-center text-xs md:text-sm text-[var(--sit-text-muted)] font-mono leading-relaxed"
        >
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: mounted ? indicatorOpacity : 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--sit-blue)]"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">Scroll_Down</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
        
        {/* Decorative corner brackets */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[var(--sit-blue)] opacity-30" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[var(--sit-blue)] opacity-30" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[var(--sit-blue)] opacity-30" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[var(--sit-blue)] opacity-30" />
      </div>
    </section>
  );
}