"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Smartphone, Layout, Database } from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />;
      case 1:
        return <Layout className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />;
      default:
        return <Database className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 block">
            Kompetensi & Teknologi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Keahlian Teknis & Ekosistem
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Penguasaan alat dan pustaka pemrograman yang diterapkan langsung pada arsitektur aplikasi produksi.
          </p>
        </div>

        {/* Category Tabs (min 44px tap target) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((category, idx) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors min-h-[44px] ${
                activeTab === idx
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 font-mono">
          {skillCategories[activeTab].description}
        </p>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {skill.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
