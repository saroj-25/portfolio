"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const MotionContext = createContext({
  running: false,
  paused: false,
  toggle: () => {},
});
const query = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => true,
  );
  const [paused, setPaused] = useState(false);
  const running = !reduced && !paused;

  useEffect(() => {
    if (!running) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.animate(
            [
              { opacity: 0.45, transform: "translateY(18px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
    };
  }, [running]);

  return (
    <MotionContext.Provider
      value={{ running, paused, toggle: () => setPaused((p) => !p) }}
    >
      <div className={running ? "motion-root" : "motion-root motion-off"}>
        {children}
      </div>
    </MotionContext.Provider>
  );
}
export function MotionToggle() {
  const { paused, toggle } = useContext(MotionContext);
  return (
    <button
      className="motion-toggle"
      onClick={toggle}
      aria-pressed={paused}
      aria-label={paused ? "Resume animations" : "Pause animations"}
      title={paused ? "Resume animations" : "Pause animations"}
    >
      <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
        {paused ? (
          <path d="m7 4 9 6-9 6Z" fill="currentColor" />
        ) : (
          <path d="M6 4v12M13 4v12" stroke="currentColor" strokeWidth="2" />
        )}
      </svg>
    </button>
  );
}
export function useMotion() {
  return useContext(MotionContext);
}

export function RotatingText({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const { running } = useMotion();
  const [index, setIndex] = useState(0);
  const root = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!running) return;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (root.current) observer.observe(root.current);
    const timer = window.setInterval(() => {
      if (visible && !document.hidden) setIndex((i) => (i + 1) % items.length);
    }, 2800);
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [running, items.length]);
  return (
    <span ref={root} className={`rotating-text ${className}`}>
      <span className="sr-only">{items.join(", ")}</span>
      <span className="rotation-size" aria-hidden="true">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </span>
      <span key={index} className="rotation-word" aria-hidden="true">
        {items[index]}
      </span>
    </span>
  );
}
