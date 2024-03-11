"use client"

import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { FC, ReactNode, useEffect, useRef, useState } from "react"
import Marquee from "react-fast-marquee"
import Heading from "../../Atoms/Heading"
import ShowcaseCard from "../../Molecules/Cards/ShowcaseCard"
import { IThreeShowcaseProps } from "./HorizontalStickyScroll.types"
import HighlightedText from "../../Atoms/HighlightedText"

import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

const HorizontalStickyScroll: FC<IThreeShowcaseProps> = ({}) => {
  const containerRef = useRef(null)
  const slidesWrapperRef = useRef(null)
  const slidesRef = useRef(null)
  const [transformVal, setTransformVal] = useState<string>("")

  const windowSize = useWindowSize()

  useEffect(() => {
    console.log(windowSize.width)
    if (windowSize.width && windowSize.width < 768) {
      setTransformVal("translate3d(-240vw,0,0)")
    } else if (windowSize.width && windowSize.width < 1280) {
      setTransformVal("translate3d(-120vw,0,0)")
    } else {
      setTransformVal("translate3d(-110vw,0,0)")
    }
  }, [windowSize])

  const mm = gsap.matchMedia()
  useGSAP(() => {
    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(max-width: 1279px)",
        isLargeDesktop: "(min-width: 1280px)",
      },
      (context) => {
        gsap.to(slidesRef.current, {
          transform: context.conditions?.isMobile
            ? "translate3d(-240vw,0,0)"
            : context.conditions?.isDesktop
            ? "translate3d(-160vw,0,0)"
            : "translate3d(-110vw,0,0)",
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            pin: ".main-container",
            start: "40% center",
            end: "bottom -100%",
            markers: true,
            invalidateOnRefresh: true,
          },
        })
      }
    )
  })

  return (
    <section ref={containerRef} className="bg-dark">
      <div
        ref={slidesRef}
        className="flex w-fit flex-nowrap will-change-transform"
      >
        <div className="slide shrink-0 flex py-20 relative">
          <div>
            <div className="container min-w-[160vw] md:min-w-[120vw] xl:min-w-[90vw] w-auto flex flex-col">
              <div className="flex w-auto">
                <div className="block min-w-[80vw] w-[80vw] md:min-w-[60vw] md:w-[60vw] xl:w-[45vw] xl:min-w-[45vw] px-4 max-h-full h-full">
                  <Heading
                    variant="h1"
                    className="!text-6xl xs:!text-7xl sm:!text-8xl font-extrabold text-light mb-20 whitespace-nowrap h-full "
                  >
                    What we <br />
                    <HighlightedText
                      {...{
                        text: "offer",
                        textColor: "light",
                        bgClass:
                          "pink-orange-radial-gradient !bottom-1 w-[115%] h-1/2",
                      }}
                    />{" "}
                  </Heading>
                </div>
                <div className="min-w-[80vw] w-[80vw] md:min-w-[60vw] md:w-[60vw] xl:w-[45vw] xl:min-w-[45vw] px-4 max-h-full h-full">
                  <div className="flex flex-col items-end">
                    <div className="grid grid-cols-1 relative z-20 gap-8">
                      <div className="flex flex-row relative z-20">
                        <Card
                          {...{
                            heading: "MVP Testing",
                            body: `Need to test an idea?
                          We've got you covered.`,
                          }}
                        />
                        <Card
                          {...{
                            heading: "Bespoke Stencil",
                            body: `Quick launch, well-priced`,
                          }}
                        />
                      </div>
                      <div className="flex flex-row relative z-20">
                        <Card
                          {...{
                            heading: "Fully Bespoke",
                            body: `End-to-end design, build and maintenance`,
                          }}
                        />
                        <Card
                          {...{
                            heading: "Got a request? Contact us!",
                            body: `we can do anything you're heart desires`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide shrink-0 flex bg-light py-20 relative">
          <div className="absolute h-full top-0 -left-40 w-80 rounded-[200%] z-0 bg-dark"></div>

          <div>
            <div className="container min-w-[160vw] md:min-w-[120vw] xl:min-w-[110vw] w-auto flex flex-col items-end ml-40">
              <div className="flex w-min">
                <div className="w-full flex">
                  <ShowcaseCard
                    {...{
                      heading: "The Publish Press",
                      body: "Id tempor ullamco ipsum in ad do veniam aliqua tempor. Voluptate excepteur culpa aliqua cillum dolor non ex. Sint do occaecat ex aute mollit. Reprehenderit eu anim dolore aliquip duis. Sit magna voluptate ex aute ut ut deserunt anim exercitation non.",
                      image: "/images/mvp-test-example.png",
                      hasButton: false,
                      tags: ["MVP Test"],
                      className:
                        "w-[53.33vw] min-w-[53.33vw] md:w-[40vw] md:min-w-[40vw] xl:w-[33.33vw] xl:min-w-[33.33vw] px-10",
                    }}
                  />
                  <ShowcaseCard
                    {...{
                      heading: "ABPSS",
                      body: "Cupidatat sit voluptate labore fugiat ullamco id officia occaecat tempor ut. Minim esse mollit aliqua nisi tempor ex culpa tempor aliqua proident irure nulla aliquip. Elit nisi eiusmod anim ullamco nisi nisi voluptate consectetur dolor. Ex reprehenderit ex nulla occaecat labore ut. Cillum pariatur laborum sit cillum adipisicing voluptate sunt labore eu fugiat laboris anim.",
                      image: "/images/stencilled-site-example.png",
                      hasButton: false,
                      tags: ["Stencil Bespoke"],
                      className:
                        "w-[53.33vw] min-w-[53.33vw] md:w-[40vw] md:min-w-[40vw] xl:w-[33.33vw] xl:min-w-[33.33vw] px-10",
                    }}
                  />
                  <ShowcaseCard
                    {...{
                      heading: "ALT. Cases",
                      body: "Aute cupidatat consectetur est reprehenderit labore consectetur velit ullamco est. Ea ut commodo cupidatat aliqua voluptate fugiat amet nostrud sit ex Lorem. Enim mollit tempor sit aliqua cupidatat officia pariatur cupidatat labore. Irure veniam aute enim cupidatat elit duis enim ex aliquip duis nisi voluptate cillum pariatur. Exercitation culpa laborum consequat ex fugiat minim occaecat aliqua.",
                      image: "/images/full-bespoke-example.png",
                      hasButton: false,
                      tags: ["Full Bespoke"],
                      className:
                        "w-[53.33vw] min-w-[53.33vw] md:w-[40vw] md:min-w-[40vw] xl:w-[33.33vw] xl:min-w-[33.33vw] px-10",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HorizontalStickyScroll

const Card: FC<{ heading: string; body: string }> = ({ heading, body }) => {
  return (
    <div className="min-w-[40vw] w-[40vw] md:w-[30vw] md:min-w-[30vw] xl:w-[22.5vw] xl:min-w-[22.5vw] px-4 relative z-20">
      <div className="bg-white rounded-xl h-48 w-full col-span-2 p-3 relative overflow-hidden z-20 relative">
        <div className="relative z-20">
          <p className="text-2xl font-bold relative z-20 mt-4 mb-1">
            {heading}
          </p>
          <p className="italic font-normal !text-base">{body}</p>
        </div>
        <div className="absolute bottom-0 left-0 h-12 w-full pink-orange-radial-gradient">
          <div className="bg-white absolute bottom-4 left-1/2 rounded-full w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] xl:w-[45vw] xl:h-[45vw] -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  )
}
