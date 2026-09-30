"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Smartphone, Server, Cpu } from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-4 h-4" />;
      case 1:
        return <Server className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60";
      case "Advanced":
        return "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/60";
      default:
        return "bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/50";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <span className="text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-2 block">
            Kompetensi & Teknologi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
            Keahlian Teknis & Ekosistem Rekayasa
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Spesialisasi mendalam pada ekosistem mobile React Native serta kapabilitas menyeluruh pada pengembangan web dan arsitektur backend PHP & Laravel.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-8">
          {skillCategories.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 min-h-[44px] ${
                activeTab === idx
                  ? "bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{category.name}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-md font-normal ${
                  activeTab === idx
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                }`}
              >
                {category.badge}
              </span>
            </button>
          ))}
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium">
          {skillCategories[activeTab].description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                    {skill.name}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${getLevelBadgeClass(
                      skill.level
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {skill.context}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
