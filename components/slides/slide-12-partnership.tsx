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
      className="relative py-16 md:py-20 lg:py-24 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">12 — Partnership Terms</p>
          <h2 className="h2-section text-foreground mb-12">
            Broker Partnership
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left column - Image + Metrics */}
          <div className="flex flex-col gap-6">
            {/* Villa courtyard image */}
            <AnimatedSection delay={0.1} className="flex-1">
              <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-03-12_01-07-32-YK2EzZXYeKQHcK823JI587RP8F0uVB.jpg"
                  alt="Colonial style villa courtyard with trees and French doors"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: '30% 50%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Metrics */}
            <AnimatedSection delay={0.15}>
              <div className="bg-dark text-dark-foreground rounded-2xl p-6 md:p-8 noise-overlay relative overflow-hidden">
                {/* Background accents */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-warm/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
                
                <div className="relative z-10 grid grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div>
                    <p className="data-number text-warm">
                      <CountUp end={8} suffix="%" />
                    </p>
                    <p className="label-tag text-white/60 mt-2">
                      Broker commission
                    </p>
                  </div>
                  <div>
                    <p className="data-number text-warm">
                      <CountUp end={180} />
                    </p>
                    <p className="label-tag text-white/60 mt-2">
                      Days lead protection
                    </p>
                  </div>
                  <div>
                    <p className="data-number text-warm">
                      <CountUp end={40} suffix="%" />
                    </p>
                    <p className="label-tag text-white/60 mt-2">
                      Payment triggers
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

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
                <blockquote className="quote-block border-l-warm flex-1">
                  <p className="font-serif font-medium italic text-base text-foreground leading-relaxed">
                    "I work with brokers the way I'd want to be worked with — 
                    transparent terms, protected leads, and a product I've invested in myself."
                  </p>
                  <cite className="block mt-3 font-mono text-[10px] uppercase tracking-wider text-foreground-muted not-italic">
                    — Kristina Kuchinskaya
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
