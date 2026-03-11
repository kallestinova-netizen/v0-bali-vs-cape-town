"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { CountUp } from "../count-up"

const terms = [
  "Commission paid in USD via your preferred transfer method",
  "Structured client registration system",
  "180-day lead protection — your clients stay yours",
  "Full broker support through to contract signing",
]

export function Slide12Partnership() {
  return (
    <section 
      id="slide-12" 
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">12 — Partnership Terms</p>
          <h2 className="h2-section text-foreground mb-12">
            Broker Partnership
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Metrics */}
          <AnimatedSection delay={0.1}>
            <div className="bg-dark text-dark-foreground rounded-2xl p-8 md:p-10 noise-overlay relative overflow-hidden">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-warm/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 grid sm:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="data-number text-warm">
                    <CountUp end={8} suffix="%" />
                  </p>
                  <p className="label-tag text-white/60 mt-2">
                    Broker commission on purchase price
                  </p>
                </div>
                <div>
                  <p className="data-number text-warm">
                    <CountUp end={180} />
                  </p>
                  <p className="label-tag text-white/60 mt-2">
                    Days lead protection period
                  </p>
                </div>
                <div>
                  <p className="data-number text-warm">
                    <CountUp end={40} suffix="%" />
                  </p>
                  <p className="label-tag text-white/60 mt-2">
                    First client payment triggers commission
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - Terms + Quote */}
          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="panel border-t-[3px] border-t-warm">
                <h3 className="h3-subsection text-foreground mb-6">
                  Key Partnership Terms
                </h3>
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {terms.map((term, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2 shrink-0" />
                        <p className="body-text text-foreground">{term}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <blockquote className="quote-block border-l-warm">
                <p className="font-serif font-medium italic text-lg text-foreground leading-relaxed">
                  "I work with brokers the way I'd want to be worked with — 
                  transparent terms, protected leads, and a product I've invested in myself."
                </p>
                <cite className="block mt-4 font-mono text-[10px] uppercase tracking-wider text-foreground-muted not-italic">
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
