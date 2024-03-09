export interface IShowcaseCardProps {
  className?: string
  image: any
  heading: string
  body: string
  hasButton: boolean
  buttonText?: string
  buttonLink?: string
  tags?: ("MVP Test" | "Stencil Bespoke" | "Full Bespoke")[]
}
