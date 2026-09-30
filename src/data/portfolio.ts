export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Mobile";
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
    title: "Mobile & Software Engineer",
    tagline: "Spesialis rekayasa aplikasi mobile (React Native & Expo) dan integrasi sistem cerdas dengan fokus pada hardware device, performa native, dan arsitektur kode modular.",
    bio: "Mahasiswa S1 Teknik Informatika di Universitas Muhammadiyah Semarang (UNIMUS) sekaligus software engineer yang berfokus pada rekayasa aplikasi mobile dan integrasi deep learning. Mengembangkan aplikasi mobile nyata untuk civitas akademika seperti Dipma UNIMUS Mobile (presensi QR hardware) dan Smart Room UNIMUS (reservasi fasilitas kampus terintegrasi FCM), serta riset mandiri sistem pengenalan bahasa isyarat IsyaratKu BISINDO.",
    location: "Semarang, Indonesia",
    availability: "Terbuka untuk Kolaborasi Proyek & Peluang Karir Mobile / Software Engineer",
    email: "jovialwahyu18@gmail.com",
    phone: "+62 822-2311-6451",
    resumeUrl: "#",
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
      label: "Karya Rekayasa Nyata",
      value: "3 Proyek",
      detail: "IsyaratKu BISINDO, Dipma UNIMUS Mobile, dan Smart Room UNIMUS",
    },
    {
      label: "Ekosistem Mobile",
      value: "React Native & Expo",
      detail: "Expo SDK 57, TypeScript strict, React Navigation, dan state management",
    },
    {
      label: "Integrasi Perangkat",
      value: "Hardware & Realtime",
      detail: "Kamera pemindai QR, FCM Push Notifications, dan streaming WebSocket",
    },
    {
      label: "Basis Akademik",
      value: "S1 Teknik Informatika",
      detail: "Universitas Muhammadiyah Semarang (UNIMUS), fokus mobile dan AI",
    },
  ],
  engineeringPrinciples: [
    {
      title: "Integrasi Native Hardware Presisi",
      description: "Pemanfaatan modul kamera perangkat keras secara langsung untuk pemindaian instan, pembacaan barcode, serta pengolahan frame visual berlatensi rendah.",
    },
    {
      title: "Komunikasi Real-Time & Notifikasi",
      description: "Penerapan WebSocket streaming untuk inferensi data kontinu dan Firebase Cloud Messaging (FCM) untuk penanganan alur kerja persetujuan secara instan.",
    },
    {
      title: "Continuous Delivery & OTA Updates",
      description: "Implementasi pembaruan Over-The-Air (OTA) via Stallion untuk mendistribusikan patch perbaikan ke perangkat pengguna tanpa siklus rilis app store yang panjang.",
    },
    {
      title: "Arsitektur Modular & Strict Typing",
      description: "Pemisahan lapisan antara modul UI, state aplikasi, dan komunikasi API client dengan TypeScript strict untuk menjamin keandalan saat runtime.",
    },
  ],
  skillCategories: [
    {
      name: "Mobile Development",
      description: "Pengembangan aplikasi lintas platform menggunakan ekosistem React Native dan Expo",
      skills: [
        { name: "React Native", level: "Advanced", context: "Expo SDK 57, Paper UI, Custom UI Components" },
        { name: "Expo Camera", level: "Advanced", context: "Pemindaian barcode QR hardware dan streaming frame" },
        { name: "Push Notifications", level: "Proficient", context: "Firebase Cloud Messaging (FCM) dan handler navigasi" },
        { name: "React Navigation", level: "Advanced", context: "Native Stack, Bottom Tabs, Parameter Passing" },
        { name: "Stallion OTA", level: "Proficient", context: "Over-the-air binary patch delivery tanpa compile ulang" },
        { name: "State Management", level: "Advanced", context: "Zustand, React Context, AsyncStorage terenkripsi" },
      ],
    },
    {
      name: "AI / Deep Learning & Backend",
      description: "Integrasi model inferensi deep learning dan penyedia layanan backend",
      skills: [
        { name: "PyTorch & Deep Learning", level: "Proficient", context: "Dual-Stream Bi-LSTM, Temporal Attention, evaluasi LOSO" },
        { name: "MediaPipe", level: "Proficient", context: "Ekstraksi spasio-temporal 141 koordinat landmark tangan dan pose" },
        { name: "FastAPI & WebSocket", level: "Proficient", context: "Real-time low-latency streaming pipeline (~2.3 ms inferensi)" },
        { name: "Python", level: "Proficient", context: "Data preprocessing, ekstraksi fitur spasio-temporal, model training" },
        { name: "Node.js & REST APIs", level: "Proficient", context: "Integrasi client-server, parsing payload, multipart upload" },
      ],
    },
    {
      name: "Web, Tools & Workflow",
      description: "Perkakas rekayasa, version control, dan arsitektur web pendukung",
      skills: [
        { name: "TypeScript", level: "Advanced", context: "Strict type safety, generic interfaces, zero build errors" },
        { name: "Next.js & React", level: "Proficient", context: "App Router, modern components, clean architecture" },
        { name: "Tailwind CSS", level: "Advanced", context: "Design tokens, utility-first, simple modern monochrome UI" },
        { name: "Git, GitLab & GitHub", level: "Advanced", context: "Version control, branching strategy, remote repository" },
        { name: "Vercel Deployment", level: "Advanced", context: "Production hosting, continuous deployment, custom domain" },
      ],
    },
  ],
  projects: [
    {
      id: "isyaratku-bisindo",
      title: "Isyaratku: Real-Time BISINDO Sign Recognition",
      tagline: "Sistem pengenalan 32 kosakata Bahasa Isyarat Indonesia (BISINDO) real-time berbasis Deep Residual Bi-LSTM dan streaming WebSocket.",
      description: "Sistem pengenalan bahasa isyarat BISINDO tingkat kata secara real-time dengan paradigma Client-Server. Frontend mobile client dibangun menggunakan React Native Expo (TypeScript) yang melakukan streaming frame kamera via WebSocket ke backend inferensi FastAPI dan PyTorch. Mengintegrasikan ekstraksi landmark MediaPipe, kalkulasi vektor kecepatan spasio-temporal, serta ensemble model Dual-Stream Deep Residual Bi-LSTM dengan Temporal Attention yang mencapai akurasi evaluasi LOSO Cross-Validation 98.99% dan latensi inferensi ~2.3 ms.",
      category: "Mobile",
      platform: "Android / iOS",
      image: "/projects/isyaratku_simple.jpg",
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
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Mobile Software Engineer (Proyek Kampus & Riset Mandiri)",
      company: "UNIMUS & Riset Mandiri",
      period: "2023 - Sekarang",
      location: "Semarang, Indonesia",
      description: "Mengembangkan aplikasi mobile produksi skala kampus (Dipma UNIMUS Mobile dan Smart Room UNIMUS) menggunakan React Native dan Expo. Mengimplementasikan modul pemindai QR berbasis kamera hardware, push notification via Firebase Cloud Messaging, dan continuous delivery OTA via Stallion. Merancang arsitektur client-server aplikasi IsyaratKu BISINDO berbasis streaming WebSocket dan deep learning PyTorch.",
      skills: ["React Native", "Expo SDK 57", "TypeScript", "FCM", "Stallion OTA", "FastAPI", "WebSocket", "PyTorch"],
      type: "work",
    },
    {
      id: "edu-1",
      role: "S1 Teknik Informatika",
      company: "Universitas Muhammadiyah Semarang (UNIMUS)",
      period: "2022 - Sekarang (Estimasi 2026)",
      location: "Semarang, Indonesia",
      description: "Menempuh pendidikan sarjana dengan fokus pada Rekayasa Perangkat Lunak, Pemrograman Aplikasi Mobile, Sistem Basis Data, serta Riset Kecerdasan Buatan (Computer Vision & Deep Learning untuk pengenalan bahasa isyarat).",
      skills: ["Software Engineering", "Mobile Development", "Computer Vision", "Deep Learning", "Algorithms & Data Structures"],
      type: "education",
    },
  ],
};
