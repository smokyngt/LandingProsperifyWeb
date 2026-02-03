"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "../../../lib/utils"
import Script from "next/script"
import { useTranslation } from "react-i18next"

const faqData = [
  {
    questionKey: "faq.items.0.question",
    answerKey: "faq.items.0.answer",
  },
  {
    questionKey: "faq.items.1.question",
    answerKey: "faq.items.1.answer",
  },
  {
    questionKey: "faq.items.2.question",
    answerKey: "faq.items.2.answer",
  },
  {
    questionKey: "faq.items.3.question",
    answerKey: "faq.items.3.answer",
  },
  {
    questionKey: "faq.items.4.question",
    answerKey: "faq.items.4.answer",
  },
  {
    questionKey: "faq.items.5.question",
    answerKey: "faq.items.5.answer",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-100 rounded-lg bg-white hover:border-orange-200 transition-all duration-200 ">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-lg group cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 text-balance pr-6 group-hover:text-orange-600 transition-colors duration-200">
          {question}
        </h3>
        <ChevronDownIcon
          className={cn(
            "h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0 group-hover:text-orange-500",
            isOpen && "rotate-180 text-orange-500",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 pb-5 pt-1">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function ProsperifyFAQ() {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item, index) => ({
      "@type": "Question",
      name: t(`faq.items.${index}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`faq.items.${index}.answer`),
      },
    })),
  }

  return (
    <>
    <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

    
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
            {t("faq.badge")}
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
            {t("faq.titleLine1")} <span className="text-orange-500">{t("faq.titleHighlight")}</span>
            <br />
            {t("faq.titleLine2")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto ">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={t(item.questionKey)}
              answer={t(item.answerKey)}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
  </>
  )
}
