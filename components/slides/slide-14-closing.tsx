"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { Send } from "lucide-react"

const brokerPackItems = [
  "Available units with current pricing",
  "Ready-to-use financial model (gross → net → delta)",
  "Legal summary — one page, plain language",
  "Independent market analytics report (Bali + Cape Town, sourced data)",
]

export function Slide14Closing() {
  return (
    <section 
      id="slide-14" 
      className="relative min-h-screen bg-dark text-dark-foreground overflow-hidden noise-overlay"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&h=900&fit=crop&q=80"
          alt="Luxury cliff villa Bali sunset aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 w-full py-20">
          {/* Left column - Content */}
          <div className="flex flex-col justify-center">
            <AnimatedSection>
              <p className="label-tag text-foreground-muted mb-6">14 — Let's Work Together</p>
              <h1 className="h1-display text-white mb-6">
                Let's Build
                <br />
                Something
                <br />
                Together
              </h1>
              <p className="body-text text-xl text-white/70 mb-10">
                Two markets. One strategy.
                <br />
                Exceptional returns for your clients.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-10">
                <p className="body-text text-white/80 mb-4">
                  Write to me and I'll send you the Broker Pack:
                </p>
                <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                  {brokerPackItems.map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2 shrink-0" />
                        <p className="body-text text-white/70">{item}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/kristinacation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bali text-white font-mono text-sm uppercase tracking-wider rounded-xl hover:bg-bali-dark transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                  Telegram: @kristinacation
                </a>
                <a
                  href="https://wa.me/message"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-mono text-sm uppercase tracking-wider rounded-xl hover:bg-white/20 transition-colors duration-200 border border-white/20"
                >
                  WhatsApp
                </a>
              </div>
            </AnimatedSection>

            {/* Author badge */}
            <AnimatedSection delay={0.5}>
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-warm/20 flex items-center justify-center">
                    <span className="font-serif font-bold text-lg text-warm">K</span>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">
                      Kristina Kuchinskaya
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                      Bali & Cape Town Real Estate
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - empty for image background on desktop */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
