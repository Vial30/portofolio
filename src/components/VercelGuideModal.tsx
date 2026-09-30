"use client";

import { useState, useEffect, useRef } from "react";
import { X, Copy, Check, Terminal } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VercelGuideModal({ isOpen, onClose }: VercelGuideModalProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyCode = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vercel-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-6 sm:p-8 text-zinc-800 dark:text-zinc-100">
        {/* Close button with 44px min hitbox */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Tutup panduan deployment"
          className="absolute top-4 right-4 p-2.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h2 id="modal-vercel-title" className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Panduan Deployment ke Vercel
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Langkah mempublikasikan portofolio langsung ke domain Vercel.
            </p>
          </div>
        </div>

        {/* Deployment Steps */}
        <div className="space-y-4">
          {/* Method 1: Git Integration */}
          <div className="p-4 sm:p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm mb-3">
              <GithubIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Metode 1: Hubungkan ke GitHub atau GitLab</span>
            </div>

            <ol className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">1. Buat repositori baru di GitHub atau GitLab</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Misalnya beri nama repositori <code className="px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200 font-mono">portfolio</code>.</p>
              </li>

              <li>
                <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-1.5">2. Push kode dari folder C:\Project\Porto</p>
                <div className="relative bg-zinc-950 text-zinc-200 p-3 rounded-md font-mono text-xs overflow-x-auto border border-zinc-800">
                  <code>
                    git add .<br/>
                    git commit -m &quot;Release portfolio&quot;<br/>
                    git branch -M main<br/>
                    git remote add origin https://github.com/USERNAME/portfolio.git<br/>
                    git push -u origin main
                  </code>
                  <button
                    onClick={() => copyCode('git add .\ngit commit -m "Release portfolio"\ngit branch -M main\ngit remote add origin https://github.com/USERNAME/portfolio.git\ngit push -u origin main', 1)}
                    aria-label="Salin baris perintah git"
                    className="absolute top-2 right-2 p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                  >
                    {copiedStep === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </li>

              <li>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">3. Buka Vercel dan Impor Repositori</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Buka <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-zinc-900 dark:text-zinc-100 underline font-medium">vercel.com/new</a>, pilih repositori portofolio, lalu klik <strong>Deploy</strong>.
                </p>
              </li>
            </ol>
          </div>

          {/* Method 2: Vercel CLI */}
          <div className="p-4 sm:p-5 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm mb-2">
              <Terminal className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <span>Metode 2: Menggunakan Vercel CLI</span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
              Jalankan perintah berikut di direktori <code className="px-1 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 font-mono">C:\Project\Porto</code>:
            </p>

            <div className="relative bg-zinc-950 text-zinc-200 p-3 rounded-md font-mono text-xs border border-zinc-800">
              <code>npx vercel</code>
              <button
                onClick={() => copyCode('npx vercel', 2)}
                aria-label="Salin perintah npx vercel"
                className="absolute top-2 right-2 p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
              >
                {copiedStep === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-medium text-xs transition-colors min-h-[44px]"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
}
