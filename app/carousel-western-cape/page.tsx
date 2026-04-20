import { Slide01Cover } from "@/components/carousel/slide-01-cover"
import { Slide02Drivers } from "@/components/carousel/slide-02-drivers"
import { Slide03Winelands } from "@/components/carousel/slide-03-winelands"
import { Slide04Wellington } from "@/components/carousel/slide-04-wellington"
import { Slide05Stellenbosch } from "@/components/carousel/slide-05-stellenbosch"
import { Slide06Franschhoek } from "@/components/carousel/slide-06-franschhoek"
import { Slide07Comparison } from "@/components/carousel/slide-07-comparison"
import { Slide08CTA } from "@/components/carousel/slide-08-cta"

export const metadata = {
  title: "Western Cape · Instagram Carousel | Kristina Kuchinskaya",
  description:
    "Карусель для Instagram: Western Cape и три рынка Cape Winelands — Wellington, Stellenbosch, Franschhoek.",
}

const TOTAL = 8

export default function CarouselWesternCape() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20 px-4">
      <div className="max-w-[620px] mx-auto mb-10 md:mb-14 text-center">
        <p className="label-tag mb-3">Instagram Carousel · 4:5</p>
        <h1 className="font-serif font-semibold text-3xl md:text-4xl text-foreground mb-3">
          Western Cape · Cape Winelands
        </h1>
        <p className="body-text text-foreground-muted">
          Вертикальная раскладка для экспорта — каждая карточка соответствует
          одному слайду Instagram. Свайпайте или скроллите вниз.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 md:gap-12">
        <Slide01Cover total={TOTAL} />
        <Slide02Drivers total={TOTAL} />
        <Slide03Winelands total={TOTAL} />
        <Slide04Wellington total={TOTAL} />
        <Slide05Stellenbosch total={TOTAL} />
        <Slide06Franschhoek total={TOTAL} />
        <Slide07Comparison total={TOTAL} />
        <Slide08CTA total={TOTAL} />
      </div>
    </main>
  )
}
