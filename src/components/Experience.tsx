"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { experiences } = portfolioData;
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const filteredItems = experiences.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
            Experience & Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Pengembangan mobile application, integrasi backend PHP & Laravel, serta latar belakang pendidikan akademik.
          </p>
        </div>

        <div className="flex gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab("work")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 min-h-[44px] ${
              activeTab === "work"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work & Projects</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 min-h-[44px] ${
              activeTab === "education"
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>
        </div>

        <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute -left-[31px] top-2 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-slate-900" />

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {item.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {item.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-medium"
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
