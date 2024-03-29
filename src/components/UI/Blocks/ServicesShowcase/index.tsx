"use client"
import { FC, useRef } from "react"
import { IServicesShowcaseProps } from "./ServicesShowcase"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { VscTriangleRight } from "react-icons/vsc"

const ServicesShowcase: FC<IServicesShowcaseProps> = ({}) => {
  const sectionRef = useRef(null)
  const slide1 = useRef(null)
  const slide1Container = useRef(null)
  const slide2 = useRef(null)
  const slide2Container = useRef(null)
  const slide3 = useRef(null)
  const slide3Container = useRef(null)
  const slide4 = useRef(null)
  const slide4Container = useRef(null)
  const tickerTriangle = useRef(null)
  const tickerContainer = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      slide1.current,
      {
        position: "fixed",
        autoAlpha: 0,
        top: "50%",
        left: "50%",
        // translateX: "100vw",
        translateY: "100vh",
      },
      {
        autoAlpha: 1,
        position: "fixed",
        top: "50%",
        left: "50%",
        translateX: "-35%",
        translateY: "-50%",
        onComplete: () => {
          gsap.fromTo(
            slide1.current,
            {
              autoAlpha: 1,
              position: "fixed",
              top: "50%",
              left: "50%",
              translateX: "-35%",
              translateY: "-50%",
            },
            {
              translateX: "-200%",
              translateY: "-50%",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom bottom",
                toggleActions: "restart none none reverse",
              },
            }
          )
        },
        scrollTrigger: {
          trigger: slide1Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.fromTo(
      slide2.current,
      {
        position: "fixed",
        autoAlpha: 0,
        top: "50%",
        left: "50%",
        // translateX: "100vw",
        translateY: "100vh",
      },
      {
        autoAlpha: 1,
        position: "fixed",
        top: "50%",
        left: "50%",
        translateX: "-32.5%",
        translateY: "-47.5%",
        onComplete: () => {
          gsap.fromTo(
            slide2.current,
            {
              autoAlpha: 1,
              position: "fixed",
              top: "50%",
              left: "50%",
              translateX: "-32.5%",
              translateY: "-47.5%",
            },
            {
              translateX: "-200%",
              translateY: "-50%",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom bottom",
                toggleActions: "restart none none reverse",
              },
            }
          )
        },
        scrollTrigger: {
          trigger: slide2Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.fromTo(
      slide3.current,
      {
        position: "fixed",
        autoAlpha: 0,
        top: "50%",
        left: "50%",
        // translateX: "100vw",
        translateY: "100vh",
      },
      {
        autoAlpha: 1,
        position: "fixed",
        top: "50%",
        left: "50%",
        translateX: "-30%",
        translateY: "-45%",
        onComplete: () => {
          gsap.fromTo(
            slide3.current,
            {
              autoAlpha: 1,
              position: "fixed",
              top: "50%",
              left: "50%",
              translateX: "-30%",
              translateY: "-45%",
            },
            {
              translateX: "-200%",
              translateY: "-50%",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom bottom",
                toggleActions: "restart none none reverse",
              },
            }
          )
        },
        scrollTrigger: {
          trigger: slide3Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.fromTo(
      slide4.current,
      {
        position: "fixed",
        autoAlpha: 0,
        top: "50%",
        left: "50%",
        // translateX: "100vw",
        translateY: "100vh",
      },
      {
        autoAlpha: 1,
        position: "fixed",
        top: "50%",
        left: "50%",
        translateX: "-27.5%",
        translateY: "-42.5%",
        onComplete: () => {
          gsap.fromTo(
            slide4.current,
            {
              autoAlpha: 1,
              position: "fixed",
              top: "50%",
              left: "50%",
              translateX: "-27.5%",
              translateY: "-42.5%",
            },
            {
              translateX: "-200%",
              translateY: "-50%",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom bottom",
                toggleActions: "restart none none reverse",
              },
            }
          )
        },
        scrollTrigger: {
          trigger: slide4Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
  })

  //ticker animations
  useGSAP(() => {
    gsap.set(tickerContainer.current, { autoAlpha: 0, yPercent: "-10%" })
    gsap.fromTo(
      tickerContainer.current,
      { autoAlpha: 0, yPercent: "-10%" },
      {
        autoAlpha: 1,
        yPercent: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          toggleActions: "restart none none reverse",
        },
        onComplete: () => {
          gsap.fromTo(
            tickerContainer.current,
            { autoAlpha: 1, yPercent: 0 },
            {
              autoAlpha: 0,
              yPercent: "-10%",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom bottom",
                toggleActions: "restart none none reverse",
              },
            }
          )
        },
      }
    )
    gsap.fromTo(
      tickerTriangle.current,
      { autoAlpha: 0, top: "-20%" },
      {
        autoAlpha: 1,
        top: "-2%",
        scrollTrigger: {
          trigger: slide1Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.fromTo(
      tickerTriangle.current,
      { autoAlpha: 1, top: "-2%" },
      {
        top: "33%",
        scrollTrigger: {
          trigger: slide2Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.fromTo(
      tickerTriangle.current,
      { autoAlpha: 1, top: "33%" },
      {
        top: "66%",
        scrollTrigger: {
          trigger: slide3Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.fromTo(
      tickerTriangle.current,
      { autoAlpha: 1, top: "66%" },
      {
        top: "98%",
        scrollTrigger: {
          trigger: slide4Container.current,
          start: "top center",
          toggleActions: "restart none none reverse",
        },
      }
    )
    gsap.set(tickerTriangle.current, { autoAlpha: 0, top: "-20%" })
  })
  return (
    <section ref={sectionRef} className="section relative w-[100%] z-20">
      <div
        ref={tickerContainer}
        className="sticky top-1/4 left-[20%] w-20 z-30"
      >
        <div ref={tickerTriangle} className="absolute -top-2 right-full">
          <VscTriangleRight color="white" />
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          {[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ].map((_, i) => (
            <div key={i} className="w-2 h-[1px] bg-light"></div>
          ))}
        </div>
      </div>
      <div
        ref={slide1Container}
        className="slide-container w-full border border-red-500 h-[50vh] z-20"
      >
        <div
          ref={slide1}
          className="bg-white w-[60vw] h-[50vh] z-20 shadow-2xl border-2 border-dark-blue"
        >
          <div className="w-full h-full">
            <h1>Lorem Ipsum Heading</h1>
            <p>Lorem Ipsum Paragraph</p>
          </div>
        </div>
      </div>
      <div
        ref={slide2Container}
        className="slide-container w-full border border-red-500 h-[50vh] z-20"
      >
        <div
          ref={slide2}
          className="bg-white w-[60vw] h-[50vh]  z-20 shadow-2xl border-2 border-dark-blue"
        >
          <div className="w-full h-full">
            <h1>Lorem Ipsum Heading</h1>
            <p>Lorem Ipsum Paragraph</p>
          </div>
        </div>
      </div>
      <div
        ref={slide3Container}
        className="slide-container w-full border border-red-500 h-[50vh] z-20"
      >
        <div
          ref={slide3}
          className="bg-white w-[60vw] h-[50vh]  z-20 shadow-2xl border-2 border-dark-blue"
        >
          <div className="w-full h-full">
            <h1>Lorem Ipsum Heading</h1>
            <p>Lorem Ipsum Paragraph</p>
          </div>
        </div>
      </div>
      <div
        ref={slide4Container}
        className="slide-container w-full border border-red-500 h-[50vh] z-20"
      >
        <div
          ref={slide4}
          className="bg-white w-[60vw] h-[50vh]  z-20 shadow-2xl border-2 border-dark-blue"
        >
          <div className="w-full h-full">
            <h1>Lorem Ipsum Heading</h1>
            <p>Lorem Ipsum Paragraph</p>
          </div>
        </div>
      </div>
      <div className="slide-container w-full border border-red-500 h-[50vh] z-20"></div>
    </section>
  )
}

export default ServicesShowcase
