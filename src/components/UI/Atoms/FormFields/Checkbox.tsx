import clsx from "clsx"
import React, { BaseSyntheticEvent } from "react"

interface ICheckboxProps {
  name: string
  checked: boolean
  onChange: (e: BaseSyntheticEvent) => void
  className?: string
  checkboxRight?: boolean
  isToggle?: boolean
  separateItems?: boolean | null
  isVertical?: boolean | null
  children: React.ReactNode
  isInvalid?: boolean
}

const Checkbox: React.FC<ICheckboxProps> = ({
  name,
  checked = false,
  onChange,
  className,
  checkboxRight = false,
  isToggle = false,
  separateItems = false,
  isVertical = false,
  isInvalid = false,
  children,
}) => {
  const handleChange = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    typeof onChange === `function` && onChange(e)
  }

  return (
    <div className="mx-auto">
      <label
        htmlFor={name}
        onClick={(e) => handleChange(e)}
        className={clsx(
          `flex items-center ${
            separateItems ? `justify-between` : `justify-start`
          } gap-4 ${checkboxRight ? `flex-row-reverse` : `flex-row`} ${
            isVertical ? `flex-col-reverse` : `flex-row`
          } text-grey`,
          className
        )}
      >
        <input
          {...{
            type: `checkbox`,
            name,
            checked,
            className: `hidden`,
            onChange,
          }}
        />
        {isToggle ? (
          <div
            className={`bg-transparent ${
              checked ? `border border-light2` : ``
            } rounded-full w-24 min-w-[6rem] h-16 flex justify-center items-center relative clip-toggle-border transition-all `}
          >
            <div
              className={` p-2 shrink-0 rounded-full ${
                checked ? `bg-black` : ` border border-light2`
              } w-20 h-12 cursor-pointer relative  `}
            >
              <span
                className={`absolute top-[calc(50%-1.125rem)] ${
                  checked ? `  bg-white` : ` bg-black translate-x-[75%]`
                }  rounded-full w-9 h-9 block transition-all duration-300`}
              />
            </div>
          </div>
        ) : (
          <div
            className={clsx(
              "border-[1px] p-0.5 shrink-0 border-grey-1 w-4 h-4 cursor-pointer",
              { "border-primary-red": isInvalid }
            )}
          >
            <span
              className={`${
                checked ? `bg-grey-1` : ``
              } w-full h-full block transition-all duration-300`}
            />
          </div>
        )}

        {children && (
          <span className={`text-grey-1 font-chakraPetch text-sm`}>
            {children}
          </span>
        )}
      </label>
    </div>
  )
}

export default Checkbox
