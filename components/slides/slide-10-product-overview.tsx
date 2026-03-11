"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { Home, Settings, Users } from "lucide-react"

const columns = [
  {
    icon: Home,
    title: "2 and 3 bedroom Designer Villas",
    items: [
      "127m² – 137m² · 2 floors · private pool",
      "Premium architecture",
      "Seismic-resistant construction",
      "Natural materials · mould-free technology",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&q=80",
    imageAlt: "Bali villa interior with pool view"
  },
  {
    icon: Settings,
    title: "Optimised for Short-Term Rental",
    items: [
      "Managed by: Bali Legends",
      "Superhost status → +20% to yield",
      "4.8★ / 2,800+ reviews / 113 properties",
      "Average occupancy: 85%",
      "Dynamic AI pricing",
      "30+ booking platforms",
      "Peak ADR x1.5–2 (July–September)",
    ],
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop&q=80",
    imageAlt: "Villa pool outdoor lounge area"
  },
  {
    icon: Users,
    title: "Broad Target Audience",
    items: [
      "International investors",
      "Lifestyle buyers",
      "Digital nomads",
      "European & Russian-speaking buyers dominate inquiries in Bingin zone",
    ],
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&h=400&fit=crop&q=80",
    imageAlt: "Couple on villa terrace with ocean view"
  },
]

export function Slide10ProductOverview() {
  return (
    <section 
      id="slide-10" 
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">10 — Product Overview</p>
          <h2 className="h2-section text-foreground mb-12">
            What You're Selling
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {columns.map((column, index) => (
            <StaggerItem key={index}>
              <div className="panel h-full flex flex-col border-t-[3px] border-t-bali">
                {/* Image */}
                <div className="relative h-48 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-hidden rounded-t-2xl">
                  <img
                    src={column.image}
                    alt={column.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-bali/10 flex items-center justify-center">
                    <column.icon className="w-5 h-5 text-bali" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">
                    {column.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2 flex-1">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bali mt-2 shrink-0" />
                      <span className="body-text text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
