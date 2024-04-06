import { FC } from "react"
import { IGridBlockProps } from "./GridBlock.types"
import clsx from "clsx"
import Image from "next/image"
import placeholder from "@/images/1920x1080-placeholder.png"
import CardGrid from "../../../Organisms/CardGrid"
import Heading from "../../../Atoms/Heading"
import Paragraph from "@/components/UI/Atoms/Paragraph"

const GridBlock: FC<IGridBlockProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "z-10 relative flex flex-col justify-center section !pt-0 items-center"
      )}
    >
      <div className={clsx("flex inner-section-wide flex-col")}>
        <div className="flex flex-col justify-center items-center">
          <Heading
            variant="h2"
            triggerStart="bottom bottom"
            className="text-light uppercase font-normal !mb-6 !text-7xl"
          >
            Build your presence
          </Heading>
          <Paragraph className="!text-3xl !mb-12 text-center max-w-screen-xl font-bodoni-moda">
            Unlock your business with a modern, fast and SEO friendly website at
            a great price.
          </Paragraph>
        </div>
        <CardGrid
          data={[
            {
              heading: "What do we do?",
              answer: "Whatever is necessary",
              explanation:
                "Branding, content, design, execution yada yada yada",
            },
            {
              heading: "How do we do it?",
              answer: "It's about the personality",
              explanation:
                "Our focus is on bringing your brand to life. Most websites share the same bones, so we built a product that allows for swift character creation.",
            },
            {
              heading: "How much is it?",
              answer: "No limbs required.",
              explanation:
                "We run a subscription-based model to allow for businesses of all shapes and sizes.",
              tag: "£150/month",
              disclaimer: "other payment structures available",
            },
          ]}
        />
      </div>
    </section>
  )
}

export default GridBlock
