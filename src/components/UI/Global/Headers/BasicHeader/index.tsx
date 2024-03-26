import { FC } from "react"
import { IBasicHeaderProps } from "./BasicHeader.types"
import PLogoMask from "@/components/svgs/components/p-logo-mask"

const BasicHeader: FC<IBasicHeaderProps> = ({ burgerOnly = false }) => {
  return (
    <nav
      className="flex justify-center items-center h-20 bg-transparent w-full z-50 fixed top-0 left-0 text-4xl"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="px-12 h-full w-full">
        <div className="h-full">
          <div className=" text-light flex text-border-thin h-full justify-start items-center">
            <p>build</p>
            <div className="bg-light w-[2px] h-12 mx-6 mr-4 opacity-80 shadow-2xl rounded-full"></div>{" "}
            <p className=" uppercase text-border italic">PRESENCE</p>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </nav>
  )
}

export default BasicHeader
