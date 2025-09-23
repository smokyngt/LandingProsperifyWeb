import { NextResponse } from "next/server";

export const runtime = "nodejs";       
export const dynamic = "force-dynamic"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Exemple : traitement du formulaire
    console.log("Formulaire reçu:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
