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
  title: "Jovial Wahyu Aji Pradhana | Mobile & Software Engineer",
  description: "Portofolio Jovial Wahyu Aji Pradhana: Mobile & Software Engineer spesialis React Native, Expo, dan integrasi sistem cerdas. Pengembang Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO.",
  keywords: [
    "portfolio",
    "jovial wahyu",
    "jovial wahyu aji pradhana",
    "mobile engineer",
    "software engineer",
    "react native",
    "expo",
    "unimus",
    "bisindo",
    "deep learning",
    "typescript",
  ],
  authors: [{ name: "Jovial Wahyu Aji Pradhana" }],
  openGraph: {
    title: "Jovial Wahyu Aji Pradhana | Mobile & Software Engineer",
    description: "Portofolio Jovial Wahyu Aji Pradhana: Mobile & Software Engineer spesialis React Native, Expo, dan integrasi sistem cerdas. Pengembang Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovial Wahyu Aji Pradhana | Mobile & Software Engineer",
    description: "Portofolio Jovial Wahyu Aji Pradhana: Mobile & Software Engineer spesialis React Native, Expo, dan integrasi sistem cerdas. Pengembang Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO.",
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
