"use client"

import { useTranslation } from "react-i18next"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "motion/react"
import { useRef, useState, useEffect } from "react"
import { Target, Link, Settings, ShieldCheck, Rocket } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const apiEndpoints = [
  { method: "POST", path: "/assistants/create", status: "201", appearsAt: 2 },
  { method: "PUT", path: "/documents/upload", status: "200", appearsAt: 1 },
  { method: "GET", path: "/query/search", status: "200", appearsAt: 3 },
]

const connectedTools = [
  { name: "SharePoint", appearsAt: 1 },
  { name: "Google Drive", appearsAt: 2 },
  { name: "Salesforce", appearsAt: 3 },
  { name: "S3 / MinIO", appearsAt: 4 },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

interface IntegrationStep {
  title: string
  description: string
  tag: string
  badge?: string
}

function methodColor(method: string) {
  if (method === "POST") return { text: "#FF6A13", bg: "#FFF4EC" }
  if (method === "PUT") return { text: "#2563eb", bg: "#dbeafe" }
  return { text: "#22c55e", bg: "#dcfce7" }
}

/* ------------------------------------------------------------------ */
/*  Animated API Panel (right side)                                    */
/* ------------------------------------------------------------------ */

function AnimatedApiPanel({
  activeStep,
  t,
}: {
  activeStep: number
  t: (key: string) => string
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
      {/* Header with animated status */}
      <div className="flex items-center gap-2 mb-5">
        <motion.div
          className="w-2.5 h-2.5 rounded-full"
          animate={{
            backgroundColor: activeStep >= 1 ? "#22c55e" : "#94A3B8",
            scale: activeStep >= 1 ? [1, 1.3, 1] : 1,
          }}
          transition={{
            backgroundColor: { duration: 0.4 },
            scale: { duration: 0.6, repeat: activeStep >= 1 ? Infinity : 0, repeatDelay: 2 },
          }}
        />
        <span className="text-[13px] font-medium text-gray-600">
          {t("integration.api.title")}
        </span>
      </div>

      {/* API Endpoints — appear progressively */}
      <div className="space-y-2 mb-5">
        {apiEndpoints.map((ep, i) => {
          const visible = activeStep >= ep.appearsAt
          const colors = methodColor(ep.method)

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
              animate={
                visible
                  ? { opacity: 1, x: 0, height: "auto", marginBottom: 8 }
                  : { opacity: 0, x: 20, height: 0, marginBottom: 0 }
              }
              transition={{ duration: 0.5, delay: visible ? i * 0.12 : 0, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white rounded-[10px] border border-gray-200">
                <span
                  className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-md"
                  style={{ color: colors.text, background: colors.bg }}
                >
                  {ep.method}
                </span>
                <span className="font-mono text-[13px] text-gray-700 flex-1 truncate">
                  {ep.path}
                </span>

                {/* Animated status indicator */}
                <motion.span
                  className="font-mono text-[11px] font-semibold"
                  initial={{ opacity: 0 }}
                  animate={visible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  style={{ color: "#22c55e" }}
                >
                  {ep.status}
                </motion.span>

                {/* Pulsing connection dot */}
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={
                    visible
                      ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }
                      : { scale: 1, opacity: 0 }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Connection line animation */}
      <motion.div
        className="h-[2px] rounded-full mb-5"
        animate={{
          background:
            activeStep >= 2
              ? "linear-gradient(90deg, #FF6A13, #22c55e)"
              : "linear-gradient(90deg, #e2e8f0, #e2e8f0)",
          scaleX: activeStep >= 1 ? 1 : 0,
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "left" }}
      />

      {/* Connected Tools — appear progressively */}
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={activeStep >= 1 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-xs font-medium text-gray-500 mb-1">
          {t("integration.api.connectedTools")}
        </div>
        {connectedTools.map((tool, i) => {
          const visible = activeStep >= tool.appearsAt
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: visible ? i * 0.1 : 0 }}
              className="flex items-center gap-2.5 px-3 py-2 bg-white rounded-lg border border-gray-200"
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                animate={{
                  backgroundColor: visible ? "#22c55e" : "#d1d5db",
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-[13px] font-medium text-gray-700">
                {tool.name}
              </span>
              <motion.span
                className="ml-auto text-[11px]"
                animate={{
                  color: visible ? "#22c55e" : "#9ca3af",
                }}
              >
                {visible ? t("integration.api.connected") : "…"}
              </motion.span>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Progress footer */}
      <motion.div
        className="mt-5 pt-4 border-t border-gray-200"
        animate={{ opacity: activeStep >= 0 ? 1 : 0 }}
      >
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{t("integration.api.title")}</span>
          <motion.span
            animate={{
              color: activeStep >= 4 ? "#22c55e" : "#94A3B8",
            }}
            className="font-semibold"
          >
            {activeStep >= 4 ? "✓ 100%" : `${Math.min(activeStep * 25, 100)}%`}
          </motion.span>
        </div>
        <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(activeStep * 25, 100)}%` }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function WorkflowPath() {
  const { t } = useTranslation()

  // Parse steps from i18n
  const rawSteps = t("integration.steps", { returnObjects: true }) as unknown
  const steps: IntegrationStep[] = Array.isArray(rawSteps)
    ? (rawSteps as IntegrationStep[])
    : rawSteps && typeof rawSteps === "object"
      ? (Object.values(rawSteps) as IntegrationStep[])
      : []

  // Refs for scroll tracking
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [timelineHeight, setTimelineHeight] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (timelineRef.current) {
        setTimelineHeight(timelineRef.current.getBoundingClientRect().height);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [steps]);

  // Single scroll progress
  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start 160px", "end 160px"],
  })

  // Synchronized movement values
  const heightTransform = useTransform(rawProgress, [0, 1], [0, timelineHeight])
  const opacityTransform = useTransform(rawProgress, [0, 0.1], [0, 1])

  useMotionValueEvent(rawProgress, "change", (latest) => {
    const step = Math.ceil(latest * steps.length)
    setActiveStep(Math.min(step, steps.length))
  })

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-500 rounded-full text-sm font-medium">
          {t("integration.badge")}
        </div>
      </div>

      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight tracking-tight">
          {t("integration.titlePrefix")}{" "}
          <span className="text-orange-500">{t("integration.titleHighlight")}</span> <br />
          {t("integration.titleSuffix")}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t("integration.subtitle")}
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full"
      >
        {/* Timeline Content */}
        <div className="flex-1 w-full font-sans md:px-6 lg:px-10">
          <div ref={timelineRef} className="relative max-w-3xl mx-auto pb-40">
            {steps.map((step, index) => {
              const isActive = activeStep > index;
              const Icon = [Target, Link, Settings, ShieldCheck, Rocket][index] || Rocket;

              return (
                <div key={index} className="flex justify-start pt-10 md:pt-32 md:gap-10">
                  <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                      <motion.div
                        className="h-4 w-4 rounded-full border shadow-sm"
                        animate={{
                          backgroundColor: isActive ? "#FF6A13" : "#e5e5e5",
                          borderColor: isActive ? "#FF6A13" : "#d4d4d4",
                          scale: isActive ? 1.3 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <motion.h3
                      className="hidden md:block text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold whitespace-nowrap"
                      animate={{
                        color: isActive ? "#FF6A13" : "#737373",
                        scale: isActive ? 1.05 : 1,
                        x: isActive ? 10 : 0
                      }}
                    >
                      {step.tag}
                    </motion.h3>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    <motion.h3
                      className="md:hidden block text-2xl mb-4 text-left font-bold"
                      animate={{ color: isActive ? "#FF6A13" : "#737373" }}
                    >
                      {step.tag}
                    </motion.h3>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-500 dark:text-neutral-400 leading-relaxed max-w-md mb-4">
                        {step.description}
                      </p>
                      {step.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 text-orange-600 rounded-full text-xs font-semibold">
                          <Icon size={14} className="text-orange-500" />
                          {step.badge}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Progress Line */}
            <div
              style={{ height: timelineHeight + "px" }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{ height: heightTransform, opacity: opacityTransform }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-400 via-orange-100 to-transparent rounded-full will-change-transform"
              />
            </div>
          </div>
        </div>

        {/* Sticky API Panel */}
        <div className="w-full lg:w-[400px] lg:flex-shrink-0 lg:sticky lg:top-40 self-start">
          <AnimatedApiPanel activeStep={activeStep} t={t} />
        </div>
      </div>
    </div>
  )
}

