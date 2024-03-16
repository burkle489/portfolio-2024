import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import BgSVG3 from "@/components/svgs/components/BgSVG3"
import { useGSAP } from "@gsap/react"
import { FC } from "react"

const BottomLeftHeroShape: FC = () => {
  return (
    <div className="scale-[70%] md:scale-100 absolute -bottom-[5rem] sm:bottom-[0rem] -left-[35rem] z-10">
      <div className="relative  w-[60rem] h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem]">
          <BgSVG3
            drawSvgStart="80% 80%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem]">
          <BgSVG3
            drawSvgStart="70% 70%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem]">
          <BgSVG3
            drawSvgStart="60% 60%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14rem]">
          <BgSVG3
            drawSvgStart="50% 50%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] hidden lg:block">
          <BgSVG3
            drawSvgStart="90% 90%"
            animationDelay={4}
            animationDuration={2}
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default BottomLeftHeroShape
