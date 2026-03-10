"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { CountUp } from "../count-up"

export function Slide06Yield() {
  return (
    <section 
      id="slide-6" 
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">06 — Yield & Total Return Comparison</p>
          <h2 className="h2-section text-foreground mb-12">
            The Numbers Side by Side
          </h2>
        </AnimatedSection>

        {/* Rental Yield Section */}
        <AnimatedSection delay={0.1}>
          <div className="mb-12">
            <h3 className="h3-subsection text-foreground mb-6">Rental Yield</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="panel border-t-[3px] border-t-bali">
                <p className="label-tag text-bali mb-4">Bali Gross Yield</p>
                <p className="data-number text-foreground mb-4">
                  <CountUp end={12} />–<CountUp end={18} suffix="%" />
                </p>
                <p className="body-text text-foreground-muted">
                  Short-term rentals, tourism growth, limited ocean supply
                </p>
              </div>
              <div className="panel border-t-[3px] border-t-capetown">
                <p className="label-tag text-capetown mb-4">Cape Town Gross Yield</p>
                <p className="data-number text-foreground mb-4">
                  <CountUp end={6} />–<CountUp end={10} suffix="%" />
                </p>
                <p className="body-text text-foreground-muted">
                  Long-term rentals, stable mature market
                </p>
              </div>
            </div>
            <p className="source-line mt-4">
              Sources: REID 2025 · Bali Home Immo 2025 · Leylines 2025 · Global Property Guide Q4 2025
            </p>
          </div>
        </AnimatedSection>

        {/* Liquidity & Total Return Section */}
        <AnimatedSection delay={0.2}>
          <div>
            <h3 className="h3-subsection text-foreground mb-6">Liquidity & Total Return</h3>
            <div className="panel">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Header */}
                <div className="hidden md:block" />
                <div className="hidden md:flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-bali" />
                  <span className="label-tag text-bali">Bali</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-capetown" />
                  <span className="label-tag text-capetown">Cape Town</span>
                </div>

                {/* Resale Growth */}
                <div className="md:col-span-3 grid md:grid-cols-3 gap-4 md:gap-8 py-4 border-b border-line/50">
                  <p className="body-text font-medium text-foreground">Resale growth</p>
                  <div className="flex md:block items-center gap-2">
                    <span className="md:hidden w-2 h-2 rounded-full bg-bali" />
                    <p className="font-serif font-bold text-2xl md:text-3xl text-bali">
                      ~<CountUp end={20} suffix="%" />
                    </p>
                  </div>
                  <div className="flex md:block items-center gap-2">
                    <span className="md:hidden w-2 h-2 rounded-full bg-capetown" />
                    <p className="font-serif font-bold text-2xl md:text-3xl text-capetown">
                      <CountUp end={30} />–<CountUp end={60} suffix="%" />
                    </p>
                  </div>
                </div>

                {/* Investment cycle */}
                <div className="md:col-span-3 grid md:grid-cols-3 gap-4 md:gap-8 py-4">
                  <p className="body-text font-medium text-foreground">Investment cycle</p>
                  <div className="flex md:block items-center gap-2">
                    <span className="md:hidden w-2 h-2 rounded-full bg-bali" />
                    <p className="font-mono text-lg text-foreground">5–10 years</p>
                  </div>
                  <div className="flex md:block items-center gap-2">
                    <span className="md:hidden w-2 h-2 rounded-full bg-capetown" />
                    <p className="font-mono text-lg text-foreground">7–15 years</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="source-line">
                Bali ~20%: REID / Oxo Living H1 2024; ADAYA project case: 25% off-plan to completion (Leylines 2025)
              </p>
              <p className="source-line">
                CT 30–60%: Cape Town +30% over 5 years (Lightstone / The Africanvestor 2025); coastal developments up to 40% (Fine & Country SA 2025)
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
