"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { CheckIcon } from "../wave-divider"
import { CountUp } from "../count-up"

const marketComparables = [
  { type: "1BR", range: "$312,759 – $382,794" },
  { type: "2BR", range: "$410,391 – $643,762" },
  { type: "3BR", range: "$562,009 – $727,080" },
]

const projectPricing = [
  { type: "2BR", specs: "137m² · 2-storey · private pool", price: "$288,000" },
  { type: "3BR", specs: "100% payment", price: "$336,000" },
]

const keyParams = [
  { label: "Leasehold", value: "35 years + renewal option" },
  { label: "Delivery", value: "Q3 2026" },
  { label: "Availability", value: "6 units remaining (20 of 26 sold)" },
  { label: "Yield", value: "12–15% projected gross yield" },
  { label: "Construction", value: "Seismic-resistant · natural materials · mould-free" },
]

const legalStatus = [
  "SHM (Hak Milik) — strongest land title in Indonesia",
  "Zone: Pariwisata (W) — tourist & commercial designation",
  "KKKPR — state validation of RDTR compliance",
  "SLF contract signed — Certificate of Occupancy in progress",
]

export function Slide09FeaturedProject() {
  return (
    <section 
      id="slide-9" 
      className="relative py-24 md:py-32 bg-dark text-dark-foreground overflow-hidden noise-overlay"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&q=80"
          alt="Modern Bali villa with pool and ocean view"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag text-foreground-muted mb-4">09 — Featured Project</p>
          <h2 className="h2-section text-white mb-2">
            Dreamland by Feeels
          </h2>
          <p className="badge badge-warm mb-10">
            Boutique Villa Development · Bingin, Bali
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {/* Market Comparables */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="h3-subsection text-white mb-2">Market Comparables</h3>
                <p className="source-line text-white/50 mb-6">
                  6 Villas in Location · Booking.com / Estate Market, Bingin 2026
                </p>
                <div className="space-y-3">
                  {marketComparables.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="font-mono text-sm text-white/70">{item.type}</span>
                      <span className="font-mono text-sm text-warm">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Project Pricing */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-bali/30">
                <h3 className="h3-subsection text-white mb-6">Dreamland by Feeels Pricing</h3>
                <div className="space-y-4">
                  {projectPricing.map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b border-white/10 last:border-0">
                      <div>
                        <span className="font-serif font-semibold text-lg text-bali">{item.type}</span>
                        <span className="ml-3 body-text text-white/60">{item.specs}</span>
                      </div>
                      <span className="font-serif font-bold text-2xl text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-bali/20 rounded-xl">
                  <p className="font-mono text-sm text-bali font-medium text-center">
                    26–60% BELOW MARKET COMPARABLES
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Why Lower Price */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="h3-subsection text-white mb-4">Why Below Market?</h3>
                <p className="body-text text-white/70 mb-6">
                  Land acquired 3 years ago. Bingin prices have grown significantly since. 
                  Entry price reflects original land cost — capital appreciation is built into the purchase price.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="label-tag text-white/50 mb-1">Entry</p>
                    <p className="font-mono text-lg text-white">$2,350/m²</p>
                  </div>
                  <div>
                    <p className="label-tag text-white/50 mb-1">Forecast (12mo)</p>
                    <p className="font-mono text-lg text-bali">$2,900/m²</p>
                  </div>
                  <div>
                    <p className="label-tag text-white/50 mb-1">Delta</p>
                    <p className="font-mono text-lg text-warm">~23%</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Key Parameters */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="h3-subsection text-white mb-6">Key Parameters</h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {keyParams.map((param, index) => (
                    <StaggerItem key={index}>
                      <div className="flex justify-between items-start gap-4 py-2 border-b border-white/10 last:border-0">
                        <span className="label-tag text-white/50">{param.label}</span>
                        <span className="body-text text-white text-right">{param.value}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>

            {/* Legal Status */}
            <AnimatedSection delay={0.25}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-success/30">
                <h3 className="h3-subsection text-white mb-6">Legal Status</h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {legalStatus.map((status, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3">
                        <CheckIcon className="shrink-0 mt-0.5" />
                        <p className="body-text text-white/80">{status}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p className="source-line text-white/40 mt-6">
                  Full legal documentation available upon request
                </p>
              </div>
            </AnimatedSection>

            {/* Quote */}
            <AnimatedSection delay={0.35}>
              <blockquote className="border-l-[3px] border-warm pl-5 py-4">
                <p className="font-serif font-medium italic text-lg text-white/90 leading-relaxed">
                  "I know this project from the inside — I invested in it myself."
                </p>
                <cite className="block mt-3 font-mono text-[10px] uppercase tracking-wider text-white/50 not-italic">
                  — Kristina Kuchinskaya
                </cite>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
