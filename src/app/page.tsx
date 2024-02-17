import BasicHero from "@/components/Blades/BasicHero"
import TextAsset from "@/components/Blades/TextAsset"
import AnchorLink from "@/components/UI/AnchorLink"
import Button from "@/components/UI/Button"
import Card from "@/components/UI/Card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-4">
      <BasicHero />
      <TextAsset order="image-left" />
      <TextAsset order="image-right" />
      <TextAsset order="image-top" />
      <TextAsset order="image-bottom" />
      <div className="flex gap-4 items-center">
        <Button {...{ text: "Submit", className: "uppercase text-white" }} />
        <Button
          {...{
            text: "Submit",
            className:
              "bg-transparent border-gray-700 text-gray-700 border uppercase",
          }}
        />
      </div>
      <div className="flex gap-4 items-center">
        <AnchorLink {...{ text: "Home", className: "uppercase", href: "/" }} />
        <AnchorLink
          {...{
            text: "Home",
            className:
              "uppercase bg-blue-500 rounded shadow py-3 px-4 text-white",
            href: "/",
          }}
        />
      </div>
      <div className="gap-4 grid grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}
