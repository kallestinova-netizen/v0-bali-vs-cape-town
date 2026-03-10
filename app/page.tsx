import { SlideNavigation } from "@/components/slide-navigation"
import { Slide01Hero } from "@/components/slides/slide-01-hero"
import { Slide02WhyMarkets } from "@/components/slides/slide-02-why-markets"
import { Slide03Comparison } from "@/components/slides/slide-03-comparison"
import { Slide04BuyerProfiles } from "@/components/slides/slide-04-buyer-profiles"
import { Slide05CashFlow } from "@/components/slides/slide-05-cashflow"
import { Slide06Yield } from "@/components/slides/slide-06-yield"
import { Slide07Sources } from "@/components/slides/slide-07-sources"
import { Slide08BaliDrivers } from "@/components/slides/slide-08-bali-drivers"
import { Slide09InvestmentZone } from "@/components/slides/slide-09-investment-zone"
import { Slide10FeaturedProject } from "@/components/slides/slide-10-featured-project"
import { Slide11ProductOverview } from "@/components/slides/slide-11-product-overview"
import { Slide12ForBrokers } from "@/components/slides/slide-12-for-brokers"
import { Slide13Partnership } from "@/components/slides/slide-13-partnership"
import { Slide14InvestorJourney } from "@/components/slides/slide-14-investor-journey"
import { Slide15Closing } from "@/components/slides/slide-15-closing"

export default function Home() {
  return (
    <main className="relative">
      <SlideNavigation />
      <Slide01Hero />
      <Slide02WhyMarkets />
      <Slide03Comparison />
      <Slide04BuyerProfiles />
      <Slide05CashFlow />
      <Slide06Yield />
      <Slide07Sources />
      <Slide08BaliDrivers />
      <Slide09InvestmentZone />
      <Slide10FeaturedProject />
      <Slide11ProductOverview />
      <Slide12ForBrokers />
      <Slide13Partnership />
      <Slide14InvestorJourney />
      <Slide15Closing />
    </main>
  )
}
