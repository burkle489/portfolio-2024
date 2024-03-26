import Heading from "@/components/UI/Atoms/Heading"
import clsx from "clsx"
import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "z-10 w-full flex flex-col justify-center h-[calc(100vh-5rem)] section relative !pt-40",
        className
      )}
    >
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
            Presence
          </h1>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
