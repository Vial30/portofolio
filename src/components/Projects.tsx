"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Smartphone, Shield } from "lucide-react";
import Image from "next/image";
import { GithubIcon, GitlabIcon } from "./SocialIcons";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium mb-3">
            <span>Rekayasa Mobile & Cerdas</span>
            <span>•</span>
            <span>3 Proyek Nyata</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
            Karya Rekayasa Perangkat Lunak
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Aplikasi mobile produksi dan riset deep learning yang dirancang dengan integrasi hardware kamera, notifikasi push FCM, pembaruan OTA via Stallion, integrasi REST API backend, serta streaming WebSocket real-time.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="lg:col-span-5 relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer group shadow-inner"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-300 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-xs text-white text-xs font-medium z-10">
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.platform}</span>
                  </div>
                  {project.stats && (
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-950/85 backdrop-blur-xs text-white text-[11px] flex justify-between items-center z-10">
                      <span className="text-slate-400">{project.stats.label}:</span>
                      <span className="font-semibold text-emerald-300">{project.stats.value}</span>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-[10px] uppercase font-semibold border ${
                          project.category === "Mobile & AI"
                            ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/60"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 cursor-pointer hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors mb-1.5 flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4 space-y-1.5 p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50">
                      <div className="text-[11px] uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1 font-semibold">
                        <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Sorotan Arsitektur Teknis</span>
                      </div>
                      {project.architectureHighlights.slice(0, 2).map((highlight, idx) => (
                        <p key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 hover:bg-slate-800 transition-colors min-h-[44px] shadow-xs"
                    >
                      Buka Rincian Arsitektur
                    </button>

                    {project.gitlabUrl && (
                      <a
                        href={project.gitlabUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Lihat repositori di GitLab"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors min-h-[44px]"
                      >
                        <GitlabIcon className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                        <span>GitLab</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Lihat repositori di GitHub"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors min-h-[44px]"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
