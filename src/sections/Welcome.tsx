import { welcome, site } from "@/data/config";

export default function Welcome({ onOpen, opened }: { onOpen: () => void; opened: boolean }) {
  const [first, ...rest] = welcome.title.split(",");
  return (
    <section className="flex min-h-[100svh] flex-col justify-center px-6 py-16 sm:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="animate-rise font-display text-[clamp(3rem,13vw,7rem)] font-light leading-[.98] tracking-tight">
          {first}
          {rest.length > 0 && ","}
          <br />
          <span className="italic text-gold">{rest.join(",").trim() || site.name}</span>
        </h1>
        <p className="animate-rise mt-8 max-w-[26ch] text-lg leading-relaxed text-mist [animation-delay:.25s] sm:text-xl">
          {welcome.text}
        </p>
        {!opened && (
          <button
            onClick={onOpen}
            className="animate-rise mt-12 rounded-full border border-gold/60 px-7 py-3.5 font-medium text-gold transition [animation-delay:.5s] hover:bg-gold hover:text-night active:scale-[.97]"
          >
            {welcome.button}
          </button>
        )}
      </div>
    </section>
  );
}
