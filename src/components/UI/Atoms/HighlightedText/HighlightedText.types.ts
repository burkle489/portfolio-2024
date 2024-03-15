import { ReactNode } from "react"

export interface IHighlightedTextProps {
  className?: string
  text: string
  bgClass: string
  textColor?: "dark" | "light"
  textBorder?: "thin"
}

export interface IHeroTextAnimationProps {
  className?: string
  children: ReactNode
  bgClass: string
  textColor?: "dark" | "light"
  textBorder?: "thin"
  delayMultiplier?: number
}
