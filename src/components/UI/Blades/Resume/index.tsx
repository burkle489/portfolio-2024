"use client"

import { useGSAP } from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import { FC, useRef } from "react"
import Heading from "../../Atoms/Heading"

const Resume: FC<any> = ({ className }) => {
  const sectionRef = useRef(null)
  const resume = [
    {
      title: "Senior Full-Stack Developer",
      company: "Fluid",
      dates: "Oct 2023 - Present",
      tech: ["NextJS 13/14", "Tailwind", "PrismaORM", "Postgres", "Redux"],
    },
    {
      title: "Web Developer",
      company: "Fluid",
      dates: "Aug 2022 - Oct 2023",
      tech: ["NextJS 13/14", "Tailwind", "GatsbyJS", "Redux"],
    },
    {
      title: "App Software Developer",
      company: "AVAMAE",
      dates: "Aug 2022 - Oct 2023",
      tech: ["React", "Redux", "SASS", "Formik"],
    },
  ]
  useGSAP(() => {
    gsap.fromTo(
      ".animated-card-3",
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
      <div className={clsx("flex inner-section flex-col")}>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {resume.map((r, i) => (
            <div
              style={{ backdropFilter: "blur(50px)" }}
              className="w-full tracking-wider font-oswald text-4xl text-light bg-dark-blue bg-opacity-40 px-6 animated-card-3 py-3 shadow-2xl"
              key={`${r}-${i}`}
            >
              <Heading variant="h3" hasAnimation={false}>
                {r.title}
              </Heading>
              <Heading variant="h4" hasAnimation={false}>
                {r.company}
              </Heading>
              <Heading variant="h5" hasAnimation={false}>
                {r.dates}
              </Heading>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
