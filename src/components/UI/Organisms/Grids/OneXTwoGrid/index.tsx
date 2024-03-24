"use client"

import clsx from "clsx"
import { FC } from "react"
import { IOneXTwoGridProps } from "./OneXTwoGrid.types"
import { useWindowSize } from "usehooks-ts"

const OneXTwoGrid: FC<IOneXTwoGridProps> = ({
  componentOne,
  componentTwo,
  hideSecondOnMobile = false,
  className,
}) => {
  const { width = 0, height = 0 } = useWindowSize()
  return (
    <div
      className={clsx(
        className,
        "inner-section grid grid-cols-1 md:grid-cols-2 gap-20"
      )}
    >
      <div className="col-span-1 w-full h-full">{componentOne}</div>
      {(!hideSecondOnMobile || width > 768) && (
        <div className="col-span-1 w-full h-full">{componentTwo}</div>
      )}
    </div>
  )
}

export default OneXTwoGrid
