# SingularIT Website — Debug Documentation

## Project Overview
Official website for **SingularIT, CUSAT** — a cinematic, premium, engineering-focused single-page experience with a separate Gallery page. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Lucide React.

## Tech Stack
| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.9 | Framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first styling |
| shadcn/ui | base-nova | UI primitives |
| Framer Motion | ^12.42.0 | Scroll + entrance animations |
| Lucide React | ^1.21.0 | Icon system |

## Folder Structure
```
src/
├── app/
│   ├── layout.tsx           ← Root layout (Inter font, BackgroundSystem, Navbar)
│   ├── page.tsx             ← Home page (assembles all sections)
│   ├── globals.css          ← Design system (black/blue tokens, utilities)
│   └── gallery/
│       └── page.tsx         ← Gallery page with lightbox
├── components/
│   ├── ui/
│   │   ├── button.tsx       ← shadcn button primitive
│   │   └── hero-shutter-text.tsx ← Shutter-slice text reveal animation
│   ├── layout/
│   │   ├── BackgroundSystem.tsx ← Persistent atmospheric background
│   │   ├── Navbar.tsx       ← Sticky nav with glass blur + mobile drawer
│   │   ├── Footer.tsx       ← Brand footer with social icons
│   │   └── SectionWrapper.tsx ← Reusable section container
│   ├── sections/
│   │   ├── Hero.tsx         ← Cinematic hero (shutter text + scroll zoom)
│   │   ├── About.tsx        ← Who is SingularIT + stats
│   │   ├── Mission.tsx      ← Pull-quote mission statement
│   │   ├── Vision.tsx       ← Right-aligned vision statement
│   │   ├── Experiences.tsx  ← Timeline of achievements
│   │   ├── Members.tsx      ← Team member grid
│   │   ├── Events.tsx       ← Past events grid
│   │   └── Contact.tsx      ← Contact info + CTA
│   └── cards/
│       ├── ExperienceCard.tsx ← Timeline entry card
│       ├── MemberCard.tsx    ← Profile card with image
│       └── EventCard.tsx     ← Event card with image + date
├── hooks/
│   ├── useActiveSection.ts  ← IntersectionObserver for navbar tracking
│   └── useScrollProgress.ts ← Normalized scroll progress (0–1)
├── lib/
│   └── utils.ts             ← cn() helper (clsx + tailwind-merge)
├── types/
│   └── index.ts             ← TypeScript interfaces
├── constants/
│   └── index.ts             ← Sections, nav items, animation presets
└── data/
    ├── siteConfig.ts        ← Site metadata, copy, social links
    ├── members.ts           ← Team member data (placeholder)
    ├── events.ts            ← Past event data (placeholder)
    └── experiences.ts       ← Achievement data (placeholder)
```

## Routes
| Route | Page | Type |
|---|---|---|
| `/` | Single-page home | Static |
| `/gallery` | Image gallery with lightbox | Static |

## Key Features
- **Hero shutter-text animation**: Each letter of "SINGULARIT" enters with 3-layer blue shutter slices sweeping across before settling
- **Scroll-driven zoom**: Title scales 1×→8× on scroll, blurs, and fades — revealing About section beneath
- **Atmospheric background**: Persistent canvas particles, tech grid, radial blue glows
- **Glass-morphism navbar**: Transparent → blurred on scroll, animated active section indicator
- **Mobile drawer**: Slide-in navigation for mobile
- **Gallery lightbox**: Full-screen image viewer with prev/next navigation
- **Scroll-triggered entrances**: All sections fade up on scroll via Framer Motion useInView

## Design System
| Token | Value |
|---|---|
| Background | `#000000` |
| Secondary BG | `#050505` |
| Tertiary BG | `#0B0B0B` |
| Primary Blue | `#2563EB` |
| Secondary Blue | `#3B82F6` |
| Glow | `rgba(59,130,246,0.18)` |
| Border | `rgba(255,255,255,0.08)` |
| Card BG | `rgba(255,255,255,0.03)` |
| Text Primary | `#FFFFFF` |
| Text Muted | `#9CA3AF` |

## Features Completed
- [x] Project scaffold (Next.js 16 + TypeScript + Tailwind v4)
- [x] shadcn/ui initialization
- [x] Framer Motion + Lucide React installed
- [x] Design system (globals.css with black/blue tokens)
- [x] Root layout with Inter font + Geist Mono
- [x] Background system (particles, grid, glow)
- [x] Navbar (desktop + mobile drawer)
- [x] Hero with shutter-text reveal + scroll zoom
- [x] About section with stats
- [x] Mission section (pull-quote)
- [x] Vision section (right-aligned pull-quote)
- [x] Experiences timeline
- [x] Members grid
- [x] Events grid
- [x] Contact section
- [x] Footer with social icons
- [x] Gallery page with lightbox
- [x] Type definitions
- [x] Data layer (members, events, experiences, siteConfig)
- [x] Custom hooks (useActiveSection, useScrollProgress)

## Pending Work
- [ ] Replace placeholder member data with real names/photos
- [ ] Replace placeholder event data with real content
- [ ] Replace placeholder experience data with real achievements
- [ ] Add real gallery images
- [ ] Performance audit (Lighthouse)
- [ ] Final responsive polish (320px–1440px)
- [ ] Favicon and OG image

## Architecture Decisions
1. **Single-page with scroll sections**: All content lives on `/` with `id`-based scroll targets. Only Gallery is a separate route.
2. **CSS custom properties over Tailwind theme extension**: Used `--sit-*` CSS variables for brand tokens to keep Tailwind config clean and allow runtime theming.
3. **Canvas-based particles**: Used HTML Canvas for floating particles (BackgroundSystem) instead of DOM elements for GPU-efficient rendering.
4. **SectionWrapper pattern**: Reusable wrapper handles padding, max-width, and entrance animations — keeps section components focused on content.
5. **Shutter text component in /ui/**: Placed as a reusable UI primitive following shadcn conventions, separate from the Hero section logic.
