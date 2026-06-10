import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-serif text-[1.3rem] font-normal mb-4">
            Con<em className="font-light italic">Food</em>Toria
          </div>
          <p className="text-[0.82rem] text-sand leading-relaxed font-light">
            Consultoría especializada en PyMEs gastronómicas y turístico-rurales.
            Corredor Ruta 5, Buenos Aires Provincia.
          </p>
        </div>
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-sand-dark mb-5">
            Páginas
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/nosotros", label: "Nosotros" },
              { href: "/servicios", label: "Servicios" },
              { href: "/casos", label: "Casos" },
              { href: "/contacto", label: "Contacto" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.82rem] text-sand hover:text-cream transition-colors font-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-sand-dark mb-5">
            Servicios
          </div>
          <ul className="flex flex-col gap-3">
            {[
              "Control Financiero",
              "Plan Estratégico",
              "Flujos de Trabajo",
              "Capacitación",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/servicios"
                  className="text-[0.82rem] text-sand hover:text-cream transition-colors font-light"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-sand-dark mb-5">
            Contacto
          </div>
          <ul className="flex flex-col gap-3">
            {["LinkedIn", "Instagram", "Formulario"].map((s) => (
              <li key={s}>
                <Link
                  href={s === "Formulario" ? "/contacto" : "#"}
                  className="text-[0.82rem] text-sand hover:text-cream transition-colors font-light"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-[1200px] mx-auto px-8 md:px-16 py-5 flex flex-col md:flex-row justify-between gap-2">
        <span className="text-[0.72rem] text-sand-dark font-light">
          © 2026 ConFoodToria SRL — Buenos Aires, Argentina
        </span>
        <span className="text-[0.72rem] text-sand-dark font-light">
          Metodología Harvard · Especialización Gastronómica
        </span>
      </div>
    </footer>
  )
}
