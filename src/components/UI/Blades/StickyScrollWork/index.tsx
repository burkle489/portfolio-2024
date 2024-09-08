import { FC } from "react"
import Heading from "../../Atoms/Heading"
import AnchorLink from "../../Molecules/AnchorLink"

const StickyScrollWork: FC = () => {
  return (
    <section className="section min-h-screen">
      <div className="inner-section w-full  grid grid-cols-1 md:grid-cols-2 relative gap-20 h-full">
        <div className="col-span-1 font-overpass h-full relative">
          <div className="relative md:sticky top-24 z-20">
            <Heading
              variant="h2"
              className="font-bold relative !text-6xl text-light text-border"
            >
              Work
            </Heading>
            <p className="text-3xl text-light text-border font-semibold">
              Your business deserves a high-quality, bespoke web presence at an
              great price.
            </p>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-6"></div>
      </div>
    </section>
  )
}

export default StickyScrollWork
