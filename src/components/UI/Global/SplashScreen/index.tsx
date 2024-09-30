"use client"

import { useAppSelector } from "@/store/hooks"
import clsx from "clsx"

export default function SplashScreen({ initialState = false }) {
  const gradientReady = useAppSelector((state) => state.gradientReady.ready)

  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 w-full h-full bg-gradient-to-t from-primary-slate-500 to-primary-slate-100 flex items-center justify-center"
      )}
    >
      {/* <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality="100"
      /> */}
      <div className="relative z-20 flex items-center justify-center w-fit overflow-visible fill-white text-white scale-125">
        <h1 className="text-7xl font-bold">tbrke</h1>
      </div>
    </aside>
  )
}
