import { FC } from "react"
import { IBasicHeroProps } from "./StatementHero"
import clsx from "clsx"
import Image from "next/image"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"
import PLogoMask from "@/components/svgs/components/p-logo-mask"
import HeroBubbles from "@/components/UI/Atoms/HeroBubbles"

const StatementHero: FC<IBasicHeroProps> = ({ className }) => {
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
        <div className="w-full ">
          {/* <span className="text-white text-[23rem] font-extrabold absolute top-0 -left-12">
            build
          </span>{" "} */}
          <span className="text-white text-[28rem] font-extrabold absolute top-[20rem] -left-12">
            build
          </span>{" "}
          <Heading
            variant="h1"
            className="font-overpass font-semibold text-light text-left max-w-md !text-[25rem] leading-[1] w-full -bottom-20 absolute -left-12"
          >
            <span className="font-extrabold  dark-complex-radial-gradient bg-clip-text text-transparent">
              Presence
            </span>{" "}
          </Heading>
          {/* <div
            style={{
              transform: "perspective(500px) rotateY(-21deg) rotateX(30deg)",
            }}
          >
            <span className="font-bold text-[50rem] dark-complex-radial-gradient bg-clip-text text-transparent">
              P
            </span>{" "}
          </div> */}
        </div>
      </div>
      {/* <HeroBubbles /> */}
    </section>
  )
}

export default StatementHero
