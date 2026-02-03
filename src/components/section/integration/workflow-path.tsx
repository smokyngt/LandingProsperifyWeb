"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function WorkflowPath() {
  const { t } = useTranslation()
  const steps = [
    {
      id: 1,
      titleKey: "integration.steps.0.title",
      descriptionKey: "integration.steps.0.description",
      position: { x: 50, y: 10 },
      color: "#ff6a13",
    },
    {
      id: 2,
      titleKey: "integration.steps.1.title",
      descriptionKey: "integration.steps.1.description",
      position: { x: 25, y: 40 },
      color: "#ff6a13",
    },
    {
      id: 3,
      titleKey: "integration.steps.2.title",
      descriptionKey: "integration.steps.2.description",
      position: { x: 70, y: 50 },
      color: "#ff6a13",
    },
    {
      id: 4,
      titleKey: "integration.steps.3.title",
      descriptionKey: "integration.steps.3.description",
      position: { x: 30, y: 75 },
      color: "#ff6a13",
    },
    {
      id: 5,
      titleKey: "integration.steps.4.title",
      descriptionKey: "integration.steps.4.description",
      position: { x: 65, y: 90 },
      color: "#ff6a13",
    },
  ]

  // Générer un path courbé reliant les nodes
  const generatePath = () => {
    return steps
      .map((s, i) => {
        const { x, y } = s.position
        if (i === 0) return `M ${x} ${y}`
        const prev = steps[i - 1]
        const cx1 = (prev.position.x + x) / 2
        const cy1 = prev.position.y
        const cx2 = (prev.position.x + x) / 3
        const cy2 = y
        return `C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y}`
      })
      .join(" ")
  }

  return (

    <div className="max-w-7xl mx-auto">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          {t("integration.badge")}
        </div>
      </div>

      {/* Titre + description */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance mb-4 sm:mb-6 leading-tight">
          {t("integration.titlePrefix")} <span className="text-orange-500">{t("integration.titleHighlight")}</span>,
          <br />
          {t("integration.titleSuffix")}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          {t("integration.subtitle")}
        </p>
      </div>

      <div className="relative flex flex-col items-center gap-6 sm:hidden">
        {/* SVG en arrière-plan */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 50 0 L 50 100"   // ligne verticale au milieu
            fill="none"
            stroke="#5a5a5aff"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeDasharray="0.5 2"
            animate={{ strokeDashoffset: [0, -12] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </svg>

        {/* Les nodes empilés */}
        {steps.map((s, i) => (
          <div
            key={s.id}
            className="relative flex flex-col items-center justify-center 
                 w-54 h-54 bg-white border border-orange-200 rounded-full p-4 text-center"
          >
            {/* Cercle numéro */}
            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg mb-2"
              style={{ backgroundColor: s.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.3 }}
            >
              <span className="text-white font-bold text-sm">{s.id}</span>
            </motion.div>

            {/* Texte */}
            <h3
              className="font-bold text-xs mb-1 leading-tight"
              style={{ color: s.color }}
            >
              {t(s.titleKey)}
            </h3>
            <p className="text-[0.8rem] text-gray-600 leading-snug">
              {t(s.descriptionKey)}
            </p>
          </div>
        ))}
      </div>

      {/* Conteneur carré pour respecter le viewBox */}
      <div className="hidden sm:block max-w-2xl lg:max-w-3xl mx-auto relative w-full aspect-[1/1]">
        {/* Path courbé pointillé animé */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            d={generatePath()}
            fill="none"
            stroke="#5a5a5aff"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeDasharray="2 2"
            animate={{ strokeDashoffset: [0, -12] }} // décalage des tirets
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

        </svg>

        {/* Nodes + texte */}
        {steps.map((s, i) => (
          <div
            key={s.id}
            className="absolute flex flex-col items-center justify-center p-4  w-34 h-34 sm:w-46 sm:h-46 lg:w-62 lg:h-62
p-3 sm:p-4 lg:p-6
text-xs sm:text-sm  bg-white border border-orange-200 rounded-full"
            style={{
              left: `${s.position.x}%`,
              top: `${s.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Cercle */}
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
text-xs sm:text-sm lg:text-base rounded-full flex items-center justify-center shadow-lg mb-2"
              style={{ backgroundColor: s.color }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.3 }}
            >
              <span className="text-white font-bold text-sm sm:text-base">
                {s.id}
              </span>
            </motion.div>

            {/* Texte */}
            <div className="text-center max-w-[160px] sm:max-w-[200px]">
              <h3
                className="font-bold text-[0.65rem] sm:text-[0.75rem] lg:text-sm
 sm:text-sm mb-1 leading-tight"
                style={{ color: s.color }}
              >
                {t(s.titleKey)}
              </h3>
              <p className="text-[0.55rem] sm:text-[0.65rem] lg:text-xs
 sm:text-xs text-gray-600 leading-snug">
                {t(s.descriptionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>



  )
}
