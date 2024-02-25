import { FC } from "react"
import { IGridBlockProps } from "./GridBlock.types"
import clsx from "clsx"
import Image from "next/image"
import placeholder from "@/images/1920x1080-placeholder.png"
import CardGrid from "../../../Organisms/CardGrid"
import Heading from "../../../Atoms/Heading"

const GridBlock: FC<IGridBlockProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "p-24 bg-blue-300 flex flex-col justify-center gap-6 w-screen items-center"
      )}
    >
      <div>
        <Heading variant="h2">Card Grid</Heading>
      </div>
      <div className={clsx("flex gap-12 max-w-screen-xl")}>
        <CardGrid data={[1, 2, 3, 4, 5, 6, 7, 8]} />
      </div>
    </section>
  )
}

export default GridBlock
