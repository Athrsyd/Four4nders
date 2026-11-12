import {
  Network,
  CalendarCheck,
  UserPlus,
  Newspaper,
  ScanSearch,
  Code2,
  Users,
  Rocket,
  GraduationCap,
  HeartHandshake,
  BookOpen,
} from "lucide-react";

export const WHATSAPP_URL = "https://wa.me/628984902247";
export const WHATSAPP_DISPLAY = "+62 898-4902-247";
export const EMAIL_ADDRESS = "hello@fournders.id";

export const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Alur Kerja", href: "#alur" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export const MARQUEE_ITEMS = [
  "Website OSIS/MPK",
  "Website Himpunan",
  "Website Komunitas",
  "Website NGO",
  "Desain Modern",
  "Performa Cepat",
];

export const HERO_STATS = [
  { value: "1.2K", label: "Visitors" },
  { value: "86%", label: "Engagement" },
  { value: "24", label: "Artikel" },
];

export const FEATURES = [
  {
    icon: Network,
    title: "Struktur Pengurus Interaktif",
    description: "Tampilkan bagan jabatan, divisi, dan profil anggota secara rapi.",
  },
  {
    icon: CalendarCheck,
    title: "Kalender & Tracker Proker",
    description: "Pantau jadwal, progres, dan dokumentasi tiap program kerja.",
  },
  {
    icon: UserPlus,
    title: "Portal Open Recruitment",
    description: "Kelola pendaftaran calon pengurus dan database anggota terpusat.",
  },
  {
    icon: Newspaper,
    title: "Berita & Dokumentasi",
    description: "Publikasikan press release, artikel, serta galeri kegiatan.",
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    icon: ScanSearch,
    title: "Audit & Mockup",
    description: "Pemetaan kebutuhan lalu review desain mockup awal.",
    tag: "Mockup Design",
    accent: "indigo",
  },
  {
    step: "02",
    icon: Code2,
    title: "Development",
    description: "Pengembangan website serta integrasi konten dan data.",
    tag: "Staging Preview",
    accent: "emerald",
  },
  {
    step: "03",
    icon: Users,
    title: "Review Pengurus",
    description: "Uji coba bersama pengurus inti dan finalisasi revisi.",
    tag: "Final Approval",
    accent: "amber",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Panduan",
    description: "Publish ke domain resmi lengkap dengan panduan pengelolaan.",
    tag: "Go Live! 🚀",
    accent: "featured",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    icon: GraduationCap,
    categoryLabel: "BEM Universitas",
    tags: ["BEM", "Universitas"],
    title: "BEM Fakultas Teknik UNAIR",
    description: "Profil kabinet, program kerja, dan berita kegiatan.",
    theme: "indigo",
  },
  {
    icon: HeartHandshake,
    categoryLabel: "NGO / Komunitas",
    tags: ["NGO", "Nasional"],
    title: "Yayasan Langkah Muda",
    description: "Platform donasi, program sosial, dan laporan transparan.",
    theme: "emerald",
  },
  {
    icon: BookOpen,
    categoryLabel: "Himpunan",
    tags: ["HMTI", "Politeknik"],
    title: "HMTI Politeknik Negeri",
    description: "Portal himpunan, pendaftaran event, dan galeri.",
    theme: "amber",
  },
];

export const FAQ_ITEMS = [
  {
    id: "cms",
    question: "Bisa edit konten sendiri tanpa coding?",
    answer:
      "Ya. Tersedia CMS sederhana untuk mengubah teks, foto, data pengurus, dan berita secara mandiri—lengkap dengan video panduan.",
  },
  {
    id: "timeline",
    question: "Berapa lama estimasi pengerjaannya?",
    answer:
      "Sekitar 7–14 hari kerja untuk website profil standar, atau 3–4 minggu jika ada fitur khusus seperti Open Recruitment.",
  },
  {
    id: "domain",
    question: "Bisa pakai domain .org atau .or.id?",
    answer:
      "Bisa. Kami bantu registrasi domain .org, .or.id (dengan SK organisasi), .id, maupun .com hingga siap tayang.",
  },
];

export const SERVICE_LIST = [
  "Website BEM / OSIS",
  "Website Himpunan",
  "Website Komunitas",
  "Website NGO",
  "Business Profile",
];

export const PRICING_PLANS = [
  {
    id: "statis",
    popular: false,
    audience: "Ekskul, Klub & Kepanitiaan",
    estimate: "3–5 Hari Kerja",
    name: "Paket Web Statis",
    description:
      "Landing page ringan & estetis untuk profil organisasi dan rekrutmen anggota.",
    marketPrice: "Rp900.000",
    discount: "Hemat 49%",
    price: "Rp459.000",
    pricePeriod: "/ sekali bayar (Tahun ke-1)",
    featuresTitle: "Fitur Utama",
    features: [
      "1–3 Halaman (Beranda, Divisi, Galeri, Kontak)",
      "Gratis Domain .my.id (1 Tahun) + Cloud Hosting",
      "Responsive (HP/Laptop) & animasi transisi mulus",
      "Desain selaras warna & logo organisasi",
      "Integrasi Google Forms, WA, IG, TikTok & YouTube",
      "Optimasi gambar agar ringan diakses kuota siswa",
    ],
    policyNote: "Gratis 1x update pertama, berikutnya Rp25rb/sesi (maks. 10 foto).",
    renewalLabel: "Perpanjangan Tahun ke-2+",
    renewalPrice: "Rp100.000 / thn",
    ctaLabel: "Simulasikan Paket Statis",
    whatsappText:
      "Halo Fournders.id, saya tertarik dengan Paket Web Statis (Rp459.000) untuk organisasi kami.",
  },
  {
    id: "dinamis",
    popular: true,
    popularBadge: "PALING POPULER UNTUK OSIS & MPK",
    audience: "OSIS, MPK & Ekskul Besar",
    estimate: "7–14 Hari Kerja",
    name: "Paket Web Dinamis + CMS",
    description:
      "Lengkap dengan Dashboard Admin untuk kelola berita, proker, & kabinet tanpa koding.",
    marketPrice: "Rp2.000.000",
    discount: "Hemat 55%",
    price: "Rp899.000",
    pricePeriod: "/ sekali bayar (Tahun ke-1)",
    featuresTitle: "Semua Fitur Statis, Ditambah",
    features: [
      "Dashboard Admin aman khusus BPH / Humas",
      "CMS Berita, Pengumuman & Status Proker real-time",
      "Manajemen Kabinet & Struktur periode baru",
      "Database PostgreSQL (Supabase) + keamanan RLS",
      "Tombol share berita langsung ke WA & IG Story",
      "Update artikel & proker mandiri tanpa batas",
    ],
    policyNote: "Update mandiri tanpa batas dari HP/laptop, tanpa biaya per sesi.",
    renewalLabel: "Perpanjangan Tahun ke-2+ (Server & DB)",
    renewalPrice: "Rp200.000 / thn",
    ctaLabel: "Pilih Paket Dinamis + CMS",
    whatsappText:
      "Halo Fournders.id, saya tertarik dengan Paket Web Dinamis + CMS (Rp899.000) untuk organisasi kami.",
  },
];

