"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "image";
};

/** Adds an entrance animation once the element scrolls into view. */
export default function Reveal({ children, className = "", delay = 0, variant = "fade" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const vars = { ["--d" as string]: `${delay}ms` };

  if (variant === "image") {
    // The outer box is what we observe (never clipped). Only the inner layer is clipped.
    return (
      <div ref={ref} className={className}>
        <div className={`img-reveal ${shown ? "in" : ""}`} style={vars}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={vars}>
      {children}
    </div>
  );
}