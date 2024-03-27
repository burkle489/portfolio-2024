import Heading from "@/components/UI/Atoms/Heading"
import clsx from "clsx"
import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "basic-hero z-10 w-full flex flex-col justify-center h-[calc(100vh-5rem)] section relative !pt-40 pointer-events-none",
        className
      )}
    >
      <div className="w-11/12 h-fit mx-auto">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative flex flex-col justify-start items-start">
            <Heading
              variant="h1"
              className="leading-[0.9] uppercase text-border-thin z-20 !text-8xl font-overpass !font-semibold text-light text-start "
              animationInDirection="left"
              animationDelay={1.2}
              scrubTrigger="basic-hero"
            >
              <div className="font-bodoni-moda italic leading-[0.9]">
                EMPOWER
              </div>
              <div className=" flex items-end gap-4">
                <div className="uppercase leading-[0.9]">your business</div>
                {/* <div className="text-5xl lowercase font-bodoni-moda flex flex-col items-center justify-center font-normal italic">
                  <div>with</div>
                  <div>the</div>
                </div> */}
                <div className="mb-4 text-5xl lowercase  font-normal italic leading-[0.9]">
                  with the
                </div>
              </div>

              <div className="italic !text-[15rem] text-border-thick font-extrabold mt-0 mb-0 leading-[0.9]">
                PRESENCE
              </div>
              <div className="lowercase text-right  leading-[0.9]">
                it deserves
              </div>
            </Heading>
            {/* <Heading
              variant="h2"
              className="text-light !text-[4vw] text-border uppercase !text-left whitespace-nowrap"
              animationInDirection="left"
              animationDelay={1}
            >
              EMPOWER <br /> your business
            </Heading>
            <Heading
              variant="h2"
              className="text-light !text-[4vw] text-border uppercase !text-left whitespace-nowrap ml-40 mt-20"
              animationInDirection="left"
              animationDelay={1}
            >
              with the
            </Heading>
            <Heading
              variant="h1"
              className="uppercase italic text-border z-20 !text-[15cqw] font-overpass !font-semibold text-light text-center "
              animationInDirection="left"
              animationDelay={1.2}
            >
              Presence
            </Heading>
            <Heading
              variant="h2"
              className="text-light !text-[4vw] text-border uppercase !text-right whitespace-nowrap"
              animationInDirection="left"
              animationDelay={1}
            >
              it
              <span className="italic lowercase font-bodoni-moda inline">
                deserves
              </span>
            </Heading> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
