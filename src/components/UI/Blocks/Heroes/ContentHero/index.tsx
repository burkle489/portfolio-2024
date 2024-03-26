import Heading from "@/components/UI/Atoms/Heading"
import clsx from "clsx"
import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "z-10 w-full flex flex-col justify-center h-[calc(100vh-5rem)] section relative !pt-40 pointer-events-none",
        className
      )}
    >
      <div className="w-11/12 h-fit mx-auto">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative flex flex-col justify-start items-start">
            <Heading
              variant="h2"
              className="text-light !text-[4vw] text-border uppercase !text-left whitespace-nowrap"
              animationInDirection="left"
              animationDelay={1}
            >
              give your business
            </Heading>
          </div>
          <Heading
            variant="h1"
            className="uppercase italic text-border z-20 !text-[15cqw] font-jost !font-semibold text-light text-center "
            animationInDirection="left"
            animationDelay={1.2}
          >
            Presence
          </Heading>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
