"use client"

import useWindowSize from "@/hooks/useWindowSize"
import React, { FC, Suspense, useEffect, useRef } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Background } from "./Background"
import { OrthographicCamera } from "@react-three/drei"

import { enFragmentShader, enVertexShader } from "@/modules/glsl/shader"
import gsap from "gsap"
import { setGradientReady } from "@/store/gradientReady"
import { useAppDispatch } from "@/store/hooks"
import DelayedFallback from "../UI/Global/DelayedFallback"
import { useGSAP } from "@gsap/react"

export const TCanvas: FC = () => {
  const dispatch = useAppDispatch()
  const frustumSize = 600
  const { width } = useWindowSize()
  const aspect = (width - 15) / 600
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useGSAP(() => {
    gsap.set(canvasRef.current, { opacity: 0 })
  }, [])

  return (
    <Suspense fallback={<DelayedFallback />}>
      <Canvas
        className=""
        ref={canvasRef}
        resize={{ scroll: false }}
        dpr={
          typeof window !== "undefined" ? window.devicePixelRatio : undefined
        }
        onCreated={(state) => {
          dispatch(setGradientReady(true))
          gsap.fromTo(
            canvasRef.current,
            {
              opacity: 0,
              duration: 0.5,
            },
            {
              opacity: 1,
              duration: 0.8,
            }
          )
        }}
      >
        <OrthographicCamera
          makeDefault
          left={(frustumSize * aspect) / -2}
          right={(frustumSize * aspect) / 2}
          top={frustumSize / 6}
          bottom={frustumSize / -6}
          near={-1000}
          far={1000}
        />
        <Background />
        {/* helper */}
        {/* <Stats /> */}
      </Canvas>
    </Suspense>
  )
}
