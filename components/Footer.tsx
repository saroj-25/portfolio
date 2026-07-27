"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { 
  Code2, 
  ArrowUp, 
  Mail, 
  Heart,
  Clock
} from "lucide-react";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-4 group text-decoration-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-slate-100 group-hover:text-sky-400 transition-colors">
                {PERSONAL_INFO.name}<span className="text-sky-400">.dev</span>
              </span>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex items-center gap-2 font-mono text-xs text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-xl border border-sky-500/20">
              <Clock className="w-3.5 h-3.5" />
              <span>Local Time: {timeString || "00:00:00 AM"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <h4 className="text-slate-200 font-bold uppercase mb-4 tracking-wider">Navigation</h4>
              <ul className="space-y-2.5 text-slate-400">
                <li><a href="#about" className="hover:text-sky-400 transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-200 font-bold uppercase mb-4 tracking-wider">Interactive</h4>
              <ul className="space-y-2.5 text-slate-400">
                <li><a href="#terminal" className="hover:text-sky-400 transition-colors">CLI Terminal</a></li>
                <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact Form</a></li>
                <li><a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">GitHub Repos</a></li>
              </ul>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/10 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/10 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-sky-400 hover:border-sky-500/40 text-xs font-mono transition-all cursor-pointer w-fit"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            Built with Next.js & React 19
          </div>
        </div>

      </div>
    </footer>
  );
}
