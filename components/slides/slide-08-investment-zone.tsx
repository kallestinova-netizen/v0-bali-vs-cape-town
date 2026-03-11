"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { Waves, Users, Globe } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "Ocean Proximity",
    description: "Direct cliff & beach access commands top premiums",
    stat: "Avg price: $1,800–$2,800/m²",
    source: "REID 2025"
  },
  {
    icon: Users,
    title: "Tourism Magnet",
    description: "World-class surf & lifestyle destination",
    stat: "Prime villa occupancy: 75–85%",
    source: "AirDNA 2024"
  },
]

export function Slide08InvestmentZone() {
  return (
    <section 
      id="slide-8" 
      className="relative py-16 md:py-20 lg:py-24 bg-background-secondary overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left column - Image Bento Card (vertical, matches right column height) */}
          <AnimatedSection className="relative order-2 lg:order-1">
            <div className="relative h-full min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Best-Beaches-in-Uluwatu-Bali-Dreamland-Beach%20%281%29-mx5qWDJKqQpIqJR4wpCdkIQ2KFenDv.jpg"
                alt="Aerial view of Dreamland Beach Uluwatu Bali with turquoise ocean and cliff resorts"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 space-y-2">
                {/* Location card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-bali mb-0.5">
                    Investment Zone
                  </p>
                  <p className="font-serif font-semibold text-lg text-foreground">
                    Bingin · Dreamland · Uluwatu
                  </p>
                </div>
                {/* Stats card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="font-serif font-bold text-xl text-foreground">+26.3%</p>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-foreground-muted leading-tight">
                        Rental listings<br />growth YoY
                      </p>
                    </div>
                    <div className="border-l border-line pl-4">
                      <p className="font-serif font-bold text-xl text-foreground">$178</p>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-foreground-muted leading-tight">
                        Average daily<br />rate (ADR)
                      </p>
                    </div>
                  </div>
                  <p className="font-mono text-[8px] text-foreground-muted text-center mt-2 pt-2 border-t border-line/50">
                    Source: AirDNA · Bali, 2025
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <p className="label-tag mb-4">08 — Investment Zone</p>
              <h2 className="h2-section text-foreground mb-6">
                Bingin · Dreamland · Uluwatu
              </h2>
              <p className="body-text text-foreground-muted mb-10 text-lg">
                One of Bali's fastest-growing real estate zones — 
                driven by ocean proximity, premium lifestyle positioning, 
                and surging international attention.
              </p>
            </AnimatedSection>

            <StaggerContainer className="space-y-6 mb-10" staggerDelay={0.12}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <div className="panel border-l-[3px] border-l-bali">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-bali/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-bali" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="body-text text-foreground-muted mb-2">
                          {feature.description}
                        </p>
                        <p className="font-mono text-sm text-bali font-medium">
                          → {feature.stat}
                        </p>
                        <p className="source-line mt-1">{feature.source}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quote with Expert Photo */}
            <AnimatedSection delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow-md border border-line/50">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20-fybfaC34u6VNx8dyjjRoZ44NGHz8HX.jpg"
                      alt="Kristina Kuchinskaya"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <blockquote className="quote-block flex-1">
                  <p className="font-serif font-medium italic text-base text-foreground leading-relaxed">
                    "In my experience, the majority of inquiries in Uluwatu and Bingin 
                    come from European and Russian-speaking buyers — driven by lifestyle 
                    appeal and strong rental returns."
                  </p>
                  <cite className="block mt-3 font-mono text-[10px] uppercase tracking-wider text-foreground-muted not-italic">
                    — Kristina Kuchinskaya, broker observation
                  </cite>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
