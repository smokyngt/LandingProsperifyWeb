"use client";
import React from "react";
import { Timeline } from "../../ui/timeline";



export function TimelineDemo() {
  const data = [
    {
      title: "14/06/2024",
      content: (
   <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Début du projet <span className="text-orange-500 font-bold">Prosperify</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Lancement officiel de Prosperify, avec une idée simple : révolutionner la recherche et la gestion des données en entreprise.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Cette étape marque la naissance d&apos;un projet ambitieux, construit autour d&apos;une vision&nbsp;: 
    permettre aux organisations de <span className="font-semibold">tirer pleinement parti de leurs données</span>, 
    en brisant les silos d&apos;information et en ouvrant la voie à de nouvelles opportunités 
    grâce à une <span className="font-semibold">technologie de recherche documentaire intelligente</span>.
  </p>
 <img
    src="/logoo.png"

    alt="Prosperify"
    className="h-35"
  />
</div>

      ),
    },
    {
      title: "26/09/2024",
      content: (
    <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Contact avec <span className="text-orange-500 font-bold">Orpi</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Premier échange avec Orpi pour explorer une potentielle collaboration.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Rendez-vous dédié à la compréhension des <span className="font-semibold">barrages liés à
    l&apos;exploitation des données</span> dans les ETI françaises, ainsi qu&apos;à l&apos;analyse
    de l&apos;impact de la <span className="font-semibold">fragmentation de l&apos;information</span>
    sur les opportunités commerciales manquées. 
  </p>
  <img src="/orpi.webp" alt="Orpi" className="h-34 " />
</div>
      ),
    },
    {
      title: "03/10/2024",
      content: (
      <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Revue de design avec <span className="text-orange-500 font-bold">ESA</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Rendez-vous avec l&apos;Agence Spatiale Européenne pour une première revue de design.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Rencontre axée sur la compréhension des <span className="font-semibold">standards de sécurité </span> 
    et de <span className="font-semibold">souveraineté</span> exigés par ce type d&apos;agences,
    tout en explorant leur intérêt pour une <span className="font-semibold"> technologie de recherche documentaire </span> 
    adaptée à leurs besoins spécifiques.
  </p>
 <img src="/esa.png" alt="ESA"  className="h-40 " />
</div>

      ),
    },
    {
      title: "02/01/2025",
      content: (
        <div>
          <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            Intégration Pépite France
          </h1>
          <p className="text-sm font-medium text-gray-400 dark:text-neutral-200 mb-2">
            Prosperify rejoint le réseau Pépite France pour soutenir l&apos;innovation étudiante.
          </p>
         <img src="/pep.png" alt="Pépite France"  className="h-64" />
        </div>
      ),
    },
    {
      title: "04/01/2025",
      content: (
   <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Rencontre avec <span className="text-orange-500 font-bold">TUBA</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Échange avec l&apos;écosystème TUBA autour de l&apos;innovation urbaine et des nouveaux usages numériques.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Cette rencontre a permis d&apos;explorer les <span className="font-semibold">défis liés à 
    l&apos;exploitation des données en milieu urbain</span> et d&apos;identifier les opportunités 
    offertes par Prosperify dans un contexte d&apos;<span className="font-semibold">innovation territoriale</span>. 
    Un moment clé pour comprendre comment notre technologie peut répondre aux enjeux 
    de <span className="font-semibold">centralisation de l&apos;information</span> et 
    de <span className="font-semibold">valorisation des données</span> au service des acteurs locaux.
  </p>
  <img src="/tuba.png" alt="TUBA"  className="h-44 " />
</div>

      ),
    },
    {
      title: "17/02/2025",
      content: (
       <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Contact avec <span className="text-orange-500 font-bold">AXA</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Premier échange avec AXA autour d&apos;une potentielle collaboration stratégique.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Rencontre en deux phases&nbsp;:  
    <br />• D&apos;abord, une analyse des <span className="font-semibold">barrages liés à 
    l&apos;exploitation de la recherche documentaire</span> dans les grands groupes, ainsi 
    que des <span className="font-semibold">outils actuellement utilisés</span>.  
    <br />• Ensuite, une <span className="font-semibold">présentation de Prosperify </span>, 
    de sa mission et de la <span className="font-semibold">technologie employée </span> 
    pour répondre à ces enjeux.
  </p>
 <img src="/axaa.png" alt="AXA"  className="h-40" />
</div>

      ),
    },
    {
      title: "12/05/2025",
      content: (
      <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Intégration <span className="text-orange-500 font-bold">La French Tech</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Prosperify rejoint La French Tech afin de s&apos;inscrire dans un écosystème national d&apos;innovation.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Cette intégration marque une nouvelle étape dans le développement de Prosperify en tant que 
    <span className="font-semibold"> start-up membre</span>.  
    Elle ouvre l&apos;accès à un <span className="font-semibold">écosystème ultra-dynamique de jeunes pousses</span>, 
    offrant des opportunités uniques en termes de synergies, de partenariats et de visibilité au sein du réseau 
    français de l&apos;innovation.
  </p>
 <img src="/fr.png" alt="La French Tech"  className="h-54" />
</div>

      ),
    },
    {
      title: "08/2025",
      content: (
   <div>
  <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
    Lancement officiel de <span className="text-orange-500 font-bold">Prosperify</span>
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
    Mise sur le marché de la solution après plusieurs mois de conception, de tests et de partenariats stratégiques.
  </p>
  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
    Le lancement représente l&apos;aboutissement d&apos;une vision&nbsp;: 
    offrir aux entreprises un <span className="font-semibold">assistant IA souverain</span>, 
    capable de <span className="font-semibold">centraliser</span> et 
    <span className="font-semibold"> simplifier l&apos;accès aux données</span>, 
    tout en garantissant sécurité, conformité et efficacité.
  </p>
 <img
    src="/logooo.png"
    alt="Prosperify"
 // valeur en px
   
  />
</div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;