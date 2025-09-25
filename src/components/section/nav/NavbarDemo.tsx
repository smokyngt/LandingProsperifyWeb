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
import { usePathname } from "next/navigation"; // 👈 pour savoir où on est

export function NavbarDemo() {
  const pathname = usePathname();

  // 🌍 Définir les liens différemment selon la page
  const navItems =
    pathname === "/roadmap"
      ? [{ name: "Accueil", link: "/" }] // seulement "Accueil" sur /roadmap
      : [
          { name: "Souveraineté", link: "#Souveraineté" },
          { name: "Workflow", link: "#workflow" },
          { name: "Intégration", link: "#integration" },
          { name: "Offres", link: "#products" },
          { name: "architecture", link: "#architecture" },
          { name: "Roadmap", link: "/roadmap" },
        ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {pathname !== "/roadmap" && (
            <div className="flex items-center gap-4">
              <NavbarButton href="#contact" variant="primary">Contact </NavbarButton>
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
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
