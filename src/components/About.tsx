"use client";

import { portfolioData } from "@/data/portfolio";
import { Code, Layers, Smartphone, Zap, CheckCircle, Sparkles, Server, Database, Gamepad2 } from "lucide-react";

export default function About() {
  const { personal, services } = portfolioData;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-blue-500" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-500" />;
      case "Code":
        return <Code className="w-5 h-5 text-indigo-500" />;
      case "Gamepad":
        return <Gamepad2 className="w-5 h-5 text-purple-500" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-indigo-500" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-purple-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-500" />;
    }
  };

  const strengths = [
    "Pengembangan frontend modern, cepat, dan responsif (Next.js, React, Tailwind CSS)",
    "Pembangunan sistem backend & RESTful API yang aman, modular, dan terstruktur",
    "Integrasi alur data real-time, manajemen state, dan pengelolaan database (SQL/NoSQL)",
    "Workflow pengembangan modern dengan Git, containerization Docker, dan arsitektur cloud",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Membangun Solusi Digital dengan Presisi & Kreativitas
          </h2>
        </div>

        {/* Top Split: Bio & Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>{personal.bio}</p>
            <p>
              Saya senantiasa mengikuti perkembangan ekosistem web modern untuk memastikan setiap proyek dibangun dengan standar industri terkini, mulai dari arsitektur frontend yang reaktif hingga implementasi backend yang andal dan terukur.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3.5">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span>Prinsip & Nilai Kerja Utama</span>
              </h3>
              {strengths.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Apa yang Bisa Saya Kerjakan?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    {getServiceIcon(svc.icon)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {svc.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
