"use client"

import { useRef } from "react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const StyledImage = ({ animationDelay = 0 }: { animationDelay: number }) => {
  const imageRef = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, backdropFilter: "blur(100px)" },
      {
        autoAlpha: 1,
        backdropFilter: "blur(0px)",
        duration: 1.5,
        ease: "power2.inOut",
        delay: animationDelay,
      }
    )
  })
  return (
    <div ref={imageRef} className="relative group invisible">
      <span
        className="rounded-[100%] w-80 h-80 scale-[1.075] bg-opacity-10 bg-light to absolute group-hover:scale-100 duration-300 transition-all"
        style={{ backdropFilter: "blur(100px)" }}
      ></span>
      <div className="rounded-[100%] overflow-hidden w-80 h-80 relative">
        <Image src="/images/profilepic.jpeg" alt="Tayler Burke" fill />
      </div>
    </div>
  )
}

export default StyledImage
