"use client"

import { useGSAP } from "@gsap/react"
import { FC, useEffect, useRef, useState } from "react"
import gsap from "gsap"
const BurgerMenu: FC = () => {
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const timeline = useRef(gsap.timeline({ paused: true }))
  useEffect(() => {
    if (menuOpen) {
      timeline.current.play().delay(0.5)
    } else {
      timeline.current.reverse()
    }
  }, [menuOpen])
  useGSAP(() => {
    timeline.current
      .to(line1.current, { y: 11, width: 30, ease: "power4.out" })
      .to(line3.current, { y: -11, width: 30, ease: "power4.out" }, "=-0.5")
      .to(line2.current, { height: 3, width: 30, ease: "power4.out" }, "=-0.5")
  })
  return (
    <>
      <div
        className="w-10 h-10 flex flex-col items-center justify-center gap-2 cursor-pointer"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <div ref={line1} className="rounded-full h-[2px] w-10 bg-light" />
        <div ref={line2} className="rounded-full h-[2px] w-10 bg-light" />
        <div ref={line3} className="rounded-full h-[2px] w-10 bg-light" />
      </div>
      {menuOpen ? <Menu /> : null}
    </>
  )
}

export default BurgerMenu

const Menu: FC = () => {
  const menuRef = useRef(null)
  useGSAP(() => {
    if (menuRef.current) {
      gsap.fromTo(menuRef.current, { translateY: "-100vh" }, { translateY: 0 })
    }
  })
  return (
    <div
      ref={menuRef}
      className="fixed top-20 left-0 h-[80vh] w-full bg-dark-blue opacity-95 z-[9999]"
      style={{ backdropFilter: "blur(6px)" }}
    ></div>
  )
}
