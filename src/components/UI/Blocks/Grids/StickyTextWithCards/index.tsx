import { FC } from "react"
import { IStickyTextWithCardsProps } from "./StickyTextWithCards.types"
import clsx from "clsx"
import Image from "next/image"
import placeholder from "@/images/1920x1080-placeholder.png"
import CardGrid from "../../../Organisms/CardGrid"
import Heading from "../../../Atoms/Heading"

const StickyTextWithCards: FC<IStickyTextWithCardsProps> = ({ className }) => {
  return (
    <section className={clsx("section bg-light", className)}>
      <div className="inner-section w-full   grid grid-cols-2 relative gap-12">
        <div className="col-span-1 font-jost h-full relative">
          <div className=" sticky top-32">
            <Heading variant="h2" className="font-bold !text-5xl">
              No matter the size of your business, compromise on quality is{" "}
              <span className="font-extrabold text-5xl dark-complex-radial-gradient bg-clip-text text-transparent">
                never
              </span>{" "}
              the answer.
            </Heading>
            <p className="text-xl">
              Your business deserves a high-quality, bespoke web presence at an
              affordable price.
            </p>
            {/* <p>
              Your business deserves a high-quality, bespoke web presence at an
              affordable price.
            </p> */}
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-6">
          <div className="col-span-1 p-1 pb-6 bg-light overflow-hidden  relative group hover:scale-105 transition-all duration-300">
            <div className="w-full h-full z-20 relative">
              <Heading
                variant="h3"
                className="text-sapphire !text-2xl font-semibold tracking-wide"
              >
                Affordable
              </Heading>
              <p className="text-dark text-lg">
                We believe in small businesses {"("}especially as we are one
                ourselves!{")"} Irure commodo veniam nulla dolore Lorem
                reprehenderit voluptate. Commodo velit veniam laborum deserunt
                sint.
              </p>
            </div>
            <div className="h-4 absolute bottom-0 left-0 w-full dark-complex-radial-gradient">
              <div className="w-full absolute bottom-2 bg-light h-60 group-hover:bottom-10 transition-all duration-500"></div>{" "}
            </div>
          </div>
          <div className="col-span-1 p-1 pb-6 bg-light overflow-hidden  relative group hover:scale-105 transition-all duration-300">
            <div className="w-full h-full relative z-20">
              <Heading
                variant="h3"
                className="text-orange !text-2xl font-semibold tracking-wide"
              >
                Bespoke
              </Heading>
              <p className="text-dark text-lg">
                There is no compromise on quality here. We use the most
                up-to-date and SEO-friendly modern web technologies. Irure
                commodo veniam nulla dolore Lorem reprehenderit voluptate.
                Commodo velit veniam laborum deserunt sint.
              </p>
            </div>
            <div className="h-4 absolute bottom-0 left-0 w-full pink-orange-radial-gradient">
              <div className="w-full absolute bottom-2 bg-light h-60 group-hover:bottom-10 transition-all duration-500"></div>{" "}
            </div>
          </div>
          <div className="col-span-1 p-1 pb-6 bg-light overflow-hidden  relative group hover:scale-105 transition-all duration-300">
            <div className="w-full h-full z-20 relative">
              <Heading
                variant="h3"
                className="text-avocado !text-2xl font-semibold tracking-wide"
              >
                Tailored
              </Heading>
              <p className="text-dark text-lg">
                We work with top-quality designers to deliver a brand that you,
                and your customers, will love. Irure commodo veniam nulla dolore
                Lorem reprehenderit voluptate. Commodo velit veniam laborum
                deserunt sint.
              </p>
            </div>
            <div className="h-4 absolute bottom-0 left-0 w-full purple-green-radial-gradient">
              <div className="w-full absolute bottom-2 bg-light h-60  group-hover:bottom-10 transition-all duration-500"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyTextWithCards
