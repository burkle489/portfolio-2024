import ContentHero from "@/components/UI/Blades/ContentHero"
import RecentProjects from "@/components/UI/Blades/RecentProjects"
import TechStack from "@/components/UI/Blades/TechStack"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  if (typeof window !== "undefined") window.scrollTo(0, 0)
  return (
    <main className="main-container relative ">
      <ContentHero />
      <TechStack />
      <RecentProjects />
      {/* <BaseGridBlock /> */}
      {/* <Example /> */}
    </main>
  )
}
