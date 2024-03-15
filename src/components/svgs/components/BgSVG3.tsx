"use client"

import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"
import { DrawSVGPlugin } from "@gsap/shockingly/DrawSVGPlugin"

if (typeof document !== `undefined`) gsap.registerPlugin(DrawSVGPlugin)

const BgSVG3: FC<{
  className: string
  drawSvgStart: string
  animationDelay: number
  animationDuration?: number
}> = ({ className, drawSvgStart, animationDelay, animationDuration = 2 }) => {
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
          ease: `power3.out`,
        },
        {
          drawSVG: `0% 100%`,
          duration: animationDuration,
          opacity: 1,
          ease: `power3.out`,
          delay: animationDelay,
        }
      )
    }
  })
  return (
    <svg
      width="100%"
      height="100%"
      id="bg-svg-3-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bg-svg-3-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#3178f0" offset="0%"></stop>
          <stop id="stop2" stopColor="#4e23f7" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        className="invisible"
        ref={pathRef}
        fill="none"
        d="M16.3,-29.9C20.4,-25.8,22.5,-20,27.4,-14.8C32.3,-9.5,39.9,-4.7,40.6,0.4C41.3,5.5,34.9,11,31.1,18.1C27.2,25.1,25.8,33.7,21,35.3C16.3,37,8.1,31.6,0.3,31.1C-7.5,30.6,-15,34.8,-20.8,33.8C-26.5,32.7,-30.4,26.3,-31.8,19.8C-33.2,13.2,-31.9,6.6,-29.5,1.4C-27.1,-3.8,-23.5,-7.6,-20.1,-10.7C-16.7,-13.7,-13.7,-16,-10.4,-20.5C-7,-25,-3.5,-31.7,1.3,-33.9C6.1,-36.1,12.2,-33.9,16.3,-29.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="2"
        stroke="url(#bg-svg-3-gradient)"
      ></path>
    </svg>
  )
}

export default BgSVG3
