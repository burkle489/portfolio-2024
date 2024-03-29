"use client"

import { useGSAP } from "@gsap/react"
import { FC, useEffect, useRef, useState } from "react"
import gsap from "gsap"
const BurgerMenu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div
        className="w-10 h-10 flex flex-col items-center justify-center gap-2"
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <div className="rounded-full h-[2px] w-full bg-light" />
        <div className="rounded-full h-[2px] w-full bg-light" />
        <div className="rounded-full h-[2px] w-full bg-light" />
      </div>
      {menuOpen ? <Menu /> : null}
    </>
  )
}

export default BurgerMenu

const Menu: FC = () => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const menuRef = useRef(null)
  useGSAP(() => {
    if (menuRef.current) {
      gsap.fromTo(menuRef.current, { translateY: "-100vh" }, { translateY: 0 })
    }
  })
  return (
    <div
      ref={menuRef}
      className="fixed top-20 left-0 h-[80vh] w-full bg-light"
    ></div>
  )
}
