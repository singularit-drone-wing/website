// ============================================================
// useScrollProgress — Returns scroll progress as a 0–1 value
// Used for scroll-driven animations like the hero title scale.
// ============================================================

"use client";

import { useState, useEffect } from "react";

/**
 * Returns the normalized scroll progress of the page (0 at top, 1 at bottom).
 * Optionally scoped to a max scroll distance for section-specific effects.
 */
export function useScrollProgress(maxDistance?: number): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const max =
        maxDistance ??
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(scrollY / max, 1));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxDistance]);

  return progress;
}
