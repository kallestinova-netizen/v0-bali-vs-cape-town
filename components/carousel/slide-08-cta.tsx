"use client"

import { CarouselFrame } from "./carousel-frame"
import { Send } from "lucide-react"

export function Slide08CTA({ total }: { total: number }) {
  return (
    <CarouselFrame index={8} total={total} variant="dark">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[420px] h-[420px] bg-capetown/25 rounded-full blur-[130px]" />
        <div className="absolute -bottom-24 -left-24 w-[340px] h-[340px] bg-bali/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative flex flex-col h-full">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 mb-6">
          Готовы войти в Cape Winelands?
        </p>

        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-serif italic font-bold text-4xl md:text-5xl text-white leading-[0.95] mb-6">
            Три района —<br />
            <span className="text-bali">три стратегии</span>
          </h2>
          <p className="font-sans font-light text-base text-white/80 leading-relaxed mb-8">
            Подберу вход под ваш горизонт: от greenfield в Wellington
            до boutique-luxury во Franschhoek.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-warm" />
              <p className="font-sans text-sm text-white/80">
                Список доступных эстейтов и boutique-проектов
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-warm" />
              <p className="font-sans text-sm text-white/80">
                Финансовая модель: gross → net → delta
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-warm" />
              <p className="font-sans text-sm text-white/80">
                Полный отчёт по рынку — в PDF
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-white/20">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BA%D1%83%D1%87%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20-fybfaC34u6VNx8dyjjRoZ44NGHz8HX.jpg"
              alt="Kristina Kuchinskaya"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Kristina Kuchinskaya
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/50">
              Telegram · @kristinacation
            </p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-bali">
            <Send className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </CarouselFrame>
  )
}
