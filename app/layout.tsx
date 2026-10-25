import type { Metadata } from "next";
import "./globals.css";
import "./simple.css";
import { Geist } from "next/font/google";
import { MotionProvider } from "@/components/Motion";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/data/seo";
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
const title = SITE_TITLE;
const description = SITE_DESCRIPTION;
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Saroj Bhandari",
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Saroj Bhandari", url: SITE_URL }],
  creator: "Saroj Bhandari",
  publisher: "Saroj Bhandari",
  category: "technology",
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Saroj Bhandari",
    type: "website",
    locale: "en_US",
    images: [{ url: "/image/profile.jpeg", alt: "Saroj Bhandari" }],
  },
  twitter: {
    card: "summary",
    creator: "@saroj_bhandari0",
    title,
    description,
    images: [{ url: "/image/profile.jpeg", alt: "Saroj Bhandari" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="simple-portfolio">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
