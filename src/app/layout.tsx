import type { Metadata } from "next"
import { Fraunces, Syne, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
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
        className={`${fraunces.variable} ${syne.variable} ${inter.variable} antialiased bg-cream text-brown`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
