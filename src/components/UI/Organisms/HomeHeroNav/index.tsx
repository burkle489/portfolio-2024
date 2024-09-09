import { IClassName } from "@/types"
import clsx from "clsx"
import { FC } from "react"
import AnchorLink from "../../Molecules/AnchorLink"

const HomeHeroNav: FC<IClassName> = ({ className }) => {
  return (
    <div
      className={clsx(
        "text-light flex flex-col justify-center items-start h-full col-span-1",
        className
      )}
    >
      <AnchorLink
        href={"/work"}
        className="text-9xl uppercase font-bold !font-playfair italic text-border"
        animationDelay={2}
      >
        Work
      </AnchorLink>
      <AnchorLink
        href={"/about"}
        className="text-9xl uppercase font-bold !font-playfair italic text-border"
        animationDelay={2.3}
      >
        About
      </AnchorLink>
      <AnchorLink
        href={"/contact"}
        className="text-9xl uppercase font-bold !font-playfair italic text-border"
        animationDelay={2.6}
      >
        Contact
      </AnchorLink>
    </div>
  )
}

export default HomeHeroNav
