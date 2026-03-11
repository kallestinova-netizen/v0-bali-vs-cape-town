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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
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

            {/* Quote with Expert Card */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Expert Photo Card */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md border border-line/50">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20-fybfaC34u6VNx8dyjjRoZ44NGHz8HX.jpg"
                      alt="Kristina Kuchinskaya"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Quote */}
                <blockquote className="quote-block flex-1">
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
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="body-text text-foreground-muted mt-8">
                Both markets share the same appeal — but operate under very different economic models. 
                Understanding the differences helps brokers serve clients better.
              </p>
            </AnimatedSection>
          </div>

          {/* Right column - Image (vertical, matches left column height) */}
          <AnimatedSection delay={0.2} className="relative h-full">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B7%D0%BE%D0%BD%D1%82%D0%B8%D0%BA%D0%B8%20-1rULTztZV6z2EN346KvDxjcuvjalmz.jpg"
                alt="Aerial view of Bali beach with turquoise water and colorful umbrellas"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: '50% 80%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
