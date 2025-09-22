import { CheckCircle } from "lucide-react";

const services = [
  { title: "CSV / SDLC", desc: "Validación conforme a GAMP5 con foco en trazabilidad y riesgos.",
    items: ["URS/FS/DS y matriz de trazabilidad","VMP, protocolos y reportes","IQ/OQ/PQ audit-ready","21 CFR Part 11 / Annex 11"] },
  { title: "Annex 1", desc: "Alineación con requisitos del Anexo 1 para entornos estériles.",
    items: ["Gap assessment y roadmap","CAPAs por riesgo","Estrategia de control y monitoreo"] },
  { title: "Auditorías FDA/AEMPS", desc: "Preparación, acompañamiento y remediación post-inspección.",
    items: ["Mock audit y checklist","Acompañamiento en inspección","Plan de remediación y formación"] },
  { title: "Automatización (SCADA/PLC/BMS)", desc: "Puente IT/OT y OEMs (Aveva/Siemens/Honeywell).",
    items: ["SCADA Aveva, PLC Siemens, BMS Honeywell","WFI, HVAC y servicios críticos","Integración CSV extremo a extremo"] },
  { title: "Documentación & Compliance", desc: "Estandarización y control de cambios para reducir reprocesos.",
    items: ["SOPs, change control, deviations, CAPA","Plantillas audit-ready","Formación y handover"] },
  { title: "Retainers (Soporte mensual)", desc: "Cobertura continua con SLAs y métricas.",
    items: ["Bolsa de horas y SLAs","KPIs mensuales y reporting","Soporte a auditorías y CAPAs"] },
];

export default function ServiciosPage(){
  return (
    <section className="bg-surface">
      <div className="container py-14">
        <h1 className="text-3xl font-extrabold mb-4">Servicios</h1>
        <p className="text-textc-muted mb-10 max-w-2xl">Paquetes y soporte por horas desde la planificación hasta el cierre de la validación.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s)=>(
            <article key={s.title} className="rounded-2xl border border-gray-200 p-6 shadow-soft">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="text-textc-muted mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.items.map((it)=>(
                  <li key={it} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-brand-accent"/><span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
