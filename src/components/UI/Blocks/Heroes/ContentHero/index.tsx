import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"
import clsx from "clsx"
import Image from "next/image"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"
import PLogoMask from "@/components/svgs/components/p-logo-mask"
import HeroBubbles from "@/components/UI/Atoms/HeroBubbles"
import HighlightedText from "@/components/UI/Atoms/HighlightedText"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "w-full bg-dark flex flex-col justify-center h-[80vh] section relative overflow-hidden",
        className
      )}
    >
      <div
        className={clsx("flex items-center justify-center gap-4 inner-section")}
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <Heading
            variant="h1"
            className="font-jost !font-semibold text-light text-left max-w-md !text-7xl"
          >
            Give your business the <br />
            <HighlightedText
              {...{ text: "Presence", bgClass: "dark-complex-radial-gradient" }}
            />
            <br />
            it deserves
            <HighlightedText
              {...{ text: ".", bgClass: "dark-complex-radial-gradient" }}
            />
          </Heading>
          <div>
            <span className="font-bold text-[25rem] md:text-[40rem] lg:text-[50rem] dark-complex-radial-gradient bg-clip-text text-transparent">
              P
            </span>{" "}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
