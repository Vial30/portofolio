import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jovialwahyu.vercel.app"),
  title: "Jovian | Fullstack & Mobile Software Engineer",
  description: "Portofolio Jovian: Software engineer spesialis aplikasi mobile React Native (Expo) dan web app modern Next.js serta TypeScript.",
  keywords: ["portfolio", "jovian", "software engineer", "mobile developer", "react native", "expo", "fullstack", "nextjs", "typescript", "tailwind css"],
  authors: [{ name: "Jovian" }],
  openGraph: {
    title: "Jovian | Fullstack & Mobile Software Engineer",
    description: "Portofolio Jovian: Software engineer spesialis aplikasi mobile React Native (Expo) dan web app modern Next.js serta TypeScript.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovian | Fullstack & Mobile Software Engineer",
    description: "Portofolio Jovian: Software engineer spesialis aplikasi mobile React Native (Expo) dan web app modern Next.js serta TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
