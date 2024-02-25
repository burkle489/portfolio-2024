import { FC } from "react"
import { IBasicHeroProps } from "./BasicHero"
import clsx from "clsx"
import Image from "next/image"
import Heading from "@/components/UI/Atoms/Heading"
import Button from "@/components/UI/Atoms/Button"

const BasicHero: FC<IBasicHeroProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "w-full bg-gray-500 flex flex-col items-center justify-center min-h-[70vh] p-24 relative",
        className
      )}
    >
      <Image fill alt="background image" src={""} />
      <div
        className={clsx(
          "flex flex-col items-center justify-center max-w-lg text-center gap-4"
        )}
      >
        <Heading variant="h1">Lorem Ipsum</Heading>
        <p>
          Tempor laboris exercitation id ipsum in ea est ex ex sunt sunt ut
          aute. Enim labore aute sit quis ea irure esse ex nisi. Voluptate
          reprehenderit aliqua eiusmod cillum. Duis anim velit ad tempor Lorem
          cupidatat exercitation minim duis cupidatat aliquip.
        </p>
        <Button {...{ text: "Go to page", className: "uppercase" }} />
      </div>
    </section>
  )
}

export default BasicHero
