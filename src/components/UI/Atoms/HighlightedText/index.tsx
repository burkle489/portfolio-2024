import { FC } from "react"
import { IHighlightedTextProps } from "./HighlightedText.types"
import clsx from "clsx"

const HighlightedText: FC<IHighlightedTextProps> = ({
  text,
  bgClass,
  textColor = "light",
  textBorder,
}) => {
  return (
    <span className="relative">
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
          "w-[123%] absolute bottom-5 -left-[5%] h-[30%] z-0",
          bgClass
        )}
      ></span>
    </span>
  )
}

export default HighlightedText
