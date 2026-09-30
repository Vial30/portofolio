export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Mobile App" | "Mobile & AI";
  platform: "Android / iOS";
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
  badge: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Proficient";
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
    phone: string;
    resumeUrl: string;
    socials: {
      github: string;
      gitlab?: string;
      linkedin: string;
      instagram?: string;
      whatsapp: string;
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
    name: "Jovial Wahyu Aji Pradhana",
    title: "Mobile App Software Engineer & Web Developer",
    tagline: "Spesialis rekayasa aplikasi mobile (React Native & Expo) dengan pengalaman integrasi modul hardware kamera dan performa native, serta web developer berpengalaman dengan keahlian mendalam pada PHP dan ekosistem Laravel.",
    bio: "Lulusan S1 Informatika dari Universitas Muhammadiyah Semarang (UNIMUS) yang aktif membangun aplikasi mobile skala kampus dan sistem web terstruktur. Keahlian utama berfokus pada rekayasa aplikasi mobile menggunakan React Native (Expo) dengan pemindai QR hardware kamera, push notifications FCM, pembaruan aplikasi OTA via Stallion, dan streaming data real-time. Memiliki kapabilitas kuat dalam pengembangan web dan backend menggunakan PHP, Laravel, Next.js, dan TypeScript.",
    location: "Semarang, Indonesia",
    availability: "Terbuka untuk Peluang Mobile Software Engineer & Web Development",
    email: "jovialwahyu18@gmail.com",
    phone: "+62 822-2311-6451",
    resumeUrl: "/jovial_resume.pdf",
    socials: {
      github: "https://github.com/Vial30",
      gitlab: "https://gitlab.com/vial300604",
      linkedin: "https://www.linkedin.com/in/jovialwahyu",
      instagram: "https://www.instagram.com/jovialwahyuu_/",
      whatsapp: "https://wa.me/6282223116451",
    },
  },
  metrics: [
    {
      label: "Fokus Utama Mobile",
      value: "React Native & Expo",
      detail: "Expo Camera QR scanner, FCM, Stallion OTA, dan arsitektur native",
    },
    {
      label: "Keahlian Web & Backend",
      value: "PHP & Laravel",
      detail: "Arsitektur MVC, RESTful APIs, Eloquent ORM, dan Next.js",
    },
    {
      label: "Proyek Teruji",
      value: "3 Proyek",
      detail: "Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO",
    },
    {
      label: "Pendidikan & Riset",
      value: "S1 Informatika",
      detail: "Universitas Muhammadiyah Semarang (UNIMUS), fokus mobile dan AI",
    },
  ],
  engineeringPrinciples: [
    {
      title: "Mobile-First & Native Hardware Precision",
      description: "Pemanfaatan modul kamera perangkat keras secara langsung untuk pemindaian instan, pembacaan barcode berlatensi rendah, dan penanganan sesi aman pada perangkat.",
    },
    {
      title: "Arsitektur Web & Backend Bersih (PHP / Laravel)",
      description: "Penerapan clean code, pemisahan lapisan service dan repository, proteksi otentikasi ketat, serta perancangan REST API terstruktur untuk dikonsumsi klien mobile.",
    },
    {
      title: "Komunikasi Real-Time & Notifikasi Terpadu",
      description: "Integrasi WebSocket streaming untuk transfer data inferensi berkecepatan tinggi dan Firebase Cloud Messaging (FCM) untuk alur verifikasi berkas secara instan.",
    },
    {
      title: "Continuous Delivery & Pembaruan OTA",
      description: "Penerapan pembaruan Over-The-Air via Stallion untuk mendistribusikan patch perbaikan kode tanpa keharusan melalui antrean rilis app store.",
    },
  ],
  skillCategories: [
    {
      name: "Mobile App Engineering",
      badge: "Keahlian Utama",
      description: "Spesialisasi utama dalam rekayasa aplikasi mobile lintas platform Android dan iOS",
      skills: [
        { name: "React Native", level: "Expert", context: "Expo SDK 57, Paper UI, custom components, responsive layout" },
        { name: "Expo Camera & Hardware", level: "Expert", context: "Pemindai QR code hardware berkecepatan tinggi dan penanganan frame kamera" },
        { name: "Push Notifications (FCM)", level: "Advanced", context: "Firebase Cloud Messaging, penanganan payload latar belakang, deep link" },
        { name: "Stallion OTA Updates", level: "Advanced", context: "Continuous delivery pembaruan bundle binary Over-The-Air" },
        { name: "React Navigation", level: "Expert", context: "Native Stack, Bottom Tabs, alur otentikasi berlapis" },
        { name: "State & Storage", level: "Advanced", context: "Zustand, React Context, AsyncStorage aman" },
      ],
    },
    {
      name: "Web Development & Backend",
      badge: "Keahlian Handal",
      description: "Pengembangan sistem web end-to-end dan arsitektur API modular",
      skills: [
        { name: "PHP", level: "Advanced", context: "Pemrograman berorientasi objek modern (PHP 8+), standard PSR, clean code" },
        { name: "Laravel", level: "Advanced", context: "Eloquent ORM, RESTful API Resources, middleware, validasi form, Sanctum" },
        { name: "Next.js & React", level: "Advanced", context: "App Router, Server Components, TypeScript, performa loading optimal" },
        { name: "TypeScript", level: "Advanced", context: "Strict typing, antarmuka data terstruktur, pencegahan runtime error" },
        { name: "Database & ORM", level: "Advanced", context: "MySQL, PostgreSQL, relasi tabel efisien, migrasi skema" },
        { name: "Tailwind CSS", level: "Expert", context: "Desain antarmuka modern, sistem token warna, responsivitas mobile" },
      ],
    },
    {
      name: "Deep Learning, Tools & Workflow",
      badge: "Riset & Ekosistem",
      description: "Riset kecerdasan buatan terapan, version control, dan pipeline deployment",
      skills: [
        { name: "PyTorch & Deep Learning", level: "Proficient", context: "Dual-Stream Bi-LSTM, Temporal Attention, evaluasi LOSO Cross-Validation" },
        { name: "MediaPipe & WebSocket", level: "Proficient", context: "Ekstraksi spasio-temporal landmark dan streaming inferensi latensi rendah (~2.3 ms)" },
        { name: "Python", level: "Proficient", context: "Preprocessing dataset video isyarat, ekstraksi vektor kecepatan kinematik" },
        { name: "Git, GitHub & GitLab", level: "Advanced", context: "Workflow tim, branching, manajemen repositori, issue tracking" },
        { name: "Vercel & Hosting", level: "Advanced", context: "Deployment web modern, otomatisasi CI/CD dari repositori Git" },
      ],
    },
  ],
  projects: [
    {
      id: "isyaratku-bisindo",
      title: "Isyaratku: Real-Time BISINDO Sign Recognition",
      tagline: "Sistem pengenalan 32 kosakata Bahasa Isyarat Indonesia (BISINDO) real-time berbasis Deep Residual Bi-LSTM dan streaming WebSocket.",
      description: "Sistem pengenalan bahasa isyarat BISINDO tingkat kata secara real-time dengan paradigma Client-Server. Klien mobile dibangun menggunakan React Native Expo (TypeScript) yang melakukan streaming frame kamera via WebSocket ke backend inferensi FastAPI dan PyTorch. Mengintegrasikan ekstraksi landmark MediaPipe, kalkulasi 141 vektor kecepatan spasio-temporal, serta ensemble model Dual-Stream Deep Residual Bi-LSTM dengan Temporal Attention yang mencapai akurasi evaluasi LOSO Cross-Validation 98.99% dan latensi inferensi ~2.3 ms.",
      category: "Mobile & AI",
      platform: "Android / iOS",
      image: "/projects/isyaratku.jpg",
      tags: [
        "React Native",
        "Expo SDK",
        "TypeScript",
        "FastAPI",
        "PyTorch",
        "MediaPipe",
        "WebSocket",
        "Bi-LSTM",
        "Python",
      ],
      githubUrl: "https://github.com/Vial30/isyaratku_bisindo",
      featured: true,
      architectureHighlights: [
        "Akurasi 98.99% pada evaluasi Leave-One-Subject-Out (LOSO) Cross-Validation.",
        "Arsitektur Dual-Stream Deep Residual Bi-LSTM dengan Temporal Attention dan Soft Voting Fusion.",
        "Komunikasi streaming real-time berlatensi ultra-rendah (~2.3 ms) memanfaatkan protokol WebSocket.",
        "Ekstraksi fitur spasio-temporal 141 titik koordinat MediaPipe dipadukan dengan 141 vektor kecepatan kinematik.",
        "Pipeline client mobile responsif yang menjaga konsistensi frame rate saat pengambilan data visual.",
      ],
      stats: { label: "Evaluasi & Latensi", value: "98.99% Akurasi LOSO (~2.3ms)" },
    },
    {
      id: "dipma-mobile",
      title: "Dipma UNIMUS Mobile: Presensi Perkuliahan QR Code",
      tagline: "Aplikasi mobile presensi mahasiswa resmi UNIMUS berbasis pemindaian QR hardware camera dan pembaruan OTA.",
      description: "Aplikasi mobile presensi mahasiswa resmi Universitas Muhammadiyah Semarang (UNIMUS). Mengintegrasikan pemindai QR code berbasis hardware camera perangkat dengan latensi rendah, sinkronisasi jadwal mata kuliah harian, riwayat kehadiran presisi, serta dukungan pembaruan Over-The-Air tanpa ketergantungan rilis app store.",
      category: "Mobile App",
      platform: "Android / iOS",
      image: "/projects/dipma.jpeg",
      tags: ["React Native", "Expo SDK 57", "Expo Camera", "React Native Paper", "Stallion OTA", "Axios", "REST API"],
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
      id: "smartroom-unimus",
      title: "Smart Room UNIMUS: Reservasi & Manajemen Ruang Kampus",
      tagline: "Aplikasi mobile reservasi fasilitas ruangan dengan alur verifikasi berjenjang dan notifikasi realtime.",
      description: "Aplikasi mobile terintegrasi untuk pengelolaan dan peminjaman ruang kelas, aula, dan laboratorium di lingkungan Universitas Muhammadiyah Semarang (UNIMUS). Memfasilitasi dosen, tenaga kependidikan, dan mahasiswa dalam mengajukan peminjaman, serta mendukung Unit Rumah Tangga dalam proses verifikasi berjenjang.",
      category: "Mobile App",
      platform: "Android / iOS",
      image: "/projects/smartroom.jpeg",
      tags: ["React Native", "Expo SDK 57", "TypeScript", "FCM Push Notifications", "React Navigation v7", "AsyncStorage", "REST API"],
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
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Mobile Software Engineer & Web Developer",
      company: "UNIMUS & Riset Mandiri",
      period: "2023 - Sekarang",
      location: "Semarang, Indonesia",
      description: "Merancang dan mengembangkan aplikasi mobile produksi skala kampus (Dipma UNIMUS Mobile dan Smart Room UNIMUS) dengan React Native Expo serta integrasi API backend PHP/Laravel. Mengimplementasikan modul pemindai QR berbasis kamera hardware, notifikasi push FCM, dan continuous delivery OTA via Stallion. Mengembangkan sistem cerdas pengenalan isyarat BISINDO berbasis streaming WebSocket dan deep learning PyTorch.",
      skills: ["React Native", "Expo SDK", "PHP", "Laravel", "TypeScript", "FCM", "Stallion OTA", "FastAPI", "WebSocket"],
      type: "work",
    },
    {
      id: "edu-1",
      role: "S1 Informatika",
      company: "Universitas Muhammadiyah Semarang (UNIMUS)",
      period: "2022 - 2026",
      location: "Semarang, Indonesia",
      description: "Menyelesaikan pendidikan sarjana dengan fokus pada Rekayasa Perangkat Lunak, Pemrograman Mobile, Arsitektur Aplikasi Web Modern, serta Riset Kecerdasan Buatan (Computer Vision & Deep Learning untuk pengenalan bahasa isyarat).",
      skills: ["Software Engineering", "Mobile Development", "PHP / Laravel", "Database Systems", "Computer Vision"],
      type: "education",
    },
  ],
};
