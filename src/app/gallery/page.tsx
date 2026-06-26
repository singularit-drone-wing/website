// ============================================================
// Gallery Page — Dedicated route for image gallery
// Responsive grid with lightbox modal for fullscreen viewing.
// ============================================================

"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

// Placeholder gallery data — replace with actual images
const galleryImages: GalleryImage[] = Array.from({ length: 12 }, (_, i) => ({
  id: `g${i + 1}`,
  src: "/images/events/placeholder.svg",
  alt: `SingularIT Gallery Image ${i + 1}`,
  category: ["Robotics", "Events", "Workshop", "Competition"][i % 4],
}));

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

  return (
    <main className="relative z-10 min-h-screen bg-[var(--sit-bg-primary)]">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 pt-28 md:pt-36 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--sit-text-muted)] hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Gallery
        </h1>
        <p className="mt-4 max-w-xl text-base md:text-lg text-[var(--sit-text-muted)] leading-relaxed">
          Moments from our journey — competitions, builds, workshops, and
          everything in between.
        </p>
        <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--sit-blue)] to-transparent" />
      </div>

      {/* Image Grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-[var(--sit-bg-tertiary)] cursor-pointer"
              onClick={() => openLightbox(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              {img.category && (
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase text-white/0 group-hover:text-white/80 bg-transparent group-hover:bg-black/50 transition-all duration-300">
                  {img.category}
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={goPrev}
              className="absolute left-4 z-10 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 z-10 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image */}
            <motion.div
              className="relative z-10 w-[90vw] h-[80vh] max-w-5xl"
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
              <p className="text-sm text-white/60">
                {selectedIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
