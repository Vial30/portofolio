"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";
import { FolderGit2, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["Semua", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portofolio & Karya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Proyek Unggulan yang Telah Saya Bangun
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Koleksi proyek nyata yang dirancang untuk performa, keandalan, dan solusi interaktif bagi pengguna.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 sm:gap-8 ${filteredProjects.length <= 2 ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Card Thumbnail */}
              <div>
                <div
                  onClick={() => setActiveModalProject(project)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-xs font-semibold text-slate-900 dark:text-white shadow-md">
                      Lihat Detail
                    </span>
                  </div>
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold z-10">
                    {project.category}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold shadow-md z-10">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3 line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Lihat Detail Proyek</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
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
