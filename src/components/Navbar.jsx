import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "../data/landingData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inFooter, setInFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const footer = document.querySelector("footer");
      if (footer) {
        const footerEnteredNavbar = footer.getBoundingClientRect().top <= 96;
        setInFooter(footerEnteredNavbar);
        if (footerEnteredNavbar) setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
      aria-hidden={inFooter}
      className={`fixed inset-x-0 top-0 z-50 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        inFooter
          ? "-translate-y-full opacity-0"
          : scrolled
            ? "translate-y-3 opacity-100"
            : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className={`mx-auto backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inFooter ? "pointer-events-none" : "pointer-events-auto"
        } ${
          scrolled
            ? "w-[85%] rounded-[36px] bg-white/25 border border-gray-200/80 ring-1 ring-indigo-500/10 shadow-[0_12px_36px_-10px_rgba(79,70,229,0.16),0_4px_14px_-4px_rgba(15,23,42,0.08)]"
            : "w-full rounded-none bg-white/80 border-b border-gray-200/80 shadow-none"
        }`}
      >
        <div
          className={`max-w-6xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled ? "px-5 sm:px-7 lg:px-8" : "px-6 sm:px-10 lg:px-16"
          }`}
        >
          <nav
            className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "h-14 lg:h-16" : "h-16 lg:h-[72px]"
            }`}
          >
            {/* Brand */}
            <a href="#hero" className="flex items-center gap-2 group shrink-0">
              <img
                src="/assets/logos.png"
                alt="Fournders.id logo"
                className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-extrabold tracking-tight text-gray-900">
                Fourn
                <span className="relative">
                  d
                  <span className="absolute -top-0.5 -right-1.5 w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                </span>
                ers<span className="text-indigo-600 font-extrabold">.id</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-full transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 active:scale-[0.97] transition-all duration-300 shadow-sm shadow-indigo-600/25 ${
                  scrolled ? "rounded-full" : "rounded-full"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center border border-gray-200/80 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/70 transition-all duration-300 cursor-pointer ${
                scrolled ? "rounded-full" : "rounded-xl"
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Smooth Mobile Dropdown */}
      <div
        className={`lg:hidden mx-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "w-[85%] mt-2" : "w-full mt-0"
        } ${
          menuOpen && !inFooter
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
            scrolled
              ? "rounded-3xl border border-gray-200/80 shadow-xl shadow-gray-900/10"
              : "border-b border-gray-200/80 shadow-lg shadow-gray-900/5"
          }`}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 space-y-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Konsultasi Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
