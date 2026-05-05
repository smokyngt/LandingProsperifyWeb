"use client"

import { 
  Cloud, 
  Database, 
  Server, 
  Rocket, 
  Settings, 
  ShieldCheck, 
  Home, 
  Brain, 
  Scale, 
  Building, 
  Unlink, 
  User, 
  SlidersHorizontal,
  Lock
} from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ProductSection() {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto">
      {/* Badge optionnel (déjà dans votre code) */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          {t("products.badge")} 
        </div>
      </div>

      {/* Titre et sous-titre */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight tracking-tight">
          {t("products.titlePrefix")} {t("products.titleMiddle")} <span className="text-orange-500">{t("products.titleHighlight")}</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          {t("products.subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        
        {/* ── Card 1 : Cloud dédié ── */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 xl:p-12 border border-gray-200 shadow-sm flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-orange-300 transition-all duration-500 ease-out group cursor-pointer relative z-10 hover:z-20">
          {/* Recommended Badge */}
          <div className="absolute -top-3 right-6">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:bg-orange-600 transition-colors duration-300 shadow-sm">
              {t("products.offers.0.badge")}
            </span>
          </div>

          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#fff7ed] border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
            <Cloud className="text-orange-500 w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">{t("products.offers.0.title")}</h3>
          <div className="w-8 h-[2px] bg-orange-400 mb-8 rounded-full"></div>
          
          <div className="space-y-5 w-full mt-auto">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <Server className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.0.features.0")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <Rocket className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.0.features.1")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <Settings className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.0.features.2")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.0.features.3")}</span>
            </div>
          </div>
        </div>

        {/* ── Card 2 : Hybride ── */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 xl:p-12 border border-gray-200 shadow-sm flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-gray-300 transition-all duration-500 ease-out group cursor-pointer relative z-10 hover:z-20">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#fff7ed] border border-orange-200 flex items-center justify-center mb-6 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
            <Database className="text-orange-500 w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">{t("products.offers.1.title")}</h3>
          <div className="w-8 h-[2px] bg-orange-400 mb-8 rounded-full"></div>
          
          <div className="space-y-5 w-full mt-auto">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <Home className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.1.features.0")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <Brain className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.1.features.1")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.1.features.2")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
                <Scale className="text-orange-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.1.features.3")}</span>
            </div>
          </div>
        </div>

        {/* ── Card 3 : 100% Local ── */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 xl:p-12 border border-green-500 shadow-md flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-green-600 transition-all duration-500 ease-out group cursor-pointer relative z-10 hover:z-20">
          {/* Secured Badge */}
          <div className="absolute -top-3 right-6">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300 shadow-sm">
              {t("products.offers.2.badge")}
            </span>
          </div>

          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
            <Lock className="text-green-500 w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-green-500 mb-8 group-hover:text-green-600 transition-colors duration-300">{t("products.offers.2.title")}</h3>
          
          <div className="space-y-5 w-full mt-auto">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <Building className="text-green-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.2.features.0")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <Unlink className="text-green-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.2.features.1")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <User className="text-green-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.2.features.2")}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <SlidersHorizontal className="text-green-500" size={16} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("products.offers.2.features.3")}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}