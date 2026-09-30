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
    <section id="projects" className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-mono mb-3">
            <span>Rekayasa Mobile & AI</span>
            <span>•</span>
            <span>3 Proyek Nyata</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Karya Rekayasa Perangkat Lunak
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Aplikasi mobile produksi dan riset deep learning yang dirancang dengan integrasi hardware kamera, notifikasi push FCM, pembaruan OTA, serta streaming WebSocket real-time.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Visual Preview */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="lg:col-span-5 relative h-56 sm:h-64 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer group"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-200 group-hover:scale-102"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950/85 text-white text-xs font-mono z-10">
                    <Smartphone className="w-3.5 h-3.5 text-zinc-300" />
                    <span>{project.platform}</span>
                  </div>
                  {project.stats && (
                    <div className="absolute bottom-3 left-3 right-3 p-2 rounded bg-zinc-950/85 backdrop-blur-sm text-white text-[11px] font-mono flex justify-between items-center z-10">
                      <span className="text-zinc-400">{project.stats.label}:</span>
                      <span className="font-medium text-zinc-200">{project.stats.value}</span>
                    </div>
                  )}
                </div>

                {/* Technical Details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {project.category}
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors mb-1.5 flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="mb-4 space-y-1.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5 mb-1 font-semibold">
                        <Shield className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Sorotan Arsitektur</span>
                      </div>
                      {project.architectureHighlights.slice(0, 2).map((highlight, idx) => (
                        <p key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <span className="text-zinc-400 font-bold">•</span>
                          <span>{highlight}</span>
                        </p>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions (min 44px tap targets) */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors min-h-[44px]"
                    >
                      Buka Rincian Arsitektur
                    </button>

                    {project.gitlabUrl && (
                      <a
                        href={project.gitlabUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Lihat repositori di GitLab"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors min-h-[44px]"
                      >
                        <GitlabIcon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                        <span>GitLab</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Lihat repositori di GitHub"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors min-h-[44px]"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
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

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
