"use client"

import { FC, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

if (typeof document !== `undefined`) gsap.registerPlugin(DrawSVGPlugin)

const BgSVG5: FC<{
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
      id="bg-svg-5-shape"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className={className}
    >
      <defs>
        <linearGradient id="bg-svg-5-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stop-color="#5EBF98" offset="0%"></stop>
          <stop id="stop2" stop-color="#5EBF98" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        fill="none"
        d="M18.5,-32.9C23.2,-29.4,25.6,-22.8,27.8,-16.8C30,-10.8,31.9,-5.4,32.4,0.3C32.9,6,32.1,12,29.3,16.9C26.5,21.8,21.7,25.7,16.5,27.8C11.3,29.9,5.7,30.2,-0.3,30.8C-6.4,31.4,-12.7,32.3,-18.7,30.6C-24.6,28.9,-30.1,24.8,-33.1,19.2C-36.1,13.7,-36.5,6.9,-37.6,-0.6C-38.7,-8.1,-40.4,-16.2,-37.1,-21.2C-33.9,-26.3,-25.7,-28.2,-18.6,-30.4C-11.6,-32.6,-5.8,-35,0.6,-36C6.9,-37,13.8,-36.5,18.5,-32.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth={strokeWidth}
        stroke="url(#bg-svg-5-gradient)"
      ></path>
    </svg>
  )
}

export default BgSVG5
