import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { site, theme } from "@/data/config";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: site.pageTitle,
  description: "A little surprise.",
  robots: { index: false, follow: false }, // keep it out of search engines
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: theme.night,
};

const rgb = (hex: string) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const vars = Object.fromEntries(Object.entries(theme).map(([k, v]) => [`--${k}`, rgb(v)])) as React.CSSProperties;
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} style={vars}>
      <body className="bg-night font-body text-ink antialiased">{children}</body>
    </html>
  );
}
