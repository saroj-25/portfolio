"use client";

import { useEffect, useRef, useState } from "react";
import { useMotion } from "./Motion";

// Lines "type" in once the terminal scrolls into view; without motion they are simply shown.
export default function LabTerminal({ href }: { href: string }) {
  const { running } = useMotion();
  const root = useRef<HTMLAnchorElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!running || !root.current || playing) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setPlaying(true);
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [running, playing]);
  const state = !running ? "idle" : playing ? "playing" : "armed";
  return (
    <a ref={root} className="lab-terminal" data-state={state} href={href} aria-label="Open Saroj Bhandari Labs on GitHub" tabIndex={-1}>
      <span className="lab-terminal-bar" aria-hidden="true">
        <i /><i /><i />
        <span>~/saroj-bhandari-labs</span>
      </span>
      <span className="lab-terminal-body" aria-hidden="true">
        <span className="lab-line"><b>$</b> git clone github.com/Saroj-Bhandari-Labs</span>
        <span className="lab-line"><b>$</b> ls focus/</span>
        <span className="lab-line lab-out">rag/ &nbsp;nlp/ &nbsp;agents/ &nbsp;vision/</span>
        <span className="lab-line"><b>$</b> python experiment.py --idea next</span>
        <span className="lab-line lab-ok">✓ curiosity loaded. building…<span className="lab-cursor" /></span>
      </span>
    </a>
  );
}
