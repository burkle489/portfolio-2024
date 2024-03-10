import { FC } from "react"
import { IBasicFooterProps } from "./BasicFooter.types"
import PLogoMask from "@/components/svgs/components/p-logo-mask"

const BasicFooter: FC<IBasicFooterProps> = ({}) => {
  return (
    <footer className="flex justify-center items-center bg-dark relative h-60">
      <div className="h-2 absolute top-0 left-0 w-full dark-complex-radial-gradient"></div>
      <div className="inner-section">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <div className="">
              <span className="font-extrabold text-6xl dark-complex-radial-gradient bg-clip-text text-transparent">
                Presence
              </span>
            </div>
          </div>
          <div className="col-span-9"></div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </footer>
  )
}

export default BasicFooter
