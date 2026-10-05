"use client";

import { useRef, useState } from "react";
import Gate from "@/components/Gate";
import MusicToggle from "@/components/MusicToggle";
import Welcome from "@/sections/Welcome";
import Memories from "@/sections/Memories";
import Letter from "@/sections/Letter";
import Finale from "@/sections/Finale";
import { music } from "@/data/config";
import type { PrivateContent } from "@/components/types";

export default function Page() {
  const [content, setContent] = useState<PrivateContent | null>(null);
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  if (!content) return <Gate onVerified={setContent} />;

  const open = () => {
    setOpened(true);
    const a = audio.current;
    if (a) {
      a.volume = music.volume;
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
    setTimeout(() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {});
    else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <main className="animate-fadeIn">
      <audio ref={audio} src={music.src} loop preload="none" />
      <Welcome onOpen={open} opened={opened} />
      {opened && (
        <>
          <Memories />
          <Letter letter={content.letter} />
          <Finale finale={content.finale} />
          <MusicToggle playing={playing} onToggle={toggle} />
        </>
      )}
    </main>
  );
}