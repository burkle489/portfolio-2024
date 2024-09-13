import { FC } from "react"
import { IHeaderProps } from "./Header.types"
import BurgerMenu from "../BurgerMenu"
import Link from "next/link"
import AnchorLink from "../../Molecules/AnchorLink"
import { headers } from "next/headers"

const Header: FC<IHeaderProps> = ({}) => {
  return (
    <nav
      className="flex justify-center items-center h-20 bg-transparent w-full z-[9999999] fixed top-0 left-0 text-3xl"
      // style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="px-4 md:px-12 h-full w-full">
        <div className="h-full grid grid-cols grid-cols-4">
          <Link
            href="/"
            className=" text-light flex h-full justify-start items-center col-span-1 cursor-pointer"
          >
            <p className="">tbrke</p>
          </Link>
          <div className=" col-span-2 flex h-full items-center justify-between">
            <AnchorLink
              href="/about"
              hoverClasses="!-left-0.5"
              className="text-light font-playfair italic uppercase text-border font-semibold"
            >
              About
            </AnchorLink>
            <AnchorLink
              href="/work"
              hoverClasses="!-left-0.5"
              className="text-light font-playfair italic uppercase text-border font-semibold"
            >
              Work
            </AnchorLink>
            <AnchorLink
              href="/contact"
              hoverClasses="!-left-0.5"
              className="text-light font-playfair italic uppercase text-border font-semibold"
            >
              Contact
            </AnchorLink>
          </div>
          <div className="col-span-2 flex justify-end items-center">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
