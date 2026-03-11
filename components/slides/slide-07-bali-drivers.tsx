"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { TrendingUp, Globe, MapPin, BarChart3 } from "lucide-react"

const drivers = [
  {
    icon: TrendingUp,
    title: "Tourism Recovery & Growth",
    description: "Record arrivals fuelling short-term rental demand",
    stat: "6.3M international tourists in 2024, +40% YoY",
    source: "Source: BPS Bali, Sept 2025"
  },
  {
    icon: Globe,
    title: "Global Remote Work Trend",
    description: "Digital nomads choosing Bali as a long-term base",
    stat: "Digital nomads = 20% of Bali's long-term rental market",
    source: "Source: NomadList 2024"
  },
  {
    icon: MapPin,
    title: "Limited Ocean Land Supply",
    description: "Scarcity near the coast drives premium pricing",
    stat: "Coastal land prices +50% since 2019 in Canggu/Uluwatu",
    source: "Source: Bamboo Routes 2025"
  },
  {
    icon: BarChart3,
    title: "Rising Prices in Prime Areas",
    description: "Bingin, Uluwatu & Dreamland appreciating rapidly",
    stat: "Uluwatu/Bingin up to +15% annually",
    source: "Source: REID 2025"
  },
]

export function Slide07BaliDrivers() {
  return (
    <section 
      id="slide-7" 
      className="relative py-16 md:py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left column - Image (vertical, matches right column height) */}
          <AnimatedSection className="relative order-2 lg:order-1 h-full">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=1000&fit=crop&q=80"
                alt="Uluwatu clifftop villas with surfers below"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent lg:bg-gradient-to-l" />
            </div>
          </AnimatedSection>

          {/* Right column - Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <p className="label-tag mb-4">07 — Bali Market Drivers</p>
              <h2 className="h2-section text-foreground mb-10">
                Key Drivers of Bali Demand
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-6" staggerDelay={0.12}>
              {drivers.map((driver, index) => (
                <StaggerItem key={index}>
                  <div className="panel hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-bali/10 flex items-center justify-center">
                        <driver.icon className="w-5 h-5 text-bali" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                          {driver.title}
                        </h3>
                        <p className="body-text text-foreground-muted mb-3">
                          {driver.description}
                        </p>
                        <p className="font-mono text-sm text-bali font-medium">
                          → {driver.stat}
                        </p>
                        <p className="source-line mt-2">{driver.source}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
