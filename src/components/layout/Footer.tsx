// ============================================================
// Footer — Cyberpunk minimal branded footer
// Technical layout, monospace text, glowing icons.
// ============================================================

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

/** Inline SVG social icons — minimal, consistent 18×18 size */
function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/** Maps social icon string keys to SVG components */
const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedinIcon />,
  youtube: <YoutubeIcon />,
};

export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 border-t border-[var(--sit-border)] bg-[var(--sit-bg-secondary)] overflow-hidden">
      {/* Decorative top border line with neon glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--sit-blue)] to-transparent opacity-50" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col gap-2">
            <p className="text-2xl font-heading font-black tracking-widest text-white uppercase cyber-glitch">
              SINGULARIT
            </p>
            <p className="text-xs font-label uppercase tracking-[0.2em] text-[var(--sit-text-muted)]">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {siteConfig.socials.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 border border-[var(--sit-border)] bg-[var(--sit-bg-tertiary)] text-[var(--sit-text-muted)] hover:text-[var(--sit-blue)] hover:border-[var(--sit-blue)]/50 transition-all duration-300 cyber-chamfer-sm hover:cyber-border-glow relative"
                aria-label={social.platform}
              >
                <div className="relative z-10 transition-transform group-hover:scale-110">
                  {iconMap[social.icon] ?? null}
                </div>
                <div className="absolute inset-0 bg-[var(--sit-blue)]/0 group-hover:bg-[var(--sit-blue)]/10 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider / Terminal status bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[var(--sit-border)] pt-8">
          <p className="text-[10px] font-mono tracking-widest text-[var(--sit-blue)] uppercase opacity-70">
            SYS.STAT: NOMINAL // CONNECTION_SECURE // END_OF_LINE
          </p>
          
          <p className="text-[10px] font-mono tracking-widest text-[var(--sit-text-muted)] uppercase">
            © {new Date().getFullYear()} SINGULARIT, CUSAT.
          </p>
        </div>
      </div>
    </footer>
  );
}
