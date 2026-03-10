"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { CountUp } from "../count-up"

export function Slide05CashFlow() {
  return (
    <section 
      id="slide-5" 
      className="relative py-24 md:py-32 bg-dark text-dark-foreground overflow-hidden noise-overlay"
    >
      {/* Subtle gradient accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-bali/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-capetown/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag text-foreground-muted mb-4">05 — Investment Motivation</p>
          <h2 className="h2-section text-white mb-12">
            Cash Flow vs Capital Preservation
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bali Column */}
          <AnimatedSection delay={0.1}>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-bali/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bali to-bali/50 rounded-t-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-4 rounded-full bg-bali" />
                <h3 className="h3-subsection text-white">Bali — Cash Flow</h3>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="body-text text-white/70">Gross yield</span>
                    <span className="font-mono text-bali font-medium">7–15%</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="body-text text-white/70">Minus opex (30%)</span>
                    <span className="font-mono text-white/50">−4.5%</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="body-text text-white/70">Minus PPh tax (10%)</span>
                    <span className="font-mono text-white/50">−1.05%</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-center py-4 bg-bali/10 rounded-lg px-4 -mx-4">
                    <span className="body-text text-white font-medium">Net Yield</span>
                    <span className="font-serif font-bold text-2xl text-bali">≈ 7–9%</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="label-tag text-white/50 mb-1">Investment cycle</p>
                  <p className="font-mono text-white">5–10 years</p>
                </div>
                <div>
                  <p className="label-tag text-white/50 mb-1">Driver</p>
                  <p className="font-mono text-white">Tourism + digital nomads</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cape Town Column */}
          <AnimatedSection delay={0.2}>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-capetown/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-capetown to-capetown/50 rounded-t-2xl" />
              
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-4 rounded-full bg-capetown" />
                <h3 className="h3-subsection text-white">Cape Town — Capital Preservation</h3>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="body-text text-white/70">Gross yield</span>
                    <span className="font-mono text-capetown font-medium">6–11%</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="body-text text-white/70">Minus opex (25%)</span>
                    <span className="font-mono text-white/50">−2%</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="body-text text-white/70">Minus tax (eff. 30%)</span>
                    <span className="font-mono text-white/50">−2.7%</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-center py-4 bg-capetown/10 rounded-lg px-4 -mx-4">
                    <span className="body-text text-white font-medium">Net Yield</span>
                    <span className="font-serif font-bold text-2xl text-capetown">≈ 5–8%</span>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <p className="label-tag text-white/50 mb-1">Price growth</p>
                  <p className="font-mono text-white">8% in 2025</p>
                </div>
                <div>
                  <p className="label-tag text-white/50 mb-1">Driver</p>
                  <p className="font-mono text-white">Semigration + foreign buyers</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Callout */}
        <AnimatedSection delay={0.4}>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <blockquote className="font-serif font-medium italic text-xl text-white/80 leading-relaxed">
              "Both markets attract serious capital — but for fundamentally different reasons. 
              Understanding motivation is the key to matching clients with the right market."
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
