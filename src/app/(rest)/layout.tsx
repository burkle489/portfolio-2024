import "@/app/globals.scss"
import Providers from "@/components/Provider"
import Header from "@/components/UI/Global/Header"
import SplashScreen from "@/components/UI/Global/SplashScreen"
import { TCanvas } from "@/components/three/TCanvas"
import { store } from "@/store"
import type { Metadata } from "next"
import { Oswald, Overpass, Playfair_Display } from "next/font/google"

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "Tayler Burke - Full Stack Developer",
  },
  publisher: "tburke.dev",
  metadataBase: new URL("https://tburke.dev"),
  keywords: [],
  openGraph: {
    siteName: "Tayler Burke - Full Stack Developer",
    url: "https://tburke.dev",

    type: "website",
  },
  twitter: {
    card: "summary",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { gradientReady } = store.getState()
  return (
    <html
      lang="en"
      className={`${oswald.variable}  ${oswald.className} ${overpass.variable}  ${overpass.className} ${playfair.variable}  ${playfair.className} relative`}
    >
      <body className={overpass.className}>
        <Providers>
          {/* <CursorFollower /> */}

          <SplashScreen {...{ initialState: gradientReady.ready }} />

          <Header />
          <aside className="absolute top-0 left-0 w-full h-full z-10">
            <TCanvas />
          </aside>
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}
