"use client"
import { FC, useRef } from "react"
import { IServicesShowcaseProps } from "./ServicesShowcase"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { VscTriangleRight } from "react-icons/vsc"
import Image from "next/image"

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

  //slide out animations
  useGSAP(() => {
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
  })

  //slides animations
  useGSAP(() => {
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
  })

  //ticker animations
  useGSAP(() => {
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
  })
  return (
    <section ref={sectionRef} className="section relative w-[100%] z-20 !pt-0">
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

  useGSAP(() => {
    if (
      headingRef.current &&
      descriptionRef.current &&
      imageRef.current &&
      image2Ref.current &&
      tagsRef.current &&
      innerContainerRef.current
    ) {
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
    }
  })

  return (
    <div
      ref={innerContainerRef}
      className="w-full h-full flex flex-col gap-20 relative"
    >
      <div className="flex justify-between items-start gap-6 relative -bottom-8">
        <div className="w-1/2 flex flex-col justify-between h-full">
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
