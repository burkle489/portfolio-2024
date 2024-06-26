import type { Metadata } from "next"
import { Overpass, Bodoni_Moda, Zilla_Slab, Oswald } from "next/font/google"
import "./globals.scss"
import Header from "@/components/UI/Global/Header"
import Footer from "@/components/UI/Global/Footer"
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
const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
})
const bodoniModa = Zilla_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
      className={`${oswald.variable}  ${oswald.className} ${overpass.variable}  ${overpass.className} ${bodoniModa.variable}  ${bodoniModa.className} relative`}
    >
      <body className={overpass.className}>
        <Providers>
          <CursorFollower />
          <Header />
          <aside className="absolute top-0 left-0 w-full h-full z-10">
            <TCanvas />
          </aside>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
