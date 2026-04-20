"use client"

import { CarouselFrame } from "./carousel-frame"
import { TrendingUp } from "lucide-react"

export function Slide06Franschhoek({ total }: { total: number }) {
  return (
    <CarouselFrame index={6} total={total} variant="dark">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[380px] h-[380px] bg-warm/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="badge badge-warm">03 · Franschhoek</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Premium-Luxury
          </span>
        </div>

        <h2 className="font-serif font-semibold text-3xl md:text-4xl text-white leading-tight mb-6">
          Фаза<br />
          <span className="italic text-warm">позднего роста</span>
        </h2>

        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-warm" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              Средняя цена сделки
            </p>
          </div>
          <div className="flex items-baseline gap-3">
            <p className="font-serif font-bold text-5xl text-white">+200%</p>
            <p className="font-mono text-xs text-white/60">за 5 лет</p>
          </div>
          <p className="font-mono text-xs text-white/60 mt-3">
            R2.5M <span className="text-white/40">(2020)</span> →{" "}
            <span className="text-warm">R7.5M</span>{" "}
            <span className="text-white/40">(2025)</span>
          </p>
        </div>

        <div className="space-y-3 flex-1">
          <div className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2 shrink-0" />
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              <span className="font-semibold text-white">90%</span> международных сделок проходят в кэше.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2 shrink-0" />
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              Вход возможен только через небольшие <span className="italic">boutique</span>-проекты.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2 shrink-0" />
            <p className="font-sans text-sm text-white/80 leading-relaxed">
              Крупный девелопмент упирается в heritage-ограничения и дефицит земли.
            </p>
          </div>
        </div>

        <p className="font-mono text-[9px] italic text-white/40 mt-6">
          Источник: Lightstone 2024–2025
        </p>
      </div>
    </CarouselFrame>
  )
}
