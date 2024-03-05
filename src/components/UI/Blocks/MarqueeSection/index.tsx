import { FC } from "react"
import { IMarqueeSectionProps } from "./MarqueeSection.types"
import Marquee from "react-fast-marquee"
import MarqueeCard from "./MarqueeCard"
import Heading from "../../Atoms/Heading"
const MarqueeSection: FC<IMarqueeSectionProps> = ({}) => {
  return (
    <section className="section bg-light">
      <div className="">
        <div className="inner-section">
          <Heading variant="h2" className="font-bold text-dark text-right">
            The nitty
            <span className="font-extrabold purple-green-radial-gradient bg-clip-text text-transparent">
              -
            </span>
            gritty.
          </Heading>
        </div>
        <Marquee className="py-20" pauseOnHover autoFill speed={100}>
          <MarqueeCard
            {...{
              heading: "SEO",
              description:
                "SEO is crucial to your businesses visibility on Google. All our code is Squeaky SEO Clean.",
              colour: "orange",
            }}
          />
          <MarqueeCard
            {...{
              colour: "sapphire",
              heading: "Modern Tech",
              description:
                "We use modern web technologies ensuring all Core Web Vitals are met, and your visitors are never left in the loading screen.",
            }}
          />
          <MarqueeCard
            {...{
              colour: "avocado",
              heading: "Analytics",
              description:
                "Google Analytics is an invaluable tool to track user behaviour and learn what makes them tick.",
            }}
          />
          <MarqueeCard
            {...{
              colour: "sapphire",
              heading: "Domain & Hosting",
              description:
                "Domain and Hosting Managed by us, so you have more time for what's important - your business.",
            }}
          />
        </Marquee>
      </div>
    </section>
  )
}

export default MarqueeSection
