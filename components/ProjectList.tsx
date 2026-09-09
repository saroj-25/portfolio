"use client";

import { ArrowUpRight } from "lucide-react";
import type { works } from "@/data/redesign";
import { useMotion } from "./Motion";

type Work = (typeof works)[number];
function ProjectVisual({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 240 190" fill="none" aria-hidden="true">
      <path d="M0 189H240M0 1H240" stroke="currentColor" opacity=".2" />
      {index === 0 ? (
        <>
          <rect
            x="52"
            y="32"
            width="136"
            height="122"
            rx="4"
            stroke="currentColor"
          />
          <path d="M67 51h57M67 59h30" stroke="currentColor" opacity=".5" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="67"
                y={73 + i * 22}
                width="106"
                height="16"
                rx="2"
                fill="currentColor"
                opacity={i === 1 ? 0.12 : 0.04}
              />
              <circle cx="77" cy={81 + i * 22} r="3" stroke="currentColor" />
              <path
                d={`M90 ${81 + i * 22}h60`}
                stroke="currentColor"
                opacity=".4"
              />
            </g>
          ))}
          <path d="m73 104 3 3 6-7" stroke="currentColor" />
        </>
      ) : index === 1 ? (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="20"
                y={38 + i * 40}
                width="38"
                height="28"
                rx="3"
                stroke="currentColor"
              />
              <path
                d={`M29 ${48 + i * 40}h20m-20 7h13`}
                stroke="currentColor"
                opacity=".5"
              />
              <path
                d={`M58 ${52 + i * 40}L112 94`}
                stroke="currentColor"
                opacity=".4"
              />
            </g>
          ))}
          <circle cx="126" cy="94" r="23" stroke="currentColor" />
          <circle cx="126" cy="94" r="8" fill="currentColor" opacity=".2" />
          <path d="M149 94h30m-6-5 6 5-6 5" stroke="currentColor" />
          <rect
            x="185"
            y="70"
            width="35"
            height="48"
            rx="3"
            stroke="currentColor"
          />
        </>
      ) : index === 2 ? (
        <>
          <path d="M35 32v119h180" stroke="currentColor" opacity=".4" />
          <path
            d="M44 138C82 120 112 137 145 95S187 75 210 42"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {Array.from({ length: 16 }, (_, i) => (
            <circle
              key={i}
              cx={45 + i * 10}
              cy={(142 - i * 5.5 + Math.sin(i * 2) * 17).toFixed(2)}
              r="2.5"
              fill="currentColor"
              opacity=".4"
            />
          ))}
          <text
            x="160"
            y="173"
            fontSize="9"
            fill="currentColor"
            fontFamily="monospace"
          >
            PREDICTION
          </text>
        </>
      ) : (
        <>
          {[25, 100, 175].map((x, i) => (
            <g key={x}>
              <rect
                x={x}
                y="70"
                width="42"
                height="48"
                rx="4"
                stroke="currentColor"
              />
              <path
                d={`M${x + 10} 83h22m-22 8h22m-22 8h13`}
                stroke="currentColor"
                opacity=".5"
              />
              {i < 2 && (
                <path
                  d={`M${x + 42} 94h30m-6-5 6 5-6 5`}
                  stroke="currentColor"
                />
              )}
            </g>
          ))}
        </>
      )}
      <text
        x="120"
        y="179"
        textAnchor="middle"
        fontSize="9"
        letterSpacing="2"
        fill="currentColor"
        fontFamily="monospace"
      >
        {
          [
            "LEARN / PRACTICE / REPEAT",
            "QUERY / RETRIEVE / GENERATE",
            "",
            "SYSTEM / MESSAGE / DELIVERY",
          ][index]
        }
      </text>
    </svg>
  );
}
export default function ProjectList({ projects }: { projects: Work[] }) {
  const { running } = useMotion();
  return (
    <div className="project-list">
      {projects.map((work, index) => (
        <article
          key={work.title}
          className="case-study"
          data-reveal
          onPointerMove={(event) => {
            if (!running || event.pointerType !== "mouse") return;
            const bounds = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty(
              "--preview-x",
              `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}px`,
            );
            event.currentTarget.style.setProperty(
              "--preview-y",
              `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`,
            );
          }}
          onPointerLeave={(event) => {
            event.currentTarget.style.setProperty("--preview-x", "0px");
            event.currentTarget.style.setProperty("--preview-y", "0px");
          }}
        >
          <span className="case-number">0{index + 1}</span>
          <div className="case-copy">
            <p className="entry-type">{work.kind}</p>
            <h3>{work.title}</h3>
            <p className="case-description">{work.description}</p>
            <p className="case-tech">
              {work.technology || "TODO: technology details"}
            </p>
            <p className="case-role">My role: {work.role}</p>
            <div className="entry-links">
              {work.url && (
                <a href={work.url}>
                  {index === 1 ? "Read Research" : "Explore Project"}
                  <ArrowUpRight size={16} />
                </a>
              )}
              {work.github && (
                <a href={work.github}>
                  View GitHub
                  <ArrowUpRight size={16} />
                </a>
              )}
              {work.paper && (
                <a href={work.paper}>
                  Paper
                  <ArrowUpRight size={16} />
                </a>
              )}
              {!work.url && !work.github && (
                <span className="placeholder">
                  TODO: project and repository links
                </span>
              )}
            </div>
          </div>
          <div className="project-art">
            <ProjectVisual index={index} />
          </div>
        </article>
      ))}
    </div>
  );
}
