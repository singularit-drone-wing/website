// ============================================================
// Home Page — Single-page experience assembling all sections
// Hero → About → Mission → Vision → Experiences → Members →
// Events → Contact → Footer
// ============================================================

import { Hero } from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Mission from "@/components/sections/Mission";
import Vision from "@/components/sections/Vision";
import Experiences from "@/components/sections/Experiences";
import Members from "@/components/sections/Members";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Vision />
      <Experiences />
      <Members />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
