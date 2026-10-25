"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Bot, BrainCircuit, Coffee, Database, Eye, Network, Terminal, TrendingUp } from "lucide-react";
import { useMotion } from "./Motion";

const topics = [
  { name: "Data Structures & Algorithms", detail: "Breaking problems into structures and steps.", icon: Network, tone: "#285b80" },
  { name: "Artificial Intelligence", detail: "Search, reasoning, and intelligent agents.", icon: BrainCircuit, tone: "#5a4fb0" },
  { name: "Machine Learning", detail: "Learning patterns from data, end to end.", icon: TrendingUp, tone: "#247e76" },
  { name: "Python", detail: "From a first script to real projects.", icon: Terminal, tone: "#2f6db5" },
  { name: "Java", detail: "Object-oriented thinking that scales.", icon: Coffee, tone: "#b0612a" },
  { name: "DBMS", detail: "Designing and querying data that lasts.", icon: Database, tone: "#3f6f4a" },
  { name: "Computer Vision", detail: "Teaching machines to see, with live demos.", icon: Eye, tone: "#a14a7f" },
  { name: "Agentic AI", detail: "LLMs that plan, use tools, and act.", icon: Bot, tone: "#2a7f9a" },
];

export default function TeachingShowcase() {
  const { running } = useMotion();
  const [index, setIndex] = useState(0);
  const [hold, setHold] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!running || hold) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (root.current) observer.observe(root.current);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden) setIndex((i) => (i + 1) % topics.length);
    }, 3000);
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [running, hold]);
  const topic = topics[index];
  const Icon = topic.icon;
  return (
    <div
      ref={root}
      className="teach-showcase"
      style={{ "--teach-tone": topic.tone } as CSSProperties}
      onPointerEnter={() => setHold(true)}
      onPointerLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="teach-stage" aria-hidden="true">
        <span className="teach-orbit" />
        <span key={index} className="teach-icon"><Icon size={54} strokeWidth={1.5} /></span>
      </div>
      <div className="teach-copy" aria-live={running && !hold ? "off" : "polite"}>
        <p className="teach-label">NOW TEACHING</p>
        <h3 key={`n${index}`} className="teach-name">{topic.name}</h3>
        <p key={`d${index}`} className="teach-detail">{topic.detail}</p>
      </div>
      <div className="teach-dots" role="group" aria-label="Choose a subject">
        {topics.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={t.name}
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
