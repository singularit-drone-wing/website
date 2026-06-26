// ============================================================
// HeroShutterText — Cinematic shutter-slice text reveal
// Adapted for SingularIT's black & blue aesthetic.
// Each character enters with a 3-layer shutter sweep (top,
// middle, bottom slices) before the main letter settles.
//
// Original component from shadcn registry, restyled for
// dark background + blue accent colors. Replay button removed
// per integration requirements.
// ============================================================

"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroShutterTextProps {
  /** The text to display with the shutter effect */
  text?: string;
  /** Additional classes for the outer container */
  className?: string;
  /** Trigger key — change to replay the animation */
  triggerKey?: number;
}

export default function HeroShutterText({
  text = "SINGULARIT",
  className = "",
  triggerKey,
}: HeroShutterTextProps) {
  // Use triggerKey or an internal counter for AnimatePresence key
  const [internalKey, setInternalKey] = useState(0);
  const animKey = triggerKey ?? internalKey;

  // Trigger animation on mount
  useEffect(() => {
    setInternalKey((k) => k + 1);
  }, []);

  const characters = text.split("");

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full",
        className
      )}
    >
      {/* Main Text Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={animKey}
            className="flex flex-wrap justify-center items-center w-full"
          >
            {characters.map((char, i) => (
              <div
                key={i}
                className="relative px-[0.1vw] overflow-hidden"
              >
                {/* Main Character — fades in with blur after shutter sweep */}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.04 + 0.3, duration: 0.9 }}
                  className="text-[clamp(2.5rem,12vw,9rem)] leading-none font-black text-white tracking-tighter select-none"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* Top Slice Layer — sweeps left-to-right in blue */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 text-[clamp(2.5rem,12vw,9rem)] leading-none font-black text-[#3B82F6] z-10 pointer-events-none"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>

                {/* Middle Slice Layer — sweeps right-to-left in white */}
                <motion.span
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "-100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04 + 0.1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 text-[clamp(2.5rem,12vw,9rem)] leading-none font-black text-white/80 z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                  }}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>

                {/* Bottom Slice Layer — sweeps left-to-right in blue */}
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.04 + 0.2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 text-[clamp(2.5rem,12vw,9rem)] leading-none font-black text-[#2563EB] z-10 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                  }}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Corner Accents — engineering aesthetic detail */}
      <div className="absolute top-4 left-4 border-l border-t border-white/[0.06] w-8 h-8 md:w-12 md:h-12" />
      <div className="absolute bottom-4 right-4 border-r border-b border-white/[0.06] w-8 h-8 md:w-12 md:h-12" />
    </div>
  );
}
