import Image from "next/image";
import Reveal from "@/components/Reveal";
import { memories } from "@/data/config";

export default function Memories() {
  return (
    <section id="memories" className="scroll-mt-4 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="font-display text-4xl font-light sm:text-5xl">{memories.title}</h2>
          <p className="mt-3 text-mist">{memories.text}</p>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {memories.photos.map((p, i) => (
            <figure key={p.src} className={`group ${i % 2 === 1 ? "ml-8 md:ml-0 md:mt-24" : "mr-8 md:mr-0"}`}>
              <Reveal variant="image" className="overflow-hidden rounded-[1.75rem] bg-white/5 shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]">
                <div className="relative w-full" style={{ aspectRatio: p.ratio }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 420px, 85vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] group-active:scale-[1.03]"
                    style={{ objectPosition: p.position }}
                  />
                </div>
              </Reveal>
              <Reveal delay={250}>
                <figcaption className="mt-4 max-w-[34ch] font-display text-lg italic leading-snug text-ink/90">
                  {p.caption}
                </figcaption>
              </Reveal>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
