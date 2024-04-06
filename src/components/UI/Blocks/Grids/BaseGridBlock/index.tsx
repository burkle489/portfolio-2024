import { FC } from "react"
import { IGridBlockProps } from "./GridBlock.types"
import clsx from "clsx"
import Image from "next/image"
import placeholder from "@/images/1920x1080-placeholder.png"
import CardGrid from "../../../Organisms/CardGrid"
import Heading from "../../../Atoms/Heading"
import Paragraph from "@/components/UI/Atoms/Paragraph"
import BaseCardGrid from "./BaseCardGrid"
import { FaCalendarDay } from "react-icons/fa6"
import { FaCartShopping } from "react-icons/fa6"
import { FaChartColumn } from "react-icons/fa6"

const BaseGridBlock: FC<IGridBlockProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "z-10 relative flex flex-col justify-center section items-center bg-white text-black"
      )}
    >
      <div className={clsx("flex inner-section-wide flex-col")}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-sans uppercase font-normal !mb-6 !text-7xl">
            Elit anim laboris
          </h2>
          <p className="font-sans !text-3xl !mb-12 text-center max-w-screen-xl !text-black">
            Magna voluptate amet ipsum quis laboris sint excepteur tempor
            officia minim ullamco. Duis veniam dolore amet do esse. Mollit aute
            qui culpa eiusmod laborum nulla fugiat sunt anim.
          </p>
        </div>
        <BaseCardGrid
          data={[
            {
              heading: "Do excepteur culpa",
              answer: "Incididunt voluptate ea non tempor",
              explanation:
                "Ut dolore laborum laborum dolor cupidatat et irure dolor Lorem mollit. Sunt pariatur incididunt commodo sit. Ex qui elit ipsum aute ex occaecat sint.",
              icon: <FaCartShopping size={125} />,
            },
            {
              heading: "Duis ipsum est elit",
              answer: "Adipisicing aliquip est culpa",
              explanation:
                "Deserunt laboris ullamco quis reprehenderit eu pariatur. Proident ut occaecat dolore ea magna. Ut in ex aliquip mollit.",
              icon: <FaCalendarDay size={125} />,
            },
            {
              heading: "Amet duis mollit",
              answer: "Occaecat velit id magna consectetur ",
              explanation:
                "Non commodo enim Lorem in eu. Proident est et labore do minim commodo incididunt quis officia dolore. Pariatur fugiat mollit exercitation tempor velit.",
              icon: <FaChartColumn size={125} />,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default BaseGridBlock
