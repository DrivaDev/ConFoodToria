"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const links = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[70px] z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-cream/95 backdrop-blur-md border-b border-beige"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="flex items-center gap-2.5"
        aria-label="ConFOODToria"
      >
        <img src="/icon.svg" alt="" className="w-8 h-8" aria-hidden />
        <span className="font-sans font-bold text-[1.1rem] tracking-[-0.01em] text-brown">
          Con<span className="text-gold">FOOD</span>Toria
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-11 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-sans text-[0.75rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 ${
                pathname === href
                  ? "text-gold"
                  : "text-brown hover:text-gold"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contacto"
            className="font-sans text-[0.75rem] font-semibold tracking-[0.1em] uppercase px-5 py-2 border border-brown text-brown hover:bg-brown hover:text-cream transition-all duration-200"
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setOpen(!open)}
        aria-label="Menú"
      >
        <span
          className={`w-5 h-[1.5px] bg-brown transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}
        />
        <span
          className={`w-5 h-[1.5px] bg-brown transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`w-5 h-[1.5px] bg-brown transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-cream/98 backdrop-blur-md border-b border-beige py-8 flex flex-col items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-sans text-[0.85rem] font-medium tracking-[0.1em] uppercase text-brown hover:text-gold"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="font-sans text-[0.85rem] font-semibold tracking-[0.1em] uppercase px-6 py-2 border border-brown text-brown hover:bg-brown hover:text-cream"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  )
}
