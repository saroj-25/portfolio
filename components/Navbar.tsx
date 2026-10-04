"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MotionToggle } from "./Motion";
const sections = [
  "About",
  "Work",
  "Research",
  "Experience",
  "Teaching",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [compact, setCompact] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 1101px)");
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCompact(window.scrollY > 35);
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element && element.getBoundingClientRect().top <= 180)
          current = section;
      }
      setActive(current);
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", scroll, { passive: true });
    frame = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("scroll", scroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  function closeMenu() {
    setOpen(false);
  }
  return (
    <header ref={header} className={`site-header ${compact ? "compact" : ""}`}>
      <div className="nav-wrap">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <Image className="nav-avatar" src="/image/profile-icon.png" alt="" width={64} height={64} sizes="(max-width: 400px) 44px, (max-width: 1100px) 52px, 64px" />
          <span className="nav-brand-text">Saroj Bhandari<span>Engineer · Researcher</span></span>
        </a>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              closeMenu();
              toggle.current?.focus();
            }
          }}
        >
          {sections.map((s) => (
            <a
              key={s}
              aria-current={active === s ? "location" : undefined}
              href={`#${s.toLowerCase()}`}
              onClick={closeMenu}
            >
              {s === "Work" ? "Projects" : s === "Contact" ? "Let’s talk" : s}
              {s === "Contact" && <ArrowUpRight size={15} />}
            </a>
          ))}
        </nav>
        <div className="nav-controls">
          <MotionToggle />
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
