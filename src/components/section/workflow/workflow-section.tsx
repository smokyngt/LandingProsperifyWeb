"use client"

import { FileText, Upload, Bot, FileUp, Database } from "lucide-react"
import { AnimatedTabs } from "./animated-tabs"
import { Safari } from "../../ui/safari"

function WorkflowSection() {
  const workflowTabs = [
    {
      title: "Créer",
      value: "assistant",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 sm:p-6 bg-white border border-gray-200">
          <Safari url="prosperify.ai/assistants/create">
            <div className="p-4 sm:p-8 min-h-[450px]">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">Créer un Assistant</h3>
                <p className="text-sm sm:text-base text-gray-600">Configurez votre assistant spécialisé</p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Nom de l&apos;assistant</label>
                  <input
                    type="text"
                    value="Assistant Finance et Transaction"
                    className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Documents associés</label>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <FileText className="text-orange-500 flex-shrink-0" size={16} />
                      <span className="text-xs sm:text-sm text-gray-700 truncate">Rapport_Financier_Q4.pdf</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FileText className="text-orange-500 flex-shrink-0" size={16} />
                      <span className="text-xs sm:text-sm text-gray-700 truncate">Transactions_2024.xlsx</span>
                    </div>
                  </div>
                </div>

                <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm sm:text-base">
                  Créer l&apos;Assistant
                </button>
              </div>
            </div>
          </Safari>
        </div>
      ),
    },
    {
      title: "Unifier",
      value: "unify",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 sm:p-6 bg-white border border-gray-200">
          <Safari url="prosperify.ai/upload">
            <div className="p-4 sm:p-8 min-h-[450px]">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Upload className="text-orange-500" size={24} />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">Importez Vos Documents</h3>
                <p className="text-sm sm:text-base text-gray-600">Tous types de données : structurées ou non </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center hover:border-orange-300 transition-colors">
                <FileUp className="text-gray-400 mx-auto mb-3 sm:mb-4" size={32} />
                <p className="text-sm sm:text-base text-gray-600 mb-2">Glissez-déposez vos fichiers ici</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-0">
                  PDF, Word, Excel, PowerPoint, CSV, JSON...
                </p>
                <button className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm">
                  Parcourir les fichiers
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
                  <FileText className="text-orange-500 mx-auto mb-1" size={16} />
                  <span className="text-xs font-medium text-gray-700">PDF</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
                  <Database className="text-orange-500 mx-auto mb-1" size={16} />
                  <span className="text-xs font-medium text-gray-700">CSV</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
                  <FileText className="text-orange-500 mx-auto mb-1" size={16} />
                  <span className="text-xs font-medium text-gray-700">DOCX</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
                  <FileText className="text-orange-500 mx-auto mb-1" size={16} />
                  <span className="text-xs font-medium text-gray-700">JSON</span>
                </div>
              </div>
            </div>
          </Safari>
        </div>
      ),
    },

    {
      title: "Discuter",
      value: "response",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 sm:p-6 bg-white border border-gray-200">
          <Safari url="prosperify.ai/chat">
            <div className="flex flex-col sm:flex-row min-h-[500px]">
              {/* Chat Sidebar */}
              <div className="w-full sm:w-1/3 bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-200 p-3 sm:p-4 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Bot className="text-orange-500 flex-shrink-0" size={18} />
                  <span className="font-medium text-gray-900 text-sm sm:text-base truncate">Assistant Finance et Transaction</span>
                </div>

                {/* Search Input */}
                <div className="relative mb-2 sm:mb-3">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full pl-7 sm:pl-8 pr-3 py-1.5 sm:py-2 bg-gray-100 text-xs sm:text-sm border border-gray-300 rounded-lg outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path d="m21 21-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                  </svg>
                </div>

                {/* Bouton Nouveau Chat */}
                <button className="relative w-full pl-7 sm:pl-8 pr-3 mb-2 py-1.5 sm:py-2 bg-gray-100 text-gray-500 text-xs sm:text-sm border border-gray-300 rounded-lg outline-none flex items-center">
                  Nouveau Chat
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                  </svg>
                </button>

                {/* Divider */}
                <div className="flex items-center my-2 sm:my-3">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="px-2 text-xs text-gray-400 font-medium">Historique</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Liste des fichiers/conversations */}
                <div className="space-y-1 sm:space-y-2 flex-1 overflow-y-auto">
                  <div className="bg-gray-100 flex items-center justify-between text-gray-900 border-[0.5px] border-gray-400 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs cursor-pointer transition-colors">
  <span className="truncate">Contrat Verdi</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-ellipsis-vertical"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
</div>
                 <div className="hover:bg-gray-100 flex items-center justify-between text-gray-500 border border-gray-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs cursor-pointer transition-colors">
  <span className="truncate">Rapport Financier Q4</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-ellipsis-vertical"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
</div>

<div className="hover:bg-gray-100 flex items-center justify-between text-gray-500 border border-gray-200 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs cursor-pointer transition-colors">
  <span className="truncate">Performance Ventes Q2</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-ellipsis-vertical"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
</div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="flex-1 flex flex-col min-h-[300px]">
                <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto">
                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 max-w-xs">
                    <p className="text-xs sm:text-sm text-gray-700">
                      Bonjour ! Je peux vous aider à rechercher dans vos documents PDF indexés. Posez-moi une question
                      sur vos documents.
                    </p>
                  </div>

                  <div className="bg-black text-white rounded-lg p-2 sm:p-3 max-w-xs ml-auto">
                    <p className="text-xs sm:text-sm">
                      Quelle est la durée initiale du contrat Verdi et est-il renouvelable ?
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-2 sm:p-3 max-w-sm sm:max-w-md">
                    <p className="text-xs sm:text-sm text-gray-700">
                      D&apos;après le document <span className="font-medium">&quot;Contrat Verdi.pdf&quot;</span>, page 10, la durée
                      initiale du contrat est de <span className="bg-yellow-200 px-1 rounded">trois (3) ans</span>. Il
                      pourra être renouvelé par accord exprès et écrit des Parties.
                    </p>

                    {/* Source */}
                    <div className="mt-2 sm:mt-3 border-t border-gray-200 pt-2 flex justify-between">
                      <div
                        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-orange-600 transition-colors cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                        <span className="hidden sm:inline">Ouvrir la source (page 10)</span>
                        <span className="sm:hidden">Source</span>
                     </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-3 sm:p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Posez une question..."
                      className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm"
                    />
                    <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                        <path d="m21.854 2.147-10.94 10.939" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Safari>
        </div>
      ),
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          WORKFLOW
        </div>
      </div>

      {/* Titre + description */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          Un Workflow <span className="text-orange-500">Simplifié</span>
          <br />
          Pour Vos Équipes
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Moins de clics, plus d&apos;impact. Gagnez du temps à chaque étape de votre gestion documentaire.
        </p>
      </div>

      <div className="h-[35rem] sm:h-[45rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-center justify-start">
        <AnimatedTabs
          tabs={workflowTabs}
          containerClassName="mb-4 sm:mb-8 w-full"
          activeTabClassName="bg-orange-500 text-white"
          tabClassName="px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors hover:text-orange-500 whitespace-nowrap"
          contentClassName="mt-4 sm:mt-8 w-full h-full"
        />
      </div>
    </div>
  )
}

export { WorkflowSection }
