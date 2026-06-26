// ============================================================
// useActiveSection — Tracks which section is currently in view
// Uses IntersectionObserver for performant scroll tracking.
// ============================================================

"use client";

import { useState, useEffect } from "react";
import { SECTIONS } from "@/constants";

/**
 * Returns the ID of the section currently most visible in the viewport.
 * Used by the Navbar to highlight the active navigation item.
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          // Trigger when a section occupies at least 30% of the viewport
          threshold: 0.3,
          rootMargin: "-10% 0px -10% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return activeSection;
}
