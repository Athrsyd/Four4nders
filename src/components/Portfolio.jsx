import { Layers } from "lucide-react";
import { PORTFOLIO_ITEMS } from "../data/landingData";
import Reveal from "./Reveal";

const PORTFOLIO_THEMES = {
  indigo: {
    banner: "from-indigo-50 to-indigo-100",
    icon: "text-indigo-600",
    label: "text-indigo-900",
    overlay: "group-hover:bg-indigo-600/5",
    badge: "bg-indigo-50 text-indigo-700",
  },
  emerald: {
    banner: "from-emerald-50 to-emerald-100",
    icon: "text-emerald-600",
    label: "text-emerald-900",
    overlay: "group-hover:bg-emerald-600/5",
    badge: "bg-emerald-50 text-emerald-700",
  },
  amber: {
    banner: "from-amber-50 to-amber-100",
    icon: "text-amber-600",
    label: "text-amber-900",
    overlay: "group-hover:bg-amber-600/5",
    badge: "bg-amber-50 text-amber-700",
  },
};

export default function Portfolio() {
  return (
    <section
      id="portofolio"
      className="relative py-20 lg:py-28 bg-white scroll-mt-16 lg:scroll-mt-[72px]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-gray-100 border border-border rounded-full">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase">
              Portofolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Dipercaya Organisasi{" "}
            <span className="text-indigo-600">Se-Indonesia</span>
          </h2>
          <p className="mt-3 text-gray-500 leading-relaxed">
            Beberapa website organisasi yang telah kami bangun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {PORTFOLIO_ITEMS.map((item, index) => {
            const theme = PORTFOLIO_THEMES[item.theme];
            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all duration-300"
              >
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${theme.banner} border-b border-border flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-3">
                      <Icon className={`w-7 h-7 ${theme.icon}`} />
                    </div>
                    <p className={`text-sm font-bold ${theme.label}`}>
                      {item.categoryLabel}
                    </p>
                  </div>
                  <div
                    className={`absolute inset-0 bg-transparent transition-colors ${theme.overlay}`}
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${theme.badge}`}
                    >
                      {item.tags[0]}
                    </span>
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold bg-gray-100 text-gray-600 rounded-full">
                      {item.tags[1]}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

