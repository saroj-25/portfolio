"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO, STATS } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import {
  ArrowRight,
  Mail,
  Download,
  Sparkles,
  Terminal as TerminalIcon,
  CheckCircle2,
  Code
} from "lucide-react";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullTagline = PERSONAL_INFO.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullTagline.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullTagline.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentFullTagline.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-float-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none animate-float-2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>NLP & LLM Researcher · AI Systems Architect</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-4 leading-tight">
              Hi, I'm <span className="gradient-text-blue">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Typewriter Text */}
            <div className="h-12 sm:h-14 flex items-center mb-6">
              <p className="text-lg sm:text-2xl font-mono text-sky-400 font-medium">
                &gt; {displayText}
                <span className="animate-pulse font-bold text-purple-400">|</span>
              </p>
            </div>

            {/* Bio summary */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white font-semibold text-sm hover:border-sky-500/40 hover:scale-[1.02] transition-all"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center justify-center p-3.5 rounded-xl glass-panel text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                title="Open AI CLI Terminal"
              >
                <TerminalIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/5 hover:border-sky-500/30 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/5 hover:border-sky-500/30 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/5 hover:border-sky-500/30 transition-all"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Direct Email"
                  className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-sky-500/20 text-slate-400 hover:text-sky-400 border border-white/5 hover:border-sky-500/30 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card / Profile Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              <div className="relative glass-panel rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
                    <Code className="w-4 h-4" />
                    <span>saroj_core_v4.2.ts</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Avatar / Profile Graphic */}
                <div className="relative mx-auto w-32 h-32 rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden">
                    <img
                      src="/image/profile.jpeg"
                      alt="Saroj Bhandari"
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>

                  <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-slate-900 border border-sky-500/40 text-sky-400 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-slate-400">Primary Role:</span>
                    <span className="text-sky-300 font-semibold">{PERSONAL_INFO.roleTitle}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-slate-400">Location:</span>
                    <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <span className="text-slate-400">Availability:</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-sans font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Remote / Open
                    </span>
                  </div>
                </div>

                {/* Stats Grid Inside Visual Card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {STATS.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-white/5 text-center">
                      <div className="text-xl sm:text-2xl font-bold gradient-text-blue">{stat.value}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
