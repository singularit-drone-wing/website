// ============================================================
// Navbar — Sticky navigation with glass-morphism
// Transparent on top, blurred on scroll. Active section tracking.
// Mobile-responsive hamburger menu with slide-in drawer.
// ============================================================

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SCROLL } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > SCROLL.navbarThreshold);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleNavClick(href: string) {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }

  /** Check if a nav item is active based on the current section */
  function isActive(href: string): boolean {
    if (href.startsWith("#")) {
      return activeSection === href.slice(1);
    }
    return false;
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12 h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative text-lg md:text-xl font-bold tracking-[0.2em] text-white uppercase hover:text-[var(--sit-blue-light)] transition-colors duration-300"
          >
            SINGULARIT
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("/") ? (
                  <Link
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-[var(--sit-text-muted)] hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors duration-300",
                      isActive(item.href)
                        ? "text-white"
                        : "text-[var(--sit-text-muted)] hover:text-white"
                    )}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-3 right-3 h-px bg-[var(--sit-blue)]"
                        layoutId="nav-indicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="absolute right-0 top-0 h-full w-72 bg-[#050505] border-l border-white/[0.06] flex flex-col justify-center px-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-lg font-medium text-[var(--sit-text-muted)] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "block w-full text-left py-3 text-lg font-medium transition-colors",
                          isActive(item.href)
                            ? "text-white"
                            : "text-[var(--sit-text-muted)] hover:text-white"
                        )}
                      >
                        {item.label}
                        {isActive(item.href) && (
                          <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-[var(--sit-blue)]" />
                        )}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
