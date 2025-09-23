"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "../../../lib/utils"

const faqData = [
  {
    question: "Mes données sont-elles accessibles à des tiers ou à vos équipes ?",
    answer: "Non. Vos données sont isolées, chiffrées et jamais partagées. Même nos équipes n'y ont pas accès.",
  },
  {
    question: "L'IA apprend-elle en continu à partir de mes données ?",
    answer:
      "Non. Vos données ne sont jamais utilisées pour entraîner nos modèles. Cependant, vous pouvez ajouter ou mettre à jour vos documents à tout moment pour enrichir les réponses de votre assistant.",
  },
  {
    question: "Est-ce adapté aux documents confidentiels ou juridiques ?",
    answer:
      "Oui. Prosperify est conçu pour traiter des documents sensibles en toute sécurité, dans le respect des normes légales.",
  },
  {
    question: "Combien d'utilisateurs peuvent utiliser Prosperify en même temps ?",
    answer: "Autant que vous le souhaitez. Le système est pensé pour les équipes, quelle que soit leur taille.",
  },
  {
    question: "Combien de temps faut-il pour déployer Prosperify dans mon entreprise ?",
    answer: "Le délai dépend surtout de vous : une fois vos documents prêts, le déploiement prend 2 à 3 jours.",
  },
  {
    question: "Faut-il former les utilisateurs ?",
    answer:
      "Non. L'interface est intuitive et simple à prendre en main. Quelques minutes suffisent pour être opérationnel. Un accompagnement est également prévu pour vous assurer une bonne prise en main et adopter les meilleures pratiques dès le départ.",
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
    <div className="border border-gray-100 rounded-lg bg-white hover:border-orange-200 transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-lg group"
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
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
            FAQ
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
            Questions <span className="text-orange-500">Fréquemment</span>
            <br />
            Posées
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur Prosperify et la sécurité de vos données
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">Vous avez d&apos;autres questions ?</p>
          <button className="bg-orange-500 cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
            <a href="#contact">Contactez notre équipe</a>
          </button>
        </div>
      </div>
  
  )
}
