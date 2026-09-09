import { ArrowUpRight } from "lucide-react";
import {
  works,
  experience,
  skills,
  subjects,
  interests,
  publication,
} from "@/data/redesign";
import { PROJECTS } from "@/data/portfolioData";
import type { ReactNode } from "react";
import ProjectList from "./ProjectList";
import { RotatingText } from "./Motion";

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
      "aadim-college-ai-chatbot",
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
          <article className="publication">
            <div className="publication-year">
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
              </div>
            </div>
          </article>
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
            <article className="experience-entry" key={e.company}>
              <p className="entry-type">{e.period}</p>
              <h3>{e.role}</h3>
              <p className="organization">{e.company}</p>
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
            <h2>
              I also <em>teach.</em>
            </h2>
            <p>
              Helping students move from understanding an idea to building
              something with it.
            </p>
            <p className="teaching-credit">
              Adjunct Lecturer · Texas International College
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

      <Section
        id="education"
        number="06"
        label="THE FOUNDATION"
        title="Education"
      >
        <article className="education-entry">
          <p className="entry-type">2023</p>
          <h3>B.Sc. CSIT</h3>
          <p className="organization">Tribhuvan University</p>
          <p>Orchid International College</p>
          <p className="education-score">
            86% overall <span>·</span> 92.4% in the eighth semester
          </p>
          <p className="award">Tribhuvan University Topper · 8th Semester</p>
        </article>
        <article className="education-entry">
          <h3>+2 Science</h3>
          <p>VS Niketan College · GPA: 3.63 / 4.00</p>
          <p className="award">HISSAN Meritorious Student Award — 2019</p>
        </article>
      </Section>

      <section id="achievements" className="milestones container" data-reveal>
        <p className="eyebrow">A FEW MILESTONES</p>
        <h2 className="sr-only">Achievements &amp; Highlights</h2>
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
      </section>

      <Section
        id="skills"
        number="07"
        label="THE TOOLKIT"
        title="Technical Skills"
      >
        <dl className="skills-list">
          {skills.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
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
            Kritim Guru, we build entrance preparation tools for students in
            Nepal.
          </p>
          <a className="text-link" href="https://kritimguru.com">
            Explore Kritim Guru <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
