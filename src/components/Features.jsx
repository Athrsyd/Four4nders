import { FEATURES } from "../data/landingData";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section
      id="fitur"
      className="relative overflow-hidden py-20 lg:py-28 bg-white scroll-mt-16 lg:scroll-mt-18"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.2]">
              Solusi Digital untuk{" "}
              <span className="text-indigo-600">Organisasi Modern</span>
            </h2>
            <p className="mt-3.5 text-gray-500 leading-relaxed">
              Kelola struktur, program kerja, dan publikasi dalam satu platform terpadu.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-7">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal
                  key={feature.title}
                  delay={index * 80}
                  className="border-t border-gray-200 pt-5"
                >
                  <div className="flex items-center lg:justify-start justify-center gap-3">
                    <div className="w-11 h-11 shrink-0 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-base font-extrabold text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm px-10 lg:px-0 lg:text-left text-center text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

