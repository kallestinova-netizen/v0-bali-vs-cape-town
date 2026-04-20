"use client"

import { CarouselFrame } from "./carousel-frame"
import { Check, X } from "lucide-react"

export function Slide04Wellington({ total }: { total: number }) {
  return (
    <CarouselFrame index={4} total={total} variant="light">
      <div className="flex items-center gap-3 mb-4">
        <span className="badge badge-bali">01 · Wellington</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
          Greenfield
        </span>
      </div>

      <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground leading-tight mb-6">
        Рынок до<br />
        <span className="italic text-bali-dark">перегрева</span>
      </h2>

      <div className="panel p-6 mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted mb-2">
          Медианная цена в эстейтах
        </p>
        <p className="font-serif font-bold text-5xl text-foreground">
          R2.02<span className="text-2xl text-foreground-muted">M</span>
        </p>
        <p className="font-mono text-xs text-foreground-muted mt-3">
          ↳ против R2.5M средней по Franschhoek в 2020
        </p>
      </div>

      <div className="flex-1 space-y-3">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-6 h-6 rounded-full bg-success/15 flex items-center justify-center mt-0.5">
            <Check className="w-3.5 h-3.5 text-success" />
          </div>
          <p className="body-text text-foreground">
            Ещё можно купить землю по «старым» ценам и построить secure estate с нуля.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
            <X className="w-3.5 h-3.5 text-destructive" />
          </div>
          <p className="body-text text-foreground-muted">
            Нет магнита — университета, гастрономии, wine-tram.
            ROI зависит от качества собственного продукта.
          </p>
        </div>
      </div>

      <p className="source-line mt-6">
        Источник: Lightstone, 12 мес. к сентябрю 2024
      </p>
    </CarouselFrame>
  )
}
