import { FC } from "react"
import Heading from "../../Atoms/Heading"
import clsx from "clsx"

interface IMarqueeCardProps {
  heading: string
  description: string
  colour: "orange" | "sapphire" | "avocado"
}

const MarqueeCard: FC<IMarqueeCardProps> = ({
  heading,
  description,
  colour,
}) => {
  return (
    <div className="bg-dark  h-52 w-[22rem] mr-16 relative overflow-hidden p-2 pb-6 group hover:scale-110 transition-all duration-300">
      <div className="w-full h-full relative z-20">
        <Heading
          variant="h3"
          className={clsx("font-semibold tracking-wide !text-3xl", {
            "text-orange": colour === "orange",
            "text-sapphire": colour === "sapphire",
            "text-avocado": colour === "avocado",
          })}
        >
          {heading}
        </Heading>
        <p className="text-xl text-dark">{description}</p>
      </div>

      <div
        className={clsx("h-4 absolute bottom-0 left-0 w-full", {
          "pink-orange-radial-gradient": colour === "orange",
          "dark-complex-radial-gradient": colour === "sapphire",
          "purple-green-radial-gradient": colour === "avocado",
        })}
      >
        <div className="absolute bg-light h-60 w-[26rem] right-[calc(50%-13rem)] bottom-2 group-hover:bottom-20 transition-all duration-500"></div>
      </div>
    </div>
  )
}

export default MarqueeCard
