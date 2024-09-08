"use client"

import Heading from "@/components/UI/Atoms/Heading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWrench } from "@fortawesome/free-solid-svg-icons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const UnderConstruction = () => {
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center relative z-10 pointer-events-none gap-12">
      <Heading
        variant="h1"
        animationInDirection="left"
        scrubTrigger="basic-hero"
        wordStagger={0.2}
        className="!text-7xl uppercase font-bold !font-playfair italic text-border text-white"
      >
        Under Construction...
      </Heading>
      <FontAwesomeIcon
        icon={faWrench}
        className="w-20 h-20 text-white invisible"
        ref={(el) => {
          if (el) {
            gsap.fromTo(
              el,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                delay: 1,
                duration: 2,
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  toggleActions: "play none none reverse",
                },
              }
            )
          }
        }}
      />
    </div>
  )
}

export default UnderConstruction
