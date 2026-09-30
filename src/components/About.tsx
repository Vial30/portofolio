"use client";

import { portfolioData } from "@/data/portfolio";
import { Check, Terminal, Code2, Smartphone, GitBranch } from "lucide-react";

export default function About() {
  const { personal, engineeringPrinciples } = portfolioData;

  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />;
      case 1:
        return <Smartphone className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />;
      case 2:
        return <GitBranch className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />;
      default:
        return <Terminal className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 block">
            Latar Belakang & Pendekatan Teknis
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Fokus Rekayasa Perangkat Lunak
          </h2>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base">
            <p>{personal.bio}</p>
            <p>
              Dalam setiap pengembangan, prioritas saya adalah stabilitas sistem, keterbacaan kode, serta kemudahan proses deployment. Baik itu menangani komunikasi native di React Native maupun membangun arsitektur server di Next.js, saya memastikan bahwa aplikasi dapat diuji dan dipelihara dalam jangka panjang.
            </p>
          </div>

          <div className="lg:col-span-6 p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-semibold mb-4">
              Spesialisasi Utama
            </h3>
            <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                <span>Pengembangan Aplikasi Mobile lintas platform (React Native & Expo SDK 57)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                <span>Integrasi Native Hardware: Kamera QR Scanner, Notifikasi FCM, dan Berkas PDF</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                <span>Arsitektur Fullstack Web berbasis Next.js App Router, TypeScript, dan PostgreSQL</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
                <span>Continuous Deployment: Over-The-Air (OTA) updates dan cloud hosting di Vercel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Engineering Principles Grid */}
        <div>
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-6 font-mono uppercase tracking-wider text-xs">
            Prinsip Rekayasa Perangkat Lunak
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3">
                    {getPrincipleIcon(idx)}
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.description}
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
