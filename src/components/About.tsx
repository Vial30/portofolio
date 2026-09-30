"use client";

import { portfolioData } from "@/data/portfolio";
import { Check, Smartphone, Layers, GitBranch, Server } from "lucide-react";

export default function About() {
  const { personal, engineeringPrinciples } = portfolioData;

  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 2:
        return <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      default:
        return <GitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Software Engineering Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            <p>{personal.bio}</p>
            <p>
              Dalam setiap software development, fokus utama saya adalah stabilitas performa pada physical devices, efisiensi resource, dan kemudahan maintenance jangka panjang. Mulai dari mengoptimalkan native camera hardware pada React Native, merancang REST API backend yang scalable dengan PHP & Laravel, hingga mengintegrasikan real-time deep learning streaming, seluruh alur dibangun dengan clean architecture.
            </p>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-xs">
            <h3 className="text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200 font-semibold mb-4">
              Core Expertise
            </h3>
            <ul className="space-y-3.5 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-slate-100 font-medium">Mobile App Development (Core)</strong>: React Native (Expo SDK 57), hardware camera integration, dan native performance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-slate-100 font-medium">Web & Backend Development</strong>: PHP, Laravel (Eloquent, REST API, Sanctum), Next.js, dan TypeScript</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-slate-100 font-medium">AI & Deep Learning Integration</strong>: MediaPipe spatio-temporal, PyTorch Bi-LSTM, dan real-time WebSocket streaming</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 dark:text-slate-100 font-medium">Continuous Delivery & OTA Deployment</strong>: Stallion Over-The-Air updates dan automated cloud deployment</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-6 uppercase tracking-wider">
            Engineering Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engineeringPrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center mb-3">
                    {getPrincipleIcon(idx)}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
