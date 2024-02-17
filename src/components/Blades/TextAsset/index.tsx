import { FC } from "react"
import { ITextAssetProps } from "./TextAsset"
import clsx from "clsx"
import Image from "next/image"
import placeholder from "@/images/1920x1080-placeholder.png"

const TextAsset: FC<ITextAssetProps> = ({ className, order }) => {
  return (
    <section
      className={clsx("p-24 bg-gray-300 flex justify-center gap-6 w-screen")}
    >
      <div
        className={clsx("flex gap-12 max-w-screen-xl", {
          "flex-col md:flex-row items-center justify-center text-center md:text-left":
            order === "image-left",
          "flex-col-reverse md:flex-row-reverse items-center justify-center text-center md:text-left":
            order === "image-right",
          "flex-col items-center justify-start text-center":
            order === "image-top",
          "flex-col-reverse items-center justify-start text-center":
            order === "image-bottom",
        })}
      >
        <div className=" bg-gray-700 relative flex grow w-full aspect-video max-w-md flex-1">
          <Image
            fill
            alt="content image"
            src={placeholder}
            objectFit="contain"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <p>
            Commodo ut id elit consectetur amet in ipsum ullamco quis elit sunt
            nostrud. Incididunt qui dolor est ad aliquip enim nulla nisi et ad
            proident. Consequat sint adipisicing irure nostrud officia pariatur
            ut fugiat. Proident culpa sit pariatur laborum ullamco.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TextAsset
