import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface IAnchorLinkProps {
  text: string
  isInternalLink?: boolean
  href: string
  className?: string
}
