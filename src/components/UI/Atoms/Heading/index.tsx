"use client"
import clsx from "clsx"
import { FC, useRef } from "react"

interface IHeadingProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: React.ReactNode
  className?: string
}

const Heading: FC<IHeadingProps> = ({ variant, className, children }) => {
  const textRef = useRef(null)

  switch (variant) {
    case "h1":
      return (
        <h1
          className={clsx(
            `text-5xl sm:text-6xl md:text-7xl mb-4 font-bold`,
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
            `text-4xl sm:text-5xl md:text-6xl mb-3 font-bold`,
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
            `text-xl sm:text-2xl md:text-3xl mb-2  font-bold`,
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
          className={clsx(`text-xl md:text-2xl mb-2  font-bold`, className)}
          ref={textRef}
        >
          {children}
        </h4>
      )
    case "h5":
      return (
        <h5
          className={clsx(
            `text-lg sm:text-xl md:text-2xl mb-2 font-bold`,
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
            `text-lg sm:text-xl md:text-2xl mb-2 font-bold`,
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
