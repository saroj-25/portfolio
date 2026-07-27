"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/Icons";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  TrendingUp,
  Layers
} from "lucide-react";

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside container */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Content Window */}
      <div className="relative z-10 w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-white/10 text-xs font-mono">
                {project.date}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {project.title}
            </h2>
            <p className="text-sky-400 font-medium text-sm mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto py-6 space-y-6 pr-2">
          
          {/* Key Impact Metric Callout */}
          {project.metrics && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs sm:text-sm font-medium">
                <span className="font-bold text-emerald-200">Measurable Impact:</span> {project.metrics}
              </div>
            </div>
          )}

          {/* Full Description */}
          <div>
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-2">
              Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" /> Key Engineering Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Highlights */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" /> Architectural Breakdown
              </h3>
              <div className="space-y-2">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                    <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-lg shadow-sky-500/25 hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel text-slate-200 hover:text-white font-semibold text-xs hover:border-sky-500/40 hover:scale-105 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
