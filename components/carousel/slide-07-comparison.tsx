"use client"

import { CarouselFrame } from "./carousel-frame"

const rows = [
  {
    district: "Wellington",
    stage: "Greenfield",
    price: "R2.02M",
    volume: "R493M",
    accent: "text-bali-dark",
    bar: "bg-bali",
    width: "w-[16%]",
  },
  {
    district: "Stellenbosch",
    stage: "Liquid Hub",
    price: "—",
    volume: "R3.0B",
    accent: "text-capetown",
    bar: "bg-capetown",
    width: "w-full",
  },
  {
    district: "Franschhoek",
    stage: "Premium",
    price: "R7.5M",
    volume: "R742M",
    accent: "text-warm",
    bar: "bg-warm",
    width: "w-[24%]",
  },
]

export function Slide07Comparison({ total }: { total: number }) {
  return (
    <CarouselFrame index={7} total={total} variant="light">
      <p className="label-tag mb-4">Сравнение 2024</p>
      <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground leading-tight mb-6">
        Три продукта,<br />
        <span className="italic text-capetown">одна география</span>
      </h2>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted mb-3">
        Объём транзакций · 12 мес. к сентябрю 2024
      </p>

      <div className="flex-1 flex flex-col gap-4">
        {rows.map((r, i) => (
          <div key={i} className="panel p-4">
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <p className={`font-serif font-semibold text-lg ${r.accent}`}>
                  {r.district}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-muted">
                  {r.stage}
                </p>
              </div>
              <div className="text-right">
                <p className={`font-serif font-bold text-2xl ${r.accent}`}>
                  {r.volume}
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-muted">
                  ср. сделка {r.price}
                </p>
              </div>
            </div>
            <div className="w-full h-1.5 rounded-full bg-line/70 overflow-hidden">
              <div className={`h-full rounded-full ${r.bar} ${r.width}`} />
            </div>
          </div>
        ))}
      </div>

      <p className="source-line mt-6">
        Источник: Lightstone · «ср. сделка» для Stellenbosch не выделена — рынок шире
      </p>
    </CarouselFrame>
  )
}
