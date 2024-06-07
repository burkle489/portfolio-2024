import {
  FC,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useEffect,
} from "react"
import { ICardProps } from "./Card.types"
import clsx from "clsx"
import Heading from "../../Atoms/Heading"
import { useGSAP } from "@gsap/react"

const Card: ForwardRefExoticComponent<
  Omit<ICardProps, "ref"> & RefAttributes<HTMLDivElement>
  // eslint-disable-next-line react/display-name
> = forwardRef(
  ({ className, heading, answer, explanation, tag, disclaimer }, ref) => {
    return (
      <div
        className={clsx(
          "bg-dark-blue bg-opacity-40 w-full h-full flex flex-col py-12 px-8 shadow-2xl overflow-hidden animated-card-1 justify-between",
          className
        )}
        ref={ref}
      >
        <div className="w-full h-full flex flex-col justify-between gap-6">
          <div>
            <Heading
              variant="h2"
              // triggerStart="center 60%"
              className="text-light italic !font-bodoni-moda font-normal !mb-6 !text-5xl"
              hasAnimation={false}
            >
              {heading}
            </Heading>

            <p className="text-light text-4xl mb-8 font-semibold tracking-wide font-oswald">
              {answer}
            </p>
            <p className="text-light text-2xl">{explanation}</p>
          </div>
          <div>
            <p className="text-light text-4xl mb-0 font-bold w-full">{tag}</p>
            <p className="text-light text-xl mb-0 italic font-thin font-bodoni-moda w-full">
              {disclaimer}
            </p>
          </div>
        </div>
        {/* <p className="text-light font-bold text-5xl">{price}</p> */}
      </div>
    )
  }
)

export default Card
