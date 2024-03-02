import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"
import clsx from "clsx"
import Image from "next/image"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"
import PLogoMask from "@/components/svgs/components/p-logo-mask"
import HeroBubbles from "@/components/UI/Atoms/HeroBubbles"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "w-full bg-dark flex flex-col  justify-center h-[calc(100vh-80px)] section relative overflow-hidden",
        className
      )}
    >
      <div
        className={clsx("flex items-center justify-center gap-4 inner-section")}
      >
        <div className="w-full flex items-center justify-between">
          <Heading
            variant="h1"
            className="font-jost font-semibold text-light text-left max-w-md text-8xl"
          >
            Give your business the <br />
            <span className="font-extrabold text-9xl dark-complex-radial-gradient bg-clip-text text-transparent">
              Presence
            </span>{" "}
            <br />
            it deserves
            <span className="font-bold  dark-complex-radial-gradient bg-clip-text text-transparent">
              .
            </span>
          </Heading>
          <div
            style={{
              transform: "perspective(500px) rotateY(-21deg) rotateX(30deg)",
            }}
          >
            <span className="font-bold text-[50rem] dark-complex-radial-gradient bg-clip-text text-transparent">
              P
            </span>{" "}
          </div>
        </div>
      </div>
      <HeroBubbles />
    </section>
  )
}

export default BasicHero
