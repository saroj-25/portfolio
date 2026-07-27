"use client";

import React, { useState } from "react";
import { TIMELINE, TimelineItem } from "@/data/portfolioData";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Building2,
  BookOpen,
  ExternalLink
} from "lucide-react";

export default function Experience() {
  const [filterType, setFilterType] = useState<"all" | "experience" | "teaching" | "education">("all");

  const filteredItems = filterType === "all"
    ? TIMELINE
    : TIMELINE.filter(item => item.type === filterType);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Work Experience, <span className="gradient-text-blue">Teaching & Education</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Saroj Bhandari's leadership roles, software engineering history, university teaching, and academic honors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filterType === "all"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "glass-panel text-slate-400 hover:text-slate-200"
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setFilterType("experience")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filterType === "experience"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "glass-panel text-slate-400 hover:text-slate-200"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> Industry Experience
          </button>
          <button
            onClick={() => setFilterType("teaching")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filterType === "teaching"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "glass-panel text-slate-400 hover:text-slate-200"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Teaching Experience
          </button>
          <button
            onClick={() => setFilterType("education")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filterType === "education"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "glass-panel text-slate-400 hover:text-slate-200"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Education & Honors
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-sky-500/20 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {filteredItems.map((item) => {
            const isExp = item.type === "experience";
            const isTeach = item.type === "teaching";

            let iconNode = <Briefcase className="w-4 h-4" />;
            let badgeText = "INDUSTRY ROLE";
            let badgeStyle = "bg-sky-500/20 text-sky-300 border-sky-500/30";
            let nodeBorder = "border-sky-500 text-sky-400 shadow-sky-500/20";

            if (isTeach) {
              iconNode = <BookOpen className="w-4 h-4" />;
              badgeText = "TEACHING EXPERIENCE";
              badgeStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
              nodeBorder = "border-emerald-500 text-emerald-400 shadow-emerald-500/20";
            } else if (item.type === "education") {
              iconNode = <GraduationCap className="w-4 h-4" />;
              badgeText = "ACADEMIC EDUCATION";
              badgeStyle = "bg-purple-500/20 text-purple-300 border-purple-500/30";
              nodeBorder = "border-purple-500 text-purple-400 shadow-purple-500/20";
            }

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Icon Node Dot */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-slate-950 shadow-lg transition-transform group-hover:scale-110 ${nodeBorder}`}>
                  {iconNode}
                </div>

                {/* Content Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-sky-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono mb-2 border ${badgeStyle}`}>
                        {badgeText}
                      </span>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-sky-400 font-medium mt-0.5">
                        <Building2 className="w-4 h-4" />
                        <span>{item.organization}</span>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-sky-300 font-semibold">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2 mb-5">
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack tags */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-white/5 text-[11px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
