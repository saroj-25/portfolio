"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AITerminal from "@/components/AITerminal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {




  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Fixed Navigation Bar */}
      <Navbar theme={"dark"} />

      {/* Main Content Flow */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AITerminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
