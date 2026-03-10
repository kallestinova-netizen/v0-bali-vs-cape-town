"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Printer } from "lucide-react"

const slides = [
  { id: 1, label: "Hero" },
  { id: 2, label: "Why These Markets" },
  { id: 3, label: "Market Comparison" },
  { id: 4, label: "Buyer Profiles" },
  { id: 5, label: "Investment Motivation" },
  { id: 6, label: "Yield & Return" },
  { id: 7, label: "Sources" },
  { id: 8, label: "Bali Drivers" },
  { id: 9, label: "Investment Zone" },
  { id: 10, label: "Featured Project" },
  { id: 11, label: "Product Overview" },
  { id: 12, label: "For Brokers" },
  { id: 13, label: "Partnership" },
  { id: 14, label: "Investor Journey" },
  { id: 15, label: "Contact" },
]

export function SlideNavigation() {
  const [activeSlide, setActiveSlide] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 300)

      // Find active slide
      const slideElements = slides.map(s => document.getElementById(`slide-${s.id}`))
      const viewportCenter = window.innerHeight / 2

      for (let i = slideElements.length - 1; i >= 0; i--) {
        const el = slideElements[i]
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= viewportCenter) {
            setActiveSlide(slides[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSlide = (id: number) => {
    const el = document.getElementById(`slide-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* Dot navigation - right side */}
      <motion.nav
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2"
      >
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(slide.id)}
            className="group flex items-center gap-3 justify-end"
            aria-label={`Go to ${slide.label}`}
          >
            <span className={`
              text-[10px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 
              transition-opacity duration-200 text-foreground-muted
            `}>
              {slide.label}
            </span>
            <span className={`
              w-2 h-2 rounded-full transition-all duration-200
              ${activeSlide === slide.id 
                ? "bg-bali scale-125" 
                : "bg-line group-hover:bg-bali/50"
              }
            `} />
          </button>
        ))}
      </motion.nav>

      {/* Print button - top right */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        onClick={handlePrint}
        className="fixed top-4 right-4 md:top-8 md:right-24 z-50 p-2.5 rounded-full bg-card card-shadow hover:card-shadow-hover transition-all duration-200 text-foreground-muted hover:text-foreground print:hidden"
        aria-label="Print presentation"
      >
        <Printer className="w-4 h-4" />
      </motion.button>

      {/* Mobile slide indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        className="fixed top-4 left-4 md:hidden z-50 px-3 py-1.5 rounded-full bg-card card-shadow font-mono text-[10px] uppercase tracking-wider text-foreground-muted print:hidden"
      >
        {activeSlide} / 15
      </motion.div>
    </>
  )
}
