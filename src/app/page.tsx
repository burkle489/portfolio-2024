import Heading from "@/components/UI/Atoms/Heading"
import ContentBanner from "@/components/UI/Blocks/Grids/ContentBanner"
import StickyTextWithCards from "@/components/UI/Blocks/Grids/StickyTextWithCards"
import ContentHero from "@/components/UI/Blocks/Heroes/ContentHero"
import HorizontalStickyScroll from "@/components/UI/Blocks/HorizontalStickyScroll"
import MarqueeSection from "@/components/UI/Blocks/MarqueeSection"
import ServicesShowcase from "@/components/UI/Blocks/ServicesShowcase"
import { TCanvas } from "@/components/three/TCanvas"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  if (typeof window !== "undefined") window.scrollTo(0, 0)
  return (
    <main className="main-container relative pointer-events-none">
      {/* <StatementHero /> */}

      <ContentHero />
      <ServicesShowcase />
      <ContentBanner align="center">
        <div className="inner-section">
          <Heading variant="h2" className="text-border text-center">
            No matter what stage you are at, compromise on quality is{" "}
            <span className="italic font-bodoni-moda inline-block">
              {" "}
              never{" "}
            </span>{" "}
            the answer
          </Heading>
          <p></p>
        </div>
      </ContentBanner>
      {/* <StickyTextWithCards /> */}
      {/* <HorizontalStickyScroll /> */}
      {/* <ContentBanner /> */}
      {/* <MarqueeSection /> */}
    </main>
  )
}
