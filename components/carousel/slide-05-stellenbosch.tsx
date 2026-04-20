"use client"

import { CarouselFrame } from "./carousel-frame"
import { GraduationCap, Cpu, Plane } from "lucide-react"

const drivers = [
  { icon: GraduationCap, label: "Университет" },
  { icon: Cpu, label: "Tech-кластер" },
  { icon: Plane, label: "Cape Winelands Airport" },
]

export function Slide05Stellenbosch({ total }: { total: number }) {
  return (
    <CarouselFrame index={5} total={total} variant="warm">
      <div className="flex items-center gap-3 mb-4">
        <span className="badge badge-capetown">02 · Stellenbosch</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
          Liquid Hub
        </span>
      </div>

      <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground leading-tight mb-6">
        Крупнейший<br />
        <span className="italic text-capetown">и самый ликвидный</span>
      </h2>

      <div className="bg-card rounded-2xl border border-line p-6 mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted mb-2">
          Объём транзакций, 12 мес.
        </p>
        <p className="font-serif font-bold text-5xl text-capetown">
          R3<span className="text-2xl text-foreground-muted">B</span>
        </p>
        <p className="font-mono text-xs text-foreground-muted mt-3">
          ↳ vs R742M Franschhoek · R493M Wellington
        </p>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted mb-3">
        Три драйвера
      </p>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {drivers.map((d, i) => (
          <div
            key={i}
            className="bg-card rounded-xl border border-line p-3 flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 rounded-lg bg-capetown/10 flex items-center justify-center mb-2">
              <d.icon className="w-4 h-4 text-capetown" />
            </div>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground leading-tight">
              {d.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto quote-block !py-3 !pl-4 !pr-4 bg-destructive/5 border-l-destructive/70">
        <p className="font-sans text-xs text-foreground leading-relaxed">
          <span className="font-semibold text-destructive">Риск:</span>{" "}
          +13.3% за 2025 при инфляции 3.3%, инвентарь &lt; 4 мес, вход затратный.
        </p>
      </div>
    </CarouselFrame>
  )
}
