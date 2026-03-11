"use client"

import { motion } from "framer-motion"
import { CountUp } from "../count-up"

export function Slide01Hero() {
  return (
    <section 
      id="slide-1" 
      className="relative min-h-screen bg-dark text-dark-foreground overflow-hidden noise-overlay"
    >
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-bali/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-capetown/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 w-full py-20 lg:py-0">
          {/* Left column - Text */}
          <div className="flex flex-col justify-center">
            {/* Tag */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label-tag text-foreground-muted mb-6"
            >
              Real Estate Investment Brief · March 2026
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h1-display text-white mb-6"
            >
              Bali vs Cape Town
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-text text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            >
              Comparison of Two Global Ocean Real Estate Markets — 
              Opportunities for Investors and Brokers
            </motion.p>

            {/* Author badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-3 mb-12"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg border border-white/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20-fybfaC34u6VNx8dyjjRoZ44NGHz8HX.jpg"
                  alt="Kristina Kuchinskaya"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Kristina Kuchinskaya
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Real Estate Broker & Consultant
                </p>
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 md:gap-8"
            >
              <div>
                <p className="data-number text-bali">
                  <CountUp end={3} suffix="+" />
                </p>
                <p className="label-tag text-white/60 mt-2">
                  Years International Experience
                </p>
              </div>
              <div>
                <p className="data-number text-bali">
                  <CountUp end={224} />
                </p>
                <p className="label-tag text-white/60 mt-2">
                  Properties Sold
                </p>
              </div>
              <div>
                <p className="data-number text-bali">
                  <CountUp end={44.5} prefix="$" suffix="M" decimals={1} />
                </p>
                <p className="label-tag text-white/60 mt-2">
                  Transaction Volume
                </p>
              </div>
            </motion.div>

            {/* Source */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="source-line text-white/40 mt-8"
            >
              Analysis based on REID 2025, FNB Property Barometer, Global Property Guide Q4 2025
            </motion.p>
          </div>

          {/* Right column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=1000&fit=crop&q=80"
                alt="Luxury villa with infinity pool overlooking Bali ocean at sunset"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark/50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
