import Link from "next/link"
import { TextureButton } from "@/components/ui/texture-button"

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
)

const services = [
  {
    num: "01",
    tag: "Control de gestión",
    title: "Rentabilidad y Control",
    em: "Financiero",
    price: "$7.200.000",
    priceSub: null,
    desc1: "Analizamos en profundidad la estructura de costos del negocio, identificamos las principales fugas de rentabilidad y diseñamos herramientas de control financiero adaptadas al volumen y la realidad operativa del establecimiento.",
    desc2: "El cliente pasa de una gestión puramente reactiva a una planificación financiera ordenada, con presupuestos reales, márgenes claros por servicio o producto y tableros de control que pueden mantener sin dependencia de la consultora.",
    cols: [
      { label: "Incluye", text: "Análisis de estructura de costos y márgenes por línea de servicio" },
      { label: "Resultado", text: "Tablero de control financiero listo para operar en forma autónoma" },
      { label: "Duración", text: "4 a 8 semanas según complejidad del negocio" },
    ],
  },
  {
    num: "02",
    tag: "Estrategia",
    title: "Plan de Dirección",
    em: "Estratégica",
    price: "$10.000.000",
    priceSub: "+ $1.500.000/mes seguimiento",
    desc1: "Diseñamos un plan estratégico integral para el negocio: definición de objetivos de mediano y largo plazo, posicionamiento competitivo, identificación de oportunidades de crecimiento y una hoja de ruta de acción concreta.",
    desc2: "Una vez definido el plan, acompañamos su ejecución mes a mes mediante un seguimiento continuo que mide resultados, ajusta el rumbo cuando es necesario y garantiza que la estrategia se traduzca en decisiones concretas del día a día.",
    cols: [
      { label: "Incluye", text: "Análisis competitivo, diagnóstico interno y plan de acción por área" },
      { label: "Resultado", text: "Plan estratégico documentado + KPIs de seguimiento mensual" },
      { label: "Retainer", text: "Seguimiento mensual incluido en el precio del plan estratégico" },
    ],
  },
  {
    num: "03",
    tag: "Operaciones",
    title: "Organización y",
    em: "Flujos de Trabajo",
    price: "$8.800.000",
    priceSub: null,
    desc1: "Relevamos los procesos internos del negocio desde adentro: cocina, salón, administración, proveedores. Identificamos los puntos de quiebre operativo — donde se generan errores, desperdicios, tiempos muertos o inconsistencias en el servicio.",
    desc2: "El entregable es un set de protocolos de trabajo por área, claros y aplicables. El resultado: un equipo que sabe exactamente qué hacer, cuándo y cómo, sin depender de la presencia constante del dueño.",
    cols: [
      { label: "Incluye", text: "Relevamiento presencial de cada área operativa del establecimiento" },
      { label: "Resultado", text: "Manuales de procedimientos por puesto y área" },
      { label: "Duración", text: "6 a 10 semanas según tamaño del equipo y número de áreas" },
    ],
  },
  {
    num: "04",
    tag: "Personas",
    title: "Jornada de",
    em: "Capacitación de Personal",
    price: "$440.000",
    priceSub: "por jornada",
    desc1: "Diseñamos y conducimos jornadas de capacitación a medida para los equipos del cliente, por puesto y área de trabajo. No son talleres genéricos: cada jornada parte de un diagnóstico del equipo y se construye sobre los procesos reales del establecimiento.",
    desc2: "Cada jornada combina teoría aplicada al rubro con simulaciones prácticas del propio entorno de trabajo, asegurando que el personal incorpore las herramientas y que esos conocimientos persistan una vez que la consultora se retira.",
    cols: [
      { label: "Modalidad", text: "Presencial en el establecimiento, por área o turno de trabajo" },
      { label: "Resultado", text: "Personal capacitado con material de consulta post-jornada" },
      { label: "Duración", text: "4 a 8 horas por jornada. Se pueden contratar en serie." },
    ],
  },
  {
    num: "05",
    tag: "Seguimiento",
    title: "Retainer de",
    em: "Seguimiento Mensual",
    price: "$600.000 – $800.000",
    priceSub: "por mes",
    desc1: "Para clientes que necesitan un socio estratégico de forma continua. Mediante un abono mensual fijo, ConFoodToria permanece disponible para resolver consultas operativas, monitorear indicadores clave y ajustar procesos implementados.",
    desc2: "Es la forma más eficiente de sostener las mejoras logradas en una intervención y seguir evolucionando el negocio mes a mes, sin necesidad de iniciar un proyecto completo cada vez que surge una nueva necesidad.",
    cols: null,
    note: "El retainer de seguimiento mensual no aplica para clientes del Plan de Dirección Estratégica, que incluye acompañamiento mensual en su precio base.",
  },
]

export default function Servicios() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="pt-[70px] bg-cream border-b border-beige">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Portfolio</div>
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] font-light leading-[1.0] tracking-[-0.03em] text-brown">
            Servicios para cada<br /><em className="italic">etapa del negocio</em>
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12">
          <p className="text-[0.9rem] text-brown-light leading-relaxed font-light">
            Cada servicio sigue la estructura de tres etapas de nuestra metodología: <strong className="font-medium text-brown">Diagnóstico → Diseño de soluciones → Implementación y seguimiento</strong>. No ofrecemos aperturas ni consultoría para nuevos emprendimientos. Nos enfocamos en negocios que ya funcionan y quieren mejorar.
          </p>
          <p className="text-[0.9rem] text-brown-light leading-relaxed font-light">
            A diferencia de consultoras generalistas, conocemos de primera mano las dinámicas operativas del sector gastronómico rural. Eso nos permite identificar problemas en menos tiempo y diseñar soluciones que el equipo del cliente puede ejecutar de manera autónoma una vez que nos retiramos.
          </p>
        </div>
      </section>

      <hr className="border-beige" />

      {/* SERVICES LIST */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 py-16 md:py-20 ${
                i < services.length - 1 ? "border-b border-beige" : ""
              }`}
            >
              {/* Left */}
              <div>
                <div className="font-serif text-[4rem] font-light text-beige leading-none tracking-[-0.03em]">
                  {s.num}
                </div>
                <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mt-2 mb-3">
                  {s.tag}
                </div>
                <h2 className="font-serif text-[1.8rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
                  {s.title} <em className="italic">{s.em}</em>
                </h2>
                <div className="mt-8 pt-6 border-t border-beige">
                  <div className="font-sans text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-sand-dark mb-1">
                    Inversión referencial
                  </div>
                  <div className="font-serif text-[2rem] font-light text-gold leading-none">
                    {s.price}
                  </div>
                  {s.priceSub && (
                    <div className="font-sans text-[0.72rem] text-sand-dark mt-1">{s.priceSub}</div>
                  )}
                </div>
                <Link href="/contacto" className="mt-6 inline-block">
                  <TextureButton variant="primary" size="sm">
                    <span className="flex items-center gap-2">Consultar <ArrowRight /></span>
                  </TextureButton>
                </Link>
              </div>

              {/* Right */}
              <div>
                <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-5">{s.desc1}</p>
                <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-8">{s.desc2}</p>
                {s.cols && (
                  <div className="grid grid-cols-3 gap-6 border-t border-beige pt-8">
                    {s.cols.map((col) => (
                      <div key={col.label}>
                        <div className="font-sans text-[0.6rem] font-bold tracking-[0.18em] uppercase text-gold mb-2">{col.label}</div>
                        <p className="text-[0.82rem] text-brown-light leading-relaxed font-light">{col.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                {s.note && (
                  <div className="bg-beige border-l-2 border-gold p-5 mt-2">
                    <p className="text-[0.84rem] text-brown leading-relaxed italic font-light">{s.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brown px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-light text-white leading-[1.1] tracking-[-0.02em]">
          ¿No sabés por dónde <em className="italic text-gold">empezar</em>?
        </h2>
        <Link href="/contacto" className="shrink-0">
          <TextureButton variant="minimal" size="lg" className="w-auto">
            <span className="flex items-center gap-2 px-4 text-cream">
              Solicitar diagnóstico inicial <ArrowRight />
            </span>
          </TextureButton>
        </Link>
      </div>
    </>
  )
}
