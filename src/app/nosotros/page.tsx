import Link from "next/link"
import { TextureCard, TextureCardContent } from "@/components/ui/texture-card"
import { TextureButton } from "@/components/ui/texture-button"

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
)

const values = [
  {
    name: "Especialización",
    desc: "Solo gastronomía y turismo rural. No somos generalistas. Ese foco nos da profundidad de diagnóstico que ningún consultor externo al rubro puede igualar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    name: "Proximidad",
    desc: "Trabajamos in company, en las instalaciones del cliente. El 70% de nuestra actividad es presencial. Entendemos la operación porque la vemos funcionar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    name: "Resultados medibles",
    desc: "Cada intervención cierra con un informe final documentado. Métricas reales, no promesas genéricas. Los resultados deben poder compararse con el diagnóstico inicial.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    name: "Metodología Harvard",
    desc: "Aplicamos las cinco fases del proceso de consultoría Harvard: entrada, diagnóstico, diseño, implementación y seguimiento. Documentado, replicable y profesional.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
]

const team = [
  { initials: "LG", name: "Lucas García Marino", role: "Director General", bio: "Conducción estratégica de la firma, representación institucional y toma de decisiones clave." },
  { initials: "JB", name: "Juan Manuel Bruno", role: "Director Comercial", bio: "Prospección y captación de nuevos clientes, elaboración de propuestas comerciales y gestión de cartera." },
  { initials: "SB", name: "Santiago Bailo", role: "Consultor Senior — Líder de Proyecto", bio: "Dirección técnica de cada intervención. Coordina el equipo en campo y garantiza la calidad metodológica." },
  { initials: "SC", name: "Sofía Campagno", role: "Consultora de Operaciones", bio: "Especializada en relevamiento y análisis de procesos operativos. Diseña protocolos de trabajo por área." },
  { initials: "AC", name: "Agostina Carunchio", role: "Consultora de RRHH y Capacitación", bio: "Diagnóstico de equipos, diseño y conducción de jornadas de capacitación a medida." },
  { initials: "JS", name: "Juan Manuel Silva", role: "Analista Financiero y Administrativo", bio: "Modelado financiero de business cases, elaboración de presupuestos y control de gestión." },
]

export default function Nosotros() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="pt-[70px] bg-cream border-b border-beige">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Nosotros</div>
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] font-light leading-[1.0] tracking-[-0.03em] text-brown">
            Seis especialistas,<br /><em className="italic">un solo enfoque</em>
          </h1>
        </div>
      </div>

      {/* MANIFESTO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Nuestra historia</div>
            <h2 className="font-serif text-[2.4rem] font-light leading-[1.1] tracking-[-0.02em] text-brown mb-6">
              Nació de <em className="italic">adentro</em> del sector
            </h2>
            <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-5">
              ConFoodToria surge del trabajo directo con Estancia Rodríguez, un establecimiento turístico-gastronómico en la Ruta 5. Lo que comenzó como un caso de estudio universitario reveló algo más grande: un nicho prácticamente vacante de consultoría especializada para PyMEs gastronómicas rurales.
            </p>
            <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-5">
              Los negocios de la zona tienen algo en común: modelos probados y rentables, pero gestión informal que limita su crecimiento. Son exactamente el tipo de organización que más se beneficia de una consultoría accesible, práctica y culturalmente compatible.
            </p>
            <p className="text-[0.9rem] text-brown-light leading-relaxed font-light">
              Somos seis egresados universitarios de Administración y Comercio Internacional con perfiles complementarios. Nuestra fortaleza está en aplicar la metodología Harvard de cinco fases al contexto real del sector gastronómico bonaerense.
            </p>
          </div>
          <div className="h-[400px] md:h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
              alt="Equipo ConFoodToria en sesión de trabajo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <hr className="border-beige" />

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="mb-16">
            <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Nuestros principios</div>
            <h2 className="font-serif text-[2.4rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
              Lo que nos <em className="italic">define</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v) => (
              <TextureCard key={v.name}>
                <TextureCardContent className="p-8 flex gap-5">
                  <div className="text-gold shrink-0 mt-1">{v.icon}</div>
                  <div>
                    <h3 className="font-serif text-[1.15rem] font-light text-brown mb-3">{v.name}</h3>
                    <p className="text-[0.84rem] text-brown-light leading-relaxed font-light">{v.desc}</p>
                  </div>
                </TextureCardContent>
              </TextureCard>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-beige" />

      {/* TEAM */}
      <section className="bg-[#F5F0EB] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
            <div>
              <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">El equipo</div>
              <h2 className="font-serif text-[2.4rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
                Las personas<br />detrás de <em className="italic">cada proyecto</em>
              </h2>
            </div>
            <p className="text-[0.84rem] text-brown-light font-light max-w-[300px] md:text-right leading-relaxed">
              Formados en Administración de Empresas y Comercio Internacional. Perfiles complementarios que cubren la totalidad del negocio gastronómico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {team.map((member) => (
              <TextureCard key={member.initials} className="group hover:-translate-y-1 transition-transform duration-300">
                <TextureCardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-brown flex items-center justify-center mb-5">
                    <span className="font-sans text-[0.72rem] font-semibold tracking-[0.1em] text-sand">
                      {member.initials}
                    </span>
                  </div>
                  <div className="font-serif text-[1.05rem] font-light text-brown mb-1">{member.name}</div>
                  <div className="font-sans text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-gold mb-4">{member.role}</div>
                  <p className="text-[0.82rem] text-brown-light leading-relaxed font-light">{member.bio}</p>
                </TextureCardContent>
              </TextureCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brown px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-light text-white leading-[1.1] tracking-[-0.02em]">
          Conocé nuestros <em className="italic text-gold">servicios</em> en detalle
        </h2>
        <Link href="/servicios" className="shrink-0">
          <TextureButton variant="minimal" size="lg" className="w-auto">
            <span className="flex items-center gap-2 px-4 text-cream">
              Ver servicios <ArrowRight />
            </span>
          </TextureButton>
        </Link>
      </div>
    </>
  )
}
