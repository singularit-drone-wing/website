// ============================================================
// SINGULARIT — TypeScript Type Definitions
// Central type definitions for the entire application.
// ============================================================

/** Navigation item used in the Navbar */
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/** Team member profile */
export interface Member {
  id: string;
  name: string;
  position: string;
  image: string;
}

/** Past event entry */
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

/** Experience / achievement entry */
export interface Experience {
  id: string;
  year: string;
  title: string;
  description: string;
}

/** Gallery image */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

/** Social media link */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/** Section metadata for scroll tracking */
export interface SectionMeta {
  id: string;
  label: string;
}
