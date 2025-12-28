"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

type Tab = {
  title: string
  value: string
  content?: string | React.ReactNode | any
}

export const AnimatedTabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[]
  containerClassName?: string
  activeTabClassName?: string
  tabClassName?: string
  contentClassName?: string
}) => {
  const [activeValue, setActiveValue] = useState<string>(propTabs[0]?.value)

  const moveSelectedTabToTop = (idx: number) => {
    setActiveValue(propTabs[idx].value)
  }

  const tabs = useMemo(() => {
    if (!propTabs || propTabs.length === 0) return []
    const newTabs = [...propTabs]
    const currentIndex = newTabs.findIndex((t) => t.value === activeValue)
    if (currentIndex > 0) {
      const [selectedTab] = newTabs.splice(currentIndex, 1)
      newTabs.unshift(selectedTab)
    }
    return newTabs
  }, [propTabs, activeValue])

  const [hovering, setHovering] = useState(false)

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx)
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {activeValue === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn("absolute inset-0 bg-gray-200 rounded-full", activeTabClassName)}
              />
            )}

            <span className="relative block text-black">{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        key={activeValue}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  )
}

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string
  key?: string
  tabs: Tab[]
  hovering?: boolean
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value
  }
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  )
}
