"use client";

import React, { useState } from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { 
  Code2, 
  BrainCircuit, 
  Zap, 
  ShieldCheck, 
  User, 
  Target, 
  Sparkles, 
  BookOpen, 
  Cpu,
  Award,
  GraduationCap,
  Briefcase
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"leadership" | "teaching" | "certifications">("leadership");

  const pillars = [
    {
      icon: Briefcase,
      title: "Company Leadership",
      description: "Founder & CEO @ Kritim Mind Technology Pvt. Ltd., building AI & web platforms."
    },
    {
      icon: BrainCircuit,
      title: "AI/ML & RAG Systems",
      description: "Specialist in Machine Learning, Agentic AI Systems, FAISS Vector Databases & LangChain."
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Tribhuvan University CSIT Topper (92.4% Final Sem, 85.57% Overall)."
    },
    {
      icon: BookOpen,
      title: "CS Lecturer & Educator",
      description: "Adjunct CS Lecturer teaching Artificial Intelligence, DSA, DBMS & Algorithms."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>KNOW SAROJ BHANDARI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Founder, Software Engineer & <span className="gradient-text-blue">AI Specialist</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Founder & CEO of Kritim Mind Technology, Tribhuvan University CSIT Topper, and Adjunct Lecturer of Computer Science.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tabbed Interactive About Box */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden mb-16">
          <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-6 mb-8">
            <button
              onClick={() => setActiveTab("leadership")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === "leadership"
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/5"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Founder & CEO Vision</span>
            </button>

            <button
              onClick={() => setActiveTab("teaching")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === "teaching"
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Academia & Teaching</span>
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
                activeTab === "certifications"
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/5"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications & Workshops</span>
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === "leadership" && (
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Building Kritim Mind Technology Pvt. Ltd.
              </h3>
              <p>
                As Founder & CEO of <strong>Kritim Mind Technology Pvt. Ltd.</strong>, Saroj leads technical teams in developing enterprise web platforms, entrance preparation systems (Kritimguru), and AI solution pipelines.
              </p>
              <p>
                Having previously served as a Software Developer for <strong>PAHADI RESEARCH LLC</strong> (headquartered in Seattle, WA, USA), he brings international software engineering standards, clean architecture, and remote collaboration experience.
              </p>
            </div>
          )}

          {activeTab === "teaching" && (
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Educating B.Sc. CSIT & BCA Engineers
              </h3>
              <p>
                As an Adjunct CS Lecturer at <strong>Texas International College</strong> and <strong>Aadim National College</strong> in Kathmandu, Saroj teaches foundational & advanced CS courses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-sky-300 font-mono">
                  • Artificial Intelligence & Machine Learning
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-sky-300 font-mono">
                  • Data Structures & Algorithms (DSA)
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-sky-300 font-mono">
                  • Design & Analysis of Algorithms
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-sky-300 font-mono">
                  • Database Management Systems (DBMS)
                </div>
              </div>
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-400" />
                Certifications, Professional Training & Workshops
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono text-sky-400">
                      <span>{cert.issuer}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-white/10">{cert.year}</span>
                    </div>
                    <h4 className="font-bold text-slate-200 text-sm">{cert.title}</h4>
                    {cert.details && <p className="text-xs text-slate-400">{cert.details}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
