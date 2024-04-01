import clsx from "clsx"
import { FC } from "react"
import { IContentBannerProps } from "./ContentBanner.types"

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
