import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../data/landingData";
import Reveal from "./Reveal";

export default function Faq() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-28 bg-gray-50/60 border-y border-neutral-200 scroll-mt-16 lg:scroll-mt-[72px]"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-white border-2 border-indigo-200 rounded-[2rem] lg:rounded-[2.5rem] shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 text-center lg:text-left">
              <span className="hidden lg:inline-block px-5 py-2 mb-5 bg-indigo-600 text-white text-xs font-semibold tracking-wider uppercase rounded-full">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                Pertanyaan <span className="block text-indigo-600">Umum</span>
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Jawaban singkat seputar layanan pembuatan website organisasi.
              </p>
            </div>

            <div className="faq-scroll lg:col-span-7 max-h-[28rem] lg:max-h-[30rem] overflow-y-auto pr-2 sm:pr-3 space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openId === item.id;
                return (
                  <Reveal
                    key={item.id}
                    delay={index * 70}
                    className="rounded-3xl overflow-hidden bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left text-white cursor-pointer"
                    >
                      <span className="text-base sm:text-lg font-bold leading-snug">
                        {item.question}
                      </span>
                      <span className="w-10 h-10 shrink-0 rounded-full bg-white text-indigo-600 flex items-center justify-center">
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="faq-answer-animate bg-indigo-50 px-6 py-5">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

