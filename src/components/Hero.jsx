import {
  ClipboardList,
  LayoutGrid,
  MessageCircle,
  MoreHorizontal,
  Users,
} from "lucide-react";
import { HERO_STATS, WHATSAPP_URL } from "../data/landingData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30
          bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          [-webkit-mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_30%,transparent_100%)]
          [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_30%,transparent_100%)]"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-gray-900">
              Digitalisasi{" "}
              <span className="relative inline-block">
                Organisasi
                <span className="absolute -bottom-1 left-0 w-full h-2.5 lg:h-3 bg-indigo-200/60 -z-10 rounded-sm" />
              </span>{" "}
              Anda Lewat <span className="text-indigo-600">Website Modern</span>
            </h1>

            <p className="mt-3.5 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Website profesional, cepat, dan terjangkau untuk BEM, OSIS, Himpunan, Komunitas, dan NGO.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 lg:mt-7 justify-center lg:justify-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 active:scale-[0.97] transition-all shadow-lg shadow-indigo-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-border hover:border-gray-300 hover:bg-gray-50 active:scale-[0.97] transition-all"
              >
                <LayoutGrid className="w-5 h-5" />
                Lihat Fitur
              </a>
            </div>
          </div>

          {/* Right: Dashboard Mockup Card */}
          <div className="relative animate-float">
            <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-br from-indigo-100 via-transparent to-blue-50 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            <div className="relative bg-white border border-border rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden">
              <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border bg-gray-50/80">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="ml-2 sm:ml-3 text-xs text-gray-400 font-medium truncate">
                    Fournders.id
                  </span>
                </div>
                <MoreHorizontal className="w-4 h-4 text-gray-400 shrink-0" />
              </div>

              <div className="p-5 sm:p-6 lg:p-10 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {HERO_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 sm:p-4 text-center"
                    >
                      <p className="text-xl sm:text-2xl font-extrabold text-indigo-600">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-[11px] font-medium text-indigo-600/70 mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="border border-border rounded-xl p-3 sm:p-4 hover:border-indigo-600 transition-colors">
                    <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center mb-2.5 sm:mb-3">
                      <Users className="w-[18px] h-[18px] text-indigo-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Kepengurusan</p>
                    <p className="text-xs text-gray-400 mt-0.5">Struktur &amp; profil</p>
                  </div>

                  <div className="border border-border rounded-xl p-3 sm:p-4 hover:border-indigo-600 transition-colors">
                    <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center mb-2.5 sm:mb-3">
                      <ClipboardList className="w-[18px] h-[18px] text-indigo-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Program Kerja</p>
                    <p className="text-xs text-gray-400 mt-0.5">Timeline &amp; progres</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

