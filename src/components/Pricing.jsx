import { Check, Clock, MessageCircle, RefreshCw, Sparkles, Star, Tag } from "lucide-react";
import { PRICING_PLANS, WHATSAPP_URL } from "../data/landingData";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section
      id="harga"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-gray-50/50 to-white border-t border-neutral-200 scroll-mt-16 lg:scroll-mt-[72px]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 bg-indigo-50 border border-indigo-100 rounded-full">
            <Tag className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs font-semibold tracking-wider text-indigo-700 uppercase">
              Katalog Harga Subsidi Pelajar
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.2]">
            Pilih Paket Sesuai Kebutuhan{" "}
            <span className="text-indigo-600">Organisasimu</span>
          </h2>
          <p className="mt-3 text-gray-500 leading-relaxed">
            Sekali bayar di awal, gratis domain{" "}
            <span className="font-semibold text-gray-700">.my.id</span> &amp; server
            tahun pertama. Tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.popular;
            const waHref = `${WHATSAPP_URL}?text=${encodeURIComponent(plan.whatsappText)}`;

            return (
              <Reveal
                key={plan.id}
                delay={index * 90}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-b from-indigo-50/60 via-white to-white border-2 border-indigo-600 shadow-xl shadow-indigo-600/10"
                    : "bg-white border border-border hover:border-gray-300 hover:shadow-xl hover:shadow-gray-100"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-6 sm:left-7 inline-flex items-center gap-1.5 px-3.5 py-1 bg-indigo-600 text-white text-[11px] font-extrabold tracking-wide uppercase rounded-full shadow-md shadow-indigo-600/25">
                    <Star className="w-3 h-3 fill-current" />
                    {plan.popularBadge}
                  </div>
                )}

                {/* Meta chips */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      isPopular
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {plan.audience}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    {plan.estimate}
                  </span>
                </div>

                {/* Title & Intro */}
                <div className="mt-3.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Block */}
                <div className="mt-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium text-gray-400 line-through">
                      {plan.marketPrice}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                      {plan.discount}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      {plan.pricePeriod}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-4 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                    {plan.featuresTitle}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span
                          className={`w-4 h-4 shrink-0 mt-0.5 rounded-full flex items-center justify-center ${
                            isPopular
                              ? "bg-indigo-600 text-white"
                              : "bg-indigo-100 text-indigo-600"
                          }`}
                        >
                          <Check className="w-3 h-3" strokeWidth={2.5} />
                        </span>
                        <span className="text-sm text-gray-700 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Policy + Renewal + CTA */}
                <div className="mt-5 pt-4 border-t border-border space-y-3">
                  <p className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{plan.policyNote}</span>
                  </p>

                  <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-border text-xs sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 text-gray-600 font-medium">
                      <RefreshCw className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      {plan.renewalLabel}
                    </span>
                    <span className="font-extrabold text-gray-900 whitespace-nowrap">
                      {plan.renewalPrice}
                    </span>
                  </div>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold rounded-xl active:scale-[0.98] transition-all ${
                      isPopular
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20"
                        : "bg-gray-900 text-white hover:bg-indigo-600"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    {plan.ctaLabel}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
