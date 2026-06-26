// ============================================================
// EventCard — Past event display card
// Image, name, date, description. Hover interaction.
// ============================================================

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Event } from "@/types";

interface EventCardProps {
  event: Event;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.article
      className="group relative glass-card rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -3 }}
    >
      {/* Event image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--sit-bg-tertiary)]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Date badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/[0.08] text-xs font-mono text-[var(--sit-blue)]">
          {event.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[var(--sit-blue-light)] transition-colors duration-300">
          {event.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--sit-text-muted)] leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--sit-blue)]/20 transition-colors duration-300 pointer-events-none" />
    </motion.article>
  );
}
