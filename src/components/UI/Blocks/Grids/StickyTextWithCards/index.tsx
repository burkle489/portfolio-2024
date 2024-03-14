import { FC } from "react"
import { IStickyTextWithCardsProps } from "./StickyTextWithCards.types"
import clsx from "clsx"
import Image from "next/image"
import placeholder from "@/images/1920x1080-placeholder.png"
import CardGrid from "../../../Organisms/CardGrid"
import Heading from "../../../Atoms/Heading"
import HighlightedText from "@/components/UI/Atoms/HighlightedText"

const StickyTextWithCards: FC<IStickyTextWithCardsProps> = ({ className }) => {
  return (
    <section className={clsx("section bg-dark", className)}>
      <div className="inner-section w-full  grid grid-cols-1 md:grid-cols-2 relative gap-12">
        <div className="col-span-1 font-jost h-full relative">
          <div className="relative md:sticky top-24">
            <Heading
              variant="h2"
              className="font-bold relative !text-5xl text-light"
            >
              No matter the size of your business, compromise on quality is{" "}
              <HighlightedText
                {...{
                  text: "never",
                  textColor: "light",
                  textBorder: "thin",
                  bgClass: "dark-complex-radial-gradient !bottom-3 !w-[115%]",
                }}
              />{" "}
              the answer.
            </Heading>
            <p className="text-2xl text-light">
              Your business deserves a high-quality, bespoke web presence at an
              great price.
            </p>
            {/* <p>
              Your business deserves a high-quality, bespoke web presence at an
              affordable price.
            </p> */}
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-6">
          <div className="col-span-1 p-1 pb-6 bg-dark overflow-hidden  relative group hover:scale-105 transition-all duration-300">
            <div className="w-full h-full z-20 relative">
              <Heading
                variant="h3"
                className="text-light !text-3xl font-bold tracking-wide"
              >
                <HighlightedText
                  {...{
                    text: "Value",
                    textColor: "light",
                    textBorder: "thin",
                    bgClass:
                      "dark-complex-radial-gradient !bottom-0 !h-2/4 !w-[115%]",
                  }}
                />{" "}
              </Heading>
              <p className="text-light text-xl">
                We believe in small businesses {"("}especially as we are one
                ourselves!{")"}
              </p>
            </div>
            {/* <div className="h-2 group-hover:h-4 transition-all duration-300 absolute bottom-0 left-0 w-full dark-complex-radial-gradient"></div> */}
          </div>
          <div className="col-span-1 p-1 pb-6 bg-dark overflow-hidden  relative group hover:scale-105 transition-all duration-300">
            <div className="w-full h-full relative z-20">
              <Heading
                variant="h3"
                className="text-light !text-3xl font-bold tracking-wide"
              >
                <HighlightedText
                  {...{
                    text: "Bespoke",
                    textColor: "light",
                    textBorder: "thin",
                    bgClass:
                      "dark-complex-radial-gradient !bottom-0 !h-2/4 !w-[115%]",
                  }}
                />{" "}
              </Heading>
              <p className="text-light text-xl">
                There is no compromise on quality here. We use the most
                up-to-date and SEO-friendly modern web technologies.
              </p>
            </div>
            {/* <div className="h-2 group-hover:h-4 transition-all duration-300 absolute bottom-0 left-0 w-full dark-complex-radial-gradient"></div> */}
          </div>
          <div className="col-span-1 p-1 pb-6 bg-dark overflow-hidden relative group hover:scale-105 transition-all duration-300">
            <div className="w-full h-full z-20 relative">
              <Heading
                variant="h3"
                className="text-light !text-3xl font-bold tracking-wide"
              >
                <HighlightedText
                  {...{
                    text: "Tailored",
                    textColor: "light",
                    textBorder: "thin",
                    bgClass:
                      "dark-complex-radial-gradient !bottom-0 !h-2/4 !w-[115%]",
                  }}
                />{" "}
              </Heading>
              <p className="text-light text-xl">
                We work with top-quality designers to deliver a brand that you,
                and your customers, will love.
              </p>
            </div>
            {/* <div className="h-2 group-hover:h-4 transition-all duration-300  absolute bottom-0 left-0 w-full dark-complex-radial-gradient"></div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyTextWithCards
