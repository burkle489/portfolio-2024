import Heading from "@/components/UI/Atoms/Heading"
import Paragraph from "@/components/UI/Atoms/Paragraph"
import clsx from "clsx"
import { FC } from "react"
import { IHomeHeroProps } from "./HomeHero"
import Link from "next/link"
import HomeHeroNav from "../../Organisms/HomeHeroNav"

const HomeHero: FC<IHomeHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "basic-hero z-10 w-full flex flex-col justify-center h-[calc(100vh)] section relative ",
        className
      )}
    >
      <div className="w-11/12 h-fit mx-auto">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative grid grid-cols-2">
            <div className="col-span-2 flex flex-col w-full items-start justify-start ">
              <Heading
                variant="h1"
                className="max-w-screen-md font-bold text-border !text-8xl uppercase z-20 !mb-0 text-light text-start !leading-snug"
                // animationInDirection="left"
                animationDelay={0}
                scrubTrigger="basic-hero"
                wordStagger={0.2}
              >
                Tayler Burke
              </Heading>
              <Heading
                variant="h2"
                className="!font-playfair max-w-screen-md italic !mb-8 text-border !text-5xl z-20 !font-semibold text-light "
                animationInDirection="left"
                animationDelay={1}
                scrubTrigger="basic-hero"
                wordStagger={0.2}
              >
                Full-Stack Developer
              </Heading>
              <Paragraph className="max-w-screen-md !text-2xl">
                Nice to meet you!
                <br /> I&apos;m a passionate and experienced full-stack web
                developer with a knack for crafting digital solutions that
                exceed expectations.
              </Paragraph>
            </div>
            <div className="text-light col-span-2 flex flex-col justify-end items-end w-full">
              <HomeHeroNav />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
