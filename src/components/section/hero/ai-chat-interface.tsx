"use client"
import { Safari } from "../../ui/safari"
import { Button } from "./ButtonComponent"
import { Input } from "./input"
import { ScrollArea } from "./ScrollArea"
import { Badge } from "./Badge"
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
} from "lucide-react"

export function AIChatInterface() {
  return (
    <div className="w-full max-w-7xl mx-auto ">
      <Safari url="prosperify.ai/assistant" className="w-full h-[600px]">
        <div
          className="flex h-full bg-white transform scale-75 origin-top-left "
          style={{ width: "133.33%", height: "133.33%" }}
        >
          {/* Sidebar gauche */}
          <div className="hidden md:flex md:flex-col md:w-64 bg-gray-50 border-r border-gray-200">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="font-semibold text-gray-900">Prosperify</span>
              </div>
              
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                <MessageSquare className="w-4 h-4" />
                Nouvelle conversation
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                <Search className="w-4 h-4" />
                Rechercher
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                <Filter className="w-4 h-4" />
                Filtres
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                <History className="w-4 h-4" />
                Historique
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2 text-sm">
                <Settings className="w-4 h-4" />
                Paramètres
              </Button>
            </div>

            {/* Conversations */}
            <div className="flex-1 p-4">
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
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <span className="text-purple-600 text-xs">AI</span>
                </div>
                <span>Assistant Intégration</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Assistant intégration pour toutes...</div>
            </div>
          </div>

          {/* Zone de chat centrale */}
          <div className="flex-1 flex flex-col">
            {/* Header chat */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">Assistant Transaction et Finance</span>
                </div>
                <div className="text-sm text-gray-500">16:56</div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 max-h-[500px] ">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-md border border-gray-200">
                  <p className="text-sm text-gray-800">
                    Bonjour ! Je peux vous aider à rechercher dans vos documents PDF indexés. Posez-moi une question sur
                    vos documents.
                  </p>
                  <div className="text-xs text-gray-500 mt-2">16:56</div>
                </div>

                <div className="bg-black text-white rounded-lg p-3 max-w-md ml-auto">
                  <p className="text-sm">Quelle est la durée initiale du contrat Verdi et est-il renouvelable ?</p>
                  <div className="text-xs text-gray-300 mt-2">16:57</div>
                </div>

                <div className="bg-gray-100 rounded-lg border border-gray-200 p-3 max-w-lg">
                  <p className="text-sm text-gray-800"> 
                    D&apos;après le document &quot;Contrat Verdi.pdf&quot; et &quot;Guide d&apos;intégration des Agents.pdf&quot;, page 10, La base de données partagée est
                    votre premier point de contact en tant que nouvel agent. Elle vous donne accès aux plans de
                    communication, aux modèles de vidéos, aux scripts de storytelling et aux coordonnées de nos
                    partenaires pour des shootings photo professionnels ou des visites 3D. : &quot;Contrat Verdi.pdf&quot;Quelle est la durée
                    initiale du contrat Verdi et e...&quot;
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      Guide d&apos;intégration des Agents.pdf
                    </Badge>
                    <span className="text-xs text-gray-500">Page 10</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">16:57</div>
                </div>
              </div>
            </ScrollArea>

            {/* Input zone */}
            <div className="p-4 border-t border-gray-200 bg-white">
              
              <div className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Posez une question sur vos documents... (Vous pouvez glisser-déposer des PDFs)"
                    className="pr-10"
                  />
                  <Button size="sm" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="sm" className="bg-orange-600 cursor-pointer">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Appuyez sur Entrée pour envoyer, Maj+Entrée pour une nouvelle ligne
              </div>
            </div>
          </div>

          {/* Panneau PDF à droite */}
          <div className="w-96 border-l border-gray-200 bg-white flex flex-col">
            {/* Header PDF */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">
                    <FileText className="w-3 h-3 mr-1" />
                    Performance_Ventes_Q2.pdf
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    <FileText className="w-3 h-3 mr-1" />
                    Rapport_Financier_Q4.pdf
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    <Search className="w-4 h-4" />
                  </Button>
                  <span className="text-sm">100%</span>
                  <Button size="sm" variant="outline">
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="sm" variant="outline">
                  Rechercher...
                </Button>
              </div>
            </div>

            {/* Contenu PDF */}
            <div className="flex-1 p-4 bg-gray-50">
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
                    <p className="font-semibold">PRÉAMBULE :</p>
                    <p className="text-gray-700">
                      Dans le cadre de leurs activités respectives, les Parties souhaitent collaborer afin de conduire
                      des travaux de recherche et de développement. Ce préambule illustre l&apos;esprit de partenariat et
                      guide l&apos;interprétation des dispositions contractuelles.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 1 – OBJET DU CONTRAT :</p>
                    <p className="text-gray-700">
                      Le présent Contrat a pour objet d&apos;organiser la collaboration entre VERDI et le PARTENAIRE,
                      incluant la définition de périmètre de recherche, la mise en commun de moyens matériels et
                      humains, la production de rapports, ainsi que la valorisation des résultats obtenus.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 6 – DURÉE :</p>
                    <p className="text-gray-700">
                      Le présent Contrat entre en vigueur à la date de signature pour{" "}
                      <span className="bg-yellow-200">
                        une durée initiale de trois (3) ans. Il pourra être renouvelé par accord exprès et écrit des
                        Parties. En cas de non-renouvellement, les obligations relatives à la confidentialité et à la
                        propriété intellectuelle resteront en vigueur.
                      </span>{" "}
                      Cette disposition constitue une garantie de continuité, même au terme de la collaboration.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 2 – DÉFINITIONS :</p>
                    <p className="text-gray-700">
                      « Résultats » désigne toute donnée, méthode, prototype, logiciel, rapport ou publication générée.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">ARTICLE 3 – OBLIGATIONS DES PARTIES :</p>
                    <p className="text-gray-700">
                      VERDI s&apos;engage à mettre à disposition ses compétences scientifiques, ses laboratoires et son
                      personnel qualifié.{" "}
                      <span className="bg-yellow-200">
                        De plus, les principes d&apos;éthique scientifique et de sécurité devront être respectés à tout
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
