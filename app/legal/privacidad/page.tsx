export const metadata = { title: "Política de Privacidad | Inova CSV" };

export default function PrivacyPage() {
  return (
    <section className="bg-surface">
      <div className="container py-14 max-w-3xl">
        <h1 className="text-3xl font-extrabold mb-4">Política de Privacidad</h1>
        <ul className="list-disc pl-6 text-sm text-textc-muted space-y-2">
          <li>Responsable: Inova CSV (datos de contacto).</li>
          <li>Finalidad: gestión de consultas y comunicaciones.</li>
          <li>Legitimación: consentimiento del interesado.</li>
          <li>Destinatarios: no se ceden datos salvo obligación legal.</li>
          <li>Derechos: acceso, rectificación, supresión, oposición, limitación y portabilidad.</li>
          <li>Conservación: durante la relación y/o hasta revocación del consentimiento.</li>
        </ul>
      </div>
    </section>
  );
}

