"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const navigatorLang = (navigator.language || "").toLowerCase();
    const lang = navigatorLang.startsWith("fr") ? "fr" : "en";

    router.replace(`/${lang}`);
  }, [router]);

  return null;
}
