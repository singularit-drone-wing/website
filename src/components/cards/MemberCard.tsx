// ============================================================
// MemberCard — Team member profile card
// Photo, name, position. Subtle hover lift and glow.
// ============================================================

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Member } from "@/types";

interface MemberCardProps {
  member: Member;
  index: number;
}

export default function MemberCard({ member, index }: MemberCardProps) {
  return (
    <motion.div
      className="group relative glass-card rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--sit-bg-tertiary)]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="relative p-4 md:p-5">
        <h3 className="text-sm md:text-base font-semibold text-white truncate">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs md:text-sm text-[var(--sit-text-muted)]">
          {member.position}
        </p>
      </div>

      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--sit-blue)]/20 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}
