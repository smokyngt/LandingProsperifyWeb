import { Database, Tags, FolderTree, Search, Shuffle, CheckCircle, Eye } from "lucide-react"
import { HoverEffect } from "./card-hover-effect"

export function ArchitectureDemo() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={architectureSteps} />
    </div>
  )
}

export const architectureSteps = [
  {
    title: "Collecte et Prétraitement",
    description:
      "Documents collectés depuis diverses sources (PDF, texte, tableaux) et préparés pour l'analyse avec des techniques de nettoyage et de normalisation avancées.",
    link: "#",
    icon: Database,
  },
  {
    title: "Analyse et Labellisation",
    description:
      "Extraction automatique du contenu et génération de représentations optimisées utilisant l'intelligence artificielle pour une compréhension contextuelle.",
    link: "#",
    icon: Tags,
  },
  {
    title: "Segmentation et Indexation",
    description:
      "Découpage intelligent en unités logiques et indexation pour une récupération efficace grâce à des algorithmes de traitement du langage naturel.",
    link: "#",
    icon: FolderTree,
  },
  {
    title: "Compréhension des Requêtes",
    description:
      "Analyse intelligente des intentions utilisateur pour déterminer le type de recherche optimal à utiliser et maximiser la pertinence des résultats.",
    link: "#",
    icon: Search,
  },
  {
    title: "Recherche Hybride",
    description:
      "Interrogation simultanée de multiples sources avec recherche textuelle, visuelle et contextuelle pour une couverture exhaustive des informations.",
    link: "#",
    icon: Shuffle,
  },
  {
    title: "Filtrage et Traçabilité",
    description:
      "Tri et évaluation des résultats avec citations complètes pour garantir la transparence et permettre la vérification des sources d'information.",
    link: "#",
    icon: CheckCircle,
  },
  {
    title: "Affichage Interactif",
    description:
      "Présentation claire et interactive permettant l'accès instantané aux informations avec des interfaces utilisateur intuitives et personnalisables.",
    link: "#",
    icon: Eye,
  },
]
