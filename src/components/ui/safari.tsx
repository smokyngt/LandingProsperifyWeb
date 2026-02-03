"use client"

import type React from "react"

import { cn } from "../../lib/utils"

interface SafariProps {
  url?: string
  className?: string
  children: React.ReactNode
}

export function Safari({ url = "prosperify.ai", className, children }: SafariProps) {
  return (
    <div className={cn("w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden", className)}>
      {/* Safari Header */}
      <div className="bg-gray-100 px-2 sm:px-4 py-2 sm:py-3 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-gray-600 border border-gray-200 truncate">
          🔒 {url}
        </div>
      </div>

      <div className="bg-white overflow-hidden min-h-[400px] sm:min-h-[500px]">{children}</div>
    </div>
  )
}
