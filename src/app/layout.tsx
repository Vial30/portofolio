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
  title: "Jovial Wahyu Aji Pradhana | Mobile App Software Engineer & Web Developer",
  description: "Portofolio Jovial Wahyu Aji Pradhana: Mobile App Software Engineer & Web Developer spesialis React Native (Expo) dan web backend PHP / Laravel. Pengembang Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO.",
  keywords: [
    "portfolio",
    "jovial wahyu",
    "jovial wahyu aji pradhana",
    "mobile app engineer",
    "web developer",
    "react native",
    "expo",
    "php",
    "laravel",
    "typescript",
    "unimus",
    "bisindo",
  ],
  authors: [{ name: "Jovial Wahyu Aji Pradhana" }],
  openGraph: {
    title: "Jovial Wahyu Aji Pradhana | Mobile App Software Engineer & Web Developer",
    description: "Portofolio Jovial Wahyu Aji Pradhana: Mobile App Software Engineer & Web Developer spesialis React Native (Expo) dan web backend PHP / Laravel. Pengembang Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovial Wahyu Aji Pradhana | Mobile App Software Engineer & Web Developer",
    description: "Portofolio Jovial Wahyu Aji Pradhana: Mobile App Software Engineer & Web Developer spesialis React Native (Expo) dan web backend PHP / Laravel. Pengembang Dipma UNIMUS Mobile, Smart Room UNIMUS, dan IsyaratKu BISINDO.",
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
