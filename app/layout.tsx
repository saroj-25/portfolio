import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saroj | Full-Stack & AI Engineer Portfolio",
  description: "Personal portfolio of Saroj — Senior Full-Stack Developer & AI Engineer specializing in Next.js, React, TypeScript, Python FastAPI, LangChain, and RAG architectures.",
  keywords: [
    "Saroj",
    "Portfolio",
    "Full Stack Engineer",
    "AI Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python FastAPI",
    "LangChain",
    "Machine Learning"
  ],
  authors: [{ name: "Saroj" }],
  openGraph: {
    title: "Saroj | Full-Stack & AI Engineer Portfolio",
    description: "Building Next-Gen Web Applications and Intelligent AI Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
