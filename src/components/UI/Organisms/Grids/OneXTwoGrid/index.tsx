import clsx from "clsx"
import { FC } from "react"
import { IOneXTwoGridProps } from "./OneXTwoGrid.types"

const OneXTwoGrid: FC<IOneXTwoGridProps> = ({
  componentOne,
  componentTwo,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "inner-section grid grid-cols-1 md:grid-cols-2 gap-20"
      )}
    >
      <div className="col-span-1 w-full h-full">{componentOne}</div>
      <div className="col-span-1 w-full h-full">{componentTwo}</div>
    </div>
  )
}

export default OneXTwoGrid
