"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "./Motion";

// Deterministic geometry keeps the server render and hydrated illustration identical.
const points = Array.from({ length: 48 }, (_, i) => {
  const angle = i * 2.39996;
  const radius = 32 + Math.sqrt(i / 48) * 135;
  return {
    x: 240 + Math.cos(angle) * radius,
    y: 220 + Math.sin(angle) * radius * 0.85,
  };
});
const edges = points.flatMap((a, i) =>
  points.slice(i + 1).flatMap((b, j) => {
    const distance = Math.hypot(a.x - b.x, a.y - b.y);
    return distance < 70 ? [{ a, b, id: `${i}-${j}` }] : [];
  }),
);

export default function KnowledgeNetwork() {
  const root = useRef<HTMLDivElement>(null);
  const { running } = useMotion();
  useEffect(() => {
    const element = root.current;
    if (!element || !running) return;
    let frame = 0;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      element.dataset.playing = String(visible);
    });
    observer.observe(element);
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const bounds = element.getBoundingClientRect();
      element.style.setProperty(
        "--mx",
        `${((e.clientX - bounds.left) / bounds.width - 0.5) * 16}px`,
      );
      element.style.setProperty(
        "--my",
        `${((e.clientY - bounds.top) / bounds.height - 0.5) * 16}px`,
      );
    };
    const leave = () => {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
    };
    const scroll = () => {
      if (!visible || frame) return;
      frame = requestAnimationFrame(() => {
        element.style.setProperty(
          "--scroll",
          `${Math.max(-8, Math.min(8, element.getBoundingClientRect().top / 50))}px`,
        );
        frame = 0;
      });
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      leave();
      element.style.setProperty("--scroll", "0px");
      element.dataset.playing = "false";
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
      window.removeEventListener("scroll", scroll);
    };
  }, [running]);

  return (
    <div ref={root} className="knowledge-network" aria-hidden="true">
      <div className="network-topline">
        <span>AN INTERCONNECTED PRACTICE</span>
        <span>↗</span>
      </div>
      <svg viewBox="0 0 480 440" className="network-svg" fill="none">
        <defs>
          <pattern
            id="network-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".7" fill="currentColor" opacity=".18" />
          </pattern>
        </defs>
        <rect width="480" height="440" fill="url(#network-grid)" />
        <g className="network-parallax">
          <g
            className="network-orbits"
            stroke="currentColor"
            strokeWidth=".65"
            opacity=".3"
          >
            <ellipse
              cx="240"
              cy="220"
              rx="195"
              ry="142"
              transform="rotate(-24 240 220)"
            />
            <ellipse
              cx="240"
              cy="220"
              rx="195"
              ry="92"
              transform="rotate(42 240 220)"
            />
            <circle cx="240" cy="220" r="183" strokeDasharray="2 7" />
          </g>
          <g stroke="currentColor" strokeWidth=".7" opacity=".2">
            {edges.map(({ a, b, id }) => (
              <path
                key={id}
                d={`M${a.x.toFixed(2)} ${a.y.toFixed(2)}L${b.x.toFixed(2)} ${b.y.toFixed(2)}`}
              />
            ))}
          </g>
          <path
            className="data-path"
            d="M92 263 Q110 110 240 220 T400 190"
            stroke="#378f9b"
            strokeWidth="1.4"
            strokeDasharray="4 15"
          />
          {points.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x.toFixed(2)}
                cy={p.y.toFixed(2)}
                r={i % 7 === 0 ? 7 : 2.4}
                fill={i % 7 === 0 ? "#f6f5f0" : "currentColor"}
                stroke="currentColor"
                strokeWidth="1"
              />
              {i % 7 === 0 && (
                <circle
                  className="network-pulse"
                  style={{ animationDelay: `${i * -0.3}s` }}
                  cx={p.x.toFixed(2)}
                  cy={p.y.toFixed(2)}
                  r="12"
                  stroke="currentColor"
                  opacity=".2"
                />
              )}
            </g>
          ))}
          <circle
            cx="240"
            cy="220"
            r="40"
            fill="#f6f5f0"
            stroke="currentColor"
            strokeWidth=".8"
          />
          <text
            x="240"
            y="229"
            textAnchor="middle"
            fill="currentColor"
            fontSize="28"
            fontFamily="monospace"
          >
            {"{ · }"}
          </text>
        </g>
        <g
          className="network-label"
          fill="#252b32"
          fontSize="12"
          fontFamily="monospace"
        >
          <text x="54" y="81">
            01 / CODE
          </text>
          <text x="332" y="116">
            02 / AI
          </text>
          <text x="50" y="351">
            03 / RESEARCH
          </text>
          <text x="300" y="386">
            04 / KNOWLEDGE
          </text>
        </g>
      </svg>
      <div className="network-bottomline">
        <span className="network-dot" /> Code connects. Knowledge grows.
      </div>
    </div>
  );
}
