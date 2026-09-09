import type { Metadata } from "next";
import "./globals.css";
const title = "Saroj Bhandari | Software Engineer, AI/ML Researcher & Educator";
const description = "Software engineer, AI/ML researcher, educator, and entrepreneur based in Nepal. Explore Saroj Bhandari’s work in RAG, NLP, intelligent software systems, and education.";
export const metadata: Metadata = {
 metadataBase: new URL("https://sarojbhandari100.com.np"), title, description,
 authors: [{name:"Saroj Bhandari"}], alternates:{canonical:"/"},
 openGraph:{title,description,url:"/",siteName:"Saroj Bhandari",type:"website",locale:"en_US"},
 twitter:{card:"summary",title,description}, robots:{index:true,follow:true},
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {return <html lang="en"><body>{children}</body></html>;}
