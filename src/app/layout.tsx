// ============================================================
// Root Layout — Global wrapper for the SingularIT website
// Loads fonts, metadata, BackgroundSystem, and Navbar.
// ============================================================

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BackgroundSystem from "@/components/layout/BackgroundSystem";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SingularIT — Engineering the Autonomous Future | CUSAT",
  description:
    "SingularIT is CUSAT's premier autonomous systems and robotics team — pushing the boundaries of innovation, engineering, and artificial intelligence.",
  keywords: [
    "SingularIT",
    "CUSAT",
    "robotics",
    "autonomous systems",
    "engineering",
    "AI",
    "artificial intelligence",
    "Kerala",
  ],
  authors: [{ name: "SingularIT Team" }],
  openGraph: {
    title: "SingularIT — Engineering the Autonomous Future",
    description:
      "CUSAT's premier autonomous systems and robotics team.",
    type: "website",
    locale: "en_IN",
    siteName: "SingularIT",
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
      className={`${inter.variable} ${geistMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-black text-white antialiased font-sans">
        <BackgroundSystem />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
