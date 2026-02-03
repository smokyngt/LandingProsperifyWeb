export const dynamic = "force-static";
export const revalidate = false;

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://prosperify.app";

  const routes = ["", "roadmap"]; // tes vraies pages
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
