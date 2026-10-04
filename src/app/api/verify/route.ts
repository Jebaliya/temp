import { NextResponse } from "next/server";
import { dob as defaultDob, letter, finale } from "@/data/private";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let value = "";
  try {
    const body = await req.json();
    value = typeof body?.dob === "string" ? body.dob.trim() : "";
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Only month and day are compared. "2000-01-31" and "01-31" both work.
  const expected = (process.env.BIRTHDAY_DOB || defaultDob).trim().slice(-5);

  if (value === expected) {
    return NextResponse.json({ ok: true, letter, finale }, { headers: { "Cache-Control": "no-store" } });
  }

  await new Promise((r) => setTimeout(r, 600));
  return NextResponse.json({ ok: false }, { status: 401 });
}