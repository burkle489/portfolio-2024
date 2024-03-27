"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
export default function CursorFollower() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window
    const cursor = cursorRef.current

    if (isTouchDevice || !cursor) {
      return
    }

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e
      console.log({ x, y })

      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button")

      gsap.to(cursor, {
        x: x - 16,
        y: y - 16,
        duration: 0.7,
        ease: "power4",
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3.5 : 1})`,
      })
    })

    document.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      })
    })
  }, [])
  return (
    <div
      className="w-8 h-8  rounded-full bg-transparent z-[999999] fixed top-0 left-0 pointer-events-none user-select-none"
      style={{ backdropFilter: "blur(6px)" }}
      ref={cursorRef}
    ></div>
  )
}
