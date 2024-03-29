import { FC } from "react"
import { IBasicHeaderProps } from "./BasicHeader.types"
import PLogoMask from "@/components/svgs/components/p-logo-mask"
import BurgerMenu from "../../BurgerMenu"

const BasicHeader: FC<IBasicHeaderProps> = ({ burgerOnly = false }) => {
  return (
    <nav
      className="flex justify-center items-center h-20 bg-transparent w-full z-50 fixed top-0 left-0 text-3xl"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="px-4 md:px-12 h-full w-full">
        <div className="h-full grid grid-cols grid-cols-4">
          <div className=" text-light flex h-full justify-start items-center col-span-2">
            {/* <p className="font-bodoni-moda mb-1">build</p>
            <div className="bg-light w-[1px] h-12 mx-2 opacity-80 shadow-2xl rounded-full"></div>{" "} */}
            <p className="">prsnce</p>
          </div>
          <div className="col-span-2 flex justify-end items-center">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default BasicHeader
