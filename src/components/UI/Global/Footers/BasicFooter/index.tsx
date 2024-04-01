import { FC } from "react"
import { IBasicFooterProps } from "./BasicFooter.types"

const BasicFooter: FC<IBasicFooterProps> = ({}) => {
  return (
    <footer className="flex justify-center items-center bg-dark relative h-60 overflow-hidden">
      <div className="inner-section">
        <div className="grid grid-cols-12">
          <div className="col-span-1"></div>
          <div className="col-span-9"></div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </footer>
  )
}

export default BasicFooter
