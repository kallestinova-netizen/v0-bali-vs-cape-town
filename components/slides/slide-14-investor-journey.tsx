"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { ArrowRight } from "lucide-react"

const journeySteps = [
  {
    step: "01",
    title: "Bali Start",
    description: "Buy lifestyle asset with strong rental returns",
    details: "Entry from $288K · 12–15% yield · Q3 2026 delivery",
    color: "bali"
  },
  {
    step: "02",
    title: "Diversify",
    description: "Allocate across markets to reduce risk",
    details: "Bali cash flow + Cape Town capital preservation",
    color: "warm"
  },
  {
    step: "03",
    title: "Expand Globally",
    description: "Explore Cape Town, Dubai or Europe",
    details: "Full freehold · 8–11% yield · 30–60% resale growth",
    color: "capetown"
  },
]

export function Slide14InvestorJourney() {
  return (
    <section 
      id="slide-14" 
      className="relative py-24 md:py-32 bg-background-secondary overflow-hidden"
    >
      {/* Background world map pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="300" cy="200" r="80" fill="currentColor" className="text-line" />
          <circle cx="600" cy="300" r="120" fill="currentColor" className="text-line" />
          <circle cx="900" cy="250" r="100" fill="currentColor" className="text-line" />
          <path d="M300,200 Q450,100 600,300 T900,250" stroke="currentColor" fill="none" strokeWidth="2" className="text-line" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">14 — Investor Journey</p>
          <h2 className="h2-section text-foreground mb-12">
            How Clients Grow Their Portfolio
          </h2>
        </AnimatedSection>

        {/* Journey Steps */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12" staggerDelay={0.15}>
          {journeySteps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="relative h-full">
                <div className={`panel h-full border-t-[3px] ${
                  step.color === 'bali' ? 'border-t-bali' : 
                  step.color === 'warm' ? 'border-t-warm' : 
                  'border-t-capetown'
                }`}>
                  <p className={`font-mono text-sm font-medium mb-4 ${
                    step.color === 'bali' ? 'text-bali' : 
                    step.color === 'warm' ? 'text-warm' : 
                    'text-capetown'
                  }`}>
                    {step.step}
                  </p>
                  <h3 className="h3-subsection text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="body-text text-foreground-muted mb-4">
                    {step.description}
                  </p>
                  <p className={`font-mono text-sm font-medium ${
                    step.color === 'bali' ? 'text-bali' : 
                    step.color === 'warm' ? 'text-warm' : 
                    'text-capetown'
                  }`}>
                    → {step.details}
                  </p>
                </div>
                
                {/* Arrow connector (hidden on mobile and last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-line" />
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Footer */}
        <AnimatedSection delay={0.4}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="body-text text-foreground-muted text-lg">
              Many international buyers start in Bali then diversify globally — 
              creating ongoing cross-market opportunities for well-positioned brokers.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
