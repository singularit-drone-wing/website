// ============================================================
// Home Page — Single-page experience assembling all sections
// Hero → About → Mission → Vision → Competitions →
// Contact → Footer
// ============================================================

import { Hero } from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Mission from "@/components/sections/Mission";
import Competitions from "@/components/sections/Competitions";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Competitions />
      <Footer />
    </main>
  );
}
