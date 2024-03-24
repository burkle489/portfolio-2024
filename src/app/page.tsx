import ContentBanner from "@/components/UI/Blocks/Grids/ContentBanner"
import StickyTextWithCards from "@/components/UI/Blocks/Grids/StickyTextWithCards"
import ContentHero from "@/components/UI/Blocks/Heroes/ContentHero"
import HorizontalStickyScroll from "@/components/UI/Blocks/HorizontalStickyScroll"
import MarqueeSection from "@/components/UI/Blocks/MarqueeSection"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  return (
    <main className="main-container pointer-events-none">
      {/* <StatementHero /> */}
      <ContentHero />
      <StickyTextWithCards />
      {/* <HorizontalStickyScroll /> */}
      <ContentBanner />
      {/* <MarqueeSection /> */}
    </main>
  )
}
