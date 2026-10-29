import Image from "next/image";
import { ArrowUpRight, BookOpen, BrainCircuit, GraduationCap, Code2, Server, PanelsTopLeft, Database, Sparkles, Terminal, FlaskConical, CalendarDays, MapPin, ChevronDown, FileText, Smile, Target } from "lucide-react";
import {
  featuredWorks,
  moreWorks,
  experience,
  skills,
  subjects,
  interests,
  publication,
} from "@/data/redesign";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import { SCHOLAR_URL } from "@/data/seo";
import type { CSSProperties, ReactNode } from "react";
import ProjectList, { type ProjectCard } from "./ProjectList";
import TeachingShowcase from "./TeachingShowcase";
import TrainingGallery from "./TrainingGallery";
import Organizations from "./Organizations";
import CitationButton from "./CitationButton";
import { GitHubIcon } from "./SocialIcons";
import LabTerminal from "./LabTerminal";

const skillIcons = [Code2, Server, PanelsTopLeft, BrainCircuit, Database, Sparkles, Terminal];

function Section({
  id,
  number,
  label,
  title,
  children,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section container" data-reveal>
      <div className="section-label">
        <span>
          {number} / {label}
        </span>
        <h2>{title}</h2>
      </div>
      <div className="section-body">{children}</div>
    </section>
  );
}

export default function PortfolioSections() {
  const extra: ProjectCard[] = PROJECTS.filter((p) =>
    [
      "kritim-mind-tech-platform",
      "mirayas-construction-platform",
      "pahadi-research-cloud-platform",
    ].includes(p.id),
  ).map((p) => ({
    title: p.title,
    kind: p.category.toUpperCase(),
    visual: "platform",
    description: p.description,
    technology: p.tags.join(" · "),
    role: "Software development",
    url: p.liveUrl ?? null,
    github: p.githubUrl ?? null,
    paper: null,
  }));
  const otherProjects: ProjectCard[] = [...moreWorks, ...extra];
  return (
    <>
      <section id="work" className="work-section container">
        <div className="editorial-heading" data-reveal>
          <div>
            <p className="eyebrow">02 / FROM IDEAS TO IMPLEMENTATION</p>
            <h2>
              Selected work<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Useful software.{" "}
            <br />
            <em>Thoughtful experiments.</em>
          </p>
        </div>
        <ProjectList projects={featuredWorks} />
        <details className="more-work">
          <summary>
            <span className="more-work-closed">View more projects ({otherProjects.length})</span>
            <span className="more-work-open">Show fewer projects</span>
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <ProjectList projects={otherProjects} startIndex={featuredWorks.length} />
        </details>
      </section>

      <section className="writing-note container" aria-labelledby="writing-title">
        <p className="eyebrow">WRITING / PRACTICAL NOTES</p>
        <h2 id="writing-title">Designing a RAG chatbot for college questions</h2>
        <p>Source documents, retrieval, unanswered questions and evaluation — a technical note alongside my Aadim Chatbot project.</p>
        <a className="text-link" href="/writing/rag-college-chatbot-design">Read the technical note <ArrowUpRight size={16} /></a>
      </section>

      <section id="research" className="research-band">
        <div className="container" data-reveal>
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">03 / QUESTIONS WORTH EXPLORING</p>
              <h2>
                Research &amp;
                {" "}
                <em>Publications.</em>
              </h2>
            </div>
            <p>
              Language. Retrieval. Learning.{" "}
              <br />
              AI that works for Nepali learners.
            </p>
          </div>
          <ul className="interest-list" aria-label="Research interests">
            {interests.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <article className="pub-card" data-reveal>
            <aside className="pub-cover" aria-label="Publication details">
              <span className="pub-cover-badge"><BookOpen size={14} aria-hidden="true" /> Peer-reviewed article</span>
              <strong className="pub-cover-year">{publication.year}</strong>
              <span className="pub-cover-venue">{publication.venue}</span>
              <span className="pub-cover-meta">Vol. {publication.pages}</span>
              <span className="pub-cover-doi">DOI {publication.doi}</span>
            </aside>
            <div className="pub-body">
              <p className="entry-type">FIRST PUBLICATION · NLP × RAG × EDUCATION</p>
              <h3>{publication.title}</h3>
              <p className="pub-authors">
                <span className="pub-me">Bhandari, S.</span> &amp; Dhital, P.
              </p>
              <p className="pub-abstract">
                A RAG-based approach to algorithm learning using Romanized
                Nepali and English. This work connects information retrieval,
                Nepali NLP, and AI for education.
              </p>
              <ol className="pub-pipeline" aria-label="Method pipeline">
                {[
                  ["Query", "English + Romanized Nepali"],
                  ["Retrieve", "BM25 · FAISS · HNSW"],
                  ["Re-rank", "Hybrid retrieval"],
                  ["Generate", "GPT-4 · Llama 3"],
                ].map(([step, detail], i) => (
                  <li key={step} style={{ "--step": i } as CSSProperties}>
                    <strong>{step}</strong>
                    <span>{detail}</span>
                  </li>
                ))}
              </ol>
              <div className="pub-results">
                {[
                  { value: "0.79", label: "Precision at 5", fill: 79, icon: Target },
                  { value: "4.31/5", label: "Student satisfaction", fill: 86, icon: Smile },
                ].map(({ value, label, fill, icon: Icon }) => (
                  <div key={label} className="pub-metric">
                    <span className="pub-metric-icon" aria-hidden="true"><Icon size={18} /></span>
                    <div>
                      <strong>{value}</strong>
                      <span>{label}</span>
                      <span className="pub-meter" aria-hidden="true"><i style={{ width: `${fill}%` }} /></span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small-note">Reported results from the project evaluation.</p>
              <div className="pub-actions">
                <a className="pub-primary" href={publication.url}>
                  <FileText size={16} aria-hidden="true" /> Read Paper <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a className="pub-secondary" href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer">
                  <GraduationCap size={16} aria-hidden="true" /> Google Scholar
                </a>
                <CitationButton />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="lab" className="lab-section" aria-labelledby="lab-title">
        <div className="container">
          <div className="lab-feature" data-reveal>
            <div className="lab-feature-copy">
              <p className="lab-kicker"><FlaskConical size={15} aria-hidden="true" /> THE EXPERIMENTS CONTINUE</p>
              <h2 id="lab-title">Saroj Bhandari <em>Labs.</em></h2>
              <p className="lab-lead">
                My open workshop on GitHub. This is where I prototype ideas in
                applied AI and share the code so others can learn from it and
                build on it.
              </p>
              <ul className="lab-focus" aria-label="Lab focus areas">
                {["RAG & retrieval", "Nepali NLP", "LLMs & agents", "Computer vision", "ML experiments"].map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <div className="lab-actions">
                <a className="lab-primary" href={PERSONAL_INFO.lab}>
                  <GitHubIcon size={18} /> Explore the Lab <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="lab-secondary" href={PERSONAL_INFO.github}>
                  Personal GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <LabTerminal href={PERSONAL_INFO.lab} />
          </div>
        </div>
      </section>

      <Section
        id="experience"
        number="04"
        label="ALONG THE WAY"
        title="Experience"
      >
        <div className="xp-timeline">
          {experience.map((e) => (
            <article className="xp-card" key={e.company} data-reveal>
              <div className="xp-meta">
                <span className="xp-period">
                  {e.period.includes("Present") && <span className="xp-live" aria-hidden="true" />}
                  <CalendarDays size={14} aria-hidden="true" /> {e.period}
                </span>
                <span className="xp-location"><MapPin size={14} aria-hidden="true" /> {e.location}</span>
              </div>
              <h3>{e.role}</h3>
              <Organizations names={e.organizations} />
              <ul className="xp-points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section id="teaching" className="teaching-band">
        <div className="container teaching-layout" data-reveal>
          <div>
            <p className="eyebrow">05 / KNOWLEDGE IS BETTER SHARED</p>
            <div className="teaching-heading">
              <h2>I also <em>teach.</em></h2>
              <div className="teaching-icons" aria-hidden="true">
                <span data-reveal><BookOpen size={25} strokeWidth={1.6} /></span>
                <span data-reveal data-reveal-delay="90"><BrainCircuit size={25} strokeWidth={1.6} /></span>
                <span data-reveal data-reveal-delay="180"><GraduationCap size={27} strokeWidth={1.6} /></span>
              </div>
            </div>
            <p>
              Helping students move from understanding an idea to building
              something with it.
            </p>
            <p className="teaching-credit">
              Adjunct Lecturer · Texas International College · Aadim National
              College
            </p>
          </div>
          <TeachingShowcase />
          <details className="all-subjects">
            <summary>
              All subjects &amp; mentoring <span>+</span>
            </summary>
            <p>
              I guide students through programming, machine learning projects,
              and research. Teaching is central to my professional identity.
            </p>
            <ul className="subjects">
              {subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <Section
        id="education"
        number="06"
        label="THE FOUNDATION"
        title="Education"
      >
        <div className="education-summary"><div>
        <article className="education-entry" data-reveal>
          <p className="entry-type">2023</p>
          <h3>B.Sc. CSIT</h3>
          <p className="organization">Tribhuvan University</p>
          <p>Orchid International College</p>
          <p className="education-score">
            86% overall <span>·</span> 92.4% in the eighth semester
          </p>
          <p className="award">Tribhuvan University Topper · 8th Semester</p>
        </article>
        <article className="education-entry" data-reveal>
          <h3>+2 Science</h3>
          <p>VS Niketan College · GPA: 3.63 / 4.00</p>
          <p className="award">HISSAN Meritorious Student Award — 2019</p>
        </article>
        </div>
        <figure className="graduation-memory" data-reveal>
          <a href="/image/graduation.webp" target="_blank" rel="noopener noreferrer" aria-label="Open graduation photo at full size">
            <Image src="/image/graduation.webp" alt="Saroj Bhandari in a graduation cap and gown at a flower-adorned podium at The Soaltee, Kathmandu." width={987} height={1040} sizes="(max-width: 640px) 90vw, 440px" />
            <span className="graduation-expand"><ArrowUpRight size={19} /> View photo</span>
          </a>
          <figcaption><strong>B.Sc. CSIT graduation</strong></figcaption>
        </figure>
        </div>
      </Section>

      <section id="achievements" className="milestones container" data-reveal>
        <div className="achievement-layout">
        <div>
        <p className="eyebrow">ACHIEVEMENTS</p>
        <h2>A few milestones.</h2>
        <dl className="milestone-list">
          {[
            ["86%", "B.Sc. CSIT"],
            ["92.4%", "Final semester · TU Topper"],
            ["01", "Published research journal"],
            ["2023", "Graduation"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        </div>
        <figure className="achievement-photo">
          <a href="/image/tu-topper.webp" target="_blank" rel="noopener noreferrer" aria-label="View TU Topper recognition at full size">
            <Image src="/image/tu-topper.webp" alt="Orchid International College congratulates Saroj Bhandari as TU Topper with 92.4% in the B.Sc. CSIT eighth semester." width={526} height={527} sizes="(max-width: 640px) 220px, 240px" />
          </a>
          <figcaption>TU Topper · 8th semester</figcaption>
        </figure>
        </div>
      </section>

      <TrainingGallery />

      <Section
        id="skills"
        number="07"
        label="THE TOOLKIT"
        title="Technical Skills"
      >
        <div className="skills-marquee">
          <div className="skills-track">
            {[false, true].map((copy) => (
              <dl key={String(copy)} className="skills-list" aria-hidden={copy || undefined}>
                {skills.map(([label, value], index) => {
                  const Icon = skillIcons[index];
                  return (
                    <div key={label}>
                      <dt><Icon size={21} aria-hidden="true" />{label}</dt>
                      <dd>{value.split(", ").map(skill => <span key={skill}>{skill}</span>)}</dd>
                    </div>
                  );
                })}
              </dl>
            ))}
          </div>
        </div>
      </Section>

      <section id="entrepreneurship" className="venture container" data-reveal>
        <div>
          <p className="eyebrow">08 / ENTREPRENEURSHIP</p>
          <h2>
            Building
            {" "}
            <em>beyond code.</em>
          </h2>
        </div>
        <div className="venture-copy">
          <div className="venture-brand">
            <Image src="/image/organizations/kritim-mind.png" alt="Kritim Mind Technologies logo" width={128} height={128} sizes="64px" />
            <h3>Kritim Mind Technologies</h3>
          </div>
          <p>
            As CEO of Kritim Mind Technologies Pvt. Ltd., I lead work across
            software, education technology, AI, and digital solutions. Through
            Kritim Mind, we build entrance preparation tools - KritimGuru for
            students in Nepal.
          </p>
          <a className="text-link" href="https://kritimmind.com">
            Kritim Mind Technologies <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
