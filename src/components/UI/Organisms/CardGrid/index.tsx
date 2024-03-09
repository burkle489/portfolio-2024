"use client"

import { FC, useState } from "react"
import { ICardGridProps } from "./CardGrid.types"
import Card from "../../Molecules/Cards/Card"
import { ICardProps } from "../../Molecules/Cards/Card/Card.types"
import Button from "../../Atoms/Button"

const CardGrid: FC<ICardGridProps> = ({
  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}) => {
  const [cardsShown, setCardsShown] = useState<number>(6)
  return (
    <section className="w-full bg-blue-300 flex flex-col gap-8">
      <div className="grid grid-cols-12 gap-6">
        {data.map((item: ICardProps, ind: number) => {
          if (ind < cardsShown) {
            return (
              <Card
                {...{
                  ...item,
                  className: "col-span-12 md:col-span-6 lg:col-span-4",
                }}
                key={ind}
              />
            )
          }
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        {data.length >= cardsShown && (
          <Button
            onClick={() => {
              console.log("clicked")
              setCardsShown((prevState) => prevState + 3)
            }}
            text="Show more"
            className="text-white uppercase cursor-pointer"
          />
        )}
      </div>
    </section>
  )
}

export default CardGrid
