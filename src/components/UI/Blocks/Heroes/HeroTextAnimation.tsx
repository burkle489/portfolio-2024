"use client"

import { FC, useRef, useState } from "react"
import clsx from "clsx"
import { IHeroTextAnimationProps } from "../../Atoms/HighlightedText/HighlightedText.types"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
if (typeof document !== `undefined`) gsap.registerPlugin(SplitText)

const HeroTextAnimation: FC<IHeroTextAnimationProps> = ({
  children,
  bgClass,
  textColor = "light",
  textBorder,
  className = "",
  delayMultiplier = 1,
}) => {
  const textRef = useRef(null)
  const bgRef = useRef(null)
  const [finished, setFinished] = useState(false)
  useGSAP(() => {
    if (textRef.current && bgRef.current) {
      const parentSplit = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "overflow-hidden",
      })
      const childSplit = new SplitText(textRef.current, {
        type: "chars",
        charsClass: "invisible",
      })
      gsap.fromTo(
        bgRef.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", autoAlpha: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          autoAlpha: 1,
          ease: "sine.inOut",
          delay: 0.5 * delayMultiplier,
        }
      )
      gsap.fromTo(
        childSplit.chars,
        { yPercent: 100, autoAlpha: 1 },
        {
          duration: 0.7,
          ease: "power3.inOut",
          yPercent: 0,
          stagger: 0.07,
          autoAlpha: 1,
          delay: 1 * delayMultiplier,
          scrollTrigger: {
            trigger: textRef.current,
            start: "bottom bottom",
          },
          onComplete: () => {
            childSplit.revert()
            parentSplit.revert()
            setFinished(true)
          },
        }
      )
      gsap.fromTo(
        bgRef.current,
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 1,
          delay: 2 * delayMultiplier,
        }
      )
      gsap.to(textRef.current, { autoAlpha: 1 })
    }
  }, [delayMultiplier])
  return (
    <div className="relative w-fit leading-none">
      <span className={clsx("relative", className)}>
        <span
          ref={textRef}
          className={clsx(
            "relative z-10 text-border overflow-hidden ",

            {
              visible: finished,
              "text-border": textColor === "light",
              "text-border-light": textColor === "dark",
              "text-border-thin":
                textColor === "light" && textBorder === "thin",
              "text-border-light-thin":
                textColor === "dark" && textBorder === "thin",
            }
          )}
        >
          {children}
        </span>
      </span>
      <span
        className={clsx(
          "w-[105%] absolute bottom-0 lg:-bottom-4 -left-[2.5%] h-[40%] z-0 invisible",
          bgClass
        )}
        ref={bgRef}
      ></span>
    </div>
  )
}

export default HeroTextAnimation
