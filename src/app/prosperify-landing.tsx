"use client"

import { useEffect } from "react"
import { HeroScrollDemo } from "@/components/section/hero/HeroScrollDemo"
import { NavbarDemo } from "@/components/section/nav/NavbarDemo"
import SovereigntySection from "@/components/section/sovereignity/sovereignty-section"
import WorkflowPath from "@/components/section/integration/workflow-path"
import { WorkflowSection } from "@/components/section/workflow/workflow-section"
import ProductSection from "@/components/section/products/product-section"
import { ArchitectureDemo } from "@/components/section/architechture/architecture-demo"
import { ProsperifyFAQ } from "@/components/section/faq/prosperify-faq"
import ContactForm from "@/components/contactForm/contactForm"
import ProsperifyFeatures from "@/components/section/features/prosperify-features"
import { useTranslation } from "react-i18next"
import i18n from "@/lib/i18n"

interface ProsperifyLandingProps {
  lang?: string
}

const ProsperifyLanding = ({ lang }: ProsperifyLandingProps) => {

  const { t } = useTranslation()

  useEffect(() => {
    if (lang === "fr" || lang === "en") {
      i18n.changeLanguage(lang).catch(() => {
        // ignore
      })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale",
    )
    animateElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [lang])

  return (
    <>
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <div className="relative mt-1 w-full ">
      <NavbarDemo />
      </div>
      <div className="min-h-screen bg-transparent">
      <section
  id="accueil"
  className=" scroll-animate pt-6 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6  sm:mx-4 "
>
      {/* Hero Section */}
  <HeroScrollDemo />
</section>

{/* Workflow */}
<section id="workflow"className="scroll-animate py-12 sm:py-16 px-4 sm:px-6  mx-2 sm:mx-4 ">
      <WorkflowSection />
</section>

{/* Fonctionnalités */}
<section id="features" className="scroll-animate py-12 sm:py-16 px-4 sm:px-6  mx-2 sm:mx-4 mt-6 sm:mt-8 rounded-xl sm:rounded-2xl">
<ProsperifyFeatures />
</section>

{/* Offres */}
<section
        id="products"
        className="scroll-animate py-12 sm:py-16 px-4 sm:px-6  mx-2 sm:mx-4 mt-6 sm:mt-8 rounded-xl sm:rounded-2xl"
      >
        <ProductSection />
</section>

{/* Architecture */}
<section id="architecture" className="scroll-animate py-16 px-4 sm:px-6  mx-2 sm:mx-4 mt-6 sm:mt-8 rounded-xl sm:rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
            ARCHITECTURE
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
            {t("architecture.titlePrefix")} <br />Pour

            La <span className="text-orange-500">{t("architecture.titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("architecture.subtitle")}
          </p>
        </div>
        <ArchitectureDemo />
      </div>
</section>

{/* Souveraineté */}
<section id="sovereignty" className="scroll-animate py-12 sm:py-16 px-4 sm:px-6 bg-transparent mx-2 sm:mx-4 mt-6 sm:mt-8 rounded-xl sm:rounded-2xl">
            <SovereigntySection />
</section>

{/* Intégration */}
<section id="integration" className="scroll-animate py-12 sm:py-16 px-4 sm:px-6 bg- mx-2 sm:mx-4 mt-0 sm:mt-6 rounded-xl sm:rounded-2xl">
        <WorkflowPath />
</section>

      {/* FAQ Section */}
      <section id="faq" className=" scroll-animate py-12 sm:py-16 px-4 sm:px-6  mx-2 sm:mx-4 mt-6 sm:mt-8 rounded-xl sm:rounded-2xl">
        <ProsperifyFAQ />
      </section>

      <section id="contact" className="scroll-animate py-12 sm:py-16 px-4 sm:px-6  mx-2 sm:mx-4 mt-6 sm:mt-8 rounded-xl sm:rounded-2xl">
          <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
            {t("contact.badge")}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
            {t("contact.titleLine1")}
            <br />
            En Toute <span style={{ color: "#ff6a13" }}>{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
          <div  className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactForm />
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className=" scroll-animate py-8 sm:py-12 px-4 sm:px-6 mx-2 sm:mx-4 mt-6 sm:mt-8 mb-2 sm:mb-4 rounded-xl sm:rounded-2xl border-t border-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      
      {/* Logo + tagline */}
      <div className="col-span-2 md:col-span-1">
        <div className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#ff6a13" }}>
          Prosperify
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm">
          {t("footer.tagline")}
        </p>
      </div>

      {/* Product */}
      <div>
        <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.product")}</h3>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
          <li>
            <a href="#accueil" className="hover:text-primary transition-colors">
              {t("footer.links.home")}
            </a>
          </li>
          <li>
            <a href="#workflow" className="hover:text-primary transition-colors">
              {t("footer.links.workflow")}
            </a>
            
          </li>
          <li>
            <a href="#features" className="hover:text-primary transition-colors">
              {t("footer.links.features")}
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-primary transition-colors">
              {t("footer.links.products")}
            </a>
          </li>
          <li>
            <a href="#architecture" className="hover:text-primary transition-colors">
              {t("footer.links.architecture")}
            </a>
          </li>
          <li>
              <a href="#souveraineté" className="hover:text-primary transition-colors">
              {t("footer.links.sovereignty")}
            </a>
          </li>
          <li>
            <a href="#integration" className="hover:text-primary transition-colors">
              {t("footer.links.integration")}
            </a>
          </li>
          
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.support")}</h3>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
          
          <li>
            <a href="#faq" className="hover:text-primary transition-colors">
              {t("footer.links.faq")}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("footer.links.contact")}
            </a>
          </li>
          <li>
            <a href="/roadmap" className="hover:text-primary transition-colors">
              {t("footer.links.roadmap")}
            </a>
          </li>
        </ul>
      </div>

      {/* Légal */}
      <div>
        <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.legal")}</h3>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
          <li>
            <a href="#confidentialite" className="hover:text-primary transition-colors">
              {t("footer.links.privacy")}
            </a>
          </li>
          <li>
            <a href="#conditions" className="hover:text-primary transition-colors">
              {t("footer.links.terms")}
            </a>
          </li>
          <li>
            <a href="#rgpd" className="hover:text-primary transition-colors">
              {t("footer.links.rgpd")}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-100 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
        {t("footer.copyright")}
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/company/prosperify-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
    </> 
  )
}

export default ProsperifyLanding
