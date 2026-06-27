// ============================================================
// Root Layout — Global wrapper for the SINGULARIT website
// Loads fonts, metadata, BackgroundSystem, and Navbar.
// ============================================================

import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BackgroundSystem from "@/components/layout/BackgroundSystem";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SINGULARIT — Engineering the Autonomous Future | CUSAT",
  description:
    "SINGULARIT is CUSAT's premier autonomous systems and robotics team — pushing the boundaries of innovation, engineering, and artificial intelligence.",
  keywords: [
    "SINGULARIT",
    "CUSAT",
    "robotics",
    "autonomous systems",
    "engineering",
    "AI",
    "artificial intelligence",
    "Kerala",
  ],
  authors: [{ name: "SINGULARIT Team" }],
  openGraph: {
    title: "SINGULARIT — Engineering the Autonomous Future",
    description:
      "CUSAT's premier autonomous systems and robotics team.",
    type: "website",
    locale: "en_IN",
    siteName: "SINGULARIT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTechMono.variable} ${jetbrainsMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-mono">
        <BackgroundSystem />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
