import {
  LayoutGrid,
  Megaphone,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { HERO_BADGES, WHATSAPP_URL } from "../data/landingData";

const BADGE_ICONS = [Sparkles, Megaphone, Users];

export default function Hero() {
  return (
    <section
      id="hero"
      className=" flex flex-row justify-center items-center
      relative pt-28 pb-20 lg:pt-32 lg:pb-28 mb-8 overflow-hidden max-h-screen"
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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
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

          {/* Right: Talent Visual + Floating Badges */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
              {/* Decorative Soft Backdrop */}
              {/* <div className="absolute inset-x-6 bottom-6 top-12 rounded-[2.5rem] bg-gradient-to-tr from-indigo-100/80 via-indigo-50/50 to-blue-100/60 blur-2xl pointer-events-none" />
              <div className="absolute inset-x-8 bottom-4 top-16 rounded-[2rem] border border-indigo-100/80 bg-gradient-to-b from-indigo-50/60 to-white/40 pointer-events-none" /> */}

              {/* Talent Image */}
              <div className="relative flex justify-center items-center pt-4 w-9/10 pb-10">
                <img
                  src="/assets/talent-noBg.png"
                  alt="Pengurus organisasi siswa menggunakan website modern Fournders.id"
                  className="relative z-10 w-full h-auto mb-2 object-contain select-none drop-shadow-[0_18px_32px_rgba(79,70,229,0.12)]"
                />
                {/* Soft bottom fade to blend seamlessly */}
                {/* <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent z-20 pointer-events-none" /> */}
              </div>

              {/* 3 Floating Badges */}
              {/* {HERO_BADGES.map((badge, index) => {
                const Icon = BADGE_ICONS[index];
                return (
                  <div
                    key={badge.text}
                    className={`absolute z-30 ${badge.position} ${badge.animation}`}
                  >
                    <div className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-indigo-100 shadow-lg shadow-indigo-950/10">
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 ${badge.accent}`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-xs sm:text-[13px] font-bold text-gray-800 whitespace-nowrap">
                        {badge.text}
                      </span>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
