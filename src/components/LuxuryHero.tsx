import React from 'react';
import { Sparkles, ArrowDown, Send } from 'lucide-react';
import { TrioCraft3DLogo } from './TrioCraft3DLogo';

export const LuxuryHero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16 relative w-full">
      {/* 3D Animated TrioCraft Emblem Feature */}
      <div className="mb-4 relative flex flex-col items-center">
        <TrioCraft3DLogo size="md" interactive={true} showGlow={true} />
        {/* Subtle holographic floor shadow */}
        <div className="w-36 h-2 -mt-3 rounded-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
      </div>

      {/* Status Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/30 backdrop-blur-md mb-8 hover:border-amber-500/60 transition-colors shadow-glow-amber">
        <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
        <span className="text-xs uppercase font-mono tracking-widest text-slate-200">
          TRIOCRAFT • DESIGN &amp; DEVELOPMENT
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.08] max-w-5xl text-white">
        Architecting <br className="hidden sm:inline" />
        <span className="text-gradient-copper-teal">Next-Gen Digital Systems</span> <br />
        &amp; Spatial Engines
      </h1>

      <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
        Building high-throughput machine learning infrastructure, multi-agent RAG pipelines, and tactile 3D control planes designed for mission-critical enterprise scale.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-bold text-sm tracking-wide shadow-glow-amber transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-amber-500/25 font-semibold text-sm backdrop-blur-md transition-all transform hover:-translate-y-0.5 hover:border-amber-500/50 cursor-pointer"
        >
          <span>Initiate Contact</span>
          <Send className="w-4 h-4 text-amber-400" />
        </a>
      </div>

      {/* Telemetry Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-left">
        <div className="glass-card p-4 rounded-2xl">
          <div className="text-2xl font-display font-bold text-white flex items-baseline gap-1">
            &lt; 50<span className="text-xs text-amber-400 font-mono">ms</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
            P95 Inference Latency
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl">
          <div className="text-2xl font-display font-bold text-white flex items-baseline gap-1">
            99.4<span className="text-xs text-rose-500 font-mono">%</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
            Model Accuracy SLA
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl">
          <div className="text-2xl font-display font-bold text-white flex items-baseline gap-1">
            2.4<span className="text-xs text-emerald-400 font-mono">M+</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
            Daily Agent Runs
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl">
          <div className="text-2xl font-display font-bold text-white flex items-baseline gap-1">
            $1.8<span className="text-xs text-amber-400 font-mono">M</span>
          </div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
            Infra Cloud Saved
          </div>
        </div>
      </div>
    </section>
  );
};
