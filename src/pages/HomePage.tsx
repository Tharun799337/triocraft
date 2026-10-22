import React from 'react';
import { FloatingNavbar } from '../components/FloatingNavbar';
import { LuxuryHero } from '../components/LuxuryHero';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { EcosystemBento } from '../components/EcosystemBento';
import { SystemArchitecture } from '../components/SystemArchitecture';
import { CyberTerminal } from '../components/CyberTerminal';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-[#f59e0b] selection:text-black overflow-x-hidden">
      <SEO
        title="TrioCraft // Design &amp; Development"
        description="TrioCraft — Design &amp; Development studio specializing in custom web platforms, production AI systems, RAG architectures, and 3D spatial WebGL interfaces."
      />

      {/* Floating 3D Island Navbar */}
      <FloatingNavbar />

      {/* Main Viewport */}
      <main className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <LuxuryHero />
        <ProjectShowcase />
        <EcosystemBento />
        <SystemArchitecture />
        <CyberTerminal />

        {/* Luxury Obsidian Footer */}
        <footer className="w-full py-10 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <div className="flex items-center gap-2.5">
            <img src="/triocraft-emblem.png" alt="TrioCraft" className="w-5 h-5 object-contain" />
            <span>&copy; {new Date().getFullYear()} TrioCraft Design &amp; Development. All systems verified.</span>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-amber-100">All Operational Metrics Optimal</span>
          </div>
        </footer>
      </main>
    </div>
  );
};
