"use client"
import { Safari } from "../../ui/safari"
import { Button } from "./ButtonComponent"
import { Input } from "./input"
import { ScrollArea } from "./ScrollArea"
import { Badge } from "./Badge"
import Logo from "../../../../public/logooo.png"
import {
  FileText,
  Search,
  Filter,
  History,
  Settings,
  MessageSquare,
  Send,
  Paperclip,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

export function AIChatInterface() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [pdfPanelOpen, setPdfPanelOpen] = useState(true)

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Safari url="prosperify.ai/assistant" className="w-full h-[600px] ">

        <div
          className="flex h-full bg-white transform scale-75 origin-top-left"
          style={{ width: "133.33%", height: "133.33%" }}
        >
          

          <div
            className={`
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 cursor-pointer md:relative absolute inset-y-0 left-0 z-20
            flex flex-col w-64 bg-gray-50 border-r border-gray-200
            transition-transform duration-300 ease-in-out
          `}
          >
            <div className="md:hidden absolute top-4 right-4">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <img src={Logo.src || "/placeholder.svg"} alt="Logo" className="w-30 h-18" />
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-2 cursor-pointer">
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm cursor-pointer">
                <MessageSquare className="w-4 h-4" />
                Nouvelle conversation
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm cursor-pointer">
                <Search className="w-4 h-4" />
                Rechercher
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm cursor-pointer">
                <Filter className="w-4 h-4" />
                Filtres
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm cursor-pointer">
                <History className="w-4 h-4" />
                Historique
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                <Settings className="w-4 h-4" />
                Paramètres
              </Button>
            </div>

            {/* Conversations */}
            <div className=" p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">CONVERSATIONS</h3>
              <div className="space-y-2">
                <div className="p-2 rounded bg-gray-200 cursor-pointer">
                  <div className="text-sm font-medium text-gray-900">contrat verdi</div>
                </div>
                <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                  <div className="text-sm text-gray-700">Budget Q4</div>
                </div>
                <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                  <div className="text-sm text-gray-700">Procédures RH</div>
                </div>
                <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
                  <div className="text-sm text-gray-700">Rapport mensuel</div>
                </div>
              </div>
            </div>

            {/* Assistant Integration */}
           <div className="p-4 border-t border-gray-200 ">
  <div className="text-xs text-green-600 bg-green-100 p-1 font-bold mb-1 w-fit ">Connecté en tant que</div>
  <div className="flex  gap-2 text-sm text-gray-600">
    <div className=" bg-purple-100 rounded flex items-center justify-center font-semibold text-purple-600">
      <span className="text-purple-600 text-xs px-1">ED</span>
    </div>
    <span>Eric Dupont</span>
  </div>
  <div className="text-xs text-gray-500  font-bold">
    Contrôleur Financier & Juridique
  </div>
</div>
          </div>

          {sidebarOpen && (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
              onClick={() => setSidebarOpen(false)}
            />
          )}
      <div className="h-full flex flex-col flex-1">
          <div
            className={`
            flex-1 flex flex-col h-full min-h-[1000px] min-w-0
            ${!pdfPanelOpen ? "max-w-full" : "lg:max-w-none"}
          `}
          >
            {/* Header chat */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-medium text-gray-900 truncate">Assistant Transaction & Juridique</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setPdfPanelOpen(!pdfPanelOpen)}
                    className="lg:hidden"
                  >
                    {pdfPanelOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                  </Button>
                
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4  max-h-[500px]">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-md border border-gray-200">
                  <p className="text-sm text-gray-800">
                    Bonjour ! Je peux vous aider à rechercher dans vos documents PDF indexés. Posez-moi une question sur
                    vos documents.
                  </p>
                </div>
                                  <div className="text-xs text-gray-500 mt-2">16:56</div>

                <div className="bg-black text-white rounded-lg p-3 max-w-md ml-auto">
                  <p className="text-sm">Quelle est la durée initiale du contrat Verdi et est-il renouvelable ?</p>
                  
                </div>
              <div className="text-xs text-gray-500 mt-2">16:57</div>
                <div className="bg-gray-100 rounded-lg border border-gray-200 p-3 max-w-lg">
                  <p className="text-sm text-gray-800">
                    D'après le document <span className="font-medium">"Contrat Verdi.pdf"</span> (article 2, page 10),
                    le présent contrat entre en vigueur à la date de signature pour une durée initiale de
                    <span className="bg-yellow-200 px-1 rounded">trois (3) ans</span>. Il pourra être renouvelé par
                    accord exprès et écrit des Parties.
                  </p>

                  <div className="mt-2 sm:mt-3 border-t border-gray-200 pt-2 flex justify-between">
                    <div className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-orange-600 transition-colors cursor-pointer">
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
                      <span className="hidden sm:inline">Ouvrir Contrat_Verdi.pdf (page 10)</span>
                      <span className="sm:hidden"> Contrat_Verdi.pdf (page 10)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">16:57</div>
              
            </ScrollArea>
<div className="p-4 border-t border-gray-200 bg-white  shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex-1 relative min-w-0">
                  <Input
                  readOnly
                    placeholder="Posez une question sur vos documents... (Vous pouvez glisser-déposer des PDFs)"
                    className="pr-10"
                  />
                  <Button size="sm" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="sm" className="bg-orange-600 cursor-pointer flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Appuyez sur Entrée pour envoyer, Maj+Entrée pour une nouvelle ligne
              </div>
            </div>
            {/* Input zone */}
            </div>
            
          </div>

          <div
         className={`
    ${pdfPanelOpen ? "translate-x-0" : "translate-x-full"}
    xl:translate-x-0 xl:relative lg:relative
    right-0 z-20
    w-full sm:w-96 xl:w-96 border-l border-border bg-background flex-col
    transition-transform duration-300 ease-in-out
    hidden lg:flex
  `}
          >
            <div className="lg:hidden absolute top-4 left-4 z-10">
              <Button variant="ghost" size="sm" onClick={() => setPdfPanelOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Header PDF */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center justify-around m-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    <FileText className="w-3 h-3 m-1" />
                    Contrat_Verdi.pdf
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    <FileText className="w-3 h-3 mr-1" />
                    Rapport_Financier_Q4.pdf
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <Button size="sm" variant="outline">
                    <Search className="w-4 h-4 m-1" />
                  </Button>
                  <span className="text-sm">100%</span>
                  <Button size="sm" variant="outline">
                    <ZoomIn className="w-4 h-4 m-1" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <ZoomOut className="w-4 h-4 m-1" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <RotateCcw className="w-4 h-4 m-1" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 m-1" />
                  </Button>
                </div>
                <Button size="sm" variant="outline" className="hidden sm:flex bg-transparent">
                  Rechercher...
                </Button>
              </div>
            </div>

            {/* Contenu PDF */}
            <div className="flex-1 p-4 bg-gray-50 overflow-auto">
              <div className="bg-white rounded border p-4 h-full">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-lg">Contrat Verdi.pdf</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>Précédent</span>
                    <span>Page 1 sur 15</span>
                    <span>Suivant</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                    <div>
                    <p className="font-semibold">ARTICLE 1 – OBJET DU CONTRAT :</p>
                    <p className="text-gray-700">
                      Le présent Contrat a pour objet d'organiser la collaboration entre VERDI et le PARTENAIRE,
                      incluant la définition de périmètre de recherche, la mise en commun de moyens matériels et
                      humains, la production de rapports, ainsi que la valorisation des résultats obtenus.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 2 – DURÉE :</p>
                    <p className="text-gray-700">
                      Le présent Contrat entre en vigueur à la date de signature pour{" "}
                      une durée initiale de <span className="bg-yellow-200">trois (3) ans</span>. <span className="bg-green-200">Il pourra être renouvelé par accord exprès et écrit des
                        Parties. En cas de non-renouvellement, les obligations relatives à la confidentialité et à la
                        propriété intellectuelle resteront en vigueur.</span>
                    
                      Cette disposition constitue une garantie de continuité, même au terme de la collaboration.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 3 – DÉFINITIONS :</p>
                    <p className="text-gray-700">
                      « Résultats » désigne toute donnée, méthode, prototype, logiciel, rapport ou publication générée.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 4 – OBLIGATIONS DES PARTIES :</p>
                    <p className="text-gray-700">
                      VERDI s'engage à mettre à disposition ses compétences scientifiques, ses laboratoires et son
                      personnel qualifié.{" "}
                      <span className="bg-yellow-200">
                        De plus, les principes d'éthique scientifique et de sécurité devront être respectés à tout
                        moment.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Safari>
    </div>
  )
}
