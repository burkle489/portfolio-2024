import { FC } from "react"
import { IButtonProps } from "./Button.types"
import clsx from "clsx"

const Button: FC<IButtonProps> = ({ text, className, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={clsx(
        "bg-light text-dark rounded shadow py-4 px-5 transition-all duration-300 relative overflow-hidden group",
        className
      )}
    >
      <span className="relative z-20 font-bold uppercase group-hover:text-white duration-700 transition-all">
        {text}
      </span>
      <div className="rounded absolute left-0 top-0 purple-green-radial-gradient h-full w-6 group-hover:w-full duration-500 transition-all z-10 pointer-events-none">
        <div className="rounded-full bg-light absolute left-2.5 top-1/2 -translate-y-1/2 h-20 w-20 pointer-events-none group-hover:left-full transition-all duration-500"></div>
      </div>
    </button>
  )
}

export default Button
