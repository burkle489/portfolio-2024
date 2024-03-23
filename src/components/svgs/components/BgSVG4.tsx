"use client"

import { FC, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"

if (typeof document !== `undefined`) gsap.registerPlugin(DrawSVGPlugin)
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
const BgSVG4: FC<{
  className: string
  strokeWidth: number
  drawSvgStart: string
  drawSvgEnd?: string
  animationDelay: number
  animationDuration?: number
}> = ({
  className,
  strokeWidth,
  drawSvgStart = "0% 0%",
  drawSvgEnd = "0% 100%",
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
          drawSVG: drawSvgEnd,
          duration: animationDuration,
          opacity: 1,
          ease: `power3.in`,
          scrollTrigger: {
            trigger: pathRef.current,
            start: "bottom bottom",
          },
        }
      )
    }
  })
  return (
    <svg
      id="bg-svg-4-blob-svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bg-svg-4-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stop-color="#EC8D54" offset="0%"></stop>
          <stop id="stop2" stop-color="#EC8D54" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="none"
        d="M9.2,-12.7C14.2,-11.2,21.9,-12.3,28.4,-9.6C34.9,-6.8,40.1,-0.2,40.7,6.9C41.3,13.9,37.1,21.2,31.1,25.5C25.1,29.7,17.3,30.9,10.2,31.5C3.1,32.1,-3.2,32.2,-8.7,30.2C-14.2,28.3,-18.9,24.4,-22.8,19.8C-26.6,15.2,-29.5,9.9,-27.9,5.5C-26.3,1,-20.2,-2.7,-16.8,-6.7C-13.5,-10.7,-13,-15,-10.6,-17.7C-8.3,-20.4,-4.1,-21.5,-1,-20C2.1,-18.4,4.3,-14.2,9.2,-12.7Z"
        width="100%"
        height="100%"
        ref={pathRef}
        transform="translate(50 50)"
        strokeWidth={strokeWidth}
        stroke="url(#bg-svg-4-gradient)"
      ></path>
    </svg>
  )
}

export default BgSVG4
