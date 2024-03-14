import { FC } from "react"
import { IBasicHeaderProps } from "./BasicHeader.types"
import PLogoMask from "@/components/svgs/components/p-logo-mask"

const BasicHeader: FC<IBasicHeaderProps> = ({ burgerOnly = false }) => {
  return (
    <nav className="flex justify-center items-center h-20 bg-light relative z-50">
      <div className="inner-section">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <div
              className="dark-complex-radial-gradient w-12 h-12"
              style={{ clipPath: "url(#p-logo-mask)" }}
            >
              <PLogoMask />
            </div>
          </div>
          <div className="col-span-9"></div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </nav>
  )
}

export default BasicHeader
