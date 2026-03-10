"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"

const baliProfiles = [
  "Lifestyle investors",
  "Digital nomads",
  "Short-term rental investors",
  "Younger buyer profile",
]

const capetownProfiles = [
  "Capital preservation investors",
  "Second home buyers",
  "Relocation buyers",
  "European retirees",
]

export function Slide04BuyerProfiles() {
  return (
    <section 
      id="slide-4" 
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">04 — Buyer Profiles</p>
          <h2 className="h2-section text-foreground mb-12">
            Who Buys Property?
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bali Column */}
          <AnimatedSection delay={0.1}>
            <div className="panel border-t-[3px] border-t-bali h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-4 rounded-full bg-bali" />
                <h3 className="h3-subsection text-foreground">Bali Investors</h3>
              </div>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {baliProfiles.map((profile, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 py-2 border-b border-line/50 last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-bali" />
                      <p className="body-text text-foreground">{profile}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-8 p-4 bg-bali/10 rounded-xl">
                <p className="font-mono text-sm text-bali font-medium">
                  Digital nomads = 20% of long-term rental market
                </p>
                <p className="source-line mt-2">Source: NomadList 2024</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Cape Town Column */}
          <AnimatedSection delay={0.2}>
            <div className="panel border-t-[3px] border-t-capetown h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-4 rounded-full bg-capetown" />
                <h3 className="h3-subsection text-foreground">Cape Town Investors</h3>
              </div>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {capetownProfiles.map((profile, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-3 py-2 border-b border-line/50 last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-capetown" />
                      <p className="body-text text-foreground">{profile}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-8 p-4 bg-capetown/10 rounded-xl">
                <p className="font-mono text-sm text-capetown font-medium">
                  SA Digital Nomad Visa demand surged post-launch 2024
                </p>
                <p className="source-line mt-2">Source: SA Home Affairs 2024</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
