import { Database, Tags, FolderTree, Search, Shuffle, CheckCircle, Eye } from "lucide-react"
import { HoverEffect } from "./card-hover-effect"
import { useTranslation } from "react-i18next"

export function ArchitectureDemo() {
  const { t } = useTranslation()
  const items = architectureSteps.map((step, index) => ({
    ...step,
    title: t(`architecture.steps.${index}.title`),
    description: t(`architecture.steps.${index}.description`),
  }))

  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={items} />
    </div>
  )
}

export const architectureSteps = [
  {
    title: "Collecte et Prétraitement",
    description:
      "Centralisation automatique de vos documents depuis toutes sources avec nettoyage et normalisation optimisés.",
    link: "#",
    icon: Database,
  },
  {
    title: "Analyse et Labellisation",
    description:
      "Extraction automatique du contenu et génération de représentations optimisées par IA pour une compréhension contextuelle.",
    link: "#",
    icon: Tags,
  },
  {
    title: "Segmentation et Indexation",
    description:
        "Découpage intelligent et indexation avancée pour une récupération instantanée de l'information pertinente.",
    link: "#",
    icon: FolderTree,
  },
  {
    title: "Compréhension des Requêtes",
    description:
      "Analyse intelligente des intentions pour maximiser la pertinence et la précision des résultats.",
    link: "#",
    icon: Search,
  },
  {
    title: "Recherche Hybride",
    description:
      "Interrogation simultanée multi-sources : textuelle, visuelle et contextuelle pour une couverture exhaustive.",
    link: "#",
    icon: Shuffle,
  },
  {
    title: "Filtrage et Traçabilité",
    description:
      "Résultats qualifiés avec citations complètes garantissant transparence et vérification des sources.",
    link: "#",
    icon: CheckCircle,
  },
  {
    title: "Affichage Interactif",
    description:
      "Interface intuitive et personnalisable pour un accès instantané à vos informations critiques.",
    link: "#",
    icon: Eye,
  },
]
