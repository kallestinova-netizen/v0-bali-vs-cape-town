"use client"

import { CarouselFrame } from "./carousel-frame"

const districts = [
  { name: "Wellington", tag: "Greenfield", color: "bg-bali" },
  { name: "Stellenbosch", tag: "Liquid Hub", color: "bg-capetown" },
  { name: "Franschhoek", tag: "Premium", color: "bg-warm" },
]

export function Slide03Winelands({ total }: { total: number }) {
  return (
    <CarouselFrame index={3} total={total} variant="warm">
      <p className="label-tag mb-4">Cape Winelands</p>
      <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground leading-tight mb-4">
        Наиболее премиальный<br />
        <span className="italic text-capetown">субрегион Western Cape</span>
      </h2>

      <div className="quote-block mb-8">
        <p className="font-serif italic text-base text-foreground leading-relaxed">
          Именно здесь формируется модель
          <strong className="not-italic font-semibold"> secure lifestyle estate</strong>,
          которую в ЮАР копируют повсеместно.
        </p>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground-muted mb-4">
        Три района · три стадии зрелости
      </p>

      <div className="flex-1 flex flex-col gap-3">
        {districts.map((d, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-line"
          >
            <div
              className={`w-10 h-10 rounded-xl ${d.color} flex items-center justify-center`}
            >
              <span className="font-serif font-bold text-white text-lg">
                {i + 1}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-serif font-semibold text-lg text-foreground">
                {d.name}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
                {d.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CarouselFrame>
  )
}
