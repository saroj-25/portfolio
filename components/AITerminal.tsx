"use client";

import React, { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS, PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  Sparkles, 
  Circle
} from "lucide-react";

interface TerminalLog {
  id: string;
  command: string;
  output: string;
  timestamp: string;
}

export default function AITerminal() {
  const [inputCommand, setInputCommand] = useState("");
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: "init",
      command: "welcome",
      output: `Saroj Bhandari Portfolio CLI v2.0.0 (x86_64-linux)\nType "help" to see available commands or click quick action buttons below.`,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setLogs([]);
      setInputCommand("");
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed] || 
      `Command not recognized: "${trimmed}". Type "help" for a list of available commands.`;

    const newLog: TerminalLog = {
      id: Math.random().toString(36).substring(7),
      command: trimmed,
      output,
      timestamp: new Date().toLocaleTimeString()
    };

    setLogs((prev) => [...prev, newLog]);
    setInputCommand("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(inputCommand);
  };

  const quickButtons = ["help", "bio", "ceo", "skills", "projects", "education", "contact", "clear"];

  return (
    <section id="terminal" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Developer <span className="gradient-text-blue">Terminal Sandbox</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Interact directly with Saroj Bhandari's profile and company information using CLI commands.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="glass-panel rounded-3xl border border-white/15 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          
          {/* Top Title Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle className="w-3 h-3 text-red-500 fill-red-500/80" />
              <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500/80" />
              <Circle className="w-3 h-3 text-emerald-500 fill-emerald-500/80" />
              <span className="text-slate-400 text-xs ml-2">saroj@kritimmind:~</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                BASH / zsh
              </span>
              <button 
                onClick={() => handleRunCommand("clear")}
                title="Clear Output"
                className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Command Shortcuts Bar */}
          <div className="bg-slate-950/60 px-4 py-2 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-500 font-mono text-[11px] shrink-0">Shortcuts:</span>
            {quickButtons.map((btn) => (
              <button
                key={btn}
                onClick={() => handleRunCommand(btn)}
                className="px-2.5 py-1 rounded bg-slate-900 text-sky-400 border border-sky-500/20 hover:border-sky-500/50 hover:bg-sky-500/10 transition-colors shrink-0 cursor-pointer"
              >
                ${btn}
              </button>
            ))}
          </div>

          {/* Output Display Area */}
          <div className="p-4 sm:p-6 min-h-[280px] max-h-[420px] overflow-y-auto space-y-4 bg-slate-950/90 text-slate-200">
            {logs.map((log) => (
              <div key={log.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-sky-400 font-bold">
                  <span>saroj@kritimmind:~$</span>
                  <span className="text-purple-300">{log.command}</span>
                  <span className="text-[10px] text-slate-600 font-normal ml-auto">{log.timestamp}</span>
                </div>
                <pre className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed text-xs sm:text-sm pl-4 border-l-2 border-sky-500/30">
                  {log.output}
                </pre>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Input Form */}
          <form 
            onSubmit={handleFormSubmit}
            className="p-3 sm:p-4 bg-slate-900/90 border-t border-white/10 flex items-center gap-3"
          >
            <span className="text-sky-400 font-bold shrink-0">saroj@kritimmind:~$</span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="Type command ('help', 'bio', 'ceo', 'skills', 'projects', 'education', 'contact')..."
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition-colors shrink-0 cursor-pointer"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
