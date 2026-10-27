"use client";

import { useId, useState } from "react";
import { ArrowUpRight, BrainCircuit, Globe, GraduationCap, MessagesSquare, PanelsTopLeft, Send, Smartphone, TrendingUp } from "lucide-react";

export type ProjectCard = {
  title: string;
  kind: string;
  visual: string;
  description: string;
  technology: string | null;
  role: string;
  url: string | null;
  github: string | null;
  paper: string | null;
};

const cardArt: Record<string, { icon: typeof MessagesSquare; tagline: string }> = {
  chatbot: { icon: MessagesSquare, tagline: "Ask. Explore. Learn." },
  education: { icon: GraduationCap, tagline: "Learn. Practice. Repeat." },
  connect: { icon: Smartphone, tagline: "Mobile. Architecture. Server." },
  builder: { icon: PanelsTopLeft, tagline: "Drag. Drop. Create." },
  research: { icon: BrainCircuit, tagline: "Query. Retrieve. Generate." },
  prediction: { icon: TrendingUp, tagline: "Data. Features. Predict." },
  messaging: { icon: Send, tagline: "System. Message. Delivery." },
  platform: { icon: Globe, tagline: "Design. Build. Ship." },
};

export default function ProjectList({ projects, startIndex = 0 }: { projects: ProjectCard[]; startIndex?: number }) {
  const id = useId();
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  function toggle(title: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  return (
    <div className="work-grid">
      {projects.map((work, index) => {
        const art = cardArt[work.visual] ?? cardArt.platform;
        const Icon = art.icon;
        const isExpanded = expanded.has(work.title);
        const detailsId = `${id}-project-${index}`;
        return (
          <article key={work.title} className={`work-card work-card-${work.visual}`} data-expanded={isExpanded} data-reveal data-reveal-delay={index % 2 * 90}>
            <div className="work-card-banner">
              <span className="work-card-icon" aria-hidden="true"><Icon size={30} strokeWidth={1.6} /></span>
              <span className="work-card-tagline">{art.tagline}</span>
              <span className="work-card-number" aria-hidden="true">{String(startIndex + index + 1).padStart(2, "0")}</span>
            </div>
            <div className="work-card-body">
              <p className="entry-type">{work.kind}</p>
              <h3>{work.title}</h3>
              <p className="work-card-text">{work.description}</p>
              <button
                type="button"
                className="work-card-expand"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                aria-label={`${isExpanded ? "Show less" : "Show details"}: ${work.title}`}
                onClick={() => toggle(work.title)}
              >
                {isExpanded ? "Show less" : "Show details"}
                <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
              </button>
              <div id={detailsId} className="work-card-details">
              {work.technology && (
                <ul className="work-card-tech" aria-label="Technology">
                  {work.technology.split(" · ").map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              )}
              <p className="work-card-role">My role: {work.role}</p>
              <div className="entry-links">
                {work.url && (
                  <a className="work-card-cta" href={work.url}>
                    {work.visual === "research" ? "Read Research" : "Explore Project"} <ArrowUpRight size={16} />
                  </a>
                )}
                {work.github && (
                  <a href={work.github}>
                    View GitHub <ArrowUpRight size={16} />
                  </a>
                )}
                {work.paper && (
                  <a href={work.paper}>
                    Paper <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
