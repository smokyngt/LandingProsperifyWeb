"use client"

import { Shield, Lock, Server, Key, Eye, CheckCircle } from "lucide-react"
import { WobbleCard } from "./wobble-card"
import { useTranslation } from "react-i18next"

export default function SovereigntySection() {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          {t("sovereignty.badge")}
        </div>
      </div>

      {/* Titre + description */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          {t("sovereignty.titlePrefix")} <span className="text-orange-500">{t("sovereignty.titleHighlight")}</span>
          <br />
          {t("sovereignty.titleSuffix")}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          {t("sovereignty.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 w-full cursor-pointer">
        {/* Main feature card - spans full width on mobile, 2 cols on sm, 3 on lg */}



        {/* Cloud dédié card - spans full width on mobile, 2 cols on sm, 3 on lg */}
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[240px] bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-orange-500/20 border border-orange-500/30 sm:min-h-[280px] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-lg sm:text-xl font-semibold tracking-[-0.015em] text-gray-900">
                {t("sovereignty.mainCard.titleLine1")}
                <br /> {t("sovereignty.mainCard.titleLine2")}
              </h3>
            </div>
            <p className="text-left text-base sm:text-base text-gray-700 leading-relaxed">
              {t("sovereignty.mainCard.description")}
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out w-full">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t("sovereignty.mainCard.chips.0") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.mainCard.chips.0")}
                </span>
              )}
              {t("sovereignty.mainCard.chips.1") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.mainCard.chips.1")}
                </span>
              )}
              {t("sovereignty.mainCard.chips.2") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.mainCard.chips.2")}
                </span>
              )}
            </div>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[240px] sm:min-h-[280px] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Server className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-lg sm:text-xl font-semibold tracking-[-0.015em] text-gray-900">
                {t("sovereignty.cloud.title")}
              </h3>
            </div>
            <p className="text-left text-base sm:text-base text-gray-700 leading-relaxed">
              {t("sovereignty.cloud.description")}            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t("sovereignty.cloud.chips.0") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.cloud.chips.0")}
                </span>
              )}
              {t("sovereignty.cloud.chips.1") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.cloud.chips.1")}
                </span>
              )}
              {t("sovereignty.cloud.chips.2") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.cloud.chips.2")}
                </span>
              )}
              {t("sovereignty.cloud.chips.3") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.cloud.chips.3")}
                </span>
              )}
            </div>
          </div>
        </WobbleCard>

        {/* Chiffrement card */}
        <WobbleCard containerClassName="col-span-1 sm:col-span-1 lg:col-span-2 min-h-[220px] sm:min-h-[250px] bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Lock className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-base sm:text-lg font-semibold tracking-[-0.015em] text-gray-900">
                {t("sovereignty.encryption.title")}
              </h3>
            </div>
            <p className="text-left text-base text-gray-700 leading-relaxed">
              {t("sovereignty.encryption.description")}
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t("sovereignty.encryption.chips.0") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.encryption.chips.0")}
                </span>
              )}
              {t("sovereignty.encryption.chips.1") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.encryption.chips.1")}
                </span>
              )}
              {t("sovereignty.encryption.chips.2") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.encryption.chips.2")}
                </span>
              )}
            </div>
          </div>
        </WobbleCard>

        {/* Infrastructure Kubernetes card */}
        <WobbleCard containerClassName="col-span-1 sm:col-span-1 lg:col-span-2 min-h-[220px] sm:min-h-[250px] bg-gradient-to-br from-gray-50 to-white border border-gray-200 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Key className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-base sm:text-lg font-semibold tracking-[-0.015em] text-gray-900">
                {t("sovereignty.kubernetes.title")}
              </h3>
            </div>
            <p className="text-left text-base text-gray-700 leading-relaxed">
              {t("sovereignty.kubernetes.description")}            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t("sovereignty.kubernetes.chips.0") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.kubernetes.chips.0")}
                </span>
              )}
              {t("sovereignty.kubernetes.chips.1") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.kubernetes.chips.1")}
                </span>
              )}
              {t("sovereignty.kubernetes.chips.2") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.kubernetes.chips.2")}
                </span>
              )}
            </div>
          </div>
        </WobbleCard>

        {/* Protection des données */}
        <WobbleCard containerClassName="col-span-1 sm:col-span-1 lg:col-span-2 min-h-[220px] sm:min-h-[250px] bg-gradient-to-br from-orange-500/5 to-orange-500/10 border border-orange-500/20 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Shield className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-base sm:text-lg font-semibold tracking-[-0.015em] text-gray-900">
                {t("sovereignty.dataProtection.title")}
              </h3>
            </div>
            <p className="text-left text-base text-gray-700 leading-relaxed">
              {t("sovereignty.dataProtection.description")}
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t("sovereignty.dataProtection.chips.0") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.dataProtection.chips.0")}
                </span>
              )}
              {t("sovereignty.dataProtection.chips.1") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.dataProtection.chips.1")}
                </span>
              )}
              {t("sovereignty.dataProtection.chips.2") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.dataProtection.chips.2")}
                </span>
              )}
            </div>
          </div>
        </WobbleCard>

        {/* Bottom spanning card - full width on all screens */}
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-6 bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-orange-500/20 border border-orange-500/30 min-h-[180px] sm:min-h-[200px] group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6">
              <div className="w-full lg:max-w-md">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Eye className="text-orange-500" size={20} />
                  </div>
                  <h3 className="text-left text-balance text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.015em] text-gray-900">
                    {t("sovereignty.supervision.title")}
                  </h3>
                </div>
                <p className="text-left text-base sm:text-base text-gray-700 leading-relaxed">
                  {t("sovereignty.supervision.description")}                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 sm:w-5 sm:h-5 w-4 h-4" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{t("sovereignty.supervision.badges.0")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 sm:w-5 sm:h-5 w-4 h-4" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{t("sovereignty.supervision.badges.1")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 sm:w-5 sm:h-5 w-4 h-4" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{t("sovereignty.supervision.badges.2")}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t("sovereignty.supervision.chips.0") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.supervision.chips.0")}
                </span>
              )}
              {t("sovereignty.supervision.chips.1") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.supervision.chips.1")}
                </span>
              )}
              {t("sovereignty.supervision.chips.2") && (
                <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  {t("sovereignty.supervision.chips.2")}
                </span>
              )}
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}
