"use client"

import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"

const TopRightHeroShape: FC = () => {
  const shape1 = useRef(null)
  const shape2 = useRef(null)
  const shape3 = useRef(null)
  const shape4 = useRef(null)
  const shape5 = useRef(null)

  // if (typeof window !== "undefined" && window) {
  //   window.addEventListener("mousemove", (evt) => {
  //     const movementMultiplier = 0.5
  //     const { centerX, centerY } = {
  //       centerX: window.screen.width / 2,
  //       centerY: window.screen.height / 2,
  //     }
  //     const { x, y } = { x: evt.clientX - centerX, y: evt.clientY - centerY }
  //     gsap.set(shape1.current, { transformOrigin: "50% 50%" })
  //     gsap.to(shape1.current, {
  //       transform: `translate(calc(-50% + ${
  //         x * 0.1 * movementMultiplier
  //       }px), calc(-50% + ${y * 0.1 * movementMultiplier}px)`,
  //       ease: "power3",
  //     })
  //     gsap.set(shape2.current, { transformOrigin: "50% 50%" })
  //     gsap.to(shape2.current, {
  //       transform: `translate(calc(-50% + ${
  //         x * 0.08 * movementMultiplier
  //       }px), calc(-50% + ${y * 0.08 * movementMultiplier}px)`,
  //       ease: "power3",
  //       delay: 0.02,
  //     })
  //     gsap.set(shape3.current, { transformOrigin: "50% 50%" })
  //     gsap.to(shape3.current, {
  //       transform: `translate(calc(-50% + ${
  //         x * 0.07 * movementMultiplier
  //       }px), calc(-50% + ${y * 0.07 * movementMultiplier}px)`,
  //       ease: "power3",
  //       delay: 0.04,
  //     })
  //     gsap.set(shape4.current, { transformOrigin: "50% 50%" })
  //     gsap.to(shape4.current, {
  //       transform: `translate(calc(-50% + ${
  //         x * 0.06 * movementMultiplier
  //       }px), calc(-50% + ${y * 0.06 * movementMultiplier}px)`,
  //       ease: "power3",
  //       delay: 0.06,
  //     })
  //   })
  // }
  return (
    <>
      <div
        ref={shape1}
        className="w-[60rem] absolute -right-[33rem] -top-[33rem] lg:-top-[32rem] lg:-right-[32rem]"
      >
        <BgSVG1
          drawSvgStart="40% 40%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={1}
        />
      </div>
      <div
        ref={shape2}
        className="w-[60rem] absolute -right-[35rem] -top-[35rem] lg:-top-[34rem] lg:-right-[34rem] "
      >
        <BgSVG1
          drawSvgStart="50% 50%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={0.5}
        />
      </div>
      <div
        ref={shape3}
        className="w-[60rem] absolute lg:-top-[29rem] lg:-right-[29rem] -top-[31rem] -right-[31rem] hidden sm:block"
      >
        <BgSVG1
          drawSvgStart="30% 30%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={1.5}
        />
      </div>
      <div
        ref={shape4}
        className="w-[60rem] absolute -top-[29rem] -right-[29rem] lg:-top-[25rem] lg:-right-[25rem] hidden xl:block"
      >
        <BgSVG1
          className=""
          strokeWidth={2}
          drawSvgStart="20% 20%"
          animationDelay={2}
          animationDuration={2}
        />
      </div>
    </>
  )
}

export default TopRightHeroShape
