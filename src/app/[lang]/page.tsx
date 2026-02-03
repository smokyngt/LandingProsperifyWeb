import ProsperifyLanding from "../prosperify-landing";

interface LangPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function LangPage({ params }: LangPageProps) {
  const { lang } = await params;
  return <ProsperifyLanding lang={lang} />;
}

// Required for `output: "export"` with dynamic segment [lang]
export function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" },
  ];
}
