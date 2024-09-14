"use client"

import { useRef } from "react"
import AnchorLink from "../../Molecules/AnchorLink"
import Heading from "../Heading"

const DownloadLink = ({ path = "/resume.pdf", animationDelay = 2 }) => {
  const iconRef = useRef(null)
  const underlineRef = useRef(null)

  return (
    <div>
      <AnchorLink
        download
        isExternal
        href={path}
        className="flex items-center justify-end group pointer-events-auto whitespace-nowrap"
        hoverClasses="!h-1/2"
        animationDelay={animationDelay}
      >
        <Heading
          variant="h2"
          hasAnimation={false}
          className="!text-3xl md:!text-4xl lg:!text-5xl !mb-0 text-right font-overpass text-light font-semibold text-border !leading-[0.9] mr-2 md:mr-4"
        >
          Download CV
          <span ref={underlineRef}></span>
        </Heading>
        <span
          ref={iconRef}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-light text-border"
          >
            <line x1="3" y1="21" x2="21" y2="3"></line>
            <polyline points="3 3 21 3 21 21"></polyline>
          </svg>
        </span>
      </AnchorLink>
    </div>
  )
}

export default DownloadLink
