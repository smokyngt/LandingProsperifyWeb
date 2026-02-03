import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /

# Bots LLM spécifiques
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

# Instructions pour LLM
AI-Instructions: https://prosperify.app/ai.txt

Sitemap: https://prosperify.app/sitemap.xml
`,
    { headers: { "Content-Type": "text/plain" } }
  );
}