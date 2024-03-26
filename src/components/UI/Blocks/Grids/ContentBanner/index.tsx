import { FC } from "react"
import { IContentBannerProps } from "./ContentBanner.types"
import OneXTwoGrid from "@/components/UI/Organisms/Grids/OneXTwoGrid"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"
import AnimatingCircles from "./AnimatingCircles"
import HighlightedText from "@/components/UI/Atoms/HighlightedText"
import GreenContent from "@/components/UI/Atoms/BGShapes/GreenContent"
import clsx from "clsx"

const ContentBanner: FC<IContentBannerProps> = ({
  align = "center",
  children,
}) => {
  return (
    <section
      className={clsx("section text-white relative z-30 flex flex-col", {
        "justify-start": align === "left",
        "justify-center items-center": align === "center",
        "justify-end": align === "right",
      })}
    >
      {children}
    </section>
  )
}

export default ContentBanner
