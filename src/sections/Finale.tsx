"use client";

import { useEffect, useRef } from "react";
import Confetti, { ConfettiHandle } from "@/components/Confetti";
import Reveal from "@/components/Reveal";
import { site } from "@/data/config";
import type { PrivateContent } from "@/components/types";

export default function Finale({ finale }: { finale: PrivateContent["finale"] }) {
  const confetti = useRef<ConfettiHandle>(null);
  const section = useRef<HTMLElement>(null);

  // Fires once, when the final section is actually on screen.
  useEffect(() => {
    const el = section.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => confetti.current?.fire(), 500);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={section} className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center">
      <Confetti ref={confetti} />
      <Reveal>
        <h2 className="font-display text-[clamp(2.75rem,12vw,6.5rem)] font-light leading-none tracking-tight text-gold">
          {finale.title}
        </h2>
      </Reveal>
      <Reveal delay={300}>
        <p className="mx-auto mt-8 max-w-[24ch] font-display text-xl italic leading-relaxed text-ink/90 sm:text-2xl">
          {finale.message}
        </p>
      </Reveal>
      <Reveal delay={600}>
        <button
          onClick={() => confetti.current?.fire()}
          className="mt-12 rounded-full border border-white/20 px-6 py-3 text-sm text-mist transition hover:border-gold hover:text-gold active:scale-[.97]"
        >
          {finale.replay}
        </button>
      </Reveal>
      <p className="absolute inset-x-0 bottom-6 text-xs text-mist/70">{site.madeBy}</p>
    </section>
  );
}
