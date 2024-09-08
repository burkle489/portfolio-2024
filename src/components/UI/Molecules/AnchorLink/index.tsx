"use client"

import { IClassName } from "@/types"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import Link from "next/link"

import { FC, ReactNode, useRef } from "react"

interface IAnchorLinkProps extends IClassName {
  children: ReactNode
  href: string
  isExternal?: boolean
  className?: string
}

const AnchorLink: FC<IAnchorLinkProps> = ({
  href,
  isExternal = false,
  children,
  className,
}) => {
  const timeline = useRef(gsap.timeline({ paused: true }))
  const linkRef = useRef(null)
  const linkHoverRef = useRef(null)

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
      className={clsx("text-light pointer-events-auto relative", className)}
    >
      {children}
      <span
        ref={linkHoverRef}
        className="w-0 h-16 absolute -left-2 bottom-4 "
        style={{ backdropFilter: "blur(10px)" }}
      >
        {/* <span className="w-full h-4 bg-island-blue absolute right-1 bottom-1"></span> */}
      </span>
    </a>
  ) : (
    <Link
      onMouseEnter={() => timeline.current.play()}
      onMouseLeave={() => timeline.current.reverse()}
      ref={linkRef}
      href={href}
      className={clsx("text-light pointer-events-auto relative", className)}
    >
      {children}
      <span
        ref={linkHoverRef}
        className="w-0 h-16 absolute -left-2 bottom-0"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {/* <span className="w-full h-4 bg-island-blue absolute right-1 bottom-1"></span> */}
      </span>
    </Link>
  )
}

export default AnchorLink
