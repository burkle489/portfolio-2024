"use client"

import { useGSAP } from "@gsap/react"
import { FC, useEffect, useRef } from "react"
import gsap from "gsap"

const AnimatingCircles: FC = () => {
  const circleOne = useRef(null)
  const circleTwo = useRef(null)
  const circleThree = useRef(null)
  const timeline = useRef(gsap.timeline({ repeat: -1 }))
  useGSAP(() => {
    timeline.current
      .to(circleOne.current, {
        xPercent: -100,
        yPercent: -100,
        top: "100%",
        left: "100%",
        duration: 1,
      })
      .to(
        circleTwo.current,
        {
          xPercent: -100,
          yPercent: -100,
          top: "100%",
          left: "100%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(
        circleThree.current,
        {
          xPercent: -100,
          yPercent: -100,
          top: "100%",
          left: "100%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(circleOne.current, {
        xPercent: -100,
        yPercent: 0,
        top: "0%",
        left: "100%",
        duration: 1,
      })
      .to(
        circleTwo.current,
        {
          xPercent: -100,
          yPercent: 0,
          top: "0%",
          left: "100%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(
        circleThree.current,
        {
          xPercent: -100,
          yPercent: 0,
          top: "0%",
          left: "100%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(circleOne.current, {
        xPercent: 0,
        yPercent: -100,
        top: "100%",
        left: "0%",
        duration: 1,
      })
      .to(
        circleTwo.current,
        {
          xPercent: 0,
          yPercent: -100,
          top: "100%",
          left: "0%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(
        circleThree.current,
        {
          xPercent: 0,
          yPercent: -100,
          top: "100%",
          left: "0%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(circleOne.current, {
        xPercent: 0,
        yPercent: 0,
        top: "0%",
        left: "0%",
        duration: 1,
      })
      .to(
        circleTwo.current,
        {
          xPercent: 0,
          yPercent: 0,
          top: "0%",
          left: "0%",
          duration: 1,
        },
        "-=0.9"
      )
      .to(
        circleThree.current,
        {
          xPercent: 0,
          yPercent: 0,
          top: "0%",
          left: "0%",
          duration: 1,
        },
        "-=0.9"
      )
  })

  return (
    <div className="absolute bottom-0 right-0 w-2/3 h-full">
      <div
        ref={circleOne}
        className="bg-island-blue border-2 border-dark rounded-full w-16 h-16 absolute z-20"
      ></div>
      <div
        ref={circleTwo}
        className="w-16 h-16 flex justify-center items-center  absolute z-10"
      >
        <div className="bg-purple border border-dark rounded-full w-14 h-14"></div>
      </div>
      <div
        ref={circleThree}
        className="w-16 h-16 flex justify-center items-center absolute z-0"
      >
        <div className="bg-avocado border-none border-dark rounded-full w-12 h-12"></div>
      </div>
    </div>
  )
}

export default AnimatingCircles
