import Reveal from "@/components/Reveal";
import { letterHeading } from "@/data/config";
import type { PrivateContent } from "@/components/types";

export default function Letter({ letter }: { letter: PrivateContent["letter"] }) {
  return (
    <section className="px-5 py-24 sm:px-12 sm:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <article
          aria-label={letterHeading}
          className="rounded-sm bg-paper px-7 py-12 text-paperink shadow-[0_40px_80px_-30px_rgba(0,0,0,.8)] sm:px-14 sm:py-16"
          style={{ transform: "rotate(-.4deg)" }}
        >
          <p className="font-display text-2xl italic sm:text-3xl">{letter.greeting}</p>
          <div className="mt-8 space-y-6 font-display text-[1.125rem] leading-[1.85] sm:text-[1.2rem]">
            {letter.paragraphs.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
          <p className="mt-10 font-display italic">{letter.signoff}</p>
          <p className="mt-1 font-display text-2xl">{letter.signature}</p>
        </article>
      </Reveal>
    </section>
  );
}
