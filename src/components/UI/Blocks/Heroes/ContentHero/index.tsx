import Heading from "@/components/UI/Atoms/Heading"
import clsx from "clsx"
import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"
import { useAppSelector } from "@/store/hooks"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "basic-hero z-10 w-full flex flex-col justify-center h-[calc(100vh)] section relative !pt-20 !pb-0",
        className
      )}
    >
      <div className="w-11/12 h-fit mx-auto">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative flex flex-col justify-center items-center">
            <div className="flex gap-8 ml-16">
              <Heading
                variant="h1"
                className=" text-border leading-[0.9] whitespace-nowrap uppercase  z-20 !text-3xl xs:!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl 2xl:!text-8xl font-bodoni-moda !font-normal text-light text-start "
                animationInDirection="left"
                animationDelay={0}
                scrubTrigger="basic-hero"
                wordStagger={0.2}
              >
                ENABLE / BUILD / GROW
              </Heading>
            </div>
            <Heading
              animationInDirection="left"
              variant="h1"
              animationDelay={1.5}
              scrubTrigger="basic-hero"
              className=" text-light visible italic !text-[3.5rem] xs:!text-[5rem] sm:!text-[7rem] md:!text-[8rem] lg:!text-[11rem] xl:!text-[13rem] 2xl:!text-[15rem] text-border-thick font-extrabold mt-0 mb-0 leading-[0.9]"
            >
              PRESENCE
            </Heading>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
