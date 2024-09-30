import HomeHero from "@/components/UI/Blades/HomeHero"

import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  if (typeof window !== "undefined") window.scrollTo(0, 0)

  return (
    <main className="main-container relative pointer-events-none">
      <HomeHero />
      {/* <TechStack />
      <Resume />
      <RecentProjects /> */}
    </main>
  )
}
