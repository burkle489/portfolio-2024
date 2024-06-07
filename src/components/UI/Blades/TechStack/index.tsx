"use client"

import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import { FC, useRef } from "react"

const TechStack: FC<any> = ({ className }) => {
  const sectionRef = useRef(null)

  const tech = [
    "React",
    "NextJS",
    "Postgres",
    "PrismaORM",
    "Tailwind",
    "NodeJS",
    "SCSS",
    "GatsbyJS",
    "MongoDB",
  ]
  useGSAP(() => {
    gsap.fromTo(
      ".animated-card-2",
      {
        autoAlpha: 0,
        y: 400,
        filter: "blur(100px)",
      },
      {
        y: 0,
        autoAlpha: 1,
        filter: "blur(0px)",
        stagger: 0.25,
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
    <section
      ref={sectionRef}
      className={clsx(
        "z-10 relative flex flex-col justify-center section !pt-0 items-center"
      )}
    >
      <div className={clsx("flex inner-section-wide flex-col")}>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {tech.map((t, i) => (
            <div
              className="tracking-wider font-oswald text-4xl text-light bg-dark-blue bg-opacity-40 px-6 animated-card-2 py-3 shadow-2xl"
              key={`${t}-${i}`}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
