"use client"

import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
if (typeof document !== `undefined`) gsap.registerPlugin(DrawSVGPlugin)

const BgMidlineSVG: FC<{
  className?: string
  strokeWidth?: number
  drawSvgStart?: string
  animationDelay?: number
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
          drawSVG: "100% 100%",
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
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 400"
      width="100%"
      height="100%"
      className={className}
    >
      <path
        ref={pathRef}
        d="M7.097149080596523 338.1165771484375C35.19879391447917 322.57098897298175 99.92226269499675 257.69805399576825 175.70701808389242 244.84304809570312C251.4917734727881 231.98804219563803 371.372199561757 278.92376200358075 461.80568141397055 260.9865417480469C552.239163266184 243.04932149251303 665.3931091890356 155.90432993570963 718.3079091971737 137.2197265625C771.2227092053117 118.53512318929036 769.1300527518612 146.93572235107422 779.2944814627987 148.87892150878906 "
        fill="none"
        strokeWidth="10"
        stroke="#EC8D54"
        strokeLinecap="round"
        // transform="matrix(1.096994390625,0,0,1.096994390625,-31.333600428440718,-57.24542731424964)"
      ></path>
    </svg>
  )
}

export default BgMidlineSVG
