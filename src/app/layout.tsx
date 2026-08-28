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
  title: "Jovial | Personal Portfolio",
  description: "Portfolio Jovial Wahyu - Web Development Enthusiast & Full Stack Developer yang berfokus pada pengembangan aplikasi web modern, Next.js, React, TypeScript, Node.js, dan database.",
  keywords: ["portfolio", "jovial wahyu", "web development enthusiast", "full stack developer", "nextjs", "react", "typescript", "node.js", "unity", "c#", "game developer", "tailwind css"],
  authors: [{ name: "Jovial Wahyu" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Jovial Wahyu — Personal Portfolio",
    description: "Portfolio Jovial Wahyu - Web Development Enthusiast & Full Stack Developer yang berfokus pada pengembangan aplikasi web modern, Next.js, React, TypeScript, Node.js, dan database.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jovial Wahyu — Personal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jovial Wahyu — Personal Portfolio",
    description: "Portfolio Jovial Wahyu - Web Development Enthusiast & Full Stack Developer.",
    images: ["/og-image.jpg"],
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
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
