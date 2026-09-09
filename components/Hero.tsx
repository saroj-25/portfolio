import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
export default function Hero() {
 return <section id="home" className="hero container">
   <div className="hero-copy"><p className="eyebrow"><span className="location-dot"/> BASED IN NEPAL</p>
   <h1><span>Hello, I am</span>Saroj Bhandari<span className="accent">.</span></h1>
   <p className="hero-role">Software Engineer, AI/ML Researcher &amp; Educator</p>
   <p className="hero-intro">I build software systems, explore applied AI/ML research, and teach the next generation of technology professionals. My interests include RAG, NLP, machine learning, data science, and intelligent software systems.</p>
   <div className="hero-actions"><a className="button primary" href="#work">View My Work <ArrowDown size={16}/></a><span className="cv-placeholder"><button className="button secondary" disabled>Download CV</button><small>CV to be added</small></span></div>
   <div className="social-links"><a href={PERSONAL_INFO.github}>GitHub <ArrowUpRight size={13}/></a><a href={PERSONAL_INFO.linkedin}>LinkedIn <ArrowUpRight size={13}/></a><span className="placeholder">Google Scholar · link pending</span><a href={`mailto:${PERSONAL_INFO.email}`}>Email <ArrowUpRight size={13}/></a></div></div>
   <figure className="portrait"><Image src="/image/profile.webp" alt="Saroj Bhandari" width={340} height={390} sizes="(max-width: 640px) 190px, 290px" preload/><figcaption>ENGINEERING · RESEARCH · EDUCATION</figcaption></figure>
 </section>;
}
