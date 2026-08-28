"use client";

import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status availability badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{personal.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
              Halo, Saya <span className="gradient-text">{personal.name}</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300">
                {personal.title}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
              {personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 w-full">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mr-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personal.location}</span>
              </div>

              <div className="flex items-center gap-2">
                {personal.socials.github && (
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.twitter && (
                  <a
                    href={personal.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
                {personal.socials.instagram && (
                  <a
                    href={personal.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Card / Code Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Outer Glow container */}
            <div className="relative w-full max-w-md">
              {/* Floating Decorative Pill 1 */}
              <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Next.js 16 + React 19</span>
              </div>

              {/* Floating Decorative Pill 2 */}
              <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Clean &amp; Scalable Code</span>
              </div>

              {/* Code window preview card */}
              <div className="w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>developer.config.ts</span>
                  </div>
                  <div className="w-8" />
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-400">&quot;{personal.name}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-400">&quot;{personal.title}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-400">&quot;Fullstack Web &amp; Unity Game Dev&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;React&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;TypeScript&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Node.js&quot;</span>,{" "}
                    <span className="text-amber-300">&quot;Unity (C#)&quot;</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{" "}
                    <span className="text-emerald-400">&quot;Open to Collaborate&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">openToWork:</span>{" "}
                    <span className="text-rose-400">true</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-slate-500">
                    &#47;&#47; Ready to build amazing things together!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 transition-transform hover:-translate-y-1 duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
