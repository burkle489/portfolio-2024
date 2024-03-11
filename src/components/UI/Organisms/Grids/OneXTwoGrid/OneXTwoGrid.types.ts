import { ReactNode } from "react"

export interface IOneXTwoGridProps {
  className?: string
  componentOne: ReactNode
  componentTwo: ReactNode
  hideSecondOnMobile?: boolean
}
