import { Mail, MessageCircle } from "lucide-react";
import { EMAIL_ADDRESS, WHATSAPP_URL } from "../data/landingData";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <Reveal className="relative bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-700 rounded-3xl overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-indigo-400/20 rounded-full blur-xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 px-8 py-9 sm:px-12 sm:py-10 lg:px-16">
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Siap Digitalisasi Organisasi Anda?
              </h2>
              <p className="mt-2.5 text-indigo-100 text-sm sm:text-base leading-relaxed">
                Konsultasi gratis, ceritakan kebutuhan organisasi Anda via WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 active:scale-[0.97] transition-all shadow-lg shadow-indigo-900/20 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 active:scale-[0.97] transition-all whitespace-nowrap"
              >
                <Mail className="w-5 h-5" />
                Email Kami
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

