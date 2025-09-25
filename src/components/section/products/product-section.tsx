"use client"

import { Cloud, Layers, Server, Check } from "lucide-react"

export default function SovereigntySection() {
  return (
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
           NOS OFFRES
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
            Une Solution, Trois Niveaux De <span className="text-orange-500">Contrôle</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Choisissez le niveau de contrôle qui vous convient : cloud sécurisé, solution hybride ou déploiement local.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cloud Dédié Card - Recommended */}
          <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-orange-300 transition-all duration-500 ease-out relative group cursor-pointer">
            {/* Recommended Badge */}
            <div className="absolute -top-3 right-6">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:bg-orange-600 transition-colors duration-300">
                RECOMMANDÉ
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
                Cloud Dédié
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Solution <span className="font-semibold">entièrement hébergée</span> dans le cloud avec une
                infrastructure dédiée pour une <span className="font-semibold">performance optimale</span> et une{" "}
                <span className="font-semibold">sécurité renforcée</span>.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Infrastructure dédiée haute performance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Sécurité et conformité garanties</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Maintenance et mises à jour automatiques</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Scalabilité instantanée</span>
              </div>
            </div>
          </div>

          {/* Hybride Card */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-gray-300 transition-all duration-500 ease-out group cursor-pointer">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                <Layers className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                Hybride
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold">Modèle IA chez nous</span>, vos données et infrastructure restent chez
                vous. Le parfait équilibre entre <span className="font-semibold">innovation</span> et{" "}
                <span className="font-semibold">contrôle</span>.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Vos données restent sur votre infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Modèle IA hébergé et maintenu par nos soins</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Conformité réglementaire maximale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-600" size={12} />
                </div>
                <span className="text-gray-700">Contrôle total de vos informations</span>
              </div>
            </div>
          </div>

          {/* 100% Local Card - Secured */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-sm hover:shadow-2xl hover:scale-105 hover:border-green-300 transition-all duration-500 ease-out relative group cursor-pointer">
            {/* Secured Badge */}
            <div className="absolute -top-3 right-6">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold group-hover:bg-green-600 transition-colors duration-300">
                SÉCURITÉ MAXIMALE
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
                100% Local
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Solution <span className="font-semibold">entièrement déployée</span> sur votre infrastructure.
                <span className="font-semibold"> Souveraineté totale</span> de vos données avec une{" "}
                <span className="font-semibold">autonomie complète</span>.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500" size={12} />
                </div>
                <span className="text-gray-700">Déploiement sur votre infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 ">
                  <Check className="text-green-500" size={12} />
                </div>
                <span className="text-gray-700">Souveraineté totale des données</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500" size={12} />
                </div>
                <span className="text-gray-700">Aucune dépendance externe</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-green-500" size={12} />
                </div>
                <span className="text-gray-700">Personnalisation maximale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
