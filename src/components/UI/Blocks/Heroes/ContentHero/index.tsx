import Heading from "@/components/UI/Atoms/Heading"
import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import BgSVG3 from "@/components/svgs/components/BgSVG3"
import clsx from "clsx"
import { FC } from "react"
import HeroTextAnimation from "../HeroTextAnimation"
import { IBasicHeroProps } from "./ContentHero"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "w-full bg-dark flex flex-col justify-center h-[calc(100vh-5rem)] section relative !pt-40",
        className
      )}
    >
      <h1 className="text-border z-20 font-jost text-light text-left !text-[3rem] xs:!text-[4.5rem] md:!text-[7rem] lg:!text-[9rem] xl:!text-[11rem] absolute top-[25%] md:top-[5%] left-4 sm:left-12 md:left-20 xl:left-32 uppercase !font-extrabold whitespace-nowrap">
        <HeroTextAnimation bgClass="dark-complex-radial-gradient">
          Give your
        </HeroTextAnimation>
        <HeroTextAnimation
          bgClass="dark-complex-radial-gradient"
          delayMultiplier={1.5}
        >
          business
        </HeroTextAnimation>
      </h1>
      <Heading
        variant="h1"
        className="text-border z-20 font-jost !font-extrabold text-light text-right !text-[3rem] xs:!text-[4.5rem] md:!text-[7rem] lg:!text-[9rem] xl:!text-[11rem] absolute bottom-[25%] md:bottom-[8%] right-4 sm:right-12 md:right-20 xl:right-32"
      >
        <HeroTextAnimation
          bgClass="dark-complex-radial-gradient"
          delayMultiplier={2}
        >
          PRESENCE
        </HeroTextAnimation>
      </Heading>
      {/* <div>
            <span className="font-bold text-[25rem] md:text-[40rem] lg:text-[50rem] dark-complex-radial-gradient bg-clip-text text-transparent">
              P
            </span>{" "}
          </div> */}
      <div className="w-[60rem] absolute -right-[33rem] -top-[33rem] lg:-top-[32rem] lg:-right-[32rem]">
        <BgSVG1
          drawSvgStart="40% 40%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={1}
        />
      </div>
      <div className="w-[60rem] absolute -right-[35rem] -top-[35rem] lg:-top-[34rem] lg:-right-[34rem] ">
        <BgSVG1
          drawSvgStart="50% 50%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={0.5}
        />
      </div>
      <div className="w-[60rem] absolute lg:-top-[29rem] lg:-right-[29rem] -top-[31rem] -right-[31rem] hidden sm:block">
        <BgSVG1
          drawSvgStart="30% 30%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={1.5}
        />
      </div>
      <div className="w-[60rem] absolute -top-[29rem] -right-[29rem] lg:-top-[25rem] lg:-right-[25rem] hidden xl:block">
        <BgSVG1
          className=""
          strokeWidth={2}
          drawSvgStart="20% 20%"
          animationDelay={2}
          animationDuration={2}
        />
      </div>
      <div className="scale-50 md:scale-100 absolute z-10 w-[70rem] top-1/2 left-[40%] xs:left-[45%] md:left-[40%] lg:left-[45%] 2xl:left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute z-10 w-[70rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="100% 100%"
              animationDelay={2.6}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
          <div className="absolute z-10 w-[55rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="0% 0%"
              animationDelay={2.8}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
          <div className="absolute z-10 w-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="90% 90%"
              animationDelay={3}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
          <div className="absolute z-10 w-[25rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="10% 10%"
              animationDelay={3.2}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
          <div className="absolute z-10 w-[15rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="80% 80%"
              animationDelay={3.4}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
          <div className="absolute z-10 w-[8rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="20% 20%"
              animationDelay={3.6}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
          <div className="absolute z-10 w-[4rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BgSVG2
              drawSvgStart="70% 70%"
              animationDelay={3.8}
              animationDuration={2}
              className=""
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
      <div className="scale-[70%] md:scale-100 absolute -bottom-[5rem] sm:bottom-[0rem] -left-[35rem] z-10">
        <div className="relative  w-[60rem] h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem]">
            <BgSVG3
              drawSvgStart="80% 80%"
              animationDelay={4}
              animationDuration={2}
              className=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem]">
            <BgSVG3
              drawSvgStart="70% 70%"
              animationDelay={4}
              animationDuration={2}
              className=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem]">
            <BgSVG3
              drawSvgStart="60% 60%"
              animationDelay={4}
              animationDuration={2}
              className=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem]">
            <BgSVG3
              drawSvgStart="50% 50%"
              animationDelay={4}
              animationDuration={2}
              className=""
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] hidden lg:block">
            <BgSVG3
              drawSvgStart="90% 90%"
              animationDelay={4}
              animationDuration={2}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
