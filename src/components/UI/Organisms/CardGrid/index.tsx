"use client"

import { FC, useRef, useState } from "react"
import { ICardGridProps } from "./CardGrid.types"
import Card from "../../Molecules/Cards/Card"
import { ICardProps } from "../../Molecules/Cards/Card/Card.types"
import Button from "../../Atoms/Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)

const CardGrid: FC<ICardGridProps> = ({ data }) => {
  const cardRef = useRef(null)
  const sectionRef = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      ".animated-card-1",
      {
        autoAlpha: 0,
        y: 700,
        filter: "blur(100px)",
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        stagger: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "center 55%",
          // pin: true,
          scrub: true,
        },
      }
    )
  })
  return (
    <section ref={sectionRef} className="w-full flex flex-col justify-start">
      <div className="grid grid-cols-12 gap-8">
        {data.map((item: ICardProps, ind: number) => {
          return (
            <Card
              {...{
                ...item,
                ref: cardRef,
                className: "col-span-12 md:col-span-6 lg:col-span-4",
              }}
              key={ind}
            />
          )
        })}
      </div>
    </section>
  )
}

export default CardGrid
