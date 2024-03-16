import BgSVG1 from "@/components/svgs/components/BgSVG1"
import BgSVG2 from "@/components/svgs/components/BgSVG2"
import { useGSAP } from "@gsap/react"
import { FC } from "react"

const TopRightHeroShape: FC = () => {
  return (
    <>
      <div className="w-[60rem] absolute -right-[33rem] -top-[33rem] lg:-top-[32rem] lg:-right-[32rem]">
        <BgSVG1
          drawSvgStart="40% 40%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={1}
        />
      </div>
      <div className="w-[60rem] absolute -right-[35rem] -top-[35rem] lg:-top-[34rem] lg:-right-[34rem] ">
        <BgSVG1
          drawSvgStart="50% 50%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={0.5}
        />
      </div>
      <div className="w-[60rem] absolute lg:-top-[29rem] lg:-right-[29rem] -top-[31rem] -right-[31rem] hidden sm:block">
        <BgSVG1
          drawSvgStart="30% 30%"
          animationDelay={2}
          animationDuration={2}
          className=""
          strokeWidth={1.5}
        />
      </div>
      <div className="w-[60rem] absolute -top-[29rem] -right-[29rem] lg:-top-[25rem] lg:-right-[25rem] hidden xl:block">
        <BgSVG1
          className=""
          strokeWidth={2}
          drawSvgStart="20% 20%"
          animationDelay={2}
          animationDuration={2}
        />
      </div>
    </>
  )
}

export default TopRightHeroShape
