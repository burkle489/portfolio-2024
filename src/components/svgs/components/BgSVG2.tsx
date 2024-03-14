import { FC } from "react"

const BgSVG1: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      id="bg-svg-2-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bg-svg-2-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#4e23f7" offset="0%"></stop>
          <stop id="stop2" stopColor="#3178f0" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#bg-svg-2-gradient)"
        d="M14.2,-26.6C16.9,-23,16.7,-16.3,21.5,-11.3C26.2,-6.4,35.8,-3.2,37.2,0.8C38.7,4.9,32,9.7,28.3,16.5C24.6,23.2,23.9,31.7,19.7,34.9C15.5,38.1,7.8,36,2.5,31.7C-2.8,27.5,-5.7,21.1,-9,17.4C-12.3,13.6,-16,12.5,-18.3,10.1C-20.7,7.6,-21.6,3.8,-21.5,0.1C-21.4,-3.6,-20.2,-7.3,-17.8,-9.7C-15.4,-12.1,-11.9,-13.3,-8.7,-16.7C-5.6,-20.1,-2.8,-25.6,1.5,-28.2C5.7,-30.7,11.4,-30.2,14.2,-26.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        stroke="url(#bg-svg-2-gradient)"
      ></path>
    </svg>
  )
}

export default BgSVG1
