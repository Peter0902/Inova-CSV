import "./globals.css";
import Link from "next/link";
- import ThemeToggle from "@/components/ThemeToggle";
+ import ThemeToggle from "./components/ThemeToggle";


export const metadata = {
  title: { default: "Inova CSV | Validación y CSV para farma", template: "%s | Inova CSV" },
  description: "GAMP5, 21 CFR Part 11, Annex 1 y automatización (SCADA/PLC/BMS). Auditorías FDA/AEMPS."
};

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
              <ThemeToggle /> {/* ← ahora sí */}
              <Link href="/contacto" className="rounded-2xl px-3 py-2 bg-brand-primary text-textc-inverse shadow-soft hover:bg-brand-secondary">
                Solicitar propuesta
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-gray-200/60">
          {/* ... footer igual ... */}
        </footer>
      </body>
    </html>
  );
}
