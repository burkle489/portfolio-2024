import { FC } from "react"
import { IExampleProps } from "./Example.types"
import clsx from "clsx"
import Image from "next/image"
import Heading from "../../Atoms/Heading"
import Paragraph from "../../Atoms/Paragraph"

const Example: FC<IExampleProps> = ({}) => {
  return (
    <section
      className={clsx(
        "z-10 relative flex flex-col justify-center section  items-center"
      )}
    >
      <div className={clsx("flex inner-section-very-wide flex-col gap-20")}>
        <div className="w-full flex items-center justify-between gap-12">
          <div className="w-[45%] flex-1 bg-dark-blue bg-opacity-40 aspect-video flex justify-center items-center">
            <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] relative">
              <Image
                alt="base section"
                src="/images/mvp-test-example.png"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-[50%] flex-1">
            <div>
              <Paragraph
                // variant="h3"
                // triggerStart="bottom bottom"
                className="text-light !mb-0 font-semibold !text-4xl"
              >
                We&apos;ve built out plenty of what we call{" "}
                <span className="font-bodoni-moda italic font-semibold inline-block">
                  blueprints
                </span>
                , so that our time is spent on what really matters.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="w-full flex items-start justify-between gap-12">
          <div className="flex-1 w-[40%] h-full flex justify-end items-start gap-0">
            <Paragraph className="text-light relative -bottom-20 !mb-0 font-semibold !font-bodoni-moda italic !text-2xl w-[200px] text-center">
              with a small sprinkle of our magic
            </Paragraph>
            <div className="rotate-180 relative -top-8">
              <svg
                fill="currentColor"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 201.979 201.979"
                xmlSpace="preserve"
                className="text-light w-40 rotate-180"
                style={{ transform: "scale(-1,1)" }}
              >
                <path
                  d="M196.937,43.129L145.643,0v22.442H39.288c-18.884,0-34.247,15.363-34.247,34.246v145.29h41.374V71.719
                c0-4.357,3.545-7.903,7.902-7.903h91.325v22.442L196.937,43.129z"
                />
              </svg>
            </div>
          </div>
          <div className="w-[60%] bg-dark-blue bg-opacity-40 aspect-video flex justify-center items-center ml-auto">
            <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] relative">
              <Image
                alt="base section"
                src="/images/stencilled-site-example.png"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Example
