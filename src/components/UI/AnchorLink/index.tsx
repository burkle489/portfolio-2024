import { FC } from "react"
import { IAnchorLinkProps } from "./AnchorLink.types"
import Link from "next/link"
import clsx from "clsx"

const AnchorLink: FC<IAnchorLinkProps> = ({
  text,
  isInternalLink = true,
  href,
  className,
}) => {
  if (isInternalLink) {
    return (
      <Link className={clsx("text-gray-700 ", className)} href={href}>
        {text}
      </Link>
    )
  } else {
    return (
      <a className={clsx("text-gray-700", className)} href={href}>
        {text}
      </a>
    )
  }
}

export default AnchorLink
