"use client"

import BgSVG2 from "@/components/svgs/components/BgSVG2"
import { useGSAP } from "@gsap/react"
import { FC, useRef } from "react"
import gsap from "gsap"

const CentralHeroShape: FC = () => {
  const shape1 = useRef(null)
  const shape2 = useRef(null)
  const shape3 = useRef(null)
  const shape4 = useRef(null)
  const shape5 = useRef(null)
  const shape6 = useRef(null)
  const shape7 = useRef(null)
  if (typeof window !== "undefined" && window) {
    window.addEventListener("mousemove", (evt) => {
      const { centerX, centerY } = {
        centerX: window.screen.width / 2,
        centerY: window.screen.height / 2,
      }
      const { x, y } = { x: evt.clientX - centerX, y: evt.clientY - centerY }
      gsap.set(shape1.current, { transformOrigin: "50% 50%" })
      gsap.to(shape1.current, {
        transform: `translate(calc(-50% + ${x * 0.1}px), calc(-50% + ${
          y * 0.1
        }px)`,
        ease: "power3",
      })
      gsap.set(shape2.current, { transformOrigin: "50% 50%" })
      gsap.to(shape2.current, {
        transform: `translate(calc(-50% + ${x * 0.08}px), calc(-50% + ${
          y * 0.08
        }px)`,
        ease: "power3",
        delay: 0.02,
      })
      gsap.set(shape3.current, { transformOrigin: "50% 50%" })
      gsap.to(shape3.current, {
        transform: `translate(calc(-50% + ${x * 0.07}px), calc(-50% + ${
          y * 0.07
        }px)`,
        ease: "power3",
        delay: 0.04,
      })
      gsap.set(shape4.current, { transformOrigin: "50% 50%" })
      gsap.to(shape4.current, {
        transform: `translate(calc(-50% + ${x * 0.06}px), calc(-50% + ${
          y * 0.06
        }px)`,
        ease: "power3",
        delay: 0.06,
      })
      gsap.set(shape5.current, { transformOrigin: "50% 50%" })
      gsap.to(shape5.current, {
        transform: `translate(calc(-50% + ${x * 0.05}px), calc(-50% + ${
          y * 0.05
        }px)`,
        ease: "power3",
        delay: 0.08,
      })
      gsap.set(shape6.current, { transformOrigin: "50% 50%" })
      gsap.to(shape6.current, {
        transform: `translate(calc(-50% + ${x * 0.04}px), calc(-50% + ${
          y * 0.04
        }px)`,
        ease: "power3",
        delay: 0.1,
      })
      gsap.set(shape7.current, { transformOrigin: "50% 50%" })
      gsap.to(shape7.current, {
        transform: `translate(calc(-50% + ${x * 0.03}px), calc(-50% + ${
          y * 0.03
        }px)`,
        ease: "power3",
        delay: 0.12,
      })
      // const percent = gsap.utils.normalize(0, innerWidth, evt.pageX)

      // gsap.to(shape1.current, {
      //   duration: 0.2,
      //   x: percent * maxX - maxX / 2,
      //   overwrite: true,
      // })
    })
  }

  return (
    <div className="scale-50 md:scale-100 absolute z-10 w-[70rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
        <div
          className="absolute z-10 w-[70rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ref={shape1}
        >
          <BgSVG2
            drawSvgStart="100% 100%"
            animationDelay={2.6}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
        <div
          ref={shape2}
          className="absolute z-10 w-[55rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BgSVG2
            drawSvgStart="0% 0%"
            animationDelay={2.8}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
        <div
          ref={shape3}
          className="absolute z-10 w-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BgSVG2
            drawSvgStart="90% 90%"
            animationDelay={3}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
        <div
          ref={shape4}
          className="absolute z-10 w-[25rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BgSVG2
            drawSvgStart="10% 10%"
            animationDelay={3.2}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
        <div
          ref={shape5}
          className="absolute z-10 w-[15rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BgSVG2
            drawSvgStart="80% 80%"
            animationDelay={3.4}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
        <div
          ref={shape6}
          className="absolute z-10 w-[8rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BgSVG2
            drawSvgStart="20% 20%"
            animationDelay={3.6}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
        <div
          ref={shape7}
          className="absolute z-10 w-[4rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <BgSVG2
            drawSvgStart="70% 70%"
            animationDelay={3.8}
            animationDuration={2}
            className=""
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  )
}

export default CentralHeroShape
