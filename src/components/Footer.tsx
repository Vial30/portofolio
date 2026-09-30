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
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Technical Footnote */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
              <span>{personal.name}</span>
              <span className="text-zinc-400 font-normal font-mono">© {new Date().getFullYear()}</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-2">
            {personal.socials.github && (
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Jovial Wahyu Aji Pradhana"
                className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <GitlabIcon className="w-4 h-4" />
              </a>
            )}
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Jovial Wahyu Aji Pradhana"
                className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {personal.socials.whatsapp && (
              <a
                href={personal.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Jovial Wahyu Aji Pradhana"
                className="p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Kembali ke bagian atas halaman"
              className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
