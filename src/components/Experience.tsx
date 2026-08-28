"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  const { experiences } = portfolioData;
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const filteredItems = experiences.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Perjalanan Karier & Edukasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Pengalaman & Latar Belakang
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Jejak langkah profesional dan fondasi akademis yang membentuk kapabilitas saya hari ini.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 inline-flex">
            <button
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "work"
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4 text-blue-500" />
              <span>Pengalaman Kerja</span>
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-purple-500" />
              <span>Pendidikan</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 shadow-md group-hover:scale-125 transition-transform" />

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/15 px-3 py-1 rounded-full border border-blue-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {item.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skills tags */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
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
