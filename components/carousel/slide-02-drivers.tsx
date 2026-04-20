"use client"

import { CarouselFrame } from "./carousel-frame"
import { Users, Globe2, Landmark } from "lucide-react"

const drivers = [
  {
    icon: Users,
    title: "Semigration",
    text: "Внутренняя миграция в Western Cape из других провинций ЮАР.",
  },
  {
    icon: Globe2,
    title: "Foreign buyers",
    text: "Возврат международного спроса после ковида — особенно в Winelands.",
  },
  {
    icon: Landmark,
    title: "DA vs ANC",
    text: "Относительная управленческая стабильность — провинцией управляет DA.",
  },
]

export function Slide02Drivers({ total }: { total: number }) {
  return (
    <CarouselFrame index={2} total={total} variant="light">
      <p className="label-tag mb-4">Почему сюда идёт капитал</p>
      <h2 className="font-serif font-semibold text-3xl md:text-4xl text-foreground leading-tight mb-8">
        Три драйвера<br />
        <span className="italic text-capetown">одной провинции</span>
      </h2>

      <div className="flex-1 flex flex-col gap-4">
        {drivers.map((d, i) => (
          <div
            key={i}
            className="panel flex items-start gap-4 p-5 border-l-[3px] border-l-bali"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-bali/10 flex items-center justify-center">
              <d.icon className="w-5 h-5 text-bali-dark" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                {d.title}
              </h3>
              <p className="body-text text-foreground-muted">{d.text}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="source-line mt-6 pt-4 border-t border-line">
        Результат — главный магнит капитала внутри ЮАР.
      </p>
    </CarouselFrame>
  )
}
