"use client"
import clsx from "clsx"
import { FC, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/dist/SplitText"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { IParagraphProps } from "./Paragraph.types"
if (typeof document !== `undefined`) gsap.registerPlugin(SplitText)
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

const Paragraph: FC<IParagraphProps> = ({
  className,
  children,
  animationDelay = 0,
  scrubTrigger,
  wordStagger = 0.075,
  triggerStart = "bottom bottom",
}) => {
  const textRef = useRef(null)
  const animTimeline = useRef(gsap.timeline({ paused: true }))
  useGSAP(() => {
    if (textRef.current) {
      const parentSplit = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "",
      })
      const childSplit = new SplitText(textRef.current, {
        type: "words",
        charsClass: "invisible",
      })
      gsap.set(textRef.current, { autoAlpha: 1 })
      gsap.fromTo(
        childSplit.words,
        { filter: "blur(20px)", autoAlpha: 0, scale: 0.75, rotate: 10 },
        {
          duration: 1,
          ease: "power3.out",
          filter: "blur(0px)",
          scale: 1,
          yPercent: 0,
          stagger: wordStagger,
          autoAlpha: 1,
          rotate: 0,
          delay: animationDelay,
          scrollTrigger: {
            trigger: textRef.current,
            start: triggerStart,
          },
          onComplete: () => {
            childSplit.revert()
            parentSplit.revert()
            gsap.set(textRef.current, { autoAlpha: 1 })
          },
        }
      )
    }
  })

  return (
    <p
      className={clsx(
        `text-light text-lg mb-4 md:mb-8 font-overpass`,
        className
      )}
      ref={textRef}
    >
      {children}
    </p>
  )
}

export default Paragraph
