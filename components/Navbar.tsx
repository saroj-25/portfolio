"use client";

import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
const sections = ["About", "Work", "Research", "Experience", "Teaching", "Education", "Contact"];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header"><div className="nav-wrap">
    <a className="wordmark" href="#home" onClick={() => setOpen(false)}>Saroj Bhandari<span>.</span></a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"} onKeyDown={e => {if(e.key === "Escape") {setOpen(false); toggle.current?.focus();}}}>
      {sections.map(s => <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setOpen(false)}>{s}</a>)}
    </nav>
  </div></header>;
}
