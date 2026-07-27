"use client";

import React, { useState } from "react";
import { SKILLS, Skill } from "@/data/portfolioData";
import { 
  Code2, 
  FileCode, 
  Palette, 
  Layout, 
  Layers, 
  Server, 
  Terminal, 
  Network, 
  Cpu, 
  BrainCircuit, 
  Sparkles, 
  Database, 
  Box, 
  Cloud, 
  GitBranch, 
  HardDrive, 
  Zap, 
  GitFork,
  CheckCircle,
  Filter
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  FileCode,
  Palette,
  Layout,
  Layers,
  Server,
  Terminal,
  Network,
  Cpu,
  BrainCircuit,
  Sparkles,
  Database,
  Box,
  Cloud,
  GitBranch,
  HardDrive,
  Zap,
  GitFork
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "AI & ML", "DevOps & Cloud", "Database & Tools"];

  const filteredSkills = selectedCategory === "All"
    ? SKILLS
    : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Tech Stack & <span className="gradient-text-blue">Core Skills</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            A curated inventory of modern tools, frameworks, languages, and AI systems Saroj uses to build software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 scale-105"
                  : "glass-panel text-slate-400 hover:text-slate-200 hover:border-sky-500/30"
              }`}
            >
              {selectedCategory === category && <Filter className="w-3.5 h-3.5" />}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = ICON_MAP[skill.iconName] || Code2;
            return (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-100 text-base group-hover:text-sky-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {skill.popular && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        CORE STACK
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span>Proficiency</span>
                    <span className="text-sky-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-purple-500 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
