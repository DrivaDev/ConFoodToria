import type { Metadata } from "next"
import { Cormorant_Garamond, Syne, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: "ConFoodToria — Consultoría Gastronómica",
  description:
    "Consultoría especializada en PyMEs gastronómicas y turístico-rurales de Buenos Aires provincia. Metodología Harvard.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${syne.variable} ${inter.variable} antialiased bg-cream text-brown`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
