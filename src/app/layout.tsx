import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Prosperify - IA Souveraine pour vos données",
  description:
    "Optimisez votre gestion documentaire avec l’IA souveraine de Prosperify. Sécurité, précision et intégration simple.",
  openGraph: {
    title: "Prosperify - IA Souveraine",
    description:
      "Transformez vos données en avantage compétitif grâce à Prosperify.",
    url: "https://prosperify.app",
    siteName: "Prosperify",
    images: [
      {
        url: "https://prosperify.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosperify - IA Souveraine",
    description:
      "Optimisez votre gestion documentaire avec l’IA souveraine de Prosperify.",
    images: ["https://prosperify.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MCKFNM9F');
          `}
        </Script>
      </head>
      <body className={`font-sans bg-white ${inter.variable} antialiased`}>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Prosperify",
      url: "https://prosperify.app",
      logo: "https://prosperify.app/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/prosperify-ai/",
      ],
    }),
  }}
/>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MCKFNM9F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Suspense fallback={null}>{children}</Suspense>
       
      </body>
    </html>
  );
}
