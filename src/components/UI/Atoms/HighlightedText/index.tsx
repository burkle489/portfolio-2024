import { FC } from "react"
import { IHighlightedTextProps } from "./HighlightedText.types"
import clsx from "clsx"

const HighlightedText: FC<IHighlightedTextProps> = ({
  text,
  bgClass,
  textColor = "light",
  textBorder,
  className = "",
}) => {
  return (
    <span className={clsx("relative", className)}>
      <span
        className={clsx("relative z-10 text-border", {
          "text-border": textColor === "light",
          "text-border-light": textColor === "dark",
          "text-border-thin": textColor === "light" && textBorder === "thin",
          "text-border-light-thin":
            textColor === "dark" && textBorder === "thin",
        })}
      >
        {text}
      </span>
      <span
        className={clsx(
          "w-[115%] absolute bottom-8 -left-[5%] h-[30%] z-0",
          bgClass
        )}
      ></span>
    </span>
  )
}

export default HighlightedText
