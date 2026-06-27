// ============================================================
// Navbar — Cyberpunk sticky navigation
// Sharp borders, neon active states, and terminal prompt styles.
// ============================================================

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SCROLL } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const pathname = usePathname();
  const router = useRouter();

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
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.getElementById(href.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  /** Check if a nav item is active based on the current section */
  function isActive(href: string): boolean {
    if (href.startsWith("#") && pathname === "/") {
      return activeSection === href.slice(1);
    }
    return false;
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--sit-bg-primary)]/90 backdrop-blur-md border-b border-[var(--sit-blue)]/30 cyber-border-glow"
            : "bg-transparent border-b border-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12 h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative text-xl md:text-2xl font-heading font-black tracking-widest text-white uppercase hover:text-[var(--sit-blue)] transition-colors duration-300"
          >
            SINGULARIT
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="group relative flex items-center text-sm font-label uppercase tracking-widest text-[var(--sit-text-muted)] hover:text-[var(--sit-blue)] transition-colors duration-300"
                    >
                      <span className="text-[var(--sit-blue)] opacity-0 group-hover:opacity-100 mr-1 transition-opacity cyber-cursor">&gt;</span>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "group relative flex items-center text-sm font-label uppercase tracking-widest transition-colors duration-300",
                        active
                          ? "text-[var(--sit-blue)] text-shadow-neon"
                          : "text-[var(--sit-text-muted)] hover:text-[var(--sit-blue)]"
                      )}
                    >
                      <span
                        className={cn(
                          "text-[var(--sit-blue)] mr-1 transition-opacity",
                          active ? "opacity-100 cyber-cursor" : "opacity-0 group-hover:opacity-100 cyber-cursor"
                        )}
                      >
                        &gt;
                      </span>
                      {item.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 p-2 text-[var(--sit-blue)] hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="absolute inset-0 bg-black/90 backdrop-blur-lg"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              className="absolute right-0 top-0 h-full w-72 bg-[var(--sit-bg-secondary)] border-l-2 border-[var(--sit-blue)]/50 flex flex-col justify-center px-8 cyber-border-glow"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute top-16 left-8 text-[10px] text-[var(--sit-blue)] font-mono tracking-widest opacity-50">
                SYS.NAV.MENU //
              </div>
              <ul className="flex flex-col gap-6 mt-12">
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(item.href);
                  return (
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
                          className="flex items-center text-lg font-label tracking-widest uppercase text-[var(--sit-text-muted)] hover:text-[var(--sit-blue)] transition-colors"
                        >
                          <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={cn(
                            "flex items-center w-full text-left text-lg font-label tracking-widest uppercase transition-colors",
                            active
                              ? "text-[var(--sit-blue)]"
                              : "text-[var(--sit-text-muted)] hover:text-[var(--sit-blue)]"
                          )}
                        >
                          <span
                            className={cn(
                              "mr-2 transition-opacity",
                              active ? "text-[var(--sit-blue)] cyber-cursor" : "text-[var(--sit-blue)] opacity-50"
                            )}
                          >
                            &gt;
                          </span>
                          {item.label}
                        </button>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

