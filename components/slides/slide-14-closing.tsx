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
              <div className="flex flex-col sm:flex-row gap-4 items-start">
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
                    href="https://wa.me/message/DTEJ5CVO2CSPD1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-mono text-sm uppercase tracking-wider rounded-xl hover:bg-[#20BD5A] transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* QR Code */}
            <AnimatedSection delay={0.45}>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://wa.me/message/DTEJ5CVO2CSPD1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors duration-200 bg-white p-1"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D0%B0%D1%80%D0%BA%D0%BE%D0%B4-iODbOGNczk7g1Z023SzxjdsAZ2uAcz.jpg"
                    alt="WhatsApp QR Code"
                    className="w-full h-full object-contain"
                  />
                </a>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                  Scan to chat<br />on WhatsApp
                </p>
              </div>
            </AnimatedSection>

            {/* Author badge */}
            <AnimatedSection delay={0.5}>
              <div className="mt-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg border border-white/20">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20-fybfaC34u6VNx8dyjjRoZ44NGHz8HX.jpg"
                      alt="Kristina Kuchinskaya"
                      className="w-full h-full object-cover object-top"
                    />
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
