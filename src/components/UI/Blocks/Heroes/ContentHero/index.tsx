import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"
import clsx from "clsx"
import Image from "next/image"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"
import PLogoMask from "@/components/svgs/components/p-logo-mask"
import HeroBubbles from "@/components/UI/Atoms/HeroBubbles"
import HighlightedText from "@/components/UI/Atoms/HighlightedText"
import ThreeP from "@/components/UI/Atoms/ThreeP"
import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import BgSVG3 from "@/components/svgs/components/BgSVG3"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "w-full bg-dark flex flex-col justify-center h-[calc(100vh-5rem)] section relative !pt-40",
        className
      )}
    >
      <Heading
        variant="h1"
        className="text-border z-10 font-jost  text-light text-left !text-[11rem] absolute top-[20%] left-32 uppercase !font-extrabold"
      >
        Give your <br /> business
      </Heading>
      <Heading
        variant="h1"
        className="text-border z-10 font-jost !font-extrabold text-light text-right !text-[15rem] absolute bottom-[8%] right-32"
      >
        PRESENCE
      </Heading>
      {/* <div>
            <span className="font-bold text-[25rem] md:text-[40rem] lg:text-[50rem] dark-complex-radial-gradient bg-clip-text text-transparent">
              P
            </span>{" "}
          </div> */}
      <div className="w-[60rem] absolute -top-[25rem] -right-[25rem]">
        <BgSVG1 className="" strokeWidth={2} />
      </div>
      <div className="w-[60rem] absolute -top-[29rem] -right-[29rem]">
        <BgSVG1 className="" strokeWidth={1.5} />
      </div>
      <div className="w-[60rem] absolute -top-[32rem] -right-[32rem]">
        <BgSVG1 className="" strokeWidth={1} />
      </div>
      <div className="w-[60rem] absolute -top-[34rem] -right-[34rem]">
        <BgSVG1 className="" strokeWidth={0.5} />
      </div>
      <div className="absolute z-0 w-[70rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <BgSVG2 className="" />
      </div>

      <div className="h-[70rem] absolute -bottom-[25rem] -left-[40rem] z-20">
        <BgSVG3 className="" />
      </div>
    </section>
  )
}

export default BasicHero
