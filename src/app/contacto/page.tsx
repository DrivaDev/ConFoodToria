"use client"

import { useState } from "react"
import { TextureButton } from "@/components/ui/texture-button"

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
)

const infoItems = [
  {
    label: "Zona de operación",
    text: "Corredor Ruta Nacional 5\nMercedes · Luján · Carlos Keen · Tomás Jofré · San Antonio de Areco",
    icon: (
      <svg className="w-5 h-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: "Modalidad",
    text: "70% presencial in company\n30% remoto / administrativo",
    icon: (
      <svg className="w-5 h-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    label: "Redes sociales",
    text: "@confoodtoria en Instagram\nConFoodToria en LinkedIn",
    icon: (
      <svg className="w-5 h-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
]

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <>
      {/* PAGE HEADER */}
      <div className="pt-[70px] bg-cream border-b border-beige">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Contacto</div>
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] font-light leading-[1.0] tracking-[-0.03em] text-brown">
            Empezá por<br />el <em className="italic">diagnóstico</em>
          </h1>
        </div>
      </div>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">

          {/* LEFT */}
          <div>
            <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-10">
              Contanos en qué etapa está tu negocio y qué problema querés resolver. Con esa información podemos recomendarte el servicio que mejor se ajusta a tu situación, antes de firmar cualquier contrato.
            </p>

            <div className="border border-beige">
              {infoItems.map((item, i) => (
                <div key={item.label} className={`flex gap-5 p-6 ${i < infoItems.length - 1 ? "border-b border-beige" : ""}`}>
                  <div className="w-11 h-11 bg-beige flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-sans text-[0.6rem] font-bold tracking-[0.15em] uppercase text-sand-dark mb-1">{item.label}</div>
                    <div className="text-[0.88rem] text-brown leading-relaxed font-light whitespace-pre-line">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div className="mt-8 p-6 bg-cream border-t-2 border-gold">
              <div className="font-sans text-[0.6rem] font-bold tracking-[0.18em] uppercase text-gold mb-3">
                Metodología Harvard — 5 fases
              </div>
              <div className="flex flex-wrap gap-3">
                {["Entrada", "Diagnóstico", "Diseño", "Implementación", "Seguimiento"].map((phase, i, arr) => (
                  <span key={phase} className={`text-[0.75rem] font-light ${i === arr.length - 1 ? "text-gold font-medium" : "text-brown-light"} flex items-center gap-3`}>
                    {phase}
                    {i < arr.length - 1 && <span className="text-beige">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div>
            <div className="mb-8">
              <h2 className="font-serif text-[1.8rem] font-light text-brown tracking-[-0.02em] mb-2">
                Formulario de <em className="italic">contacto</em>
              </h2>
              <p className="font-sans text-[0.78rem] text-sand-dark">Respondemos en menos de 48 horas.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-cream border-l-2 border-gold">
                <p className="text-[0.9rem] text-brown font-light">Mensaje enviado. Te contactamos en menos de 48 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" required placeholder="Tu nombre completo"
                      className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown placeholder:text-sand font-light focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="tel">Teléfono</label>
                    <input id="tel" type="tel" placeholder="+54 11 0000-0000"
                      className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown placeholder:text-sand font-light focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="email">Email</label>
                  <input id="email" type="email" required placeholder="correo@turestaurante.com"
                    className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown placeholder:text-sand font-light focus:outline-none focus:border-gold transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="negocio">Nombre del establecimiento</label>
                  <input id="negocio" type="text" placeholder="Nombre de tu restaurante, parrilla o estancia"
                    className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown placeholder:text-sand font-light focus:outline-none focus:border-gold transition-colors" />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="tipo">Tipo de establecimiento</label>
                    <select id="tipo"
                      className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown font-light focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option value="">Seleccioná...</option>
                      <option>Restaurante</option>
                      <option>Parrilla</option>
                      <option>Turístico-rural / Estancia</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="zona">Localidad</label>
                    <input id="zona" type="text" placeholder="Mercedes, Luján, etc."
                      className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown placeholder:text-sand font-light focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="servicio">Servicio de interés</label>
                  <select id="servicio"
                    className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown font-light focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="">Seleccioná un servicio...</option>
                    <option>Diagnóstico inicial (sin costo)</option>
                    <option>Rentabilidad y Control Financiero</option>
                    <option>Plan de Dirección Estratégica</option>
                    <option>Organización y Flujos de Trabajo</option>
                    <option>Jornada de Capacitación de Personal</option>
                    <option>Retainer de Seguimiento Mensual</option>
                    <option>No sé, necesito orientación</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark" htmlFor="mensaje">Contanos tu situación</label>
                  <textarea id="mensaje" rows={5}
                    placeholder="¿Cuál es el principal desafío de tu negocio hoy? Cuanto más detalle, mejor podemos orientarte."
                    className="border border-beige bg-white px-4 py-3 text-[0.88rem] text-brown placeholder:text-sand font-light focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>

                <TextureButton type="submit" variant="primary" size="lg" disabled={loading} className="w-full">
                  <span className="flex items-center justify-center gap-2 py-1">
                    {loading ? "Enviando..." : <><span>Enviar consulta</span> <ArrowRight /></>}
                  </span>
                </TextureButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
