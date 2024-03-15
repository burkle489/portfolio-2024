"use client"

import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"

if (typeof document !== `undefined`) gsap.registerPlugin(DrawSVGPlugin)

const BgSVG1: FC<{
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
      width="100%"
      height="100%"
      id="bg-svg-1-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bg-svg-1-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#3178f0" offset="0%"></stop>
          <stop id="stop2" stopColor="#3178f0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        className="invisible"
        ref={pathRef}
        fill="none"
        d="M13.9,-28.2C17.3,-22,19.1,-17,23.4,-12.5C27.6,-8,34.4,-4,33.9,-0.3C33.3,3.3,25.3,6.7,22.2,13.3C19.2,19.9,21,29.8,18.2,36.1C15.3,42.4,7.6,45.1,2.6,40.6C-2.5,36.1,-4.9,24.4,-7.6,18C-10.2,11.6,-13.1,10.4,-18.7,8.3C-24.3,6.2,-32.7,3.1,-37.2,-2.6C-41.7,-8.3,-42.4,-16.6,-38.4,-21.4C-34.3,-26.2,-25.5,-27.5,-18.3,-31.5C-11.1,-35.4,-5.5,-42.1,-0.2,-41.8C5.2,-41.6,10.4,-34.3,13.9,-28.2Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth={strokeWidth}
        stroke="url(#bg-svg-1-gradient)"
      ></path>
    </svg>
  )
}

export default BgSVG1
