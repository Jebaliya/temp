"use client";

import { useState } from "react";
import { gate } from "@/data/config";
import type { PrivateContent } from "./types";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const field =
  "block w-full appearance-none rounded-xl border bg-white/[.04] px-4 py-3.5 text-lg text-ink [color-scheme:dark] transition-colors";

export default function Gate({ onVerified }: { onVerified: (c: PrivateContent) => void }) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const ready = day !== "" && month !== "";
  const border = error ? "border-rose" : "border-white/15 focus:border-gold";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || busy) return;
    setBusy(true);
    setError(false);
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dob: `${month}-${day}` }), // "MM-DD"
      });
      if (!res.ok) throw new Error("no");
      const data = await res.json();
      setLeaving(true);
      setTimeout(() => onVerified({ letter: data.letter, finale: data.finale }), 600);
    } catch {
      setError(true);
      setBusy(false);
    }
  }

  return (
    <main
      className={`flex min-h-[100svh] items-center justify-center px-6 py-12 transition-all duration-700 ${
        leaving ? "scale-[.98] opacity-0" : "animate-rise"
      }`}
    >
      <form onSubmit={submit} className="w-full max-w-sm">
        <h1 className="font-display text-4xl font-light leading-tight sm:text-5xl">{gate.title}</h1>
        <p className="mt-4 max-w-[28ch] text-[1.05rem] leading-relaxed text-mist">{gate.text}</p>

        <p className="mt-10 text-sm text-mist">{gate.label}</p>
        <div className="mt-2 grid grid-cols-[1fr_1.6fr] gap-3">
          <select
            aria-label="Day"
            value={day}
            onChange={(e) => { setDay(e.target.value); setError(false); }}
            className={`${field} ${border}`}
          >
            <option value="" disabled>Day</option>
            {Array.from({ length: 31 }, (_, i) => {
              const d = String(i + 1).padStart(2, "0");
              return <option key={d} value={d}>{i + 1}</option>;
            })}
          </select>
          <select
            aria-label="Month"
            value={month}
            onChange={(e) => { setMonth(e.target.value); setError(false); }}
            className={`${field} ${border}`}
          >
            <option value="" disabled>Month</option>
            {MONTHS.map((m, i) => {
              const v = String(i + 1).padStart(2, "0");
              return <option key={v} value={v}>{m}</option>;
            })}
          </select>
        </div>

        <p role="alert" className={`mt-3 min-h-[1.5rem] text-sm text-rose transition-opacity ${error ? "opacity-100" : "opacity-0"}`}>
          {error ? gate.error : ""}
        </p>

        <button
          type="submit"
          disabled={!ready || busy}
          className="mt-4 w-full rounded-full bg-gold px-6 py-3.5 font-medium text-night transition active:scale-[.98] enabled:hover:brightness-110 disabled:opacity-40"
        >
          {busy ? "Checking..." : gate.button}
        </button>
      </form>
    </main>
  );
}