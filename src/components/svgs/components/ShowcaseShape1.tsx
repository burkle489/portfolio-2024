"use client"

import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"

if (typeof document !== `undefined`) gsap.registerPlugin(DrawSVGPlugin)

const ShowcaseShape1: FC<{
  className: string
  strokeWidth: number
  drawSvgStart: string
  animationDelay: number
  animationDuration?: number
}> = ({
  className,
  strokeWidth,
  drawSvgStart,
  animationDelay,
  animationDuration = 2,
}) => {
  const pathRef = useRef(null)
  useGSAP(() => {
    if (pathRef && pathRef.current) {
      gsap.to(pathRef.current, { autoAlpha: 1 })
      gsap.fromTo(
        pathRef.current,
        {
          drawSVG: drawSvgStart,
          opacity: 1,
          duration: 0.5,
          ease: `power3.in`,
        },
        {
          drawSVG: `0% 100%`,
          duration: animationDuration,
          opacity: 1,
          ease: `power3.in`,
          delay: animationDelay,
        }
      )
    }
  })
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stop-color="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="url(#sw-gradient)"
        d="M14.5,-27.7C18.1,-22.9,20.1,-17.8,24.4,-13.2C28.7,-8.5,35.3,-4.3,36.2,0.5C37,5.3,32.2,10.5,29.3,17.5C26.3,24.5,25.3,33.3,20.7,37.1C16.2,40.8,8.1,39.7,1.7,36.7C-4.7,33.7,-9.3,29,-14.6,25.6C-20,22.3,-25.9,20.4,-28.1,16.3C-30.2,12.3,-28.6,6.1,-29.6,-0.6C-30.7,-7.3,-34.4,-14.7,-32.6,-19.3C-30.8,-23.9,-23.4,-25.8,-17,-29.1C-10.7,-32.3,-5.3,-37,0,-37.1C5.4,-37.1,10.8,-32.5,14.5,-27.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        style="transition: all 0.3s ease 0s;"
        stroke="url(#sw-gradient)"
      ></path>{" "}
    </svg>
  )
}

export default ShowcaseShape1
