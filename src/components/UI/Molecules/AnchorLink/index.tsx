"use client"

import { IClassName } from "@/types"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import Link from "next/link"

import { AnchorHTMLAttributes, FC, ReactNode, useRef } from "react"

interface IAnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
  isExternal?: boolean
  className?: string
  animationDelay?: number
  hoverClasses?: string
}

const AnchorLink: FC<IAnchorLinkProps> = ({
  href,
  isExternal = false,
  children,
  className,
  animationDelay = 0,
  hoverClasses = "",
  ...rest
}) => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const linkRef = useRef(null)
  const linkHoverRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      linkRef.current,
      {
        filter: "blur(40px)",
        autoAlpha: 0,
        scale: 1,
      },
      {
        filter: "blur(0px)",
        autoAlpha: 1,
        scale: 1,
        delay: animationDelay,
        onComplete: () => {
          gsap.set(linkRef.current, { filter: "none" })
        },
      }
    )
  })
  useGSAP(() => {
    timeline.current.to(linkHoverRef.current, {
      width: "105%",
      duration: 0.4,
    })
  })
  return isExternal ? (
    <a
      onMouseEnter={() => timeline.current.play()}
      onMouseLeave={() => timeline.current.reverse()}
      ref={linkRef}
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
      className={clsx(
        "text-light pointer-events-auto relative invisible",
        className
      )}
      {...rest}
    >
      {children}
      <span
        ref={linkHoverRef}
        className={clsx("w-0 h-2/5 absolute -left-2 bottom-0", hoverClasses)}
        style={{ backdropFilter: "blur(10px)" }}
      ></span>
    </a>
  ) : (
    <Link
      onMouseEnter={() => timeline.current.play()}
      onMouseLeave={() => timeline.current.reverse()}
      ref={linkRef}
      href={href}
      className={clsx(
        "text-light pointer-events-auto relative invisible",
        className
      )}
      {...rest}
    >
      {children}
      <span
        ref={linkHoverRef}
        className={clsx("w-0 h-2/5 absolute -left-2 bottom-0", hoverClasses)}
        style={{ backdropFilter: "blur(10px)" }}
      ></span>
    </Link>
  )
}

export default AnchorLink
