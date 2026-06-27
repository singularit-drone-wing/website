// ============================================================
// Gallery Page — Dedicated route for image gallery
// Cyberpunk grid with holographic UI tags and lightbox modal.
// ============================================================

"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

// Real gallery data using the uploaded images in /public/images/
const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/group-photo.jpg",
    alt: "Team SINGULARIT Group Photo at CUSAT",
    category: "Team",
  },
  {
    id: "g2",
    src: "/images/leads.JPG",
    alt: "Team SINGULARIT Leads for SUAS 2025 and THARANG 2K25",
    category: "Team",
  },
  {
    id: "g3",
    src: "/images/pre_comp.jpeg",
    alt: "Team preparation and hardware alignment",
    category: "Pre-Competition",
  },
  {
    id: "g4",
    src: "/images/54620251084_2647218d9d_c.jpg",
    alt: "Team SINGULARIT group photo at St. Mary's County Regional Airport (SUAS 2025)",
    category: "SUAS 2025",
  },
  {
    id: "g5",
    src: "/images/working.jpg",
    alt: "Last minute hardware and software checks before the competition",
    category: "SUAS 2025",
  },
  {
    id: "g6",
    src: "/images/54620272224_8591cd6871_c.jpg",
    alt: "Our team members after the flight",
    category: "SUAS 2025",
  },
  {
    id: "g7",
    src: "/images/54620350378_953c0ea0ab_k.jpg",
    alt: "Maruthy, our drone at SUAS 2025",
    category: "SUAS 2025",
  },
  {
    id: "g8",
    src: "/images/54620405443_b26c377e7d_k.jpg",
    alt: "Indian Teams at SUAS 2025",
    category: "SUAS 2025",
  },
  {
    id: "g9",
    src: "/images/12.JPG",
    alt: "Team SINGULARIT at SUAS 2025, Maryland, USA",
    category: "SUAS 2025",
  },

];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  // Keyboard navigation event listeners
  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, goNext, goPrev]);

  return (
    <main className={`relative min-h-screen bg-[var(--sit-bg-primary)] cyber-scanlines ${selectedIndex !== null ? "z-[100]" : "z-10"}`}>
      {/* Base Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--sit-blue)] hover:text-white transition-colors duration-300 mb-8 font-label uppercase tracking-widest border border-[var(--sit-blue)]/50 bg-[var(--sit-blue)]/10 px-4 py-2 cyber-chamfer-sm"
        >
          <ArrowLeft size={16} />
          Return
        </Link>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-widest text-white uppercase cyber-glitch">
          Visual_Logs
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--sit-text-muted)] font-mono leading-relaxed">
          <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
          Archived photos from our journey so far.
        </p>
        <div className="mt-8 h-1 w-24 bg-[var(--sit-blue)] cyber-border-glow" />
      </div>

      {/* Image Grid */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 pb-24">
        {galleryImages.length === 0 ? (
          <div className="text-center py-20 font-mono text-[var(--sit-blue)]">
            <p>ERR: NO_DATA_FOUND</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                className="group relative aspect-[4/3] overflow-hidden bg-[var(--sit-bg-tertiary)] border border-[var(--sit-border)] hover:border-[var(--sit-blue)] cursor-pointer cyber-chamfer hover:cyber-border-glow transition-all duration-300"
                onClick={() => openLightbox(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i < 4}
                />
                
                {/* Tech scanline overlay inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--sit-bg-primary)] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[var(--sit-blue)]/0 group-hover:bg-[var(--sit-blue)]/10 transition-colors duration-300 mix-blend-overlay" />
                
                {/* Holographic Category Label */}
                {img.category && (
                  <div className="absolute top-4 left-4 px-2 py-1 text-[10px] font-label tracking-[0.2em] uppercase text-[var(--sit-blue)] bg-[var(--sit-bg-primary)]/80 border-l-2 border-[var(--sit-blue)] backdrop-blur-sm group-hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all">
                    {img.category}
                  </div>
                )}

                {/* Cyber Frame Decorators */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--sit-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--sit-blue)] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Alt text caption shown on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <p className="text-xs font-mono text-white line-clamp-2">
                    <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
                    {img.alt}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Holographic Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && galleryImages[selectedIndex] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[var(--sit-bg-primary)]/95 backdrop-blur-xl"
              onClick={closeLightbox}
            />
            {/* Grid behind lightbox */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 md:top-8 md:right-10 z-20 p-3 rounded-none border border-[var(--sit-blue)]/50 text-[var(--sit-blue)] hover:text-white hover:bg-[var(--sit-blue)] hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all duration-300 cyber-chamfer-sm group"
              aria-label="Close lightbox"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-10 z-20 p-4 border border-[var(--sit-blue)]/30 text-[var(--sit-blue)] hover:text-black hover:bg-[var(--sit-blue)] transition-all duration-300 cyber-chamfer-sm group"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 md:right-10 z-20 p-4 border border-[var(--sit-blue)]/30 text-[var(--sit-blue)] hover:text-black hover:bg-[var(--sit-blue)] transition-all duration-300 cyber-chamfer-sm group"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Image & Caption Wrapper */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl w-[90vw] h-[85vh]">
              {/* Outer Cyber Frame for image */}
              <motion.div
                className="relative w-full h-[70vh] border border-[var(--sit-blue)]/40 p-2 bg-[var(--sit-bg-secondary)]/80 cyber-chamfer shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                key={selectedIndex}
                initial={{ scale: 0.95, opacity: 0, filter: "brightness(2) contrast(1.5)" }}
                animate={{ scale: 1, opacity: 1, filter: "brightness(1) contrast(1)" }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--sit-blue)] pointer-events-none" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--sit-blue)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--sit-blue)] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--sit-blue)] pointer-events-none" />

                <div className="relative w-full h-full cyber-chamfer overflow-hidden">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                  {/* Subtle scanline on the image itself */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--sit-blue)]/5 to-transparent pointer-events-none animate-pulse" />
                </div>
              </motion.div>
              
              {/* Terminal Readout Details */}
              <motion.div 
                className="mt-6 w-full max-w-4xl px-4 flex flex-col md:flex-row items-center justify-between gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block px-3 py-1 border-l-2 border-[var(--sit-blue)] text-[10px] font-label tracking-[0.2em] uppercase text-white bg-[var(--sit-blue)]/20 mb-2">
                    {galleryImages[selectedIndex].category}
                  </span>
                  <p className="text-sm md:text-base text-white/90 font-mono">
                    <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
                    {galleryImages[selectedIndex].alt}
                  </p>
                </div>
                
                <div className="shrink-0 text-right">
                  <p className="text-xs font-label uppercase tracking-widest text-[var(--sit-blue)] mb-1">
                    SYS_INDEX
                  </p>
                  <p className="text-sm font-mono text-[var(--sit-text-muted)]">
                    [ {String(selectedIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')} ]
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
