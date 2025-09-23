import { NextResponse } from "next/server";
import { handleContact } from "function/api/contact";

export const runtime = "nodejs";       // Important pour Vercel
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  return handleContact(req); // Réutilise ta logique
}
