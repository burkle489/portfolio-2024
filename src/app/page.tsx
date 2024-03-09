import StickyTextWithCards from "@/components/UI/Blocks/Grids/StickyTextWithCards"
import ContentHero from "@/components/UI/Blocks/Heroes/ContentHero"
import HorizontalStickyScroll from "@/components/UI/Blocks/HorizontalStickyScroll"
import MarqueeSection from "@/components/UI/Blocks/MarqueeSection"

export default function Home() {
  return (
    <main className="main-container">
      {/* <StatementHero /> */}
      <ContentHero />
      <StickyTextWithCards />
      <HorizontalStickyScroll />
      {/* <MarqueeSection /> */}
    </main>
  )
}
