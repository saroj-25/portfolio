"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight, BookOpen, BrainCircuit, Code2, Database, FileText, GraduationCap, Layers, Pause, Play, Search, Sparkles, Terminal } from "lucide-react";
import { useMotion } from "./Motion";

const practices = [
  { label: "Artificial intelligence", short: "AI", icon: BrainCircuit, title: "Give knowledge a voice.", description: "Connecting documents, retrieval, and language models to build useful AI systems.", tags: ["RAG", "NLP", "LLMs"], color: "#3862cf", link: "#research" },
  { label: "Machine learning", short: "Machine learning", icon: Layers, title: "Find patterns. Build understanding.", description: "Turning data into models through experimentation, evaluation, and applied research.", tags: ["Python", "Neural networks", "Data science"], color: "#277d78", link: "#research" },
  { label: "Education", short: "Educator", icon: GraduationCap, title: "Make the complex click.", description: "Teaching through clear concepts, hands-on coding, and projects that bring ideas to life.", tags: ["Workshops", "Mentorship", "Computer science"], color: "#985a2d", link: "#training" },
  { label: "Software engineering", short: "Engineering", icon: Code2, title: "Turn an idea into something useful.", description: "Building connected software, from the interface people see to the systems behind it.", tags: ["Full stack", "APIs", "Products"], color: "#7454b2", link: "#work" },
];

function Scene({ index }: { index: number }) {
  if (index === 0) return (
    <div className="practice-ai">
      <div className="practice-documents">
        {["Documents", "Research", "Knowledge"].map((label, i) => <div className="practice-document" key={label} style={{ "--step": i } as CSSProperties}><FileText size={18} /><span>{label}</span><i /><i /></div>)}
      </div>
      <div className="practice-flow"><span /><Search size={18} /><span /></div>
      <div className="practice-model"><BrainCircuit size={38} strokeWidth={1.3} /><span>Retrieve + reason</span></div>
      <div className="practice-answer"><Sparkles size={18} /><div><strong>A grounded answer</strong><span className="practice-answer-line" /><span className="practice-answer-line" /></div></div>
    </div>
  );
  if (index === 1) return (
    <div className="practice-ml">
      <div className="practice-diagram-labels"><span>DATA</span><span>LEARNING</span><span>PREDICTION</span></div>
      <svg viewBox="0 0 420 185" fill="none" className="practice-neurons">
        {[0, 1, 2].flatMap(layer => Array.from({ length: layer === 0 ? 3 : 4 }, (_, a) => Array.from({ length: layer === 2 ? 2 : 4 }, (_, b) => <path className="practice-signal" key={`${layer}-${a}-${b}`} d={`M${45 + layer * 110} ${layer === 0 ? 42 + a * 50 : 22 + a * 46} L${155 + layer * 110} ${layer === 2 ? 65 + b * 60 : 22 + b * 46}`} style={{ animationDelay: `${(a + b) * -.3}s` }} />))).flat()}
        {[3, 4, 4, 2].map((count, layer) => Array.from({ length: count }, (_, n) => <circle className="practice-neuron" key={`${layer}-${n}`} cx={45 + layer * 110} cy={layer === 0 ? 42 + n * 50 : layer === 3 ? 65 + n * 60 : 22 + n * 46} r={layer === 3 ? 12 : 9} style={{ animationDelay: `${layer * -.7 - n * .2}s` }} />))}
      </svg>
      <div className="practice-learning"><span>Observe</span><ArrowRight size={14} /><span>Train</span><ArrowRight size={14} /><span>Evaluate</span><span className="practice-learning-track"><i /></span></div>
    </div>
  );
  if (index === 2) return (
    <div className="practice-teaching">
      <div className="practice-board"><BookOpen size={24} /><span>Understand the idea</span><div className="practice-board-equation">curiosity <b>+</b> practice <b>=</b> growth</div></div>
      <div className="practice-lesson-path" />
      <div className="practice-lesson-cards">
        {[{ icon: BookOpen, title: "Learn", detail: "Explore a concept" }, { icon: Terminal, title: "Try", detail: "Write the code" }, { icon: Sparkles, title: "Build", detail: "Make it your own" }].map(({ icon: Icon, title, detail }, i) => <div className="practice-lesson" key={title} style={{ "--step": i } as CSSProperties}><Icon size={22} /><strong>{title}</strong><span>{detail}</span></div>)}
      </div>
    </div>
  );
  return (
    <div className="practice-engineering">
      <div className="practice-editor"><div className="practice-editor-bar"><span /><span /><span /><small>idea → implementation</small></div><div className="practice-code"><span><b>const</b> idea = discover();</span><span><b>const</b> product = build(idea);</span><span><b>await</b> test(product);</span><span>ship(product);<i /></span></div></div>
      <div className="practice-system">{[{ icon: Code2, label: "Interface" }, { icon: Layers, label: "API" }, { icon: Database, label: "Data" }].map(({ icon: Icon, label }) => <div key={label}><Icon size={19} /><span>{label}</span></div>)}</div>
    </div>
  );
}

export default function KnowledgeNetwork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const { running } = useMotion();
  const playing = running && visible && !paused && !interacting;
  const practice = practices[active];

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let inView = false;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); }, { threshold: .2 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((value) => (value + 1) % practices.length), 6500);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  return (
    <div ref={root} className="practice-visual" style={{ "--practice-color": practice.color } as CSSProperties} data-playing={playing} onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
      <div className="practice-topline"><span>MY WORK, IN MOTION</span><button type="button" disabled={!running} onClick={() => setPaused(value => !value)} aria-label={paused ? "Play work animation" : "Pause work animation"} title={!running ? "Animations are disabled by your motion preference" : paused ? "Play animation" : "Pause animation"}>{paused || !running ? <Play size={15} /> : <Pause size={15} />}</button></div>
      <div className="practice-choices" role="group" aria-label="Explore my areas of work">
        {practices.map(({ short, label, icon: Icon }, index) => <button type="button" key={label} aria-label={label} aria-pressed={index === active} aria-controls="practice-panel" onClick={() => { setActive(index); setPaused(true); }}><Icon size={16} /><span>{short}</span></button>)}
      </div>
      <div id="practice-panel" className="practice-panel" role="region" aria-label={practice.label}>
        <div key={active} className="practice-scene" aria-hidden="true"><Scene index={active} /></div>
        <div className="practice-caption"><span className="practice-overline">0{active + 1} / {practice.label}</span><h2>{practice.title}</h2><p>{practice.description}</p><div className="practice-tags">{practice.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      </div>
      <div className="practice-footer"><a href={practice.link}>Explore my {active === 2 ? "teaching" : active === 3 ? "projects" : "research"}<ArrowRight size={15} /></a><span aria-hidden="true">{practices.map((item, index) => <i key={item.label} className={active === index ? "is-active" : ""} />)}</span></div>
    </div>
  );
}
