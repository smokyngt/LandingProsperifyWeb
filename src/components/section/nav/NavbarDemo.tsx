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

export function NavbarDemo() {
  const { t } = useTranslation();
  const pathname = usePathname();

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
            <div className="flex items-center gap-4">
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
