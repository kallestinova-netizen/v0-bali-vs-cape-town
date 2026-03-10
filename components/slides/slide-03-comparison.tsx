"use client"

import { motion } from "framer-motion"
import { AnimatedSection, StaggerContainer, StaggerItem } from "../animated-section"
import { WaveDivider } from "../wave-divider"

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" }
  })
}

const comparisonData = [
  {
    parameter: "Ownership structure",
    bali: "Leasehold / PT PMA",
    capetown: "Freehold (full title)",
    highlight: "capetown"
  },
  {
    parameter: "Min. entry price",
    bali: "from $150,000",
    capetown: "from $107,000",
    highlight: "capetown"
  },
  {
    parameter: "Avg. price per m²",
    bali: "$1,800 – $3,500 (prime)",
    capetown: "$1,350 – $4,270",
    highlight: null
  },
  {
    parameter: "Gross rental yield",
    bali: "7–15%",
    baliTag: "higher",
    capetown: "6–11% (avg 8.98%)",
    highlight: "bali"
  },
  {
    parameter: "Annual price growth",
    bali: "7–15% (prime zones)",
    capetown: "4–8% citywide / 10–14% emerging",
    highlight: null
  },
  {
    parameter: "Liquidity",
    bali: "~95 days avg",
    capetown: "21–35 days (prime)",
    capetownTag: "faster",
    highlight: "capetown"
  },
  {
    parameter: "Rental tax",
    bali: "PPh 10% (final, flat)",
    baliTag: "simpler",
    capetown: "Up to 45% (marginal)",
    highlight: "bali"
  },
  {
    parameter: "Foreign buyer access",
    bali: "Via legal structure",
    capetown: "Full rights, no restrictions",
    capetownTag: "easier",
    highlight: "capetown"
  },
  {
    parameter: "Property mgmt",
    bali: "Active mgmt required",
    capetown: "Passive-friendly",
    highlight: null
  },
]

export function Slide03Comparison() {
  return (
    <section 
      id="slide-3" 
      className="relative py-24 md:py-32 bg-background-secondary"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="label-tag mb-4">03 — Market Comparison Data 2026</p>
          <h2 className="h2-section text-foreground mb-4">
            Side-by-Side: Key Investment Parameters
          </h2>
        </AnimatedSection>

        <WaveDivider className="my-8 opacity-50" />

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <motion.tr 
                className="border-b border-line"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={rowVariants}
                custom={0}
              >
                <th className="text-left py-4 pr-4 label-tag text-foreground-muted w-1/4">
                  Parameter
                </th>
                <th className="text-left py-4 px-4 w-[37.5%]">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-bali" />
                    <span className="label-tag text-bali">Bali</span>
                  </span>
                </th>
                <th className="text-left py-4 pl-4 w-[37.5%]">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-capetown" />
                    <span className="label-tag text-capetown">Cape Town</span>
                  </span>
                </th>
              </motion.tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr 
                  key={index}
                  className="border-b border-line/50 hover:bg-card/50 transition-colors"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={rowVariants}
                  custom={index + 1}
                >
                  <td className="py-4 pr-4 body-text font-medium text-foreground">
                    {row.parameter}
                  </td>
                  <td className={`py-4 px-4 body-text ${row.highlight === 'bali' ? 'text-foreground font-medium' : 'text-foreground-muted'}`}>
                    <span className="flex items-center gap-2">
                      {row.bali}
                      {row.baliTag && (
                        <span className="badge badge-bali">{row.baliTag}</span>
                      )}
                    </span>
                  </td>
                  <td className={`py-4 pl-4 body-text ${row.highlight === 'capetown' ? 'text-foreground font-medium' : 'text-foreground-muted'}`}>
                    <span className="flex items-center gap-2">
                      {row.capetown}
                      {row.capetownTag && (
                        <span className="badge badge-capetown">{row.capetownTag}</span>
                      )}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <StaggerContainer className="md:hidden space-y-4" staggerDelay={0.1}>
          {comparisonData.map((row, index) => (
            <StaggerItem key={index}>
              <div className="panel">
                <p className="label-tag text-foreground-muted mb-3">{row.parameter}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`${row.highlight === 'bali' ? 'text-foreground' : 'text-foreground-muted'}`}>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-bali mb-1">Bali</p>
                    <p className="body-text">{row.bali}</p>
                    {row.baliTag && <span className="badge badge-bali mt-2 inline-block">{row.baliTag}</span>}
                  </div>
                  <div className={`${row.highlight === 'capetown' ? 'text-foreground' : 'text-foreground-muted'}`}>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-capetown mb-1">Cape Town</p>
                    <p className="body-text">{row.capetown}</p>
                    {row.capetownTag && <span className="badge badge-capetown mt-2 inline-block">{row.capetownTag}</span>}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Source and footnote */}
        <AnimatedSection delay={0.5}>
          <div className="mt-8 space-y-2">
            <p className="source-line">
              Sources: REID Annual Market Report 2025 · Global Property Guide Q4 2025 · 
              FNB Property Barometer · Lightstone 2025 · Bamboo Routes 2026
            </p>
            <p className="source-line">
              * Bali: Digital Nomad Visa available · Cape Town: SA Digital Nomad Visa launched 2024
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
