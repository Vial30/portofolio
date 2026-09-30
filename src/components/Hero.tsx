"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowRight, Download, MapPin, Smartphone, ArrowUpRight, Check } from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";

export default function Hero() {
  const { personal, metrics, projects } = portfolioData;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personal.availability}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 leading-tight mb-3">
              {personal.name}
            </h1>
            <p className="text-lg sm:text-xl text-emerald-800 dark:text-emerald-400 font-medium mb-4 flex items-center gap-2">
              <span>{personal.title}</span>
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              {personal.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:text-white font-medium text-sm transition-all duration-150 shadow-sm hover:shadow min-h-[44px]"
              >
                <span>Lihat Karya Unggulan</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 font-medium text-sm border border-slate-200 dark:border-slate-700/80 transition-all duration-150 shadow-xs min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mr-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {personal.socials.github && (
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil GitHub Jovial Wahyu Aji Pradhana"
                    className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.gitlab && (
                  <a
                    href={personal.socials.gitlab}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil GitLab Jovial Wahyu Aji Pradhana"
                    className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <GitlabIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </a>
                )}
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil LinkedIn Jovial Wahyu Aji Pradhana"
                    className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.whatsapp && (
                  <a
                    href={personal.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Hubungi WhatsApp Jovial Wahyu Aji Pradhana"
                    className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <WhatsappIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-semibold">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Karya Mobile & Cerdas Unggulan</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-medium">
                  React Native
                </span>
              </div>

              <div className="space-y-3">
                {projects.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="block p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-150 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-2.5">
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5 shadow-xs">
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Diuji pada perangkat fisik kampus dengan kamera native QR scanner, integrasi backend Laravel, dan push notification FCM.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-1">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mb-0.5">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
