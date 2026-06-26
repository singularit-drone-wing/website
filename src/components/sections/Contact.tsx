// ============================================================
// Contact — Get in touch section
// Clean layout with email, location, and social links.
// ============================================================

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-xl text-base md:text-lg text-[var(--sit-text-muted)] leading-relaxed">
            Interested in collaborating, sponsoring, or joining SingularIT?
            We&apos;d love to hear from you.
          </p>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--sit-blue)] to-transparent" />
        </motion.div>

        {/* Contact info */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.contact.email}`}
            className="group glass-card rounded-xl p-6 md:p-8 flex items-start gap-4 hover:border-[var(--sit-blue)]/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -2 }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--sit-blue)]/10 text-[var(--sit-blue)]">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs tracking-wider uppercase text-[var(--sit-text-muted)]">
                Email
              </p>
              <p className="mt-1 text-base md:text-lg font-medium text-white group-hover:text-[var(--sit-blue-light)] transition-colors duration-300">
                {siteConfig.contact.email}
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="ml-auto mt-1 text-[var(--sit-text-muted)] group-hover:text-[var(--sit-blue)] transition-colors duration-300"
            />
          </motion.a>

          {/* Location */}
          <motion.div
            className="glass-card rounded-xl p-6 md:p-8 flex items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--sit-blue)]/10 text-[var(--sit-blue)]">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs tracking-wider uppercase text-[var(--sit-text-muted)]">
                Location
              </p>
              <p className="mt-1 text-base md:text-lg font-medium text-white">
                {siteConfig.contact.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--sit-blue)] text-white text-sm font-medium hover:bg-[var(--sit-blue-light)] transition-colors duration-300 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            Reach Out
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
