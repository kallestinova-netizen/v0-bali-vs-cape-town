import { SlideNavigation } from "@/components/slide-navigation"
import { Slide01Hero } from "@/components/slides/slide-01-hero"
import { Slide02WhyMarkets } from "@/components/slides/slide-02-why-markets"
import { Slide03Comparison } from "@/components/slides/slide-03-comparison"
import { Slide04BuyerProfiles } from "@/components/slides/slide-04-buyer-profiles"
import { Slide05CashFlow } from "@/components/slides/slide-05-cashflow"
import { Slide06Sources } from "@/components/slides/slide-06-sources"
import { Slide07BaliDrivers } from "@/components/slides/slide-07-bali-drivers"
import { Slide08InvestmentZone } from "@/components/slides/slide-08-investment-zone"
import { Slide09FeaturedProject } from "@/components/slides/slide-09-featured-project"
import { Slide10ProductOverview } from "@/components/slides/slide-10-product-overview"
import { Slide11ForBrokers } from "@/components/slides/slide-11-for-brokers"
import { Slide12Partnership } from "@/components/slides/slide-12-partnership"
import { Slide13InvestorJourney } from "@/components/slides/slide-13-investor-journey"
import { Slide14Closing } from "@/components/slides/slide-14-closing"

export default function Home() {
  return (
    <main className="relative">
      <SlideNavigation />
      <Slide01Hero />
      <Slide02WhyMarkets />
      <Slide03Comparison />
      <Slide04BuyerProfiles />
      <Slide05CashFlow />
      <Slide06Sources />
      <Slide07BaliDrivers />
      <Slide08InvestmentZone />
      <Slide09FeaturedProject />
      <Slide10ProductOverview />
      <Slide11ForBrokers />
      <Slide12Partnership />
      <Slide13InvestorJourney />
      <Slide14Closing />
    </main>
  )
}
