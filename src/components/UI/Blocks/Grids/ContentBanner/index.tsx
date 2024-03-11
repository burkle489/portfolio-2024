import { FC } from "react"
import { IContentBannerProps } from "./ContentBanner.types"
import OneXTwoGrid from "@/components/UI/Organisms/Grids/OneXTwoGrid"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"
import AnimatingCircles from "./AnimatingCircles"
import HighlightedText from "@/components/UI/Atoms/HighlightedText"

const ContentBanner: FC<IContentBannerProps> = ({}) => {
  return (
    <section className="section bg-dark text-white">
      <OneXTwoGrid
        hideSecondOnMobile
        componentOne={
          <div className="w-full h-full flex flex-col justify-start items-start">
            <Heading variant="h2" className="mb-4">
              Don&apos;t worry! We{" "}
              <HighlightedText
                {...{
                  text: "want",
                  textColor: "light",
                  textBorder: "thin",
                  bgClass:
                    "purple-green-radial-gradient !bottom-1 h-2/5 !w-[113%]",
                }}
              />{" "}
              to work with{" "}
              <HighlightedText
                {...{
                  text: "you",
                  textColor: "light",
                  textBorder: "thin",
                  bgClass:
                    "purple-green-radial-gradient !bottom-1 h-2/5 !w-[115%]",
                }}
              />{" "}
              too.
            </Heading>
            <Heading variant="h3" className="!mb-10">
              Let&apos;s build your web presence today.
            </Heading>
            <Button text="Get in Touch" />
          </div>
        }
        componentTwo={
          <div className="w-full h-full bg-dark flex flex-col justify-end items-center relative"></div>
        }
      />
      <div className="w-full h-20 bg-gradient-to-t from-light opacity-5 to-dark absolute bottom-0 left-0 z-20"></div>
    </section>
  )
}

export default ContentBanner
