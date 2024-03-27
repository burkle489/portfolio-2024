import type { Metadata } from "next"
import { Overpass, Bodoni_Moda } from "next/font/google"
import "./globals.scss"
import BasicHeader from "@/components/UI/Global/Headers/BasicHeader"
import BasicFooter from "@/components/UI/Global/Footers/BasicFooter"
import { TCanvas } from "@/components/three/TCanvas"
import Providers from "@/components/Provider"
import CursorFollower from "@/components/UI/Atoms/CursorFollower"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const overpass = Overpass({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-overpass",
})
const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni-moda",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${overpass.variable}  ${overpass.className} ${bodoniModa.variable}  ${bodoniModa.className} relative`}
    >
      <body className={overpass.className}>
        <Providers>
          <CursorFollower />
          <BasicHeader />
          <aside className="absolute top-0 left-0 w-full h-full z-10">
            <TCanvas />
          </aside>
          {children}
          <BasicFooter />
        </Providers>
      </body>
    </html>
  )
}
