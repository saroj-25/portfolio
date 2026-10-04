import Image from "next/image";
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, GraduationCap, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SCHOLAR_URL } from "@/data/seo";
import { RotatingText } from "./Motion";
import KnowledgeNetwork from "./KnowledgeNetwork";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="location-dot" /> KATHMANDU, NEPAL{" "}
          <span className="eyebrow-rule" />
        </p>
        <h1>
          <span className="hero-greeting">
            <Image className="hero-portrait" src="/image/profile-icon.png" alt="" width={80} height={80} sizes="(max-width: 640px) 64px, 80px" />
            Hi, I’m
          </span>{" "}
          <span className="hero-name">Saroj Bhandari<span className="accent">.</span></span>
        </h1>
        <div className="hero-identity">
          <span className="identity-mark" aria-hidden="true">
            ↳
          </span>
          <RotatingText
            className="hero-role"
            items={[
              "Software Engineer",
              "AI/ML Researcher",
              "Educator",
              "Entrepreneur",
            ]}
          />
        </div>
        <nav className="hero-specialties" aria-label="Explore my work by field">
          <a href="#research"><BrainCircuit size={17} /><span>AI &amp; ML</span><ArrowUpRight size={14} /></a>
          <a href="#work"><Code2 size={17} /><span>Engineering</span><ArrowUpRight size={14} /></a>
          <a href="#training"><GraduationCap size={17} /><span>Education</span><ArrowUpRight size={14} /></a>
          <a href="#entrepreneurship"><Rocket size={17} /><span>Entrepreneurship</span><ArrowUpRight size={14} /></a>
        </nav>
        <p className="hero-intro">
          I build software systems, explore applied AI/ML research, and teach
          technology. My work sits at the intersection of engineering,
          intelligent systems, and education.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore My Work <ArrowUpRight size={17} />
          </a>
          <a className="button secondary" href="#research">
            View Research <ArrowUpRight size={17} />
          </a>

        </div>
        <div className="social-links">
          <a href={PERSONAL_INFO.github}>
            GitHub <ArrowUpRight size={13} />
          </a>
          <a href={PERSONAL_INFO.linkedin}>
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar <ArrowUpRight size={13} />
          </a>

          <a href={`mailto:${PERSONAL_INFO.email}`}>
            Email <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <KnowledgeNetwork />
      <div className="hero-bottom">
        <span>ENGINEERING WITH PURPOSE. RESEARCH WITH CURIOSITY.</span>
        <a href="#about">
          A little about me <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
