import { ReactNode } from "react"

export interface IContentBannerProps {
  className?: string
  children: ReactNode
  align: "left" | "center" | "right"
}
