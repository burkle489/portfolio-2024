import { FC } from "react"
import { IBasicFooterProps } from "./BasicFooter.types"
import Heading from "@/components/UI/Atoms/Heading"

const BasicFooter: FC<IBasicFooterProps> = ({}) => {
  return (
    <footer
      style={{ backdropFilter: "blur(100px)" }}
      className="flex  bg-dark-blue bg-opacity-40 text-light relative h-[30rem] overflow-hidden z-10"
    >
      <div className="max-w-screen-2xl w-11/12 mx-auto py-20">
        <div className="grid grid-cols-12 h-full w-full">
          <div className="col-span-6 h-full">
            <Heading variant="h2" className="" animationInDirection="left">
              Lets chat.
            </Heading>
            <p className="text-3xl mb-20">
              We can grow your presence,{" "}
              <span className="font-bodoni-moda italic font-semibold">
                together.
              </span>
            </p>
            <a href="mailto:tayler@buildpresence.co.uk" className="text-3xl">
              tayler@buildpresence.co.uk
              <span></span>
            </a>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
    </footer>
  )
}

export default BasicFooter
