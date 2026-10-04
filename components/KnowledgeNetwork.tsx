"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useMotion } from "./Motion";

export default function KnowledgeNetwork() {
  const root = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const { running } = useMotion();
  const playing = running && visible && !paused;

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let inView = false;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  function move(event: PointerEvent<HTMLElement>) {
    if (!playing || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--art-x", `${x * 7}px`);
    event.currentTarget.style.setProperty("--art-y", `${y * 7}px`);
  }

  function reset() {
    root.current?.style.setProperty("--art-x", "0px");
    root.current?.style.setProperty("--art-y", "0px");
  }

  return (
    <figure ref={root} className="work-art" data-playing={playing} onPointerMove={move} onPointerLeave={reset} aria-label="AI, engineering, and education">
      <div className="work-art-stage">
        <div className="work-art-glow" aria-hidden="true" />
        <div className="work-art-parallax">
          <Image
            className="work-art-image"
            src="/image/ai-engineering-education.webp"
            alt="A luminous blue brain connected to a laptop beside open books, bringing together artificial intelligence, software engineering, and education."
            width={1200}
            height={1200}
            sizes="(max-width: 640px) 92vw, (max-width: 1000px) 43vw, 520px"
          />
        </div>
        <a className="work-art-label work-art-ai" href="#research"><span />AI &amp; Machine Learning<ArrowUpRight size={13} /></a>
        <a className="work-art-label work-art-teaching" href="#training"><span />Educator<ArrowUpRight size={13} /></a>
        <a className="work-art-label work-art-code" href="#work"><span />Engineer<ArrowUpRight size={13} /></a>
        <span className="work-art-spark work-art-spark-one" aria-hidden="true" />
        <span className="work-art-spark work-art-spark-two" aria-hidden="true" />
        <span className="work-art-spark work-art-spark-three" aria-hidden="true" />
      </div>
      <figcaption className="work-art-caption">
        <span>Build. Discover. <em>Teach.</em></span>
        <button type="button" onClick={() => { reset(); setPaused(value => !value); }} disabled={!running} aria-label={paused ? "Play illustration animation" : "Pause illustration animation"} title={!running ? "Animations are disabled by your motion preference" : paused ? "Play animation" : "Pause animation"}>
          {paused || !running ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </figcaption>
    </figure>
  );
}
