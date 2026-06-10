import { TextureCard, TextureCardContent } from "@/components/ui/texture-card"
import { BtnDark, BtnOutline, BtnLight, BtnGhost } from "@/components/Btn"
import Hero3D from "@/components/Hero3D"

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
)

const services = [
  {
    num: "01",
    name: "Rentabilidad y Control",
    em: "Financiero",
    desc: "Analizamos costos, identificamos fugas de rentabilidad y diseñamos herramientas de control adaptadas al negocio.",
    price: "Desde $7.200.000",
  },
  {
    num: "02",
    name: "Plan de Dirección",
    em: "Estratégica",
    desc: "Diseñamos el plan estratégico integral del negocio: objetivos, posicionamiento, oportunidades de crecimiento.",
    price: "Desde $10.000.000 + retainer",
  },
  {
    num: "03",
    name: "Organización y",
    em: "Flujos de Trabajo",
    desc: "Relevamos procesos internos, identificamos puntos de quiebre operativo y diseñamos protocolos concretos.",
    price: "Desde $8.800.000",
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen grid md:grid-cols-2 items-center bg-cream pt-[70px]">
        <div className="px-8 md:px-16 py-20 md:py-0">
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-sand-dark mb-6">
            Consultoría Gastronómica · Buenos Aires
          </div>
          <h1 className="font-serif text-[3.2rem] md:text-[4.5rem] font-light leading-[1.05] tracking-[-0.03em] text-brown mb-6">
            Gestión<br />
            <em className="italic font-light">profesional</em><br />
            para negocios<br />
            gastronómicos
          </h1>
          <p className="font-sans text-[0.68rem] tracking-[0.14em] uppercase text-sand-dark mb-10">
            Metodología Harvard · Resultados Medibles
          </p>
          <div className="flex flex-wrap gap-4">
            <BtnDark href="/servicios">
              Nuestros servicios <ArrowRight />
            </BtnDark>
            <BtnOutline href="/casos">
              Ver caso de éxito <ArrowRight />
            </BtnOutline>
          </div>
        </div>
        <div className="h-[50vh] md:h-screen">
          <Hero3D />
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-beige py-4 bg-white" aria-hidden>
        <div className="ticker-track flex whitespace-nowrap">
          {[...Array(2)].map((_, r) =>
            ["Diagnóstico", "Diseño de soluciones", "Implementación", "Seguimiento", "Resultados medibles", "Metodología Harvard", "Buenos Aires Provincia", "Ruta 5"].map((item) => (
              <span key={`${r}-${item}`} className="font-sans text-[0.65rem] tracking-[0.14em] uppercase text-sand-dark px-6">
                {item} <span className="text-gold font-bold">·</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
            <div>
              <div className="font-sans text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">
                Quiénes somos
              </div>
              <h2 className="font-serif text-[2.6rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
                La única consultora <em className="italic">especializada</em> en gastronomía PyME de la región
              </h2>
            </div>
            <div className="pt-0 md:pt-4">
              <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-5">
                ConFoodToria opera en el corredor de la Ruta Nacional 5 — Mercedes, Luján, Carlos Keen, Tomás Jofré, San Antonio de Areco. Nos especializamos en negocios gastronómicos y turístico-rurales con modelos probados, pero con gestión informal que limita su potencial.
              </p>
              <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-8">
                No somos una consultora generalista. Conocemos de cerca la dinámica operativa del sector porque venimos de ahí. Eso nos da credibilidad, velocidad diagnóstica y propuestas que realmente se pueden implementar.
              </p>
              <BtnGhost href="/nosotros">
                Conocer el equipo <ArrowRight />
              </BtnGhost>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-beige mt-20">
            {[
              { num: "63", label: "Establecimientos en zona de influencia" },
              { num: "6", label: "Consultores universitarios especializados" },
              { num: "5", label: "Fases metodología Harvard" },
              { num: "+12%", label: "Crecimiento anual del sector" },
            ].map(({ num, label }) => (
              <div key={label} className="p-8 border-b md:border-b-0 border-r last:border-r-0 border-beige">
                <div className="font-serif text-[2.8rem] font-light text-gold leading-none mb-3 tracking-[-0.03em]">
                  <em className="italic">{num}</em>
                </div>
                <div className="font-sans text-[0.65rem] font-medium tracking-[0.08em] uppercase text-sand-dark leading-snug">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-beige" />

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-5">
            <div>
              <div className="font-sans text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">
                Portfolio
              </div>
              <h2 className="font-serif text-[2.6rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
                Servicios diseñados<br />para <em className="italic">cada etapa</em>
              </h2>
            </div>
            <BtnGhost href="/servicios">
              Ver todos los servicios <ArrowRight />
            </BtnGhost>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {services.map((s) => (
              <TextureCard key={s.num} className="h-full hover:-translate-y-1 transition-transform duration-300">
                <TextureCardContent className="p-8 flex flex-col h-full">
                  <div className="font-serif text-[3rem] font-light text-beige leading-none mb-5 tracking-[-0.03em]">
                    {s.num}
                  </div>
                  <h3 className="font-serif text-[1.2rem] font-light text-brown mb-3">
                    {s.name} <em className="italic">{s.em}</em>
                  </h3>
                  <p className="text-[0.84rem] text-brown-light leading-relaxed font-light flex-1 mb-6">
                    {s.desc}
                  </p>
                  <div className="font-sans text-[0.68rem] text-gold font-semibold tracking-[0.08em] pt-4 border-t border-beige">
                    {s.price}
                  </div>
                </TextureCardContent>
              </TextureCard>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-beige" />

      {/* CASE STUDY PREVIEW */}
      <section className="grid md:grid-cols-2">
        <div className="h-[50vh] md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80"
            alt="Estancia Rodríguez"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="bg-cream px-8 md:px-16 py-20 flex flex-col justify-center">
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">
            Caso testigo
          </div>
          <h2 className="font-serif text-[3rem] font-light leading-[1.05] tracking-[-0.02em] text-brown mb-5">
            Estancia<br /><em className="italic">Rodríguez</em>
          </h2>
          <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-8">
            Establecimiento turístico-gastronómico en la Ruta 5. Alto potencial, gestión completamente informal. Nuestra intervención reorganizó operaciones, implementó control financiero y capacitó al equipo en 60 días.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10 border-t border-beige pt-8">
            {[
              { val: "+35%", key: "Rentabilidad operativa" },
              { val: "60", key: "Días de intervención" },
              { val: "5", key: "Áreas reorganizadas" },
            ].map(({ val, key }) => (
              <div key={key}>
                <div className="font-serif text-[2rem] font-light text-gold leading-none mb-2 tracking-[-0.02em]">
                  <em className="italic">{val}</em>
                </div>
                <div className="font-sans text-[0.6rem] font-medium tracking-[0.08em] uppercase text-sand-dark">
                  {key}
                </div>
              </div>
            ))}
          </div>
          <BtnOutline href="/casos">
            Ver caso completo <ArrowRight />
          </BtnOutline>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="bg-brown px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-light text-white leading-[1.1] tracking-[-0.02em]">
          ¿Tu negocio tiene potencial sin <em className="italic text-gold">explotar</em>?
        </h2>
        <BtnLight href="/contacto" className="shrink-0">
          Solicitar diagnóstico <ArrowRight />
        </BtnLight>
      </div>
    </>
  )
}
