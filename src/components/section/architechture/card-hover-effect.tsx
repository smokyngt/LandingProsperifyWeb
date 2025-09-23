"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"
import { Card, CardTitle, CardDescription } from "./card"
import type { LucideIcon } from "lucide-react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    icon?: LucideIcon
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6", className)}>
      {items.map((item, idx) => {
        const IconComponent = item.icon
        return (
          <div
            key={item?.title}
            className="relative group block p-2 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                 key={idx} // ✅ unique par card
                  className="absolute inset-0 h-full w-full bg-orange-50 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {IconComponent && (
                <div className="mb-4">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
              )}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
