import Image from "next/image";
import { ArrowUpRight, BookOpen, BrainCircuit, GraduationCap, Code2, Server, PanelsTopLeft, Database, Sparkles, Terminal, FlaskConical } from "lucide-react";
import {
  works,
  experience,
  skills,
  subjects,
  interests,
  publication,
} from "@/data/redesign";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import type { ReactNode } from "react";
import ProjectList from "./ProjectList";
import { RotatingText } from "./Motion";
import TrainingGallery from "./TrainingGallery";
import Organizations from "./Organizations";
import CitationButton from "./CitationButton";

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
  const extra = PROJECTS.filter((p) =>
    [
      "kritim-mind-tech-platform",
      "mirayas-construction-platform",
      "pahadi-research-cloud-platform",
    ].includes(p.id),
  );
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
            Useful software.
            <br />
            <em>Thoughtful experiments.</em>
          </p>
        </div>
        <ProjectList projects={works} />
        <details className="additional-work">
          <summary>
            More engineering &amp; AI work <span>+</span>
          </summary>
          <div className="extra-grid">
            {extra.map((p) => (
              <article key={p.id} className="extra-project">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className="small-note">
                  {p.tags.join(" · ")}
                  <br />
                  My role: Software development
                </p>
                {p.liveUrl && (
                  <a className="text-link" href={p.liveUrl}>
                    View Project <ArrowUpRight size={15} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </details>
      </section>

      <section id="research" className="research-band">
        <div className="container" data-reveal>
          <div className="editorial-heading">
            <div>
              <p className="eyebrow">03 / QUESTIONS WORTH EXPLORING</p>
              <h2>
                Research &amp;
                <br />
                <em>Publications.</em>
              </h2>
            </div>
            <p>
              Language. Retrieval. Learning.
              <br />
              AI that works for Nepali learners.
            </p>
          </div>
          <div className="interest-list">
            {interests.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <article className="publication" data-reveal>
            <div className="publication-year">
              <BookOpen size={32} aria-hidden="true" />
              {publication.year}
              <span>JOURNAL ARTICLE</span>
            </div>
            <div className="publication-body">
              <p className="entry-type">AADIM JOURNAL · FIRST PUBLICATION</p>
              <h3>{publication.title}</h3>
              <p className="authors">{publication.authors}</p>
              <p className="venue">
                <em>{publication.venue}</em> · {publication.pages}
              </p>
              <p>
                A RAG-based approach to algorithm learning using Romanized
                Nepali and English. This work connects information retrieval,
                Nepali NLP, and AI for education.
              </p>
              <div className="research-results">
                <span>
                  <strong>0.79</strong> Precision at 5
                </span>
                <span>
                  <strong>4.31/5</strong> Student satisfaction
                </span>
              </div>
              <p className="small-note">
                Reported results from the project evaluation.
              </p>
              <div className="entry-links">
                <a href={publication.url}>
                  Read Paper <ArrowUpRight size={16} />
                </a>
                <a href={publication.url}>
                  DOI: {publication.doi} <ArrowUpRight size={16} />
                </a>
                <CitationButton />
              </div>
            </div>
          </article>
          <a className="research-lab-link" data-reveal href={PERSONAL_INFO.lab}>
            <span className="lab-emblem" aria-hidden="true"><FlaskConical size={32} /></span>
            <span className="lab-copy">
              <small>THE EXPERIMENTS CONTINUE</small>
              <strong>Saroj Bhandari Labs</strong>
              <span>Explore my lab on GitHub</span>
            </span>
            <ArrowUpRight size={23} aria-hidden="true" />
          </a>
        </div>
      </section>

      <Section
        id="experience"
        number="04"
        label="ALONG THE WAY"
        title="Experience"
      >
        <div className="timeline">
          {experience.map((e) => (
            <article className="experience-entry" key={e.company} data-reveal>
              <p className="entry-type">{e.period}</p>
              <h3>{e.role}</h3>
              <Organizations names={e.organizations} />
              <p className="location">{e.location}</p>
              <ul>
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
          <div className="teaching-topics">
            <span className="teaching-arrow" aria-hidden="true">
              ↳
            </span>
            <RotatingText
              className="teaching-rotation"
              items={[
                "Data Structures & Algorithms",
                "Artificial Intelligence",
                "Machine Learning",
                "Python",
                "Java",
                "DBMS",
                "Computer Vision",
                "Agentic AI",
              ]}
            />
            <div className="teaching-rule" />
            <p>Foundations. Practice. Possibility.</p>
          </div>
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

      <TrainingGallery />

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

      <Section
        id="skills"
        number="07"
        label="THE TOOLKIT"
        title="Technical Skills"
      >
        <dl className="skills-list">
          {skills.map(([label, value], index) => {
            const Icon = skillIcons[index];
            return (
              <div key={label} data-reveal data-reveal-delay={index % 2 * 80}>
                <dt><Icon size={21} aria-hidden="true" />{label}</dt>
                <dd>{value.split(", ").map(skill => <span key={skill}>{skill}</span>)}</dd>
              </div>
            );
          })}
        </dl>
      </Section>

      <section id="entrepreneurship" className="venture container" data-reveal>
        <div>
          <p className="eyebrow">08 / ENTREPRENEURSHIP</p>
          <h2>
            Building
            <br />
            <em>beyond code.</em>
          </h2>
        </div>
        <div className="venture-copy">
          <h3>Kritim Mind Technologies</h3>
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
