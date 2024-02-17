import { FC } from "react"
import { ICardProps } from "./Card.types"
import clsx from "clsx"
import Heading from "../Heading"
import Head from "next/head"

const Card: FC<ICardProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col bg-white border border-gray-700 shadow rounded overflow-hidden",
        className
      )}
    >
      <div className="bg-gray-300 aspect-video">{/* <Image /> */}</div>
      <div className="flex flex-col justify-start items-start p-3">
        <Heading variant="h6">Lorem Ipsum</Heading>
        <p>Nostrud excepteur cillum ipsum nulla id proident.</p>
      </div>
    </div>
  )
}

export default Card
