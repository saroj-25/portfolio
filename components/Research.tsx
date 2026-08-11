"use client";

import React from "react";
import { BookOpen } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Research & Publications
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Passionate about advancing AI-driven education and algorithm learning.
          </p>
        </div>
        {/* Research Card */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all">
          <h3 className="text-xl font-bold text-slate-100 mb-3">Natural Language Processing-Driven Chatbot for Algorithm Learning</h3>
          <p className="text-slate-300 mb-2">Bhandari, S., &amp; Dhital, P. (2026). Natural Language Processing-Driven Chatbot for Algorithm Learning: A Retrieval-Augmented Generation Approach using Romanized Nepali and English. <em>Aadim Journal of Multidisciplinary Research</em>, 2(1), 132-149.</p>
          <a href="https://doi.org/10.3126/ajmr.v2i1.97539" className="inline-block mt-2 text-amber-400 hover:underline" target="_blank" rel="noopener noreferrer">
            https://doi.org/10.3126/ajmr.v2i1.97539
          </a>
        </div>
        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-slate-400">
            Eager for research collaborations and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
