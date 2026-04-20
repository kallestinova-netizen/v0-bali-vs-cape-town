"use client"

import { CarouselFrame } from "./carousel-frame"

export function Slide01Cover({ total }: { total: number }) {
  return (
    <CarouselFrame index={1} total={total} variant="dark">
      {/* Gradient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[420px] h-[420px] bg-bali/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-24 w-[460px] h-[460px] bg-capetown/25 rounded-full blur-[140px]" />
      </div>

      <div className="relative flex flex-col h-full">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
          Investment Brief · Апрель 2026
        </p>

        <div className="flex-1 flex flex-col justify-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-bali mb-4">
            Cape Winelands, ЮАР
          </p>
          <h1 className="font-serif italic font-bold text-5xl md:text-6xl leading-[0.95] text-white mb-6">
            Western<br />Cape
          </h1>
          <p className="font-sans font-light text-base text-white/80 leading-relaxed max-w-[80%]">
            Единственная провинция ЮАР, которая 6 лет подряд обгоняет
            национальный рынок по ценам и транзакциям.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-6 border-t border-white/10">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20-fybfaC34u6VNx8dyjjRoZ44NGHz8HX.jpg"
              alt="Kristina Kuchinskaya"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Kristina Kuchinskaya
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/50">
              Real Estate Broker & Consultant
            </p>
          </div>
          <p className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            свайп →
          </p>
        </div>
      </div>
    </CarouselFrame>
  )
}
