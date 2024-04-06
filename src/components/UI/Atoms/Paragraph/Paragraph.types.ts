export interface IParagraphProps {
  children: React.ReactNode
  className?: string
  animationInDirection?: "left" | "right"
  animationDelay?: number
  scrubTrigger?: string
  wordStagger?: number
  triggerStart?: string
}
