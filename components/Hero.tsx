import Image from "next/image";
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, FlaskConical, GraduationCap, Mail, Rocket } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GitHubIcon, LinkedInIcon, XIcon } from "./SocialIcons";
import { SCHOLAR_URL } from "@/data/seo";
import { RotatingText } from "./Motion";

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <a className="hero-main-photo" href="#about" aria-label="About Saroj Bhandari">
        <Image src="/image/profile.webp" alt="Saroj Bhandari" width={240} height={240} sizes="(max-width: 640px) 160px, 240px" priority />
      </a>
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="location-dot" /> KATHMANDU, NEPAL{" "}
          <span className="eyebrow-rule" />
        </p>
        <h1 className="hero-introduction">
          <span className="hero-greeting">Hi, I’m</span>{" "}
          <span className="hero-intro-row">
            <span className="hero-name">Saroj Bhandari<span className="accent">.</span></span>
          </span>
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
          <a href={PERSONAL_INFO.github} data-brand="github">
            <GitHubIcon /> GitHub
          </a>
          <a href={PERSONAL_INFO.twitter} data-brand="x">
            <XIcon /> X / Twitter
          </a>
          <a href={PERSONAL_INFO.linkedin} data-brand="linkedin">
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GraduationCap size={16} aria-hidden="true" /> Scholar
          </a>
          <a href={PERSONAL_INFO.lab}>
            <FlaskConical size={16} aria-hidden="true" /> My Lab
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <Mail size={16} aria-hidden="true" /> Email
          </a>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="hero-manifesto"><span><Code2 size={18} aria-hidden="true" /> Engineering with <strong>purpose.</strong></span><span><BrainCircuit size={18} aria-hidden="true" /> Research with <strong>curiosity.</strong></span></span>
        <a href="#about">
          A little about me <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
