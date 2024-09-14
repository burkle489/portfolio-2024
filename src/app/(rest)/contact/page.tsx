import Heading from "@/components/UI/Atoms/Heading"
import MailToLink from "@/components/UI/Atoms/MailToLink"
import Paragraph from "@/components/UI/Atoms/Paragraph"
import AnchorLink from "@/components/UI/Molecules/AnchorLink"

const Contact = () => {
  return (
    <div className="pointer-events-none w-screen min-h-screen relative z-50 py-32 px-2 sm:px-6 md:px-12 lg:px-20 flex flex-col justify-start gap-20 sm:gap-40 md:gap-60">
      <Heading
        variant="h1"
        className=" font-playfair  text-light uppercase font-bold italic text-border !leading-[0.9]"
      >
        Get <br /> in Touch.
      </Heading>
      <div className="flex items-center justify-end">
        <MailToLink email="tayler@tburke.dev" />
      </div>
    </div>
  )
}

export default Contact
