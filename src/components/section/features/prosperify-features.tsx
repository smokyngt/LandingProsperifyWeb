"use client"

import { useState } from "react"
import { Brain, BookOpen, Zap, Shield, Bot, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    id: "precision",
    icon: Brain,
    title: "Précision & Confiance",
    shortTitle: "Précision",
    subtitle: "Citations phrase par phrase",
    description:
      "Réponses reliées à la phrase exacte du document (page, tableau, figure inclus). Signalement automatique des zones d'incertitude pour plus de transparence.",
  },
  {
    id: "coverage",
    icon: BookOpen,
    title: "Couverture documentaire",
    shortTitle: "Couverture",
    subtitle: "Analyse multimodale",
    description:
      "Analyse multimodale complète : texte, tableaux, figures, visuels. Traitement unifié des données structurées et non structurées.",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Performance & Expérience",
    shortTitle: "Performance",
    subtitle: "Résultats en temps réel",
    description:
      "Recherches exécutées en parallèle sur les sources pertinentes. Résultats affichés progressivement en temps réel, étape par étape.",
  },
  {
    id: "governance",
    icon: Shield,
    title: "Gouvernance & Isolation",
    shortTitle: "Gouvernance",
    subtitle: "Cloisonnement strict",
    description:
      "Cloisonnement strict par assistant : aucun partage de documents entre équipes sans autorisation explicite. Contrôles de rôle précis (qui peut importer, qui peut consulter, etc.).",
  },
  {
    id: "Orchestration",
    icon: Bot,
    title: "Orchestration agentique",
    shortTitle: "Intelligence",
    subtitle: "Auto-correction proactive",
    description:
      "L'assistant évalue la qualité des résultats avant de produire une réponse. Auto-correction, relance et interaction proactive en cas d'ambiguïté. Validation renforcée : chaque réponse est enrichie de citations phrase-par-phrase et vérifiée.",
  },
  {
    id: "differentiation",
    icon: Globe,
    title: "Différenciation stratégique",
    shortTitle: "Souveraineté",
    subtitle: "Solution européenne souveraine",
    description:
      "Alternative européenne souveraine face aux solutions américaines. Bien plus qu'une recherche textuelle : une intelligence documentaire complète et vérifiable.",
  },
]

export default function ProsperifyFeatures() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
           FONCTIONNALITÉS
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          Une Intelligence Documentaire <br />  <span className="text-orange-500"> Tout-en-Un </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
Une plateforme unifiée qui transforme vos documents en insights exploitables, avec précision et gouvernance. </p>        </div>

        {/* Tabs Layout */}
        <div className="lg:grid lg:grid-cols-[400px_1fr] lg:gap-12 xl:gap-16">
          {/* Left: Tab List */}
          <div className="mb-8 lg:mb-0">
            {/* Mobile & Tablet: Horizontal scrollable tabs */}
            <div className="relative lg:hidden">
              <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  const isActive = activeTab === index

                  return (
                    <button
                      key={feature.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex-shrink-0 snap-start p-3 sm:p-4 rounded-lg transition-all duration-300 w-[80px] sm:w-[140px] ${
                        isActive
                          ? "bg-orange-50 border-2 border-orange-500"
                          : "bg-white border-2 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2">
                        <div
                          className={`transition-colors duration-300 ${isActive ? "text-orange-500" : "text-gray-400"}`}
                        >
                          <Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
                        </div>
                        {/* Show number on mobile, short title on tablet */}
                        <div
                          className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                            isActive ? "text-gray-900" : "text-gray-600"
                          }`}
                        >
                          <span className="sm:hidden">{index + 1}</span>
                          <span className="hidden sm:inline">{feature.shortTitle}</span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Scroll indicator dots */}
              <div className="flex justify-center gap-1.5 mt-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTab === index ? "w-6 bg-orange-500" : "w-1.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Vertical tabs */}
            <div className="hidden lg:block space-y-2">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isActive = activeTab === index

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? "bg-orange-50 border-l-4 border-orange-500"
                        : "bg-white border-l-4 border-transparent hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 transition-colors duration-300 ${
                          isActive ? "text-orange-500" : "text-gray-400 group-hover:text-orange-400"
                        }`}
                      >
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                            isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            isActive ? "text-orange-600" : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        >
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="h-full flex flex-col justify-center bg-gradient-to-br from-orange-50/30 to-white rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200">
                  {/* Icon */}
                  <div className="mb-6 sm:mb-8">
                    {(() => {
                      const Icon = features[activeTab].icon
                      return <Icon className="text-orange-500" size={48} strokeWidth={1.5} />
                    })()}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
                    {features[activeTab].title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base sm:text-lg text-orange-600 font-medium mb-4 sm:mb-6">
                    {features[activeTab].subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-pretty">
                    {features[activeTab].description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-orange-200">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-orange-500 font-semibold">{String(activeTab + 1).padStart(2, "0")}</span>
                      <span>/</span>
                      <span>{String(features.length).padStart(2, "0")}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
  )
}
