import type { Config } from "tailwindcss";

// Colors come from CSS variables that are set from src/data/config.ts
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: c("night"),
        ink: c("ink"),
        mist: c("mist"),
        gold: c("gold"),
        rose: c("rose"),
        paper: c("paper"),
        paperink: c("paperink"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        rise: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        fadeIn: "fadeIn .9s ease both",
        rise: "rise 1s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
