import clsx from "clsx"
import { FC } from "react"
import Heading from "../../Atoms/Heading"
import CardGrid from "../../Organisms/CardGrid"
import { IRecentProjectsProps } from "./RecentProjects.types"

const RecentProjects: FC<IRecentProjectsProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        "z-10 relative flex flex-col justify-center section !pt-0 items-center"
      )}
    >
      <div className={clsx("flex inner-section-wide flex-col")}>
        <div className="flex flex-col justify-center items-center">
          <Heading
            variant="h2"
            triggerStart="bottom bottom"
            className="text-light uppercase font-normal !mb-12 !text-7xl"
          >
            Recent Projects
          </Heading>
          {/* <Paragraph className="!text-3xl !mb-12 text-center max-w-screen-xl font-bodoni-moda">
            
          </Paragraph> */}
        </div>
        <CardGrid
          data={[
            {
              heading: "Pokedex App",
              answer: "GatsbyJS 1-day build",
              explanation: "Built as a way to validate Gatsby learning.",
            },
            {
              heading: "T-Shirt Measure App",
              answer: "Measure a t-shirt using a credit card.",
              explanation:
                "Have a favourite t-shirt that fits perfectly? Use this app to measure t-shirts and find similar.",
            },
            {
              heading: "Evercore Heroes",
              answer: "MOBA with a Twist!",
              explanation:
                "Front-End UI build ready for the launch of the closed beta. The site was then handed over to the client for them to iterate.",
            },
          ]}
        />
      </div>
    </section>
  )
}

export default RecentProjects
