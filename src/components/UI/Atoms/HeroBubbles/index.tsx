"use client"

import { FC, useEffect, useRef } from "react"
import { IHeroBubblesProps } from "./HeroBubbles.types"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import clsx from "clsx"

if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const HeroBubbles: FC<IHeroBubblesProps> = ({ className }) => {
  const containerRef = useRef(null)
  const largeCircleRef = useRef(null)
  const mediumCircleRef = useRef(null)
  const smallCircleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      //   gsap.from(largeCircleRef.current, {
      //     autoAlpha: 0,
      //     duration: 0.5,
      //     ease: "power3.in",
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       start: "bottom bottom",
      //     },
      //   })
    })
    return () => ctx.revert()
  }, [])
  return (
    <div ref={containerRef} className={clsx("", className)}>
      <div
        ref={largeCircleRef}
        className="w-[30rem] h-[30rem] rounded-full dark-complex-radial-gradient opacity-10 absolute top-[calc(100%-15rem)] -left-16"
      ></div>
      <div
        ref={mediumCircleRef}
        className="w-96 h-96 rounded-full dark-complex-radial-gradient opacity-30 absolute top-[calc(100%-10rem)] left-40"
      ></div>
      <div
        ref={smallCircleRef}
        className="w-80 h-80 rounded-full dark-complex-radial-gradient opacity-80 absolute top-[calc(100%-5rem)] left-96"
      ></div>
    </div>
  )
}

export default HeroBubbles
