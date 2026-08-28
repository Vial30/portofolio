export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Fullstack" | "Frontend" | "Mobile" | "AI / ML" | "Backend" | "Game Dev";
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
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
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Familiar"
    icon?: string;
  }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    shortBio: string;
    location: string;
    availability: string; // e.g. "Available for freelance & full-time roles"
    email: string;
    phone?: string;
    avatarUrl: string;
    resumeUrl: string;
    socials: {
      github: string;
      linkedin: string;
      twitter?: string;
      instagram?: string;
      whatsapp?: string;
    };
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  services: {
    icon: string;
    title: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: ExperienceItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jovial",
    title: "Web Development Enthusiast & Full Stack Developer",
    tagline: "Fokus utama membangun aplikasi web modern & fullstack, dengan minat dan kapabilitas kuat dalam Game Development menggunakan Unity & C#.",
    bio: "Saya adalah seorang Web Development Enthusiast dan Full Stack Developer yang berfokus pada pembangunan solusi web menyeluruh — mulai dari antarmuka frontend yang responsif, interaktif, dan modern (Next.js, React, Tailwind CSS) hingga arsitektur backend yang andal dan database terstruktur. Selain fokus utama di web development, saya juga memiliki kapabilitas sebagai Game Developer menggunakan Unity Engine dan bahasa pemrograman C# untuk merancang logika interaktif dan gameplay.",
    shortBio: "Web Development Enthusiast & Full Stack Developer with strong capabilities in modern web ecosystems and Unity Game Development (C#).",
    location: "Indonesia",
    availability: "Tersedia untuk Pekerjaan & Proyek Freelance",
    email: "jovialwahyu18@gmail.com",
    phone: "+62 822-2311-6451",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    resumeUrl: "#",
    socials: {
      github: "https://github.com/Vial30",
      linkedin: "https://www.linkedin.com/in/jovialwahyu",
      instagram: "https://www.instagram.com/jovialwahyuu_/",
      whatsapp: "https://wa.me/6282223116451",
    },
  },
  stats: [
    {
      label: "Tahun Pengalaman",
      value: "3+",
      description: "Eksplorasi & pengembangan web app",
    },
    {
      label: "Proyek Selesai",
      value: "2",
      description: "Aplikasi web & fullstack interaktif",
    },
    {
      label: "Teknologi Dikuasai",
      value: "15+",
      description: "Web, Fullstack, Unity & Tools",
    },
  ],
  services: [
    {
      icon: "Code",
      title: "Full Stack Web Development",
      description: "Pembangunan aplikasi web end-to-end dengan integrasi mulus antara frontend reaktif dan backend yang kokoh.",
    },
    {
      icon: "Layers",
      title: "Modern Frontend Development",
      description: "Pengembangan UI/UX web yang cepat, responsif, dan elegan menggunakan Next.js (App Router), React, TypeScript, dan Tailwind CSS.",
    },
    {
      icon: "Server",
      title: "Backend & API Architecture",
      description: "Perancangan RESTful API modular, autentikasi aman (JWT/Auth.js), dan manajemen basis data (PostgreSQL/MongoDB).",
    },
    {
      icon: "Gamepad",
      title: "Game Development (Unity & C#)",
      description: "Pengembangan game interaktif 2D/3D menggunakan Unity Engine, pemrograman C#, logika gameplay, dan sistem fisika.",
    },
  ],
  skillCategories: [
    {
      name: "Frontend Development",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 / CSS3 / ES6+", level: "Expert" },
        { name: "Zustand & State Management", level: "Advanced" },
        { name: "TanStack Query / SWR", level: "Advanced" },
      ],
    },
    {
      name: "Backend & Database",
      skills: [
        { name: "Node.js & Express", level: "Advanced" },
        { name: "PHP & Laravel", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "PostgreSQL & Supabase", level: "Advanced" },
        { name: "MongoDB & Prisma ORM", level: "Advanced" },
        { name: "Authentication (JWT / Auth.js)", level: "Advanced" },
        { name: "Redis & Caching", level: "Proficient" },
      ],
    },
    {
      name: "Game Development (Unity)",
      skills: [
        { name: "Unity Engine (2D & 3D)", level: "Advanced" },
        { name: "C# Programming", level: "Advanced" },
        { name: "Object-Oriented Programming (OOP)", level: "Expert" },
        { name: "Game Physics & Mechanics", level: "Proficient" },
        { name: "UI Toolkit & Canvas", level: "Proficient" },
        { name: "State Machines & Gameplay Logic", level: "Advanced" },
      ],
    },
    {
      name: "Tools, DevOps & System",
      skills: [
        { name: "Git & GitHub Workflow", level: "Expert" },
        { name: "Vercel & Cloud Deployment", level: "Advanced" },
        { name: "Unity Hub & Visual Studio", level: "Advanced" },
        { name: "Postman & API Testing", level: "Expert" },
        { name: "Docker (Containerization)", level: "Proficient" },
        { name: "VS Code & Debugging Tools", level: "Expert" },
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Web Peminjaman & Rekap Buku (CNN + Laravel)",
      tagline: "Sistem web peminjaman dan rekapitulasi sirkulasi buku cerdas berbasis CNN, Laravel & Supabase.",
      description: "Aplikasi web manajemen dan rekapitulasi peminjaman buku yang mengintegrasikan model Convolutional Neural Network (CNN) untuk identifikasi dan klasifikasi buku secara otomatis. Dibangun menggunakan framework Laravel & PHP dengan backend database cloud Supabase untuk pencatatan transaksi peminjaman, pelacakan riwayat sirkulasi, dan rekap data secara efisien.",
      category: "Fullstack",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
      tags: ["Laravel", "PHP", "CNN (Deep Learning)", "Supabase", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://github.com/Vial30",
      githubUrl: "https://github.com/Vial30",
      featured: true,
      highlights: [
        "Klasifikasi dan identifikasi buku otomatis menggunakan Convolutional Neural Network (CNN)",
        "Sistem pencatatan dan rekapitulasi transaksi peminjaman & pengembalian buku terstruktur",
        "Penyimpanan database cloud andal dan sinkronisasi data real-time dengan Supabase",
      ],
    },
    {
      id: "project-2",
      title: "Isyaratku: Real-Time BISINDO Sign Recognition",
      tagline: "Sistem pengenalan Bahasa Isyarat Indonesia (BISINDO) tingkat kata secara real-time berbasis Deep Residual Bi-LSTM Fusion & WebSocket.",
      description: "Sistem pengenalan 32 kosakata bahasa isyarat BISINDO secara real-time dengan paradigma Client-Server. Frontend mobile client dibangun dengan React Native Expo (TypeScript) yang melakukan streaming frame kamera via WebSocket ke backend FastAPI & PyTorch. Mengintegrasikan ekstraksi landmark MediaPipe, vektor kecepatan kinematik spasio-temporal, dan model ensemble Dual-Stream Deep Residual Bi-LSTM dengan Temporal Attention yang mencapai akurasi LOSO Cross-Validation 98.99% dan latensi inferensi ~2.3 ms.",
      category: "AI / ML",
      image: "/projects/isyaratku_simple.jpg",
      tags: ["React Native", "Expo SDK", "FastAPI", "PyTorch", "MediaPipe", "WebSocket", "Bi-LSTM", "TypeScript", "Python"],
      demoUrl: "https://github.com/Vial30/isyaratku_bisindo",
      githubUrl: "https://github.com/Vial30/isyaratku_bisindo",
      featured: true,
      highlights: [
        "Akurasi tinggi 98.99% pada evaluasi Leave-One-Subject-Out (LOSO) Cross-Validation",
        "Arsitektur Dual-Stream Deep Residual Bi-LSTM + Temporal Attention & Soft Voting Fusion",
        "Komunikasi streaming real-time ultra-low latency (~2.3 ms) via protokol WebSocket",
        "Ekstraksi spasio-temporal 141 titik koordinat MediaPipe + 141 vektor kecepatan kinematik",
      ],
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Fullstack Web Developer",
      company: "Freelance & Proyek Mandiri",
      period: "2023 - Sekarang",
      location: "Semarang, Indonesia (Remote)",
      description: "Membangun dan mengembangkan solusi aplikasi web fullstack, merancang antarmuka interaktif responsif, serta mengintegrasikan backend API, machine learning, dan basis data cloud untuk berbagai kebutuhan proyek.",
      skills: ["Next.js", "React", "TypeScript", "Laravel", "PHP", "Supabase", "Tailwind CSS"],
      type: "work",
    },
    {
      id: "edu-1",
      role: "S1 Teknik Informatika",
      company: "Universitas Muhammadiyah Semarang",
      period: "2022 - 2026",
      location: "Semarang, Indonesia",
      description: "Menempuh pendidikan sarjana dengan fokus pada Pengembangan Aplikasi Web Modern, Rekayasa Perangkat Lunak, Struktur Data & Algoritma, serta Kecerdasan Buatan (Deep Learning & Computer Vision).",
      skills: ["Software Engineering", "Web Development", "AI / Deep Learning", "Computer Vision", "Database Design"],
      type: "education",
    },
  ],
};
