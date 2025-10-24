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
 const baseItems = [
  { name: "Souveraineté", link: "#Souveraineté" },
  { name: "Workflow", link: "#workflow" },
  { name: "Intégration", link: "#integration" },
  { name: "Offres", link: "#products" },
  { name: "Architecture", link: "#architecture" },
  { name: "Fonctionnalités", link: "#Fonctionnalités" },
  { name: "Roadmap", link: "/roadmap" },
];


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
const resolveLink = (link: string) => {
    if (link.startsWith("#")) return pathname === "/" ? link : `/${link}`;
    return link;
  };

    const navItems = baseItems.map(i => ({ ...i, link: resolveLink(i.link) }));

  return (
    <div className="relative w-full z-[10000]">
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
            className="mt-5 border z-[10000] border-orange-200 rounded-lg bg-white flex items-center justify-center"
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
