import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "../data/landingData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed inset-x-0 z-50 pointer-events-none transition-all duration-300 ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <div
        className={`pointer-events-auto mx-auto backdrop-blur-lg transition-all duration-300 ${
          scrolled
            ? "w-[85%] bg-white/50 border border-border rounded-full shadow-lg shadow-gray-900/5"
            : "w-full bg-indigo-600 border-border rounded-none"
        }`}
      >
        
        <div className={scrolled ? "px-6 lg:px-8" : "max-w-6xl mx-auto px-6 sm:px-10 lg:px-16"}>
          <nav
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-14 lg:h-16" : "h-16 lg:h-[72px]"
            }`}
          >
            <a href="#hero" className="flex items-center gap-1 group">
              <img src="assets\logos.png" alt="logo" width={25} />
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                Fourn
                <span className="relative">
                  d
                  <span className="absolute -top-0.5 -right-1.5 w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                </span>
                ers<span className="text-indigo-600 font-extrabold">.id</span>
              </span>
            </a>

            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors ${
                      scrolled ? "rounded-full" : "rounded-lg"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-[0.97] transition-all shadow-sm shadow-indigo-600/20 ${
                  scrolled ? "rounded-full" : "rounded-xl"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center border border-border hover:bg-gray-50 transition-colors cursor-pointer ${
                scrolled ? "rounded-full" : "rounded-xl"
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`lg:hidden pointer-events-auto mx-auto bg-white transition-all duration-300 ${
            scrolled
              ? "w-[85%] mt-2 rounded-2xl border border-border shadow-lg shadow-gray-900/5"
              : "w-full border-b border-border"
          }`}
        >
          <div className={scrolled ? "px-5 py-4 space-y-1" : "max-w-6xl mx-auto px-6 sm:px-10 py-4 space-y-1"}>
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

