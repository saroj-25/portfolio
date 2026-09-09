import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { MotionProvider } from "@/components/Motion";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
const title = "Saroj Bhandari — Software Engineer, AI/ML Researcher & Educator";
const description =
  "Software engineer, AI/ML researcher, educator, and entrepreneur based in Nepal. Explore Saroj Bhandari’s work in RAG, NLP, intelligent software systems, and education.";
export const metadata: Metadata = {
  metadataBase: new URL("https://sarojbhandari100.com.np"),
  title,
  description,
  authors: [{ name: "Saroj Bhandari" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Saroj Bhandari",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
