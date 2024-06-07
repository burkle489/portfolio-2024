"use client"
import clsx from "clsx"
import { FC, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/dist/SplitText"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(SplitText)
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

interface IHeadingProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  className?: string
  animationInDirection?: "left" | "right"
  animationDelay?: number
  scrubTrigger?: string
  wordStagger?: number
  triggerStart?: string
  hasAnimation?: boolean
}

const Heading: FC<IHeadingProps> = ({
  variant,
  className,
  children,
  animationDelay = 0,
  scrubTrigger,
  wordStagger = 0.15,
  triggerStart = "bottom bottom",
  hasAnimation = true,
}) => {
  const textRef = useRef(null)
  const animTimeline = useRef(gsap.timeline({ paused: true }))

  useGSAP(() => {
    if (textRef.current && hasAnimation) {
      const parentSplit = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "overflow-y-clip",
      })
      const childSplit = new SplitText(textRef.current, {
        type: "words",
        charsClass: "invisible",
      })
      gsap.set(textRef.current, { autoAlpha: 1 })
      gsap.fromTo(
        childSplit.words,
        { yPercent: 100, autoAlpha: 1, rotate: 0 },
        {
          duration: 1,
          ease: "power3.out",
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

  switch (variant) {
    case "h1":
      return (
        <h1
          className={clsx(
            `text-7xl sm:text-8xl md:text-9xl mb-4 font-bold font-oswald tracking-wide`,
            className,
            { invisible: hasAnimation }
          )}
          ref={textRef}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          // style={{transition: `translateX(${})`}}
          className={clsx(
            `text-6xl sm:text-7xl md:text8xl mb-3 font-bold font-oswald tracking-wide `,
            className,
            { invisible: hasAnimation }
          )}
          ref={textRef}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          className={clsx(
            `text-xl sm:text-2xl md:text-3xl mb-2  font-bold font-oswald tracking-wide `,
            className,
            { invisible: hasAnimation }
          )}
          ref={textRef}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          className={clsx(
            `text-xl md:text-2xl mb-2  font-bold tracking-normal font-oswald `,
            className,
            { invisible: hasAnimation }
          )}
          ref={textRef}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={clsx(
            `text-lg sm:text-xl md:text-2xl mb-2 font-bold tracking-normal font-oswald `,
            className,
            { invisible: hasAnimation }
          )}
          ref={textRef}
        >
          {children}
        </h5>
      )
    case "h6":
      return (
        <h6
          className={clsx(
            `text-lg sm:text-xl md:text-2xl mb-2 font-bold tracking-normal `,
            className,
            { invisible: hasAnimation }
          )}
          ref={textRef}
        >
          {children}
        </h6>
      )
    default:
      return (
        <p className={clsx(`  `, className)} ref={textRef}>
          {children}
        </p>
      )
  }
}

export default Heading
