import { FC } from "react";
import { IShowcaseCardProps } from "./ShowcaseCard.types";
import Image from "next/image";
import Heading from "@/components/UI/Atoms/Heading";
import clsx from "clsx";

const ShowcaseCard: FC<IShowcaseCardProps> = ({
  heading,
  body,
  image,
  hasButton,
  buttonLink,
  buttonText,
  tags,
}) => {
  return (
    <div className="p-4 mr-20 h-full w-[35vw] max-w-[500px] flex flex-col gap-4 group transition-all duration-300 cursor-pointer">
      <div className="relative w-full overflow-hidden rounded-2xl h-72 shadow">
        <Image
          src={image}
          alt="example screenshot"
          fill
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div className="w-full mx-2">
        <Heading variant="h3" className="font-bold !text-3xl">
          {heading}
        </Heading>
        {tags && (
          <div className="mb-2">
            {tags.map((t, i) => (
              <div
                key={i}
                className={clsx(
                  "rounded-full p-1 px-3 w-fit text-sm border-dark border-[1px] shadow",
                  {
                    "bg-avocado": t === "MVP Test",
                    "bg-purple": t === "Stencil Bespoke",
                    "bg-sapphire": t === "Full Bespoke",
                  }
                )}
              >
                {t}
              </div>
            ))}
          </div>
        )}
        <p className="line-clamp-3">{body}</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;
