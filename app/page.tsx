import Link from "next/link";
import { CheckCircle, Shield } from "lucide-react";

export default function HomePage(){
  return (
    <>
      <section className="bg-surface">
        <div className="container py-16 sm:py-24 grid gap-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Validación y CSV para farma, sin fricción.</h1>
          <p className="text-lg text-textc-muted max-w-2xl">
            GAMP5, 21 CFR Part 11, Annex 1 y automatización (SCADA/PLC/BMS) con foco en resultados y auditorías FDA/AEMPS.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="rounded-2xl px-5 py-3 bg-brand-primary text-textc-inverse shadow-soft hover:bg-brand-secondary">Solicitar propuesta</Link>
            <a href="mailto:hola@inovacsv.es" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-brand-primary">Agenda 15 min</a>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-textc-muted">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> GAMP5</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> 21 CFR Part 11</span>
            <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Annex 1</span>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="container py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Servicios clave</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "CSV / SDLC", bullets: ["URS/FS/DS y trazabilidad","IQ/OQ/PQ basado en riesgos","21 CFR Part 11 y Annex 11"] },
              { title: "Annex 1", bullets: ["Gap assessment y CAPAs","Estrategia de control","Readiness de inspección"] },
              { title: "Auditorías FDA/AEMPS", bullets: ["Preparación y acompañamiento","Remediación","Formación"] },
              { title: "Automatización (SCADA/PLC/BMS)", bullets: ["SCADA Aveva / PLC Siemens","BMS Honeywell, WFI/HVAC","Integración CSV E2E"] },
              { title: "Documentación & Compliance", bullets: ["SOPs, change control, deviations, CAPA","Plantillas audit-ready","Gestión documental y training"] },
              { title: "Retainers (Soporte mensual)", bullets: ["SLAs y métricas","Picos de carga","Soporte a auditorías"] },
            ].map((s)=>(
              <article key={s.title} className="rounded-2xl bg-surface p-6 shadow-soft border border-gray-200">
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <ul className="space-y-2 text-sm text-textc-muted">
                  {s.bullets.map((b)=>(
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 text-brand-accent"/><span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary text-textc-inverse">
        <div className="container py-14 grid gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">¿Listos para acelerar tu CSV?</h2>
          <p className="opacity-90">Agenda una revisión gratuita de 15 minutos.</p>
          <div><Link href="/contacto" className="inline-block rounded-2xl bg-surface text-brand-primary px-5 py-3">Hablar ahora</Link></div>
        </div>
      </section>
    </>
  )
}
