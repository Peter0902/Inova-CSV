export const metadata = {
  title: { default: "Inova CSV | Validación y CSV para farma", template: "%s | Inova CSV" },
  description: "GAMP5, 21 CFR Part 11, Annex 1 y automatización (SCADA/PLC/BMS). Auditorías FDA/AEMPS."
};
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-surface text-textc">
        <header className="border-b border-gray-200/60 bg-surface sticky top-0 z-50">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="font-semibold text-[clamp(18px,2.5vw,20px)]">Inova CSV</Link>
            <nav className="flex items-center gap-6">
              <Link href="/servicios" className="hover:text-brand-primary">Servicios</Link>
              <Link href="/contacto" className="hover:text-brand-primary">Contacto</Link>
              <button onClick={()=>{
                const r=document.documentElement;
                r.setAttribute("data-theme", r.getAttribute("data-theme")==="dark"?"light":"dark");
              }} className="rounded-2xl px-3 py-2 border border-gray-300 hover:border-brand-primary">Tema</button>
              <Link href="/contacto" className="rounded-2xl px-3 py-2 bg-brand-primary text-textc-inverse shadow-soft hover:bg-brand-secondary">Solicitar propuesta</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-gray-200/60">
          <div className="container py-10 grid gap-6 sm:grid-cols-3 text-sm">
            <div><div className="font-semibold mb-2">Inova CSV</div><p className="text-textc-muted">Validación y automatización para farma/biotech.</p></div>
            <div><div className="font-semibold mb-2">Legal</div><ul className="space-y-2">
              <li><a className="hover:text-brand-primary" href="/legal/aviso-legal">Aviso legal</a></li>
              <li><a className="hover:text-brand-primary" href="/legal/privacidad">Privacidad</a></li>
              <li><a className="hover:text-brand-primary" href="/legal/cookies">Cookies</a></li>
            </ul></div>
            <div><div className="font-semibold mb-2">Contacto</div><ul className="space-y-1">
              <li>Madrid, España (remoto/híbrido UE)</li>
              <li><a className="hover:text-brand-primary" href="mailto:hola@inovacsv.es">hola@inovacsv.es</a></li>
            </ul></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
