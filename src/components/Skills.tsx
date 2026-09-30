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

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
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
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{category.name}</span>
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
              className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1.5">
                  {skill.name}
                </h3>
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
