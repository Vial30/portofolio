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
    title: "Mobile Software Engineer & Web Developer",
    tagline: "Mobile Software Engineer dengan core focus React Native & Expo serta integrasi hardware kamera, dipadukan dengan keahlian web development berbasis PHP dan ekosistem Laravel.",
    bio: "Lulusan S1 Informatika dari Universitas Muhammadiyah Semarang (UNIMUS) yang aktif membangun mobile app skala produksi dan sistem web terstruktur. Fokus utama pada mobile software engineering menggunakan React Native (Expo) dengan pemindai QR hardware kamera, push notifications FCM, update OTA via Stallion, dan real-time data streaming. Memiliki kapabilitas kuat dalam web development dan backend architecture menggunakan PHP, Laravel, Next.js, dan TypeScript.",
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
      label: "Fokus Mobile",
      value: "React Native & Expo",
      detail: "Expo Camera QR scanner, FCM, Stallion OTA, dan native modules",
    },
    {
      label: "Web & Backend",
      value: "PHP & Laravel",
      detail: "MVC architecture, RESTful APIs, Eloquent ORM, dan Next.js",
    },
    {
      label: "Featured Projects",
      value: "3 Project",
      detail: "Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO",
    },
    {
      label: "Background",
      value: "S1 Informatika",
      detail: "Universitas Muhammadiyah Semarang (UNIMUS), fokus mobile dan AI",
    },
  ],
  engineeringPrinciples: [
    {
      title: "Mobile-First & Native Hardware Precision",
      description: "Pemanfaatan modul hardware camera perangkat secara langsung untuk scan instan, pembacaan barcode low-latency, dan secure local session management.",
    },
    {
      title: "Clean Web & Backend Architecture (PHP / Laravel)",
      description: "Penerapan clean code, pemisahan service layer dan repository, proteksi autentikasi ketat, serta perancangan REST API terstruktur untuk dikonsumsi mobile client.",
    },
    {
      title: "Real-Time Streaming & Push Notifications",
      description: "Integrasi WebSocket streaming untuk transfer data inferensi berkecepatan tinggi dan Firebase Cloud Messaging (FCM) untuk background notifications dan instant approval flow.",
    },
    {
      title: "Continuous Delivery & OTA Updates",
      description: "Implementasi Over-The-Air deployment via Stallion untuk rilis patch update secara instan tanpa harus menunggu proses review app store.",
    },
  ],
  skillCategories: [
    {
      name: "Mobile App Engineering",
      badge: "Keahlian Utama",
      description: "Focus utama dalam mobile application engineering cross-platform Android dan iOS",
      skills: [
        { name: "React Native", level: "Expert", context: "Expo SDK 57, Paper UI, custom components, responsive layout" },
        { name: "Expo Camera & Hardware", level: "Expert", context: "Pemindai QR code hardware berkecepatan tinggi dan penanganan frame kamera" },
        { name: "Push Notifications (FCM)", level: "Advanced", context: "Firebase Cloud Messaging, payload handling, deep linking" },
        { name: "Stallion OTA Updates", level: "Advanced", context: "Continuous delivery pembaruan bundle binary Over-The-Air" },
        { name: "React Navigation", level: "Expert", context: "Native Stack, Bottom Tabs, nested auth flow" },
        { name: "State & Storage", level: "Advanced", context: "Zustand, React Context, secure AsyncStorage" },
      ],
    },
    {
      name: "Web & Backend Development",
      badge: "Keahlian Handal",
      description: "Pengembangan web application end-to-end dan arsitektur RESTful API modular",
      skills: [
        { name: "PHP", level: "Advanced", context: "Modern OOP PHP 8+, PSR standards, clean architecture" },
        { name: "Laravel", level: "Advanced", context: "Eloquent ORM, RESTful API Resources, middleware, form validation, Sanctum" },
        { name: "Next.js & React", level: "Advanced", context: "App Router, Server Components, TypeScript, optimal performance" },
        { name: "TypeScript", level: "Advanced", context: "Strict typing, data interfaces, zero runtime errors" },
        { name: "Database & ORM", level: "Advanced", context: "MySQL, PostgreSQL, efficient relational schema, migrations" },
        { name: "Tailwind CSS", level: "Expert", context: "Modern design system, token styling, mobile-first responsive layout" },
      ],
    },
    {
      name: "AI, Tools & Workflow",
      badge: "Riset & Ekosistem",
      description: "Applied artificial intelligence research, version control, dan deployment pipeline",
      skills: [
        { name: "PyTorch & Deep Learning", level: "Proficient", context: "Dual-Stream Bi-LSTM, Temporal Attention, evaluasi LOSO Cross-Validation" },
        { name: "MediaPipe & WebSocket", level: "Proficient", context: "Spatio-temporal landmark extraction dan real-time low-latency streaming pipeline (~2.3 ms)" },
        { name: "Python", level: "Proficient", context: "Dataset preprocessing, ekstraksi kinematic velocity vectors" },
        { name: "Git, GitHub & GitLab", level: "Advanced", context: "Team workflow, branching strategy, code repository management" },
        { name: "Vercel & Hosting", level: "Advanced", context: "Modern web deployment, automated CI/CD pipeline from Git" },
      ],
    },
  ],
  projects: [
    {
      id: "isyaratku-bisindo",
      title: "Isyaratku: Real-Time BISINDO Sign Recognition",
      tagline: "Sistem pengenalan 32 kosakata Bahasa Isyarat Indonesia (BISINDO) real-time berbasis Deep Residual Bi-LSTM dan streaming WebSocket.",
      description: "Sistem pengenalan bahasa isyarat BISINDO tingkat kata secara real-time dengan paradigma Client-Server. Mobile client dibangun menggunakan React Native Expo (TypeScript) yang melakukan streaming frame kamera via WebSocket ke backend inferensi FastAPI dan PyTorch. Mengintegrasikan ekstraksi landmark MediaPipe, kalkulasi 141 kinematic velocity vectors, serta ensemble model Dual-Stream Deep Residual Bi-LSTM dengan Temporal Attention yang mencapai akurasi evaluasi LOSO Cross-Validation 98.99% dan latensi inferensi ~2.3 ms.",
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
        "Dual-Stream Deep Residual Bi-LSTM dengan Temporal Attention dan Soft Voting Fusion.",
        "Real-time streaming communication ultra-low latency (~2.3 ms) via WebSocket protocol.",
        "Spatio-temporal feature extraction 141 MediaPipe landmark coordinates + 141 kinematic velocity vectors.",
        "Responsive mobile client pipeline menjaga frame rate visual capture tetap optimal.",
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
        "High-speed barcode QR scanner terintegrasi native hardware camera.",
        "Stallion OTA updates integration untuk instant continuous delivery ke user devices.",
        "Real-time schedule synchronization langsung dengan REST API sistem akademik.",
        "Attendance logs recording dengan timestamp presisi dan status verifikasi kehadiran.",
        "Secure local session storage dengan network connectivity handling.",
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
        "3-tier approval workflow: Pengajuan Civitas -> Validasi Admin Unit RT -> Persetujuan Pimpinan RT.",
        "Real-time schedule conflict detection sebelum form reservasi disubmit.",
        "Multi-role system dengan switch role feature aktif dalam satu user account.",
        "Firebase Cloud Messaging (FCM) integration dengan auto-routing navigasi saat notifikasi dibuka.",
        "Official document attachment upload (PDF & Image) menggunakan native multipart upload.",
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
      description: "Merancang dan mengembangkan mobile app skala produksi (Dipma UNIMUS Mobile dan Smart Room UNIMUS) dengan React Native Expo serta backend REST API PHP & Laravel. Mengembangkan modul QR scanner hardware camera, push notification FCM, dan continuous delivery OTA via Stallion. Mengembangkan sistem cerdas pengenalan isyarat BISINDO berbasis streaming WebSocket dan deep learning PyTorch.",
      skills: ["React Native", "Expo SDK", "PHP", "Laravel", "TypeScript", "FCM", "Stallion OTA", "FastAPI", "WebSocket"],
      type: "work",
    },
    {
      id: "edu-1",
      role: "S1 Informatika",
      company: "Universitas Muhammadiyah Semarang (UNIMUS)",
      period: "2022 - 2026",
      location: "Semarang, Indonesia",
      description: "Menyelesaikan studi sarjana S1 Informatika dengan fokus pada Software Engineering, Mobile App Development, Web & Backend Architecture, serta riset Computer Vision & Deep Learning.",
      skills: ["Software Engineering", "Mobile Development", "PHP / Laravel", "Database Systems", "Computer Vision"],
      type: "education",
    },
  ],
};
