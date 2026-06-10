import Link from "next/link"
import { cn } from "@/lib/utils"

const base =
  "inline-flex items-center gap-2.5 font-sans text-[0.68rem] font-semibold tracking-[0.16em] uppercase transition-all duration-200 select-none"

interface BtnProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function BtnDark({ href, children, className }: BtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        "bg-brown text-cream px-7 py-3.5 hover:bg-[#180C04]",
        className
      )}
    >
      {children}
    </Link>
  )
}

export function BtnOutline({ href, children, className }: BtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        "border border-brown text-brown px-7 py-3.5 hover:bg-brown hover:text-cream",
        className
      )}
    >
      {children}
    </Link>
  )
}

export function BtnLight({ href, children, className }: BtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        "border border-cream/50 text-cream px-7 py-3.5 hover:border-cream hover:bg-cream/10",
        className
      )}
    >
      {children}
    </Link>
  )
}

export function BtnGhost({ href, children, className }: BtnProps) {
  return (
    <Link
      href={href}
      className={cn(
        base,
        "text-brown border-b border-brown pb-0.5 hover:text-gold hover:border-gold",
        className
      )}
    >
      {children}
    </Link>
  )
}
