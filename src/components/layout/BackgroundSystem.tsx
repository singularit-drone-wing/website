// ============================================================
// BackgroundSystem — Cyberpunk atmospheric background
// Renders technical grid points (crosshairs), grid pattern,
// radial neon glow, and CRT scanlines behind all content.
// ============================================================

"use client";

import { useEffect, useRef } from "react";

/** Floating technical particle properties */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "cross" | "dot";
}

export default function BackgroundSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initParticles() {
      particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * (canvas?.width ?? window.innerWidth),
        y: Math.random() * (canvas?.height ?? window.innerHeight),
        vx: (Math.random() - 0.5) * 0.1,
        vy: Math.random() * 0.3 + 0.1, // slowly falling
        size: Math.random() > 0.5 ? 4 : 2,
        opacity: Math.random() * 0.4 + 0.1,
        type: Math.random() > 0.3 ? "cross" : "dot",
      }));
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw technical particles
      particles.forEach((p) => {
        ctx.strokeStyle = `rgba(0, 240, 255, ${p.opacity})`;
        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        ctx.lineWidth = 1;

        if (p.type === "cross") {
          ctx.beginPath();
          ctx.moveTo(p.x - p.size, p.y);
          ctx.lineTo(p.x + p.size, p.y);
          ctx.moveTo(p.x, p.y - p.size);
          ctx.lineTo(p.x, p.y + p.size);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.rect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
          ctx.fill();
        }

        // Update position (falling downwards slightly, mechanical drift)
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none cyber-scanlines" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--sit-bg-primary)] via-[var(--sit-bg-secondary)] to-[var(--sit-bg-primary)]" />

      {/* Technical cyber grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial neon glow — top center (primary cyan) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,240,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Secondary glow — bottom (secondary blue) */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Floating data particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay" />
    </div>
  );
}
