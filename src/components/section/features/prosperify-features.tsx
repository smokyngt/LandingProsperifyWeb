"use client"

import { useState } from "react"
import { Brain, BookOpen, Zap, Shield, Bot, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

const features = [
  {
    id: "precision",
    icon: Brain,
    shortTitleKey: "features.items.precision.shortTitle",
    titleKey: "features.items.precision.title",
    subtitleKey: "features.items.precision.subtitle",
    descriptionKey: "features.items.precision.description",
  },
  {
    id: "coverage",
    icon: BookOpen,
    shortTitleKey: "features.items.coverage.shortTitle",
    titleKey: "features.items.coverage.title",
    subtitleKey: "features.items.coverage.subtitle",
    descriptionKey: "features.items.coverage.description",
  },
  {
    id: "performance",
    icon: Zap,
    shortTitleKey: "features.items.performance.shortTitle",
    titleKey: "features.items.performance.title",
    subtitleKey: "features.items.performance.subtitle",
    descriptionKey: "features.items.performance.description",
  },
  {
    id: "governance",
    icon: Shield,
    shortTitleKey: "features.items.governance.shortTitle",
    titleKey: "features.items.governance.title",
    subtitleKey: "features.items.governance.subtitle",
    descriptionKey: "features.items.governance.description",
  },
  {
    id: "orchestration",
    icon: Bot,
    shortTitleKey: "features.items.orchestration.shortTitle",
    titleKey: "features.items.orchestration.title",
    subtitleKey: "features.items.orchestration.subtitle",
    descriptionKey: "features.items.orchestration.description",
  },
  {
    id: "differentiation",
    icon: Globe,
    shortTitleKey: "features.items.differentiation.shortTitle",
    titleKey: "features.items.differentiation.title",
    subtitleKey: "features.items.differentiation.subtitle",
    descriptionKey: "features.items.differentiation.description",
  },
]

export default function ProsperifyFeatures() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          {t("features.badge")}
        </div>
      </div>

      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          {t("features.title")} <br />  <span className="text-orange-500"> {t("features.titleHighlight")} </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          {t("features.subtitle")} </p>        </div>

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
                    className={`flex-shrink-0 snap-start p-3 sm:p-4 rounded-lg transition-all duration-300 w-[80px] sm:w-[140px] ${isActive
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
                        className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-600"
                          }`}
                      >
                        <span className="sm:hidden">{index + 1}</span>
                        <span className="hidden sm:inline">{t(feature.shortTitleKey)}</span>
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeTab === index ? "w-6 bg-orange-500" : "w-1.5 bg-gray-300"
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
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 cursor-pointer group ${isActive
                      ? "bg-orange-50 border-l-4 border-orange-500"
                      : "bg-white border-l-4 border-transparent hover:bg-gray-50"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 transition-colors duration-300 ${isActive ? "text-orange-500" : "text-gray-400 group-hover:text-orange-400"
                        }`}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"
                          }`}
                      >
                        {t(feature.titleKey)}
                      </h3>
                      <p
                        className={`text-sm transition-colors duration-300 ${isActive ? "text-orange-600" : "text-gray-400 group-hover:text-gray-600"
                          }`}
                      >
                        {t(feature.subtitleKey)}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Content */}
        <div className="relative min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[600px]">
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
                  {t(features[activeTab].titleKey)}
                </h3>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-orange-600 font-medium mb-4 sm:mb-6">
                  {t(features[activeTab].subtitleKey)}
                </p>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-pretty">
                  {t(features[activeTab].descriptionKey)}
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
