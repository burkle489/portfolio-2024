import Heading from "@/components/UI/Atoms/Heading"
import clsx from "clsx"
import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"
import { useAppSelector } from "@/store/hooks"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "basic-hero z-10 w-full flex flex-col justify-center h-[calc(95vh-5rem)] section relative !pt-20 !pb-0",
        className
      )}
    >
      <div className="w-11/12 h-fit mx-auto">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative flex flex-col justify-center md:justify-start items-center md:items-start">
            <Heading
              variant="h1"
              className="leading-[0.9] whitespace-nowrap uppercase text-border-thin z-20 !text-3xl xs:!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl 2xl:!text-8xl font-overpass !font-semibold text-light text-start "
              animationInDirection="left"
              animationDelay={1.2}
              scrubTrigger="basic-hero"
            >
              <div className="font-bodoni-moda italic leading-[0.9] visible">
                EMPOWER
              </div>
              <div className=" flex items-end sm:gap-4 visible">
                <div className="uppercase leading-[0.9] w-fit whitespace-nowrap">
                  your business
                </div>
                <div className="mb-1 md:mb-2 2xl:mb-3 text-sm sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl lowercase font-normal italic leading-[0.9] whitespace-nowrap">
                  with the
                </div>
              </div>
              <div className="visible italic !text-[3.5rem] xs:!text-[5rem] sm:!text-[7rem] md:!text-[8rem] lg:!text-[11rem] xl:!text-[13rem] 2xl:!text-[15rem] text-border-thick font-extrabold mt-0 mb-0 leading-[0.9]">
                PRESENCE
              </div>
              <div className="visible mr-2 sm:mr-0 lowercase text-right leading-[0.9] whitespace-nowrap">
                it deserves
              </div>
            </Heading>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
