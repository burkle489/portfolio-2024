import DownloadLink from "@/components/UI/Atoms/DownloadLink"
import Heading from "@/components/UI/Atoms/Heading"
import Paragraph from "@/components/UI/Atoms/Paragraph"
import StyledImage from "@/components/UI/Atoms/StyledImage"
import AnchorLink from "@/components/UI/Molecules/AnchorLink"
import Image from "next/image"

const About = () => {
  return (
    <div className="pointer-events-none w-screen min-h-screen relative z-50 py-32 px-2 sm:px-6 md:px-12 lg:px-20 flex flex-col justify-start gap-10">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
          <Heading
            variant="h1"
            className=" font-playfair text-light uppercase font-bold italic text-border !leading-[0.9] !mb-0"
          >
            My story <br /> so far.
          </Heading>
          <div className="flex flex-col items-start lg:items-end justify-end gap-4 h-full">
            <DownloadLink
              path="/tayler-burke-resume.pdf"
              animationDelay={3.5}
            />
            <AnchorLink
              animationDelay={3.8}
              isExternal
              href="https://www.github.com/burkle489"
              className="flex items-center justify-end group pointer-events-auto"
              hoverClasses="!h-1/2"
            >
              <Heading
                hasAnimation={false}
                variant="h2"
                className="!text-3xl md:!text-4xl lg:!text-5xl !mb-0 text-right font-overpass text-light font-semibold text-border !leading-[0.9] mr-2 md:mr-4"
              >
                Github
              </Heading>
              <span className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-light text-border"
                >
                  <line x1="3" y1="21" x2="21" y2="3"></line>
                  <polyline points="3 3 21 3 21 21"></polyline>
                </svg>
              </span>
            </AnchorLink>
            <AnchorLink
              isExternal
              animationDelay={4.1}
              href="https://www.linkedin.com/in/tayler-burke"
              className="flex items-center justify-end group pointer-events-auto"
              hoverClasses="!h-1/2"
            >
              <Heading
                hasAnimation={false}
                variant="h2"
                className="!text-3xl md:!text-4xl lg:!text-5xl !mb-0 text-right font-overpass text-light font-semibold text-border !leading-[0.9] mr-2 md:mr-4"
              >
                LinkedIn
              </Heading>
              <span className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-light text-border"
                >
                  <line x1="3" y1="21" x2="21" y2="3"></line>
                  <polyline points="3 3 21 3 21 21"></polyline>
                </svg>
              </span>
            </AnchorLink>
          </div>
        </div>
        <div>
          <Paragraph className="max-w-screen-lg !text-xl md:!text-2xl">
            Hey, I&apos;m Tayler! I&apos;m a Full-Stack Developer with over 5
            years of experience turning ideas into slick web apps using React,
            Next.js, and TypeScript. I&apos;m all about coding, learning, and
            keeping up with the fast-moving tech world.
            <br />
            <br /> Right now, I&apos;m crafting cool stuff at Fluid for gaming
            and lifestyle brands such as Tetris and Bandai Namco Mobile.
            I&apos;ve also iterated on financial tools at Equator and built apps
            from the ground up at AVAMAE. I love making things fast, fun, and
            super user-friendly.
          </Paragraph>
        </div>
      </div>

      <div className="w-full flex items-center justify-center relative pointer-events-auto">
        <StyledImage animationDelay={4.5} />
      </div>
    </div>
  )
}

export default About
