"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface CarouselFrameProps {
  children: ReactNode
  index: number
  total: number
  variant?: "light" | "dark" | "warm"
  className?: string
}

const variantStyles: Record<NonNullable<CarouselFrameProps["variant"]>, string> = {
  light: "bg-background text-foreground",
  dark: "bg-dark text-dark-foreground noise-overlay",
  warm: "bg-background-secondary text-foreground",
}

export function CarouselFrame({
  children,
  index,
  total,
  variant = "light",
  className = "",
}: CarouselFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <div
        className={`
          relative overflow-hidden rounded-3xl
          w-full max-w-[540px] aspect-[4/5]
          shadow-[0_8px_40px_rgba(46,107,158,0.12)]
          ${variantStyles[variant]}
          ${className}
        `}
      >
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col">
          {children}
        </div>

        <div
          className={`
            absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.25em]
            ${variant === "dark" ? "text-white/50" : "text-foreground-muted"}
          `}
        >
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  )
}
