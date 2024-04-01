"use client"
import { FC, useRef } from "react"
import { IServicesShowcaseProps } from "./ServicesShowcase"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { VscTriangleRight } from "react-icons/vsc"
import Image from "next/image"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin"
if (typeof document !== `undefined`) gsap.registerPlugin(ScrollTrigger)
if (typeof document !== `undefined`) gsap.registerPlugin(MorphSVGPlugin)

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
  const pathRef = useRef(null)

  //slide out animations
  useGSAP(
    () => {
      gsap.fromTo(
        slide1.current,
        { filter: "blur(0px)", backgroundColor: "#fff" },
        {
          filter: "blur(30px)",
          opacity: 0.5,
          scrollTrigger: {
            trigger: slide2Container.current,
            start: "top center",
            toggleActions: "restart none none reverse",
          },
        }
      )
      gsap.fromTo(
        slide2.current,
        { filter: "blur(0px)", backgroundColor: "#fff" },

        {
          filter: "blur(30px)",
          opacity: 0.5,
          scrollTrigger: {
            trigger: slide3Container.current,
            start: "top center",
            toggleActions: "restart none none reverse",
          },
        }
      )
      gsap.fromTo(
        slide3.current,
        { filter: "blur(0px)", backgroundColor: "#fff" },

        {
          filter: "blur(30px)",
          opacity: 0.5,
          scrollTrigger: {
            trigger: slide4Container.current,
            start: "top center",
            toggleActions: "restart none none reverse",
          },
        }
      )
    },
    { scope: sectionRef }
  )

  //slides animations
  useGSAP(
    () => {
      gsap.fromTo(
        slide1.current,
        {
          position: "fixed",
          autoAlpha: 0,
          top: "50%",
          left: "50%",
          translateX: "-45%",
          translateY: "100vh",
        },
        {
          autoAlpha: 1,
          position: "fixed",
          top: "50%",
          left: "50%",
          translateX: "-45%",
          translateY: "-60%",
          onComplete: () => {
            gsap.fromTo(
              slide1.current,
              {
                autoAlpha: 1,
                position: "fixed",
                top: "50%",
                left: "50%",
                translateX: "-45%",
                translateY: "-60%",
              },
              {
                left: "150%",
                translateX: "-45%",
                translateY: "-60%",
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
          translateX: "-45%",
          translateY: "100vh",
        },
        {
          autoAlpha: 1,
          position: "fixed",
          top: "50%",
          left: "50%",
          translateX: "-45%",
          translateY: "-60%",
          onComplete: () => {
            gsap.fromTo(
              slide2.current,
              {
                autoAlpha: 1,
                position: "fixed",
                top: "50%",
                left: "50%",
                translateX: "-45%",
                translateY: "-60%",
              },
              {
                left: "150%",

                translateX: "-45%",
                translateY: "-60%",
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
          translateX: "-45%",
          translateY: "100vh",
        },
        {
          autoAlpha: 1,
          position: "fixed",
          top: "50%",
          left: "50%",
          translateX: "-45%",
          translateY: "-60%",
          onComplete: () => {
            gsap.fromTo(
              slide3.current,
              {
                autoAlpha: 1,
                position: "fixed",
                top: "50%",
                left: "50%",
                translateX: "-45%",
                translateY: "-60%",
              },
              {
                left: "150%",
                translateX: "-45%",
                translateY: "-60%",
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
          translateX: "-45%",
          translateY: "100vh",
        },
        {
          autoAlpha: 1,
          position: "fixed",
          top: "50%",
          left: "50%",
          translateX: "-45%",
          translateY: "-60%",
          onComplete: () => {
            gsap.fromTo(
              slide4.current,
              {
                autoAlpha: 1,
                position: "fixed",
                top: "50%",
                left: "50%",
                translateX: "-45%",
                translateY: "-60%",
              },
              {
                left: "150%",
                translateX: "-45%",
                translateY: "-60%",
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
    },
    { scope: sectionRef }
  )

  //ticker animations
  useGSAP(
    () => {
      gsap.set(tickerContainer.current, {
        autoAlpha: 0,
        yPercent: "-10%",
      })
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
    },
    { scope: sectionRef }
  )

  //svg shape animations
  useGSAP(
    () => {
      if (pathRef.current) {
        gsap.fromTo(
          pathRef.current,
          {
            morphSVG:
              "M26.2,-14.6C32.3,-4.5,34.5,8.4,29.5,18.9C24.5,29.4,12.3,37.5,0.7,37.1C-10.9,36.7,-21.8,27.8,-26.4,17.5C-31,7.3,-29.4,-4.4,-23.9,-14.1C-18.5,-23.8,-9.2,-31.6,0.4,-31.8C10,-32,20,-24.7,26.2,-14.6Z",
          },
          {
            scrollTrigger: {
              trigger: slide2Container.current,
              start: "top center",
              toggleActions: "restart none none reverse",
            },
            morphSVG:
              "M20.6,-20.5C28.2,-13.1,36.8,-6.5,36.6,-0.3C36.3,6,27.2,12,19.6,18.5C12,25.1,6,32.1,-0.8,32.9C-7.5,33.7,-15.1,28.2,-22.1,21.6C-29.2,15.1,-35.8,7.5,-36,-0.2C-36.2,-8,-30.1,-16,-23.1,-23.4C-16,-30.8,-8,-37.6,-0.7,-36.8C6.5,-36.1,13.1,-27.9,20.6,-20.5Z",
          }
        )
        gsap.fromTo(
          pathRef.current,
          {
            morphSVG:
              "M20.6,-20.5C28.2,-13.1,36.8,-6.5,36.6,-0.3C36.3,6,27.2,12,19.6,18.5C12,25.1,6,32.1,-0.8,32.9C-7.5,33.7,-15.1,28.2,-22.1,21.6C-29.2,15.1,-35.8,7.5,-36,-0.2C-36.2,-8,-30.1,-16,-23.1,-23.4C-16,-30.8,-8,-37.6,-0.7,-36.8C6.5,-36.1,13.1,-27.9,20.6,-20.5Z",
          },
          {
            scrollTrigger: {
              trigger: slide3Container.current,
              start: "top center",
              toggleActions: "restart none none reverse",
            },
            morphSVG:
              "M14.6,-19.7C21.4,-15.1,31.1,-14.2,32.3,-10.5C33.5,-6.8,26.1,-0.4,22,5.6C17.9,11.6,17.2,17.2,14.1,24C11,30.9,5.5,39,0.3,38.5C-4.8,38.1,-9.7,29,-17.6,23.7C-25.4,18.4,-36.4,16.9,-37.5,12.4C-38.5,8,-29.7,0.6,-25,-6.3C-20.2,-13.2,-19.5,-19.5,-16,-25.2C-12.5,-30.9,-6.3,-35.8,-1.2,-34.2C3.9,-32.6,7.8,-24.3,14.6,-19.7Z",
          }
        )
        gsap.fromTo(
          pathRef.current,
          {
            morphSVG:
              "M14.6,-19.7C21.4,-15.1,31.1,-14.2,32.3,-10.5C33.5,-6.8,26.1,-0.4,22,5.6C17.9,11.6,17.2,17.2,14.1,24C11,30.9,5.5,39,0.3,38.5C-4.8,38.1,-9.7,29,-17.6,23.7C-25.4,18.4,-36.4,16.9,-37.5,12.4C-38.5,8,-29.7,0.6,-25,-6.3C-20.2,-13.2,-19.5,-19.5,-16,-25.2C-12.5,-30.9,-6.3,-35.8,-1.2,-34.2C3.9,-32.6,7.8,-24.3,14.6,-19.7Z",
          },
          {
            scrollTrigger: {
              trigger: slide4Container.current,
              start: "top center",
              toggleActions: "restart none none reverse",
            },
            morphSVG:
              "M14.5,-27.7C18.1,-22.9,20.1,-17.8,24.4,-13.2C28.7,-8.5,35.3,-4.3,36.2,0.5C37,5.3,32.2,10.5,29.3,17.5C26.3,24.5,25.3,33.3,20.7,37.1C16.2,40.8,8.1,39.7,1.7,36.7C-4.7,33.7,-9.3,29,-14.6,25.6C-20,22.3,-25.9,20.4,-28.1,16.3C-30.2,12.3,-28.6,6.1,-29.6,-0.6C-30.7,-7.3,-34.4,-14.7,-32.6,-19.3C-30.8,-23.9,-23.4,-25.8,-17,-29.1C-10.7,-32.3,-5.3,-37,0,-37.1C5.4,-37.1,10.8,-32.5,14.5,-27.7Z",
          }
        )
        gsap.set(pathRef.current, {
          morphSVG:
            "M26.2,-14.6C32.3,-4.5,34.5,8.4,29.5,18.9C24.5,29.4,12.3,37.5,0.7,37.1C-10.9,36.7,-21.8,27.8,-26.4,17.5C-31,7.3,-29.4,-4.4,-23.9,-14.1C-18.5,-23.8,-9.2,-31.6,0.4,-31.8C10,-32,20,-24.7,26.2,-14.6Z",
        })
      }
    },
    { scope: sectionRef }
  )
  return (
    <section ref={sectionRef} className="section relative w-[100%] z-20 !pt-0">
      <div
        ref={tickerContainer}
        className="sticky top-1/4 left-[20%] w-20 z-30"
      >
        <div ref={tickerTriangle} className="absolute -top-2 right-full z-10">
          <VscTriangleRight color="white" />
        </div>
        <div className="w-full h-full flex flex-col gap-2 relative z-10">
          {[
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          ].map((_, i) => (
            <div key={i} className="w-2 h-[1px] bg-light"></div>
          ))}
        </div>
        <div className="absolute top-0 -right-full w-96 h-96 pointer-events-auto">
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <defs>
              <linearGradient id="shape1-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stopColor="#3178F0" offset="0%"></stop>
                <stop id="stop2" stopColor="#4E23F7" offset="80%"></stop>
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              fill="url(#shape1-gradient)"
              d="M26.2,-14.6C32.3,-4.5,34.5,8.4,29.5,18.9C24.5,29.4,12.3,37.5,0.7,37.1C-10.9,36.7,-21.8,27.8,-26.4,17.5C-31,7.3,-29.4,-4.4,-23.9,-14.1C-18.5,-23.8,-9.2,-31.6,0.4,-31.8C10,-32,20,-24.7,26.2,-14.6Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="0"
            ></path>
          </svg>
        </div>
      </div>
      <div
        ref={slide1Container}
        className="slide-container w-full h-[60vh] z-20"
      >
        <div
          ref={slide1}
          className=" rotate-3 bg-white w-[40vw] h-[50vh] z-20 shadow-2xl  px-8 p-12 bg-opacity-90"
        >
          <ShowcaseSlideInner
            heading="MVP Testing"
            description="Test your business idea or get a landing page at a cost that makes
            sense"
            tags={[
              "Newsletter",
              "Email Capture",
              "SPA",
              "Technical SEO",
              "Brand Consultancy",
            ]}
            image1="/images/mvp-test-example.png"
            image2="/images/full-bespoke-example.png"
          />
        </div>
      </div>
      <div
        ref={slide2Container}
        className="slide-container w-full h-[60vh] z-20"
      >
        <div
          ref={slide2}
          className="-rotate-1 bg-white w-[40vw] h-[50vh] z-20 shadow-2xl  px-8 p-12"
        >
          <ShowcaseSlideInner
            heading="Bespoke Blueprint"
            description="Pre-built blocks with custom branding, allowing for a cost-effective, bespoke experience"
            tags={[
              "Branding",
              "UI/UX Design",
              "Technical SEO",
              "Pre-built Components",
              "Newsletter",
              "Optional Blog",
            ]}
            image1="/images/stencilled-site-example.png"
            image2="/images/mvp-test-example.png"
          />
        </div>
      </div>
      <div
        ref={slide3Container}
        className="slide-container w-full h-[60vh] z-20"
      >
        <div
          ref={slide3}
          className="-rotate-2 bg-white w-[40vw] h-[50vh] z-20 shadow-2xl  px-8 p-12"
        >
          <ShowcaseSlideInner
            heading="Bespoke"
            description="Get a complete bespoke website with an end-to-end design and build process."
            tags={[
              "Branding",
              "UI/UX Design",
              "Technical SEO",
              "E2E Design and Build",
              "Newsletter",
              "Optional Blog",
            ]}
            image1="/images/mvp-test-example.png"
            image2="/images/full-bespoke-example.png"
          />
        </div>
      </div>
      <div
        ref={slide4Container}
        className="slide-container w-full h-[60vh] z-20"
      >
        <div
          ref={slide4}
          className=" rotate-1 bg-white w-[40vw] h-[50vh]  z-20 shadow-2xl  px-8 p-12"
        >
          <ShowcaseSlideInner
            heading="Custom"
            description="Get anything your heart desires."
            tags={[
              "E2E Design & Build",
              "Technical SEO",
              "Blog",
              "Auth Integration",
              "Ecommerce",
              "SaaS MVP Build",
            ]}
            image1="/images/mvp-test-example.png"
            image2="/images/full-bespoke-example.png"
          />
        </div>
      </div>
      <div className="slide-container w-full h-[60vh] z-20"></div>
    </section>
  )
}

export default ServicesShowcase

const ShowcaseSlideInner: FC<{
  heading: string
  description: string
  tags: string[]
  image1: string
  image2?: string
}> = ({ heading, description, tags, image1, image2 }) => {
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const imageRef = useRef(null)
  const image2Ref = useRef(null)
  const tagsRef = useRef(null)
  const innerContainerRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        { y: 0 },
        {
          y: -36,
          scrollTrigger: {
            trigger: innerContainerRef.current,
            scrub: true,
            start: "top center",
          },
        }
      )
      gsap.fromTo(
        descriptionRef.current,
        { y: 0 },
        {
          y: -42,
          scrollTrigger: {
            trigger: innerContainerRef.current,
            scrub: true,
            start: "top center",
          },
        }
      )
      gsap.fromTo(
        imageRef.current,
        { y: 0 },
        {
          y: -52,
          scrollTrigger: {
            trigger: innerContainerRef.current,
            scrub: true,
            start: "top center",
          },
        }
      )
      gsap.fromTo(
        image2Ref.current,
        { y: 0 },
        {
          y: -84,
          scrollTrigger: {
            markers: true,
            trigger: innerContainerRef.current,
            scrub: true,
            start: "top center",
          },
        }
      )
      gsap.fromTo(
        tagsRef.current,
        { y: 0 },
        {
          y: -22,
          scrollTrigger: {
            trigger: innerContainerRef.current,
            scrub: true,
            start: "top center",
          },
        }
      )
    },
    { scope: innerContainerRef }
  )

  return (
    <div
      ref={innerContainerRef}
      className="w-full h-full flex flex-col gap-20 relative"
    >
      <div className="flex justify-between items-start gap-6 relative -bottom-8">
        <div className="w-1/2 flex flex-col justify-start h-full">
          <p
            ref={headingRef}
            className="whitespace-nowrap mb-12 text-3xl font-bodoni-moda uppercase italic font-semibold -rotate-3 relative -left-4"
          >
            {"("}
            {heading}
            {")"}
          </p>
          <p ref={descriptionRef} className="text-2xl italic text-right">
            {description}
          </p>
        </div>
        <div
          ref={imageRef}
          className="shadow-2xl aspect-[16/10] w-1/2 relative border-[3px] border-dark-blue"
        >
          <Image
            src={image1}
            alt="mvp test showcase img"
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div
          ref={image2Ref}
          className="shadow-2xl aspect-[16/10] w-3/5 relative -bottom-20 border-[3px] border-dark-blue"
        >
          {image2 && (
            <Image
              src={image2}
              alt="mvp test showcase img"
              fill
              objectFit="cover"
            />
          )}
        </div>
        <div ref={tagsRef} className="w-2/5 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="border-[2px] border-dark-blue text-dark-blue rounded-full text-lg px-2 py-1 whitespace-nowrap flex justify-center items-center font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
