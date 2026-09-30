"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, Check, Smartphone, Globe, Shield } from "lucide-react";
import Image from "next/image";
import { GithubIcon, GitlabIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-6 sm:p-8 text-zinc-800 dark:text-zinc-100">
        {/* Close Button with accessibility */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Tutup jendela rincian proyek"
          className="absolute top-4 right-4 p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Thumbnail Image */}
        <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950/85 text-white text-xs font-mono z-10">
            {project.category === "Mobile" ? (
              <Smartphone className="w-3.5 h-3.5 text-zinc-300" />
            ) : (
              <Globe className="w-3.5 h-3.5 text-zinc-300" />
            )}
            <span>{project.platform}</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="mb-4">
          <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1.5">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Architectural Highlights */}
        {project.architectureHighlights && project.architectureHighlights.length > 0 && (
          <div className="mb-6 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-200 font-semibold mb-3 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-zinc-500" />
              <span>Sorotan Arsitektur & Rekayasa</span>
            </h3>
            <ul className="space-y-2">
              {project.architectureHighlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <Check className="w-4 h-4 text-zinc-600 dark:text-zinc-400 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Tags */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
            Teknologi yang Digunakan
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          {project.gitlabUrl && (
            <a
              href={project.gitlabUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 min-h-[44px]"
            >
              <GitlabIcon className="w-4 h-4 text-orange-400" />
              <span>Buka Repositori GitLab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium border border-zinc-200 dark:border-zinc-700 transition-colors min-h-[44px]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code GitHub</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-semibold transition-colors min-h-[44px]"
            >
              <span>Kunjungi Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs font-medium min-h-[44px]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
