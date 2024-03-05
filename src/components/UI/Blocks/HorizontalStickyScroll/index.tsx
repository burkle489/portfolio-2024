"use client"

import { FC, useEffect, useRef } from "react"
import { IThreeShowcaseProps } from "./HorizontalStickyScroll.types"
import Heading from "../../Atoms/Heading"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const HorizontalStickyScroll: FC<IThreeShowcaseProps> = ({}) => {
  const containerRef = useRef(null)
  const slidesWrapperRef = useRef(null)
  const slidesRef = useRef(null)

  useGSAP(() => {
    gsap.to(slidesRef.current, {
      x: -3000,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        pin: ".main-container",
        start: "65% center",
        end: "bottom -100%",
        pinSpacing: "none",
      },
    })
  })

  return (
    <section className="section bg-dark h-[40rem]" ref={containerRef}>
      <div className=" h-full" ref={slidesWrapperRef}>
        <div ref={slidesRef} className="flex relative slides h-full">
          <Heading
            variant="h1"
            className="!text-8xl font-extrabold text-light mb-20 whitespace-nowrap min-w-[1000px]"
          >
            What we{" "}
            <span className="font-extrabold pink-orange-radial-gradient bg-clip-text text-transparent">
              offer
            </span>{" "}
          </Heading>
          <div className="bg-dark p-6 relative min-w-[1000px] h-full">
            <Heading variant="h2" className="font-bold text-orange">
              MVP Testing
            </Heading>
            <p className="text-light text-2xl">
              Starting a business is scary. We know better than most the amount
              of time it takes to get a web presence set up for your business
              idea, and who knows where to start on testing the idea.
            </p>
            <p className="text-light text-xl">Well we do.</p>
            <div className="h-4 absolute -bottom-6 left-0 w-full pink-orange-radial-gradient"></div>
          </div>
          <div className=" p-6 relative min-w-[1000px] h-full">
            <Heading variant="h2" className="font-bold text-orange">
              Stencilled Bespoke
            </Heading>
            <p className="text-light text-2xl">
              No-code tools are great...
              <br /> if you dont mind spending the countless hours of your own
              time wondering why your div isnt centered, instead of focussing on
              sales, networking or catching up on Succession.
            </p>
            <p className="text-light text-xl">
              Let us center your divs. We don&apos;t watch TV anyway.
            </p>
            <div className="h-4 absolute -bottom-6 left-0 w-full pink-orange-radial-gradient"></div>
          </div>
          <div className="bg-dark p-6 relative min-w-[1000px] h-full">
            <Heading variant="h2" className="font-bold text-orange">
              Full Custom Bespoke
            </Heading>
            <p className="text-light text-2xl">
              Want the ultimate, premium experience for your customers?
            </p>
            <p className="text-light text-xl">No problem.</p>
            <div className="h-4 absolute -bottom-6 left-0 w-full pink-orange-radial-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HorizontalStickyScroll
