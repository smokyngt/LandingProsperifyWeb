"use client"

import { Cloud, Layers, Server, Check } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SovereigntySection() {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          {t("products.badge")}
        </div>
      </div>

      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          {t("products.titlePrefix")}<br /> {t("products.titleMiddle")} <span className="text-orange-500">{t("products.titleHighlight")}</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          {t("products.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Cloud Dédié Card - Recommended */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-orange-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-orange-300 transition-all duration-500 ease-out relative group cursor-pointer">
          {/* Recommended Badge */}
          <div className="absolute -top-3 right-6">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:bg-orange-600 transition-colors duration-300">
              {t("products.offers.0.badge")}
            </span>
          </div>

          <div className="mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
              <Cloud
                className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300"
                size={28}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
              {t("products.offers.0.title")}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t("products.offers.0.description.part1")} <span className="font-semibold">{t("products.offers.0.description.highlight1")}</span> {t("products.offers.0.description.part2")} {" "}
              <span className="font-semibold">{t("products.offers.0.description.highlight2")}</span> {t("products.offers.0.description.part3")} {" "}
              <span className="font-semibold">{t("products.offers.0.description.highlight3")}</span>.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.0.features.0")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.0.features.1")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.0.features.2")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.0.features.3")}</span>
            </div>
          </div>
        </div>

        {/* Hybride Card */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-gray-300 transition-all duration-500 ease-out group cursor-pointer">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
              <Layers className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
              {t("products.offers.1.title")}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              <span className="font-semibold">{t("products.offers.1.description.highlight1")}</span> {t("products.offers.1.description.part1")} {" "}
              <span className="font-semibold">{t("products.offers.1.description.highlight2")}</span> {t("products.offers.1.description.part2")} {" "}
              <span className="font-semibold">{t("products.offers.1.description.highlight3")}</span>.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.1.features.0")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.1.features.1")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.1.features.2")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-600" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.1.features.3")}</span>
            </div>
          </div>
        </div>

        {/* 100% Local Card - Secured */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-green-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-green-300 transition-all duration-500 ease-out relative group cursor-pointer">
          {/* Secured Badge */}
          <div className="absolute -top-3 right-6">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300">
              {t("products.offers.2.badge")}
            </span>
          </div>

          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
              <Server
                className="text-green-500 group-hover:text-green-600 transition-colors duration-300"
                size={28}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
              {t("products.offers.2.title")}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {t("products.offers.2.description.part1")} <span className="font-semibold">{t("products.offers.2.description.highlight1")}</span> {t("products.offers.2.description.part2")} {" "}
              <span className="font-semibold">{t("products.offers.2.description.highlight2")}</span> {t("products.offers.2.description.part3")} {" "}
              <span className="font-semibold">{t("products.offers.2.description.highlight3")}</span>.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-500" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.2.features.0")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                <Check className="text-green-500" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.2.features.1")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-500" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.2.features.2")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-green-500" size={12} />
              </div>
              <span className="text-gray-700">{t("products.offers.2.features.3")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
