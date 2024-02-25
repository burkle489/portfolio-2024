import BasicHero from "@/components/UI/Blocks/Heroes/BasicHero"
import TextAsset from "@/components/UI/Blocks/TextAsset"
import AnchorLink from "@/components/UI/Atoms/AnchorLink"
import Button from "@/components/UI/Atoms/Button"
import Card from "@/components/UI/Molecules/Card"
import Image from "next/image"
import CardGrid from "@/components/UI/Organisms/CardGrid"
import GridBlock from "@/components/UI/Blocks/Grids/GridBlock"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-4">
      <GridBlock />
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
