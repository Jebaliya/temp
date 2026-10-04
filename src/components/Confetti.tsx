"use client";

import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export type ConfettiHandle = { fire: () => void };

/** Small canvas confetti burst. No dependency. Skipped if reduced motion is on. */
const Confetti = forwardRef<ConfettiHandle>(function Confetti(_, ref) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);

  const fire = useCallback(() => {
    const cv = canvas.current;
    if (!cv || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = (cv.width = window.innerWidth * dpr);
    const h = (cv.height = window.innerHeight * dpr);
    const css = getComputedStyle(document.documentElement);
    const colors = ["gold", "rose", "paper", "ink"].map(
      (n) => `rgb(${css.getPropertyValue(`--${n}`).trim().replace(/ /g, ",")})`
    );

    const parts = Array.from({ length: 90 }, () => ({
      x: w * (0.2 + Math.random() * 0.6),
      y: h * 0.95,
      vx: (Math.random() - 0.5) * 9 * dpr,
      vy: -(9 + Math.random() * 11) * dpr,
      s: (4 + Math.random() * 5) * dpr,
      r: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.3,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));

    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const tick = (t: number) => {
      const life = (t - start) / 4200;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.vy += 0.28 * dpr;
        p.vx *= 0.992;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - life * life);
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      }
      if (life < 1) raf.current = requestAnimationFrame(tick);
      else ctx.clearRect(0, 0, w, h);
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  useImperativeHandle(ref, () => ({ fire }), [fire]);

  return <canvas ref={canvas} aria-hidden className="pointer-events-none fixed inset-0 z-40 h-full w-full" />;
});

export default Confetti;
