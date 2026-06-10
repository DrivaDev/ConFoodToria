import { BtnLight } from "@/components/Btn"

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
)

const WarnIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0 mt-0.5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
)

const issues = [
  "Descoordinación operativa entre cocina, salón y administración",
  "Ausencia de protocolos de trabajo — cada empleado lo hacía \"a su manera\"",
  "Control financiero reactivo — sin márgenes reales por servicio",
  "Alta rotación de personal por falta de capacitación sistemática",
  "Gestión completamente centralizada en los dueños, sin posibilidad de delegar",
]

const timeline = [
  {
    period: "Semana 1 — 2",
    title: "Diagnóstico presencial",
    body: "Relevamiento in-situ de las cinco áreas operativas. Entrevistas con los dueños, observación de servicio en fin de semana real, análisis de registros financieros disponibles.",
  },
  {
    period: "Semana 3 — 4",
    title: "Diseño de soluciones",
    body: "Elaboración de protocolos por área, rediseño del flujo operativo entre cocina y salón, diseño del tablero de control financiero con los KPIs prioritarios.",
  },
  {
    period: "Semana 5 — 7",
    title: "Implementación",
    body: "Puesta en marcha de los nuevos protocolos con acompañamiento presencial. Tres jornadas de capacitación por área: cocina, salón y administración.",
  },
  {
    period: "Semana 8 — 9",
    title: "Ajuste y cierre",
    body: "Dos fines de semana de observación post-implementación para ajustar lo que no funcionó como se esperaba. Entrega del informe final documentado.",
  },
]

const results = [
  {
    val: "+35%",
    title: "Rentabilidad operativa",
    body: "Combinación de reducción de desperdicios, mejor control de porciones y eliminación de gastos no monitoreados.",
  },
  {
    val: "−40%",
    title: "Errores de servicio",
    body: "Los protocolos de comunicación entre cocina y salón redujeron drásticamente los pedidos equivocados y las demoras innecesarias.",
  },
  {
    val: "100%",
    title: "Autonomía del equipo",
    body: "Los dueños dejaron de ser necesarios en cada decisión operativa del día. El equipo funciona con criterio propio y documentación clara.",
  },
]

export default function Casos() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="pt-[70px] bg-cream border-b border-beige">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Casos de éxito</div>
          <h1 className="font-serif text-[3.5rem] md:text-[5rem] font-light leading-[1.0] tracking-[-0.03em] text-brown">
            Estancia<br /><em className="italic">Rodríguez</em>
          </h1>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="h-[50vh] max-h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
          alt="Estancia Rodríguez — Ruta 5, Buenos Aires"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* STATS BAR */}
      <div className="bg-brown">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 py-14 grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { val: "+35%", label: "Rentabilidad operativa" },
            { val: "60", label: "Días de intervención" },
            { val: "5", label: "Áreas reorganizadas" },
            { val: "100%", label: "Protocolos documentados" },
          ].map(({ val, label }) => (
            <div key={label} className="p-6 border-r border-white/10 last:border-r-0">
              <div className="font-serif text-[3rem] font-light text-sand leading-none mb-2 tracking-[-0.03em]">
                <em className="italic">{val}</em>
              </div>
              <div className="font-sans text-[0.6rem] font-semibold tracking-[0.12em] uppercase text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-beige" />

      {/* CONTEXT + PROBLEM */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16 grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">
          {/* Context */}
          <div>
            <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">El cliente</div>
            <h2 className="font-serif text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-brown mb-8">
              Contexto del <em className="italic">establecimiento</em>
            </h2>
            {[
              { label: "Tipo", val: "Turístico-gastronómico rural" },
              { label: "Ubicación", val: "Ruta Nacional 5, Buenos Aires" },
              { label: "Antigüedad", val: "6 años en el mercado" },
              { label: "Facturación", val: "~$12M por fin de semana" },
              { label: "Estructura", val: "Familiar, gestión centralizada" },
              { label: "Servicio contratado", val: "Operaciones + Capacitación" },
            ].map(({ label, val }) => (
              <div key={label} className="flex justify-between py-3 border-b border-beige last:border-b-0">
                <span className="font-sans text-[0.65rem] font-semibold tracking-[0.08em] uppercase text-sand-dark">{label}</span>
                <span className="text-[0.88rem] text-brown font-light">{val}</span>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div>
            <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">El problema</div>
            <h2 className="font-serif text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-brown mb-5">
              Alto potencial,<br /><em className="italic">gestión informal</em>
            </h2>
            <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-4">
              Estancia Rodríguez era un negocio rentable y con demanda sostenida. Pero el crecimiento orgánico había llegado a un límite: sin estructura de gestión, cada fin de semana dependía de la capacidad de los dueños de estar presentes en absolutamente todo.
            </p>
            <p className="text-[0.9rem] text-brown-light leading-relaxed font-light mb-8">
              Cuando ConFoodToria realizó el diagnóstico inicial, identificó cinco áreas críticas que impedían escalar el negocio sin comprometer la calidad del servicio ni la salud de los dueños.
            </p>
            <div className="flex flex-col gap-3">
              {issues.map((issue) => (
                <div key={issue} className="flex gap-4 items-start p-4 bg-cream border-l-2 border-beige">
                  <WarnIcon />
                  <span className="text-[0.86rem] text-brown-light leading-relaxed font-light">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-beige" />

      {/* PROCESS / TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="mb-14">
            <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Nuestra intervención</div>
            <h2 className="font-serif text-[2.4rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
              El proceso paso<br />a <em className="italic">paso</em>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <ul className="relative pl-8 border-l border-beige flex flex-col gap-10">
              {timeline.map((item) => (
                <li key={item.period} className="relative">
                  <div className="absolute -left-[38px] top-[6px] w-2 h-2 rounded-full bg-gold border-2 border-cream" />
                  <div className="font-sans text-[0.62rem] font-bold tracking-[0.15em] uppercase text-gold mb-1">{item.period}</div>
                  <div className="font-serif text-[1.05rem] font-light text-brown mb-2">{item.title}</div>
                  <p className="text-[0.84rem] text-brown-light leading-relaxed font-light">{item.body}</p>
                </li>
              ))}
            </ul>
            <div className="h-[400px] md:h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                alt="Proceso de trabajo en establecimiento gastronómico"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-beige" />

      {/* RESULTS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="mb-14">
            <div className="font-sans text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gold mb-4">Resultados</div>
            <h2 className="font-serif text-[2.4rem] font-light leading-[1.1] tracking-[-0.02em] text-brown">
              Lo que cambió en<br /><em className="italic">60 días</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 border border-beige">
            {results.map((r, i) => (
              <div key={r.val} className={`p-10 ${i < results.length - 1 ? "border-b md:border-b-0 md:border-r border-beige" : ""}`}>
                <div className="font-serif text-[3rem] font-light text-gold leading-none mb-4 tracking-[-0.03em]">
                  <em className="italic">{r.val}</em>
                </div>
                <div className="font-serif text-[1rem] text-brown mb-3">{r.title}</div>
                <p className="text-[0.82rem] text-brown-light leading-relaxed font-light">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-brown p-12 md:p-14">
            <svg className="w-8 h-8 text-gold mb-5 opacity-60" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-[1.4rem] md:text-[1.6rem] font-light italic text-white leading-[1.5] max-w-[700px] mb-6">
              "Antes de la consultoría, el negocio funcionaba a pesar de la desorganización. Después, empezamos a crecer gracias a la estructura."
            </blockquote>
            <div className="font-sans text-[0.68rem] font-semibold tracking-[0.12em] uppercase text-sand">
              Propietario, Estancia Rodríguez
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brown px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-serif text-[1.8rem] md:text-[2.4rem] font-light text-white leading-[1.2] tracking-[-0.02em]">
          ¿Tu negocio tiene un problema<br className="hidden md:block" />
          <em className="italic text-gold"> similar al de Estancia Rodríguez</em>?
        </h2>
        <BtnLight href="/contacto" className="shrink-0">
          Hablemos <ArrowRight />
        </BtnLight>
      </div>
    </>
  )
}
