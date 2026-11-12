import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  EMAIL_ADDRESS,
  NAV_LINKS,
  SERVICE_LIST,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../data/landingData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-400">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-64 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Banner CTA + Social */}
        <div className="py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-gray-800/80 text-center lg:text-left">
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Siap bikin website{" "}
              <span className="text-indigo-400">organisasimu?</span>
            </h3>
            <p className="mt-2 text-sm lg:text-base text-gray-400">
              Konsultasi gratis tanpa komitmen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-500 active:scale-[0.97] transition-all shadow-lg shadow-indigo-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Fournders.id"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-800 bg-gray-900 text-gray-300 text-sm font-semibold hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 transition-all"
            >
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Fournders.id"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-800 bg-gray-900 text-gray-300 text-sm font-semibold hover:text-white hover:border-cyan-400/60 hover:shadow-[3px_3px_0_0_rgba(244,63,94,0.7),-3px_-3px_0_0_rgba(34,211,238,0.7)] transition-all"
            >
              <svg
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 py-12 lg:py-16">
          <div className="col-span-2 lg:col-span-5">
            <a
              href="#hero"
              className="inline-flex items-center text-2xl font-extrabold tracking-tight text-white"
            >
              Fournders<span className="text-indigo-400">.id</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-sm">
              Website modern untuk BEM, OSIS, Himpunan, Komunitas, dan NGO.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_LIST.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  {EMAIL_ADDRESS}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-indigo-400" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative Wordmark */}
        <div
          className="select-none pointer-events-none text-center leading-none overflow-hidden"
          aria-hidden="true"
        >
          <span className="block text-[18vw] lg:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-700/50 to-transparent translate-y-[18%]">
            Four4nders.id
          </span>
        </div>
      </div>

      <div className="relative border-t border-gray-800/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-gray-500">
          <p>© 2026 Fournders.id — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

