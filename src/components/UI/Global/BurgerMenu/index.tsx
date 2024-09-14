"use client"

import { useGSAP } from "@gsap/react"
import { FC, useEffect, useRef, useState } from "react"
import gsap from "gsap"
import HomeHeroNav from "../../Organisms/HomeHeroNav"
import Link from "next/link"
const BurgerMenu: FC = () => {
  const menuRef = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)
  const [menuOpen, setMenuOpen] = useState(true)
  const timeline = useRef(gsap.timeline({ paused: true }))
  const menuTL = useRef(gsap.timeline({ paused: true }))
  useEffect(() => {
    if (menuOpen) {
      timeline.current.play().delay(0)
      menuTL.current.play()
    } else {
      timeline.current.reverse()
      menuTL.current.reverse()
    }
  }, [menuOpen])
  useGSAP(() => {
    timeline.current
      .to(line1.current, { y: 11, width: 30, ease: "power4.out" })
      .to(line3.current, { y: -11, width: 30, ease: "power4.out" }, "=-0.5")
      .to(line2.current, { height: 3, width: 30, ease: "power4.out" }, "=-0.5")
  })
  useGSAP(() => {
    menuTL.current.fromTo(
      menuRef.current,
      { translateY: "-100vh", autoAlpha: 0 },
      { translateY: 0, autoAlpha: 1 }
    )
  })
  return (
    <>
      <div
        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-2 cursor-pointer relative z-50"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <div ref={line1} className="rounded-full h-[2px] w-10 bg-light" />
        <div ref={line2} className="rounded-full h-[2px] w-10 bg-light" />
        <div ref={line3} className="rounded-full h-[2px] w-10 bg-light" />
      </div>
      <div
        ref={menuRef}
        className="fixed top-20 left-0 h-[80vh] w-full bg-dark-blue bg-opacity-60 z-[9999] -translate-y-[100vh]"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="relative flex flex-col justify-center items-center gap-8 w-full h-full text-light">
          <Link
            href="/work"
            className="font-playfair uppercase italic text-7xl font-bold text-border"
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="font-playfair uppercase italic text-7xl font-bold text-border"
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-playfair uppercase italic text-7xl font-bold text-border"
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
