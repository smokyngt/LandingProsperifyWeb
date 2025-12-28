"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../nav/resizable-navbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation"; // 👈 pour savoir où on est
import i18n from "@/lib/i18n"; // initialise i18next et expose la langue courante
import Link from "next/link";
import { motion } from "motion/react";

export function NavbarDemo() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const pathLang = pathname.startsWith("/en")
    ? "en"
    : pathname.startsWith("/fr")
      ? "fr"
      : i18n.language === "en"
        ? "en"
        : "fr";

  const [currentLang, setCurrentLang] = useState<"fr" | "en">(pathLang as "fr" | "en");

  const switchLanguage = (targetLang: "fr" | "en") => {
    if (targetLang === currentLang) return;

    i18n.changeLanguage(targetLang).catch(() => {
      // ignore
    });
    setCurrentLang(targetLang);
  };

  const baseItems: { nameKey: string; link: string }[] = [
    { nameKey: "footer.links.sovereignty", link: "#sovereignty" },
    { nameKey: "footer.links.workflow", link: "#workflow" },
    { nameKey: "footer.links.integration", link: "#integration" },
    { nameKey: "footer.links.products", link: "#products" },
    { nameKey: "footer.links.architecture", link: "#architecture" },
    { nameKey: "footer.links.features", link: "#features" },
    { nameKey: "footer.links.roadmap", link: "/roadmap" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resolveLink = (link: string) => {
    // Si ce n'est pas une ancre (#...), on renvoie tel quel (/roadmap, etc.)
    if (!link.startsWith("#")) return link;

    // Sur les pages de landing (/fr, /en, /), on reste sur la même page
    if (pathname === "/" || pathname.startsWith("/fr") || pathname.startsWith("/en")) {
      return link;
    }

    // Depuis /roadmap (ou autre), on renvoie vers la page d'accueil avec la bonne langue
    const lang = i18n.language === "en" ? "en" : "fr";
    return `/${lang}${link}`;
  };

  const navItems = baseItems.map((i) => ({ name: t(i.nameKey), link: resolveLink(i.link) }));

  return (
    <div className="relative w-full z-[10000]">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {pathname !== "/roadmap" && (
            <div className="flex items-center gap-4 relative z-20">
              <div className="flex items-center gap-1 text-xs border border-orange-300 rounded-full px-2 py-1 bg-orange-50/90 text-orange-600 shadow-sm">
                <motion.button
                  type="button"
                  onClick={() => switchLanguage("fr")}
                  className={
                    currentLang === "fr"
                      ? "font-semibold text-white bg-orange-500 rounded-full px-2 py-0.5"
                      : "text-orange-500 px-2 py-0.5"
                  }
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    opacity: currentLang === "fr" ? 1 : 0.4,
                    scale: currentLang === "fr" ? 1.08 : 0.94,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  FR
                </motion.button>
                <span className="text-gray-400">/</span>
                <motion.button
                  type="button"
                  onClick={() => switchLanguage("en")}
                  className={
                    currentLang === "en"
                      ? "font-semibold text-white bg-orange-500 rounded-full px-2 py-0.5"
                      : "text-orange-500 px-2 py-0.5"
                  }
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    opacity: currentLang === "en" ? 1 : 0.4,
                    scale: currentLang === "en" ? 1.08 : 0.94,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  EN
                </motion.button>
              </div>
              <NavbarButton href="#contact" variant="primary">
                {t("footer.links.contact")} 
              </NavbarButton>
            </div>
          )}
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="mt-5 border z-[10000] border-orange-200 rounded-lg bg-white flex items-center justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.button
                type="button"
                onClick={() => switchLanguage("fr")}
                className={
                  currentLang === "fr"
                    ? "font-semibold text-white bg-orange-500 rounded-full px-3 py-1"
                    : "text-orange-500 px-3 py-1"
                }
                whileTap={{ scale: 0.9 }}
                animate={{
                  opacity: currentLang === "fr" ? 1 : 0.4,
                  scale: currentLang === "fr" ? 1.08 : 0.94,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                FR
              </motion.button>
              <span className="text-gray-400">/</span>
              <motion.button
                type="button"
                onClick={() => switchLanguage("en")}
                className={
                  currentLang === "en"
                    ? "font-semibold text-white bg-orange-500 rounded-full px-3 py-1"
                    : "text-orange-500 px-3 py-1"
                }
                whileTap={{ scale: 0.9 }}
                animate={{
                  opacity: currentLang === "en" ? 1 : 0.4,
                  scale: currentLang === "en" ? 1.08 : 0.94,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                EN
              </motion.button>
            </div>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
                scroll
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
