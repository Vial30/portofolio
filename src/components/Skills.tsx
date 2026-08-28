"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Cpu, CheckCircle2, Code2, Server, Wrench, Gamepad2 } from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (name: string) => {
    if (name.includes("Frontend")) return <Code2 className="w-4 h-4" />;
    if (name.includes("Backend")) return <Server className="w-4 h-4" />;
    if (name.includes("Game")) return <Gamepad2 className="w-4 h-4" />;
    return <Wrench className="w-4 h-4" />;
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      case "Advanced":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "Proficient":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian & Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Alat & Teknologi yang Saya Gunakan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Menggabungkan teknologi frontend terkini, backend arsitektur tangguh, dan ekosistem modern untuk hasil optimal.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80"
              }`}
            >
              {getCategoryIcon(category.name)}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                  {skill.name}
                </span>
              </div>
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getLevelBadgeClass(
                  skill.level
                )}`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
