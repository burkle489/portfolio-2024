import Heading from "@/components/UI/Atoms/Heading"
import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import BgSVG3 from "@/components/svgs/components/BgSVG3"
import clsx from "clsx"
import { FC } from "react"
import HeroTextAnimation from "../HeroTextAnimation"
import { IBasicHeroProps } from "./ContentHero"
import CentralHeroShape from "@/components/UI/Atoms/HeroShapes/CentralHeroShape"
import TopLeftHeroShape from "@/components/UI/Atoms/HeroShapes/TopRightHeroShape"
import TopRightHeroShape from "@/components/UI/Atoms/HeroShapes/TopRightHeroShape"
import BottomLeftHeroShape from "@/components/UI/Atoms/HeroShapes/BottomLeftHeroShape"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "z-10 w-full flex flex-col justify-center h-[calc(100vh-5rem)] section relative !pt-40",
        className
      )}
    >
      <h1 className="text-border z-20 font-jost text-light text-left !text-[3rem] xs:!text-[4.5rem] md:!text-[7rem] lg:!text-[9rem] xl:!text-[11rem] absolute top-[25%] md:top-[5%] left-4 sm:left-12 md:left-20 xl:left-32 uppercase !font-extrabold whitespace-nowrap">
        {/* <HeroTextAnimation bgClass="dark-complex-radial-gradient">
          Give your
        </HeroTextAnimation>
        <HeroTextAnimation
          bgClass="dark-complex-radial-gradient"
          delayMultiplier={1.5}
        >
          business
        </HeroTextAnimation> */}
        Give your business
      </h1>
      <Heading
        variant="h1"
        className="text-border z-20 font-jost !font-extrabold text-light text-right !text-[3rem] xs:!text-[4.5rem] md:!text-[7rem] lg:!text-[9rem] xl:!text-[11rem] absolute bottom-[25%] md:bottom-[8%] right-4 sm:right-12 md:right-20 xl:right-32"
      >
        {/* <HeroTextAnimation
          bgClass="dark-complex-radial-gradient"
          delayMultiplier={2}
        >
          PRESENCE
        </HeroTextAnimation> */}
        Presence
      </Heading>
      {/* <div>
            <span className="font-bold text-[25rem] md:text-[40rem] lg:text-[50rem] dark-complex-radial-gradient bg-clip-text text-transparent">
              P
            </span>{" "}
          </div> */}
      {/* <TopRightHeroShape />
      <CentralHeroShape />
      <BottomLeftHeroShape /> */}
    </section>
  )
}

export default BasicHero
