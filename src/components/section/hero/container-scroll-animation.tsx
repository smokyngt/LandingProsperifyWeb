"use client"
import React, { useRef } from "react"
import { useScroll, useTransform, motion, type MotionValue } from "motion/react"
import { useSpring } from "framer-motion"

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = React.useState(false)
  const [isLaptop, setIsLaptop] = React.useState(false)

  React.useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth
      setIsMobile(width <= 768)
      setIsLaptop(width > 768 && width <= 1500)
    }
    checkResponsive()
    window.addEventListener("resize", checkResponsive)
    return () => {
      window.removeEventListener("resize", checkResponsive)
    }
  }, [])

  const scaleDimensions = () => {
    if (isMobile) return [0.7, 0.9]
    if (isLaptop) return [0.9, 0.95] // Slightly reduced scale for laptops
    return [1.05, 1]
  }

  // rawRotate = transform brut
  const rawRotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  // smoothRotate = version lissée avec spring
  const smoothRotate = useSpring(rawRotate, { stiffness: 200, damping: 40 })

  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="min-h-[20rem] sm:min-h-[40rem] md:min-h-[50rem] lg:min-h-[50rem] xl:min-h-[60rem] 2xl:min-h-[80rem] flex justify-center relative p-2 md:p-10 lg:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 sm:py-12 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={smoothRotate} translate={translate} scale={scale} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  isMobile: boolean
  children: React.ReactNode
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        // willChange: "transform",
        boxShadow: isMobile
          ? "0 5px 10px rgba(0,0,0,0.2)"
          : "0 10px 5px rgba(0,0,0,0.25), 0 20px 10px rgba(0,0,0,0.2), 0 40px 20px rgba(0,0,0,0.15)",
      }}
      className="max-w-5xl mx-auto min-h-[30rem] md:min-h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl flex flex-col"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  )
}