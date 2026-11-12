import { CheckCircle2, Route } from "lucide-react";
import { WORKFLOW_STEPS } from "../data/landingData";
import Reveal from "./Reveal";

const STEP_STYLES = {
  indigo: {
    card: "bg-white border-neutral-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5",
    badge: "bg-indigo-600 text-white shadow-md shadow-indigo-600/20",
    ping: "bg-indigo-400 animate-ping opacity-50",
    iconBox: "bg-indigo-50 group-hover:bg-indigo-100",
    icon: "text-indigo-600",
    title: "text-gray-900",
    desc: "text-gray-500",
    tagBox: "bg-indigo-50 border border-indigo-100",
    tagIcon: "text-indigo-600",
    tagText: "text-indigo-700",
    divider: true,
  },
  emerald: {
    card: "bg-white border-neutral-200 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5",
    badge: "bg-emerald-600 text-white shadow-md shadow-emerald-600/20",
    iconBox: "bg-emerald-50 group-hover:bg-emerald-100",
    icon: "text-emerald-600",
    title: "text-gray-900",
    desc: "text-gray-500",
    tagBox: "bg-emerald-50 border border-emerald-100",
    tagIcon: "text-emerald-600",
    tagText: "text-emerald-700",
    divider: true,
  },
  amber: {
    card: "bg-white border-neutral-200 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5",
    badge: "bg-amber-500 text-white shadow-md shadow-amber-500/20",
    iconBox: "bg-amber-50 group-hover:bg-amber-100",
    icon: "text-amber-600",
    title: "text-gray-900",
    desc: "text-gray-500",
    tagBox: "bg-amber-50 border border-amber-100",
    tagIcon: "text-amber-600",
    tagText: "text-amber-700",
    divider: true,
  },
  featured: {
    card: "bg-gradient-to-br from-indigo-600 to-indigo-700 border-indigo-500 hover:shadow-xl hover:shadow-indigo-600/20",
    badge: "bg-white/20 text-white",
    ping: "bg-emerald-400 animate-pulse",
    iconBox: "bg-white/15",
    icon: "text-white",
    title: "text-white",
    desc: "text-indigo-100",
    tagBox: "bg-white/15",
    tagIcon: "text-emerald-300",
    tagText: "text-white",
    divider: false,
  },
};

export default function Workflow() {
  return (
    <section
      id="alur"
      className="relative py-20 lg:py-28 bg-gray-50/60 border-y border-neutral-200 overflow-hidden scroll-mt-16 lg:scroll-mt-[72px]"
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-white border border-neutral-200 rounded-full shadow-sm">
            <Route className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
              Alur Kerja
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.2]">
            4 Langkah Menuju{" "}
            <span className="text-indigo-600">Website Impian</span>
          </h2>
          <p className="mt-3 text-gray-500 leading-relaxed max-w-xl mx-auto">
            Proses terstruktur dan transparan dari brief hingga launch.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[46px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg,#a5b4fc 0,#a5b4fc 8px,transparent 8px,transparent 16px)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {WORKFLOW_STEPS.map((item, index) => {
              const style = STEP_STYLES[item.accent];
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.step}
                  delay={index * 80}
                  className={`group relative border rounded-2xl p-6 transition-all duration-500 ${style.card}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`relative w-11 h-11 rounded-xl flex items-center justify-center text-sm font-extrabold group-hover:scale-110 transition-transform duration-300 ${style.badge}`}
                    >
                      {item.step}
                      {style.ping && (
                        <span
                          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${style.ping}`}
                        />
                      )}
                    </span>
                    {style.divider && (
                      <div className="flex-1 h-px bg-neutral-200 lg:hidden" />
                    )}
                  </div>

                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${style.iconBox}`}
                  >
                    <Icon className={`w-5 h-5 ${style.icon}`} />
                  </div>

                  <h3 className={`text-base font-extrabold ${style.title}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${style.desc}`}>
                    {item.description}
                  </p>

                  <div
                    className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${style.tagBox}`}
                  >
                    <CheckCircle2 className={`w-3 h-3 ${style.tagIcon}`} />
                    <span className={`text-[11px] font-semibold ${style.tagText}`}>
                      {item.tag}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

