"use client";

import { useState } from "react";
import Gate from "@/components/Gate";
import Welcome from "@/sections/Welcome";
import Memories from "@/sections/Memories";
import Letter from "@/sections/Letter";
import Finale from "@/sections/Finale";
import type { PrivateContent } from "@/components/types";

export default function Page() {
  const [content, setContent] = useState<PrivateContent | null>(null);
  const [opened, setOpened] = useState(false);

  if (!content) return <Gate onVerified={setContent} />;

  const open = () => {
    setOpened(true);
    setTimeout(() => document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <main className="animate-fadeIn">
      <Welcome onOpen={open} opened={opened} />
      {opened && (
        <>
          <Memories />
          <Letter letter={content.letter} />
          <Finale finale={content.finale} />
        </>
      )}
    </main>
  );
}
