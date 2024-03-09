"use client"

import { FC, ReactNode, useEffect, useRef } from "react"
import { IThreeShowcaseProps } from "./HorizontalStickyScroll.types"
import Heading from "../../Atoms/Heading"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import MarqueeSection from "../MarqueeSection"
import Marquee from "react-fast-marquee"
import ShowcaseCard from "../../Molecules/Cards/ShowcaseCard"

const HorizontalStickyScroll: FC<IThreeShowcaseProps> = ({}) => {
  const containerRef = useRef(null)
  const slidesWrapperRef = useRef(null)
  const slidesRef = useRef(null)

  useGSAP(() => {
    gsap.to(slidesRef.current, {
      transform: "translate3d(-100vw,0,0)",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        pin: ".main-container",
        start: "40% center",
        end: "bottom -100%",
        // pinSpacing: "none",
      },
    })
  })

  return (
    <section className=" bg-dark h-[40rem]" ref={containerRef}>
      <div className=" h-full" ref={slidesWrapperRef}>
        <div ref={slidesRef} className="flex relative slides h-full">
          <Slide className="pl-32 flex items-end">
            <Heading
              variant="h1"
              className="!text-8xl font-extrabold text-light mb-20 whitespace-nowrap w-[45vw] h-full flex items-end flex-col"
            >
              What we <br />
              <span className="font-extrabold pink-orange-radial-gradient bg-clip-text text-transparent">
                offer
              </span>{" "}
            </Heading>
            <div className="w-[45vw] flex flex-col items-end ">
              <div className="grid grid-cols-4 gap-6 h-fit w-fit relative z-20">
                <div className="bg-white rounded-xl h-48 w-60 col-span-2 p-3 relative overflow-hidden">
                  <div className="relative z-20">
                    <p className="text-2xl font-bold relative z-20 mt-4 mb-1">
                      MVP Testing
                    </p>
                    <p className="italic font-normal !text-base">
                      Need to test an idea?
                      <br /> We&apos;ve got you covered.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-12 w-full pink-orange-radial-gradient">
                    <div className="bg-white absolute bottom-4 left-1/2 rounded-full w-[30rem] h-[30rem] -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl h-48 w-60 col-span-2 p-3 relative overflow-hidden">
                  <div className="relative z-20">
                    <p className="text-2xl font-bold mt-4 mb-1">
                      Bespoke Stencil
                    </p>
                    <p className="italic font-normal !text-base">
                      Quick launch, well-priced.
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-12 w-full pink-orange-radial-gradient rotate-180">
                    <div className="bg-white absolute top-4 left-1/2 rounded-full w-[30rem] h-[30rem] -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl h-48 w-60 col-span-2 p-3 relative overflow-hidden">
                  <div className="relative z-20">
                    <p className="text-2xl font-bold mt-4 mb-1">
                      Fully Bespoke
                    </p>
                    <p className="italic font-normal !text-base">
                      End-to-end design, build and maintenance
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-12 w-full pink-orange-radial-gradient rotate-180">
                    <div className="bg-white absolute top-4 left-1/2 rounded-full w-[30rem] h-[30rem] -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl h-48 w-60 col-span-2 p-3 relative overflow-hidden">
                  <div className="relative z-20">
                    <p className="text-2xl font-bold mt-4 mb-1">
                      Got a request? Contact us! <br />
                    </p>
                    <p className="italic font-normal !text-base ">
                      we can do anything you&apos;re heart desires
                    </p>
                    <p></p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-12 w-full pink-orange-radial-gradient">
                    <div className="bg-white absolute bottom-4 left-1/2 rounded-full w-[30rem] h-[30rem] -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[calc(100%-10rem)] top-0 h-full w-[20rem] bg-dark rounded-[200%] z-10 shadow-2xl"></div>
          </Slide>

          <Slide className="bg-orange !pr-0">
            <Marquee
              pauseOnHover
              direction="right"
              autoFill
              speed={100}
              className="h-full overflow-hidden"
            >
              <ShowcaseCard
                {...{
                  heading: "The Publish Press",
                  body: "Id tempor ullamco ipsum in ad do veniam aliqua tempor. Voluptate excepteur culpa aliqua cillum dolor non ex. Sint do occaecat ex aute mollit. Reprehenderit eu anim dolore aliquip duis. Sit magna voluptate ex aute ut ut deserunt anim exercitation non.",
                  image: "/images/mvp-test-example.png",
                  hasButton: false,
                  tags: ["MVP Test"],
                }}
              />
              <ShowcaseCard
                {...{
                  heading: "ABPSS",
                  body: "Cupidatat sit voluptate labore fugiat ullamco id officia occaecat tempor ut. Minim esse mollit aliqua nisi tempor ex culpa tempor aliqua proident irure nulla aliquip. Elit nisi eiusmod anim ullamco nisi nisi voluptate consectetur dolor. Ex reprehenderit ex nulla occaecat labore ut. Cillum pariatur laborum sit cillum adipisicing voluptate sunt labore eu fugiat laboris anim.",
                  image: "/images/stencilled-site-example.png",
                  hasButton: false,
                  tags: ["Stencil Bespoke"],
                }}
              />
              <ShowcaseCard
                {...{
                  heading: "ALT. Cases",
                  body: "Aute cupidatat consectetur est reprehenderit labore consectetur velit ullamco est. Ea ut commodo cupidatat aliqua voluptate fugiat amet nostrud sit ex Lorem. Enim mollit tempor sit aliqua cupidatat officia pariatur cupidatat labore. Irure veniam aute enim cupidatat elit duis enim ex aliquip duis nisi voluptate cillum pariatur. Exercitation culpa laborum consequat ex fugiat minim occaecat aliqua.",
                  image: "/images/full-bespoke-example.png",
                  hasButton: false,
                  tags: ["Full Bespoke"],
                }}
              />
            </Marquee>
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default HorizontalStickyScroll

const Slide: FC<{ className?: string; children: ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "w-[100vw] min-w-[100vw] h-full relative p-20",
        className
      )}
    >
      {children}
    </div>
  )
}
