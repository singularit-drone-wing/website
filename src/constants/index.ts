// ============================================================
// SingularIT — Design Tokens & Animation Constants
// Centralized constants for consistent design and animation.
// ============================================================

import type { SectionMeta } from "@/types";

/** Section IDs used for scroll navigation */
export const SECTIONS: SectionMeta[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "vision", label: "Vision" },
  { id: "competitions", label: "Competitions" },
  { id: "footer", label: "Contact" },
];

/** Navigation items displayed in the navbar */
export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Competitions", href: "#competitions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "#footer" },
];

/** Framer Motion animation presets */
export const ANIMATION = {
  /** Default entrance: fade up from below */
  fadeUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  /** Fade in without vertical movement */
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  /** Stagger children animations */
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  /** Individual stagger child */
  staggerItem: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
} as const;

/** Scroll thresholds */
export const SCROLL = {
  /** Navbar becomes opaque after this many pixels */
  navbarThreshold: 50,
  /** InView trigger margin */
  viewportMargin: "-100px",
} as const;
