"use client"

import { Shield, Lock, Server, Key, Eye, CheckCircle } from "lucide-react"
import { WobbleCard } from "./wobble-card"

export default function SovereigntySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          SÉCURITÉ & SOUVERAINETÉ
        </div>
      </div>

      {/* Titre + description */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          Vos Données, <span className="text-orange-500">Protégées</span>
          <br />
          Et Souveraines
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Nous garantissons la pleine souveraineté de vos données avec un hébergement conforme (RGPD, ISO, SOC2…).
          Chaque interaction est chiffrée, et repose sur des standards de sécurité de niveau défense.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 w-full cursor-pointer">
        {/* Main feature card - spans full width on mobile, 2 cols on sm, 3 on lg */}

          

        {/* Cloud dédié card - spans full width on mobile, 2 cols on sm, 3 on lg */}
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[280px] bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-orange-500/20 border border-orange-500/30 sm:min-h-[300px] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
               <Shield className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-lg sm:text-xl font-semibold tracking-[-0.015em] text-gray-900">
               Vos Données, Protégées
<br/> Et Souveraines  
              </h3>
            </div>
            <p className="text-left text-sm sm:text-base text-gray-700 leading-relaxed">
            Nous assurons la souveraineté de vos données avec un hébergement conforme (RGPD, ISO, SOC 2). Toutes les interactions sont chiffrées, auditées et répondent à des normes de sécurité de niveau défense.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Protection 
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
              RGPD
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Traçabilité
              </span>
            </div>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[280px] sm:min-h-[300px] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 group relative overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Server className="text-orange-500" size={20} />
              </div>
              <h3 className="text-left text-balance text-lg sm:text-xl font-semibold tracking-[-0.015em] text-gray-900">
                Cloud Dédié
              </h3>
            </div>
            <p className="text-left text-sm sm:text-base text-gray-700 leading-relaxed">
              Déploiement hybride ou 100% local selon vos besoins de souveraineté. Architecture personnalisable et
              évolutive.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Hybride
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Local
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Évolutif
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Personnalisable
              </span>
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
                Chiffrement Avancé
              </h3>
            </div>
            <p className="text-left text-sm text-gray-700 leading-relaxed">
              AES-256, TLS 1.3 et chiffrement homomorphe pour une sécurité maximale.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                AES-256
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                TLS 1.3
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Homomorphe
              </span>
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
                Infrastructure Kubernetes
              </h3>
            </div>
            <p className="text-left text-sm text-gray-700 leading-relaxed">
              Architecture isolée et résiliente avec haute disponibilité garantie.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Kubernetes
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                99.9% SLA
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Isolé
              </span>
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
                Protection Données
              </h3>
            </div>
            <p className="text-left text-sm text-gray-700 leading-relaxed">
              Anonymisation et pseudonymisation automatiques selon les standards RGPD.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Anonymisation
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                RGPD
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Automatique
              </span>
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
                    surveillance continue
                  </h3>
                </div>
                <p className="text-left text-sm sm:text-base text-gray-700 leading-relaxed">
                  Contrôle d&apos;accès basé sur les rôles (RBAC) et surveillance continue des systèmes pour garantir une transparence totale.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 sm:w-5 sm:h-5 w-4 h-4" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">100% Conforme</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 sm:w-5 sm:h-5 w-4 h-4" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">Surveillance Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 sm:w-5 sm:h-5 w-4 h-4" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">Souverain</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 sm:p-4 transition-colors duration-300 ease-out">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                RBAC
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Transparence
              </span>
              <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white border border-orange-500 rounded-full text-orange-500 text-xs sm:text-sm font-medium transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                Conformité
              </span>
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}
