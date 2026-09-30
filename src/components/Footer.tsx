"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100 text-sm">
              <span>{personal.name}</span>
              <span className="text-slate-400 font-normal">© {new Date().getFullYear()}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Mobile App Software Engineer & Web Developer.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {personal.socials.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Jovial Wahyu Aji Pradhana"
                className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {personal.socials.gitlab && (
              <a
                href={personal.socials.gitlab}
                target="_blank"
                rel="noreferrer"
                aria-label="GitLab Jovial Wahyu Aji Pradhana"
                className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <GitlabIcon className="w-4 h-4 text-orange-500" />
              </a>
            )}
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Jovial Wahyu Aji Pradhana"
                className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                className="p-2.5 rounded-xl text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Kembali ke bagian atas halaman"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
