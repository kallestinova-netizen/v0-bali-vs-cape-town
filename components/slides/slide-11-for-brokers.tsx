"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { MapPin, DollarSign, TrendingUp, Shield, Handshake, Clock } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "High-Demand Location",
    description: "Bingin — fastest-appreciating zone in Bali",
    highlight: "Price growth up to +15% annually",
    source: "REID 2025"
  },
  {
    icon: DollarSign,
    title: "Below-Market Entry Price",
    description: "$288K vs $410K–$643K market comparable",
    highlight: "26–60% discount to neighbourhood benchmark",
    source: null
  },
  {
    icon: TrendingUp,
    title: "Verified Rental Performance",
    description: "12–15% projected gross yield",
    highlight: "Bali Legends: Superhost · 85% avg occupancy · 30+ platforms",
    source: null
  },
  {
    icon: Shield,
    title: "Legal Certainty",
    description: "SHM title + Pariwisata zone + KKKPR validation",
    highlight: "Full legal pack available on request",
    source: null
  },
  {
    icon: Handshake,
    title: "Broker Support to Contract Signing",
    description: "Full support through the sales process",
    highlight: "Post-sale management: Bali Legends — your client is in good hands",
    source: null
  },
  {
    icon: Clock,
    title: "Scarcity Creates Urgency",
    description: "6 units remaining out of 26",
    highlight: "Delivery Q3 2026 — act now",
    source: null
  },
]

export function Slide11ForBrokers() {
  return (
    <section 
      id="slide-11" 
      className="relative py-16 md:py-20 lg:py-24 bg-background-secondary overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column - Content */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <p className="label-tag mb-4">11 — For Brokers</p>
              <h2 className="h2-section text-foreground mb-10">
                Why Brokers Love This Project
              </h2>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {reasons.map((reason, index) => (
                <StaggerItem key={index}>
                  <div className="panel h-full hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5">
                    <div className="w-10 h-10 rounded-xl bg-warm/10 flex items-center justify-center mb-4">
                      <reason.icon className="w-5 h-5 text-warm" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="body-text text-foreground-muted mb-3">
                      {reason.description}
                    </p>
                    <p className="font-mono text-sm text-warm font-medium">
                      {reason.highlight}
                    </p>
                    {reason.source && (
                      <p className="source-line mt-2">{reason.source}</p>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right column - Image */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden sticky top-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-03-12_01-07-32-N5lt8hXYOZv1QqXFEUvRdi1mMdMeYO.jpg"
                alt="Colonial style villa courtyard with trees and French doors"
                className="w-full h-full object-cover"
                style={{ objectPosition: '35% 50%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-warm mb-1">
                    Featured Project
                  </p>
                  <p className="font-serif font-semibold text-lg text-foreground">
                    Dreamland by Feeels
                  </p>
                  <p className="body-text text-foreground-muted text-sm">
                    Bingin, Bali · 6 units remaining
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
