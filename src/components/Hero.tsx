"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowRight, Download, MapPin, Smartphone, ArrowUpRight, Check } from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";

export default function Hero() {
  const { personal, metrics, projects } = portfolioData;
  const mobileProjects = projects.filter((p) => p.category === "Mobile");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Personal Narrative & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Real status indicator: Simple Modern */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{personal.availability}</span>
            </div>

            {/* Headline: Clean & Direct */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight mb-3">
              {personal.name}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal mb-5">
              {personal.title}
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl">
              {personal.tagline}
            </p>

            {/* High-Contrast Monochrome CTAs (min 44px height) */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-sm transition-colors min-h-[44px]"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium text-sm border border-zinc-300 dark:border-zinc-700 transition-colors min-h-[44px]"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV</span>
              </a>
            </div>

            {/* Location & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 w-full">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mr-2 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {personal.socials.github && (
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil GitHub"
                    className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.gitlab && (
                  <a
                    href={personal.socials.gitlab}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil GitLab"
                    className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <GitlabIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Profil LinkedIn"
                    className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.whatsapp && (
                  <a
                    href={personal.socials.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Hubungi WhatsApp"
                    className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Real Mobile App Highlight Card (Clean & Modern) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-200/80 dark:border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 font-semibold">
                  <Smartphone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Karya Mobile Unggulan</span>
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">React Native</span>
              </div>

              <div className="space-y-3">
                {mobileProjects.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="block p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-2.5">
                      {p.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Architecture footnote */}
            <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2.5">
              <Check className="w-4 h-4 text-zinc-700 dark:text-zinc-300 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Diuji pada lingkungan fisik kampus dengan kamera native QR scanner, push notification FCM, dan update Over-The-Air.
              </p>
            </div>
          </div>
        </div>

        {/* Real Metrics Row: Clean Minimalist Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                {m.value}
              </div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-0.5">
                {m.label}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
