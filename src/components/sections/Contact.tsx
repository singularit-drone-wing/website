// ============================================================
// Contact — Get in touch section
// Cyberpunk layout with technical readouts and cyber-chamfer CTA.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Terminal } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Terminal size={20} className="text-[var(--sit-blue)]" />
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--sit-blue)] font-label">
              // COMM_LINK_ESTABLISHED
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-widest text-white uppercase cyber-glitch">
            Get In Touch
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[var(--sit-text-muted)] font-mono leading-relaxed">
            <span className="text-[var(--sit-blue)] mr-2">&gt;</span>
            Interested in collaborating, sponsoring, or joining SINGULARIT? We&apos;d love to hear from you.
          </p>
          <div className="mt-8 h-1 w-24 bg-[var(--sit-blue)] cyber-border-glow" />
        </motion.div>

        {/* Contact info */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.contact.email}`}
            className="group glass-card cyber-chamfer p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-[var(--sit-blue)] hover:cyber-border-glow transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--sit-blue)]/30 bg-[var(--sit-blue)]/10 text-[var(--sit-blue)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Mail size={24} />
            </div>
            <div className="relative z-10 flex-1">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--sit-blue)] font-label">
                // SECURE_EMAIL
              </p>
              <p className="mt-2 text-lg md:text-xl font-mono font-medium text-white group-hover:text-[var(--sit-blue)] transition-colors duration-300 break-all">
                {siteConfig.contact.email}
              </p>
            </div>
            <ArrowUpRight
              size={24}
              className="relative z-10 hidden sm:block text-[var(--sit-text-muted)] group-hover:text-[var(--sit-blue)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </motion.a>

          {/* Location */}
          <motion.div
            className="group glass-card cyber-chamfer p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--sit-border)] bg-[var(--sit-bg-tertiary)] text-[var(--sit-text-muted)] group-hover:border-[var(--sit-blue)]/50 group-hover:text-[var(--sit-blue)] transition-all">
              <MapPin size={24} />
            </div>
            <div className="relative z-10">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--sit-text-muted)] font-label group-hover:text-[var(--sit-blue)] transition-colors">
                // HEADQUARTERS
              </p>
              <p className="mt-2 text-lg md:text-xl font-mono font-medium text-white">
                {siteConfig.contact.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-20 flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="group flex items-center gap-3 px-8 py-4 cyber-chamfer border border-[var(--sit-blue)] bg-[var(--sit-blue)]/10 text-white font-label uppercase tracking-widest hover:bg-[var(--sit-blue)] hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
          >
            INITIALIZE_CONTACT
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

