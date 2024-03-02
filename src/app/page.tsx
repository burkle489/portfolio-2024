import BasicHero from "@/components/UI/Blocks/Heroes/BasicHero"
import TextAsset from "@/components/UI/Blocks/TextAsset"
import AnchorLink from "@/components/UI/Atoms/AnchorLink"
import Button from "@/components/UI/Atoms/Button"
import Card from "@/components/UI/Molecules/Card"
import Image from "next/image"
import CardGrid from "@/components/UI/Organisms/CardGrid"
import GridBlock from "@/components/UI/Blocks/Grids/GridBlock"
import ContentHero from "@/components/UI/Blocks/Heroes/ContentHero"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-4">
      <ContentHero />
    </main>
  )
}
