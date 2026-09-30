export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Mobile" | "Fullstack" | "Frontend" | "Tools";
  platform: "Android / iOS" | "Web App" | "Cross-Platform";
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  gitlabUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
  stats?: { label: string; value: string };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  type: "work" | "education";
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Working Knowledge";
    context: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    availability: string;
    email: string;
    phone?: string;
    resumeUrl: string;
    socials: {
      github: string;
      gitlab?: string;
      linkedin: string;
      whatsapp?: string;
    };
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  engineeringPrinciples: {
    title: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jovian",
    title: "Fullstack & Mobile Software Engineer",
    tagline: "Merancang dan membangun aplikasi mobile dan web berkinerja tinggi dengan arsitektur kode modular, performa native, dan integrasi backend yang andal.",
    bio: "Software engineer dengan fokus pada pengembangan aplikasi mobile menggunakan React Native (Expo) serta aplikasi web modern berbasis Next.js dan TypeScript. Berpengalaman membangun aplikasi skala kampus yang digunakan oleh civitas akademika, mulai dari sistem presensi QR code berbasis kamera hingga reservasi sarana terintegrasi dengan push notification dan workflow persetujuan berjenjang.",
    location: "Semarang, Indonesia",
    availability: "Terbuka untuk posisi Full-time & Proyek Rekayasa Perangkat Lunak",
    email: "jovian.dev@example.com",
    phone: "+62 812 3456 7890",
    resumeUrl: "#",
    socials: {
      github: "https://github.com",
      gitlab: "https://gitlab.com/vial300604",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/6281234567890",
    },
  },
  metrics: [
    {
      label: "Aplikasi Mobile Terdeploy",
      value: "2",
      detail: "Smart Room & Dipma Unimus Mobile untuk civitas kampus",
    },
    {
      label: "Stack Utama",
      value: "React Native + Next.js",
      detail: "TypeScript end-to-end dengan arsitektur modular",
    },
    {
      label: "Workflow & Integrasi",
      value: "FCM & OTA",
      detail: "Push notification realtime dan continuous updates via Stallion",
    },
    {
      label: "Standar Kode",
      value: "TypeScript Strict",
      detail: "Tipe data terstruktur, reusable components, dan zero build errors",
    },
  ],
  engineeringPrinciples: [
    {
      title: "Arsitektur Modular & Strict Typing",
      description: "Pemisahan lapisan antara presentasi UI, manajemen state, dan API client dengan TypeScript strict untuk meminimalkan runtime error.",
    },
    {
      title: "Performa Native & Pengalaman Mobile",
      description: "Pemanfaatan fitur native perangkat seperti kamera untuk pemindaian kode, push notifications FCM, dan manajemen sesi lokal terenkripsi.",
    },
    {
      title: "Continuous Delivery & OTA Updates",
      description: "Implementasi Over-The-Air updates untuk memperbarui aplikasi mobile secara instan tanpa menunggu siklus rilis panjang di app store.",
    },
    {
      title: "Desain Antarmuka Berorientasi Fungsi",
      description: "Navigasi intuitif berbasis alur kerja pengguna nyata dengan feedback instan, layout responsif, dan standar aksesibilitas tinggi.",
    },
  ],
  skillCategories: [
    {
      name: "Mobile Development",
      description: "Pengembangan aplikasi lintas platform untuk Android dan iOS",
      skills: [
        { name: "React Native", level: "Advanced", context: "Expo SDK 57, Paper UI, Custom Components" },
        { name: "Expo Ecosystem", level: "Advanced", context: "Expo Camera, Notifications, FileSystem, Print" },
        { name: "React Navigation", level: "Advanced", context: "Native Stack, Bottom Tabs, Deep Linking" },
        { name: "Push Notifications", level: "Proficient", context: "Firebase Cloud Messaging (FCM)" },
        { name: "Stallion OTA Updates", level: "Proficient", context: "Over-the-air binary patch delivery" },
      ],
    },
    {
      name: "Frontend & Web Architecture",
      description: "Pembangunan web application modern dan responsif",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", context: "Server Components, API routes, Turbopack" },
        { name: "React.js", level: "Advanced", context: "Custom hooks, state patterns, performance tuning" },
        { name: "TypeScript", level: "Advanced", context: "Strict typing, generic interfaces, type guards" },
        { name: "Tailwind CSS", level: "Advanced", context: "Design tokens, responsive utility first, dark mode" },
      ],
    },
    {
      name: "Backend, Database & DevOps",
      description: "Layanan server, basis data, dan pipeline deployment",
      skills: [
        { name: "Node.js & Express", level: "Advanced", context: "RESTful endpoints, middleware, auth flow" },
        { name: "PostgreSQL & Prisma", level: "Proficient", context: "Relational modeling, migrations, query tuning" },
        { name: "Git & Version Control", level: "Advanced", context: "GitLab, GitHub, branching strategy, CI/CD" },
        { name: "Vercel & Cloud Hosting", level: "Advanced", context: "Edge deployment, environment config, analytics" },
      ],
    },
  ],
  projects: [
    {
      id: "smartroom-unimus",
      title: "Smart Room UNIMUS: Reservasi & Manajemen Ruang Kampus",
      tagline: "Aplikasi mobile reservasi fasilitas ruangan dengan alur verifikasi berjenjang dan notifikasi realtime.",
      description: "Aplikasi mobile terintegrasi untuk pengelolaan dan peminjaman ruang kelas, aula, dan laboratorium di lingkungan Universitas Muhammadiyah Semarang (UNIMUS). Memfasilitasi dosen, tenaga kependidikan, dan mahasiswa dalam mengajukan peminjaman, serta mendukung Unit Rumah Tangga dalam proses verifikasi berjenjang.",
      category: "Mobile",
      platform: "Android / iOS",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
      tags: ["React Native", "Expo SDK 57", "TypeScript", "FCM Push Notifications", "React Navigation v7", "AsyncStorage"],
      gitlabUrl: "https://gitlab.com/vial300604/smartroom-mobile-app",
      featured: true,
      architectureHighlights: [
        "Alur verifikasi 3 tahap: Pengajuan Civitas -> Validasi Admin Unit Rumah Tangga -> Persetujuan Pimpinan RT.",
        "Pengecekan bentrok jadwal penggunaan ruangan secara realtime sebelum formulir diserahkan.",
        "Sistem multi-peran dengan fitur perpindahan peran aktif (switch role) dalam satu akun pengguna.",
        "Integrasi Firebase Cloud Messaging (FCM) dengan navigasi otomatis ke halaman detail saat notifikasi dibuka.",
        "Pengunggahan dokumen surat permohonan resmi (PDF dan gambar) menggunakan native multipart upload.",
      ],
      stats: { label: "Target Pengguna", value: "Dosen, Mahasiswa, & Unit RT Kampus" },
    },
    {
      id: "dipma-mobile",
      title: "Dipma UNIMUS Mobile: Presensi Perkuliahan QR Code",
      tagline: "Aplikasi mobile presensi mahasiswa berbasis pemindaian QR code hardware camera dan pembaruan OTA.",
      description: "Aplikasi mobile presensi mahasiswa resmi Universitas Muhammadiyah Semarang (UNIMUS). Mengintegrasikan pemindai QR code berbasis kamera perangkat dengan latensi rendah, sinkronisasi jadwal mata kuliah harian, riwayat kehadiran presisi, serta dukungan pembaruan Over-The-Air tanpa ketergantungan rilis app store.",
      category: "Mobile",
      platform: "Android / iOS",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80",
      tags: ["React Native", "Expo SDK 57", "Expo Camera", "React Native Paper", "Stallion OTA", "Axios"],
      featured: true,
      architectureHighlights: [
        "Pemindai barcode QR code berkecepatan tinggi dengan integrasi native hardware camera.",
        "Integrasi Stallion OTA updates untuk patch continuous delivery instan ke perangkat pengguna.",
        "Sinkronisasi jadwal perkuliahan harian dan mingguan langsung dengan sistem informasi akademik.",
        "Pencatatan riwayat presensi dengan timestamp presisi dan status verifikasi kehadiran.",
        "Penyimpanan sesi lokal terenkripsi dengan penanganan konektivitas jaringan secara aman.",
      ],
      stats: { label: "Metode Presensi", value: "QR Hardware Camera Scanner" },
    },
    {
      id: "registrasi-yudisium",
      title: "Portal Registrasi & Verifikasi Akademik",
      tagline: "Sistem administrasi pendaftaran yudisium dan verifikasi berkas kelulusan mahasiswa terpadu.",
      description: "Platform web administrasi data mahasiswa untuk proses validasi berkas kelulusan otomatis, pelacakan alur persetujuan berkas akademik, dan notifikasi kelengkapan persyaratan secara transparan.",
      category: "Fullstack",
      platform: "Web App",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
      githubUrl: "https://github.com",
      featured: false,
      architectureHighlights: [
        "Validasi dokumen administrasi kelulusan berbasis kriteria terstruktur.",
        "Role-based access control untuk Administrator, Dosen Penguji, dan Mahasiswa.",
        "Dashboard pemantauan status berkas dengan timeline tahapan verifikasi yang jelas.",
      ],
      stats: { label: "Tipe Sistem", value: "Portal Akademik Enterprise" },
    },
    {
      id: "saas-analytics",
      title: "Platform Dashboard & Telemetri Data",
      tagline: "Sistem visualisasi data performa dan analitik metrik dengan antarmuka modular.",
      description: "Aplikasi dashboard analitik web dengan visualisasi grafik interaktif, pemrosesan metrik performa, manajemen hak akses tim, dan penyajian data statistik tanpa jeda.",
      category: "Fullstack",
      platform: "Web App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Chart.js"],
      githubUrl: "https://github.com",
      featured: false,
      architectureHighlights: [
        "Antarmuka modular dengan dukungan mode gelap dan terang tanpa flicker.",
        "Penyajian data agregat dengan visualisasi interaktif.",
        "Ekspor ringkasan laporan dalam format dokumen terstruktur.",
      ],
      stats: { label: "Fokus Arsitektur", value: "Modular Dashboard & Data Chart" },
    },
    {
      id: "spotify-lyrics-sync",
      title: "Music & Lyrics Synchronization Engine",
      tagline: "Aplikasi sinkronisasi lirik audio presisi tinggi dengan visualizer frekuensi interaktif.",
      description: "Aplikasi web pemutar audio yang memproses dan menyinkronkan lirik kata demi kata secara real-time dengan parser format LRC dan integrasi Web Audio API.",
      category: "Tools",
      platform: "Web App",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80",
      tags: ["TypeScript", "React", "Web Audio API", "Tailwind CSS"],
      githubUrl: "https://github.com",
      featured: false,
      architectureHighlights: [
        "Algoritma parsing file lirik lrc dengan sinkronisasi timestamp presisi milidetik.",
        "Visualizer audio realtime memanfaatkan Web Audio AnalyserNode.",
      ],
      stats: { label: "Engine Audio", value: "Realtime LRC Timestamp Parser" },
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Mobile & Fullstack Software Engineer",
      company: "Pengembangan Proyek Sistem Kampus (UNIMUS)",
      period: "2023 - Sekarang",
      location: "Semarang, Indonesia",
      description: "Merancang dan mengimplementasikan aplikasi mobile produksi Smart Room UNIMUS dan Dipma UNIMUS Mobile dengan React Native Expo. Mengembangkan modul QR scanner berbasis hardware kamera, integrasi push notification Firebase Cloud Messaging, dan continuous OTA update deployment.",
      skills: ["React Native", "Expo SDK", "TypeScript", "FCM", "Stallion OTA", "REST APIs"],
      type: "work",
    },
    {
      id: "exp-2",
      role: "Web Application Developer",
      company: "Proyek Rekayasa Perangkat Lunak Mandiri",
      period: "2022 - 2023",
      location: "Indonesia",
      description: "Membangun sistem web dinamis berbasis Next.js, Node.js, dan arsitektur database relasional PostgreSQL. Menerapkan pengujian kode, antarmuka responsif, dan deployment otomatis pada infrastruktur cloud Vercel.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Git"],
      type: "work",
    },
    {
      id: "edu-1",
      role: "Pendidikan Tinggi Teknik Informatika / Ilmu Komputer",
      company: "Universitas",
      period: "2021 - 2025",
      location: "Indonesia",
      description: "Fokus pada rekayasa perangkat lunak, arsitektur sistem informasi, pemrograman mobile dan web, serta struktur data dan algoritma.",
      skills: ["Software Engineering", "Mobile App Development", "Database Systems", "Algorithms"],
      type: "education",
    },
  ],
};
