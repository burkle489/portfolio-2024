import Example from "@/components/UI/Blocks/Example"
import BaseGridBlock from "@/components/UI/Blocks/Grids/BaseGridBlock"
import GridBlock from "@/components/UI/Blocks/Grids/GridBlock"
import ContentHero from "@/components/UI/Blocks/Heroes/ContentHero"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  if (typeof window !== "undefined") window.scrollTo(0, 0)
  return (
    <main className="main-container relative ">
      <ContentHero />
      <GridBlock />
      {/* <BaseGridBlock /> */}
      <Example />
    </main>
  )
}
