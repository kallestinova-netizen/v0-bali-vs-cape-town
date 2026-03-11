"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { CountUp } from "../count-up"

export function Slide02WhyMarkets() {
  return (
    <section 
      id="slide-2" 
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <div>
            <AnimatedSection>
              <p className="label-tag mb-4">02 — Why These Two Markets</p>
              <h2 className="h2-section text-foreground mb-8">
                Same Appeal. Different Economic Models.
              </h2>
            </AnimatedSection>

            {/* Data blocks */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-10" staggerDelay={0.15}>
              <StaggerItem>
                <div className="panel border-t-[3px] border-t-bali">
                  <p className="label-tag text-bali mb-2">Bali</p>
                  <p className="data-number text-foreground">
                    <CountUp end={6.5} decimals={1} suffix="M" />
                  </p>
                  <p className="body-text text-foreground-muted mt-2">
                    international tourists in 2024
                  </p>
                  <p className="font-mono text-sm text-bali font-medium mt-1">+40% YoY</p>
                  <p className="source-line mt-3">Source: BPS Bali, Sept 2025</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="panel border-t-[3px] border-t-capetown">
                  <p className="label-tag text-capetown mb-2">Cape Town</p>
                  <p className="data-number text-foreground">
                    <CountUp end={40} suffix="%" />
                  </p>
                  <p className="body-text text-foreground-muted mt-2">
                    of luxury sales above 600+$ — foreign buyers
                  </p>
                  <p className="source-line mt-3">Source: Pam Golding, 2025</p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Quote */}
            <AnimatedSection delay={0.3}>
              <blockquote className="quote-block">
                <p className="font-serif font-medium italic text-lg text-foreground leading-relaxed">
                  "I don't recommend markets I haven't invested in myself. 
                  Bali is in my portfolio. Cape Town is my next acquisition. 
                  Both are lifestyle markets at a growth stage — 
                  that's where the real opportunity is."
                </p>
                <cite className="block mt-4 font-mono text-[11px] uppercase tracking-wider text-foreground-muted not-italic">
                  — Kristina Kuchinskaya
                </cite>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="body-text text-foreground-muted mt-8">
                Both markets share the same appeal — but operate under very different economic models. 
                Understanding the differences helps brokers serve clients better.
              </p>
            </AnimatedSection>
          </div>

          {/* Right column - Image */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=1000&fit=crop&q=80"
                alt="Aerial view of Bali's turquoise coastline with cliffs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
