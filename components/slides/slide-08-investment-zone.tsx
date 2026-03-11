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
      className="relative py-24 md:py-32 bg-background-secondary overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Image */}
          <AnimatedSection className="relative">
            <div className="relative h-[400px] lg:h-[550px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=1000&fit=crop&q=80"
                alt="Bingin beach Bali with surfers and golden hour light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-bali mb-1">
                    Investment Zone
                  </p>
                  <p className="font-serif font-semibold text-lg text-foreground">
                    Bingin · Dreamland · Uluwatu
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - Content */}
          <div>
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

            {/* Quote */}
            <AnimatedSection delay={0.3}>
              <div className="flex items-start gap-4">
                <Globe className="w-5 h-5 text-bali shrink-0 mt-1" />
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
