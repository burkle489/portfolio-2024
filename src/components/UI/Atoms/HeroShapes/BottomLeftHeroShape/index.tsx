"use client"

import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import BgSVG3 from "@/components/svgs/components/BgSVG3"
import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"

const BottomLeftHeroShape: FC = () => {
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
  //     gsap.set(shape5.current, { transformOrigin: "50% 50%" })
  //     gsap.to(shape5.current, {
  //       transform: `translate(calc(-50% + ${
  //         x * 0.05 * movementMultiplier
  //       }px), calc(-50% + ${y * 0.05 * movementMultiplier}px)`,
  //       ease: "power3",
  //       delay: 0.08,
  //     })
  //   })
  // }
  return (
    <div className="scale-[70%] md:scale-100 absolute -bottom-[5rem] sm:bottom-[0rem] -left-[35rem] z-10">
      <div className="relative  w-[60rem] h-full">
        <div
          ref={shape2}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem]"
        >
          <BgSVG3
            drawSvgStart="80% 80%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div
          ref={shape3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem]"
        >
          <BgSVG3
            drawSvgStart="70% 70%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div
          ref={shape4}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem]"
        >
          <BgSVG3
            drawSvgStart="60% 60%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div
          ref={shape5}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem]"
        >
          <BgSVG3
            drawSvgStart="50% 50%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div
          ref={shape1}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] hidden lg:block"
        >
          <BgSVG3
            drawSvgStart="90% 90%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default BottomLeftHeroShape
