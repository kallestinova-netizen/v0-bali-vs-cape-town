"use client"

import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"

const baliSources = [
  "REID Annual Market Report 2025 (realinfo.id)",
  "BPS Bali Tourism Statistics, Sept 2025",
  "AirDNA Bali Rental Data 2024",
  "Bamboo Routes Bali Real Estate Analysis 2026",
  "Bali Home Immo Market Report 2025",
  "Leylines Bali Property Forecast 2025",
  "Oxo Living Bali Market Insights H1 2024",
  "NomadList Digital Nomad Data 2024",
  "Booking.com / Estate Market Bingin comparables 2026",
]

const capetownSources = [
  "Global Property Guide South Africa Q4 2025",
  "FNB Property Barometer Q4 2025",
  "Lightstone Property Data 2025",
  "Stats SA City of Cape Town RPPI 2025",
  "The Africanvestor Cape Town Market Analysis 2026",
  "Pam Golding Western Cape Commentary 2025",
  "Fine & Country SA Coastal Property Report 2025",
  "DG Properties Luxury Market Review 2025",
]

export function Slide06Sources() {
  return (
    <section 
      id="slide-6" 
      className="relative py-16 md:py-20 lg:py-24 bg-background-secondary"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">06 — Sources & Methodology</p>
          <h2 className="h2-section text-foreground mb-12">
            Data Sources
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bali Sources */}
          <AnimatedSection delay={0.1}>
            <div className="panel border-t-[3px] border-t-bali h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-4 rounded-full bg-bali" />
                <h3 className="h3-subsection text-foreground">Bali</h3>
              </div>
              
              <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                {baliSources.map((source, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 py-1">
                      <span className="w-1 h-1 rounded-full bg-bali mt-2 shrink-0" />
                      <p className="font-mono text-[12px] md:text-[13px] text-foreground-muted leading-relaxed">
                        {source}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Cape Town Sources */}
          <AnimatedSection delay={0.2}>
            <div className="panel border-t-[3px] border-t-capetown h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-4 h-4 rounded-full bg-capetown" />
                <h3 className="h3-subsection text-foreground">Cape Town</h3>
              </div>
              
              <StaggerContainer className="space-y-3" staggerDelay={0.05}>
                {capetownSources.map((source, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 py-1">
                      <span className="w-1 h-1 rounded-full bg-capetown mt-2 shrink-0" />
                      <p className="font-mono text-[12px] md:text-[13px] text-foreground-muted leading-relaxed">
                        {source}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Disclaimer */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 p-6 bg-card rounded-xl border border-line">
            <p className="font-mono text-[10px] md:text-[11px] text-foreground-muted leading-relaxed uppercase tracking-wide">
              <span className="font-medium text-foreground">Disclaimer:</span> All data reflects published market ranges and does not 
              constitute a guarantee of returns for any specific property. 
              Rental yields and capital appreciation vary by location, management 
              quality, and market conditions. This presentation is for 
              informational purposes only. Consult a licensed financial and 
              legal advisor before making investment decisions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
