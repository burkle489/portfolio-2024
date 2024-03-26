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
}

const Heading: FC<IHeadingProps> = ({
  variant,
  className,
  children,
  animationInDirection = "right",
  animationDelay = 0,
}) => {
  const textRef = useRef(null)
  const animTimeline = useRef(gsap.timeline({ paused: true }))

  useGSAP(() => {
    if (textRef.current) {
      const parentSplit = new SplitText(textRef.current, {
        // type: "lines",
        linesClass: "",
      })
      const childSplit = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "",
      })
      gsap.set(textRef.current, {
        autoAlpha: 1,
        scale: 0.8,
      })

      gsap.fromTo(
        childSplit.lines,
        {
          x: animationInDirection === "right" ? "200vw" : "-200vw",
          autoAlpha: 1,
        },
        {
          duration: 2,
          ease: "power4.out",
          x: 0,
          delay: animationDelay,
          autoAlpha: 1,
          scrollTrigger: {
            // markers: true,
            trigger: childSplit.lines,
            start: "bottom bottom",
          },
          onComplete: () => {},
        }
      )
      gsap.to(textRef.current, {
        scale: 1,
        ease: "power4.out",
        duration: 0.6,
        delay: animationDelay + 1.4,
      })
    }
  })

  switch (variant) {
    case "h1":
      return (
        <h1
          className={clsx(
            `text-5xl sm:text-6xl md:text-7xl mb-4 font-bold tracking-normal  scale-90`,
            className
          )}
          ref={textRef}
        >
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2
          className={clsx(
            `text-4xl sm:text-5xl md:text-6xl mb-3 font-bold tracking-normal  scale-90`,
            className
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
            `text-xl sm:text-2xl md:text-3xl mb-2  font-bold tracking-normal scale-90`,
            className
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
            `text-xl md:text-2xl mb-2  font-bold tracking-normal`,
            className
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
            `text-lg sm:text-xl md:text-2xl mb-2 font-bold tracking-normal`,
            className
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
            `text-lg sm:text-xl md:text-2xl mb-2 font-bold tracking-normal`,
            className
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
