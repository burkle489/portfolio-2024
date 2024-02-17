import { FC } from "react"
import { IButtonProps } from "./Button.types"
import clsx from "clsx"

const Button: FC<IButtonProps> = ({ text, className, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={clsx(
        "bg-blue-500 rounded shadow py-3 px-4  transition-all duration-300 ",
        className
      )}
    >
      {text}
    </button>
  )
}

export default Button
