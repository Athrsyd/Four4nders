/* ═══════════════════════════════════════════════════
   FOURNDERS.ID — Main JavaScript (Final)
   Vanilla JS — No dependencies
   ═══════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  /* ──────────────────────────────────────────────
     1. Inisialisasi Lucide Icons
  ────────────────────────────────────────────── */
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  /* ──────────────────────────────────────────────
     2. Hamburger Mobile Menu
  ────────────────────────────────────────────── */
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openMobileMenu() {
    mobileMenu.classList.remove("hidden");
    hamburgerBtn.classList.add("active");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    // Render icons yang baru muncul di mobile menu
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  function closeMobileMenu() {
    mobileMenu.classList.add("hidden");
    hamburgerBtn.classList.remove("active");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      isOpen ? closeMobileMenu() : openMobileMenu();
    });

    // Tutup menu saat link diklik
    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  // Auto-close saat resize ke desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && mobileMenu) {
      closeMobileMenu();
    }
  });

  /* ──────────────────────────────────────────────
     3. Navbar Scroll Shadow
  ────────────────────────────────────────────── */
  const navbar = document.getElementById("navbar");

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ──────────────────────────────────────────────
     4. Scroll Reveal (IntersectionObserver)
  ────────────────────────────────────────────── */
  const revealEls = document.querySelectorAll(".scroll-reveal");

  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback — langsung tampilkan semua
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ──────────────────────────────────────────────
     5. FAQ Accordion (elemen <details>)
     — Buka satu item → item lain menutup otomatis
     — Klik item yang sedang terbuka → menutup dirinya
     — Tampilan (warna, panah) diatur lewat class Tailwind
       group-open:, jadi JS hanya mengatur logika buka/tutup
  ────────────────────────────────────────────── */
  const faqItems = document.querySelectorAll("#faq-accordion details");

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
});
