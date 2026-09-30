"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { experiences } = portfolioData;
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const filteredItems = experiences.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2 block">
            Jejak Rekayasa & Pendidikan
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
            Pengalaman Kerja & Studi
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Perjalanan pengembangan sistem perangkat lunak nyata dan fondasi akademis yang mendasarinya.
          </p>
        </div>

        {/* Tab Switcher (min 44px tap target) */}
        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setActiveTab("work")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors min-h-[44px] ${
              activeTab === "work"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            <Briefcase className="w-4 h-4 text-zinc-500" />
            <span>Pengalaman Proyek & Kerja</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors min-h-[44px] ${
              activeTab === "education"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            <GraduationCap className="w-4 h-4 text-zinc-500" />
            <span>Pendidikan Tinggi</span>
          </button>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative">
              {/* Clean Timeline Marker */}
              <div className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-zinc-900 dark:bg-zinc-100 border-2 border-white dark:border-zinc-900" />

              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 mb-3">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {item.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
