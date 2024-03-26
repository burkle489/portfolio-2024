"use client"

import clsx from "clsx"
import { FC } from "react"
import { IOneXThreeGridProps } from "./OneXThreeGrid.types"

const OneXThreeGrid: FC<IOneXThreeGridProps> = ({
  componentOne,
  componentTwo,
  componentThree,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "inner-section grid grid-cols-1 md:grid-cols-3 gap-20"
      )}
    >
      <div className="col-span-1 w-full h-full">{componentOne}</div>
      <div className="col-span-1 w-full h-full">{componentTwo}</div>
      <div className="col-span-1 w-full h-full">{componentThree}</div>
    </div>
  )
}

export default OneXThreeGrid
