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
      {/* <h1 className="text-border z-20 font-jost text-light text-left  text-[14vw] absolute top-[25%] md:top-[5%] left-4 sm:left-12 md:left-20 xl:left-32 uppercase !font-extrabold whitespace-nowrap">
        Give your
      </h1>
      <h1 className="text-border z-20 font-jost text-light text-left  text-[14vw] absolute top-[45%] md:top-[20%] left-4 sm:left-12 md:left-20 xl:left-32 uppercase !font-extrabold whitespace-nowrap">
        
        business
      </h1> */}
      <div className="w-11/12 h-fit">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative">
            <Heading
              variant="h2"
              className="text-light !text-[4vw] text-border uppercase text-right whitespace-nowrap absolute right-8 lg:right-32 lg:top-[calc(100%+80px)]"
            >
              give your business
            </Heading>
          </div>
          <h1 className=" italic text-border z-20 !text-[20cqw] font-jost !font-semibold text-light text-center ">
            {/* <HeroTextAnimation
          bgClass="dark-complex-radial-gradient"
          delayMultiplier={2}
          >
          PRESENCE
        </HeroTextAnimation> */}
            Presence
          </h1>
        </div>
      </div>
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
