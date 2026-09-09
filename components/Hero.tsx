import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
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
          Hi, I’m
          <br />
          Saroj Bhandari<span className="accent">.</span>
        </h1>
        <div className="hero-identity">
          <span className="identity-mark" aria-hidden="true">
            ↳
          </span>
          <RotatingText
            items={[
              "Software Engineer",
              "AI/ML Researcher",
              "Educator",
              "Entrepreneur",
            ]}
          />
        </div>
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
          <span className="cv-placeholder">
            <button className="cv-button" disabled>
              Download CV <ArrowDown size={14} />
            </button>
            <small>TODO: CV file</small>
          </span>
        </div>
        <div className="social-links">
          <a href={PERSONAL_INFO.github}>
            GitHub <ArrowUpRight size={13} />
          </a>
          <a href={PERSONAL_INFO.linkedin}>
            LinkedIn <ArrowUpRight size={13} />
          </a>
          <span className="placeholder">Google Scholar · TODO</span>
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
