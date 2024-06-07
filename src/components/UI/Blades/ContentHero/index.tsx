import Heading from "@/components/UI/Atoms/Heading"
import clsx from "clsx"
import { FC } from "react"
import { IBasicHeroProps } from "./ContentHero"
import Paragraph from "@/components/UI/Atoms/Paragraph"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "basic-hero z-10 w-full flex flex-col justify-center h-[calc(100vh)] section relative ",
        className
      )}
    >
      <div className="w-11/12 h-fit mx-auto">
        <div className="relative w-full flex flex-col justify-center">
          <div className="w-full h-full relative flex flex-col justify-center items-center gap-20">
            <div className="flex flex-col w-full items-start justify-start ">
              <Heading
                variant="h1"
                className="max-w-screen-md font-bold text-border leading-[0.9] whitespace-nowrap uppercase z-20 font-bodoni-moda text-light text-start "
                // animationInDirection="left"
                animationDelay={0}
                scrubTrigger="basic-hero"
                wordStagger={0.2}
              >
                Tayler Burke
              </Heading>
              <Heading
                variant="h2"
                className="max-w-screen-md italic text-border leading-[0.9] whitespace-nowrap uppercase z-20 font-bodoni-moda !font-normal text-light  "
                animationInDirection="left"
                animationDelay={1}
                scrubTrigger="basic-hero"
                wordStagger={0.2}
              >
                Full-Stack Developer
              </Heading>
            </div>
            <div className="flex flex-col w-full items-end justify-end">
              <Paragraph className="max-w-screen-md !text-3xl !mb-12 text-end font-bodoni-moda">
                Nice to meet you! I&apos;m a passionate and experienced
                full-stack web developer with a knack for crafting digital
                solutions that exceed expectations.
              </Paragraph>
              {/* <Paragraph className="max-w-screen-md !text-3xl !mb-12 text-end font-bodoni-moda">
                Across my 5 years of experience within the industry, I&apos;ve
                mastered many technologies, proficiently ran the E2E development
                of many different client projects and even ran an Amazon
                business alongside my brother!
              </Paragraph> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicHero
