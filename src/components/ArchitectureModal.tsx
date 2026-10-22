import React from 'react';
import type { Project } from '../types';
import { 
  X, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Sparkles
} from 'lucide-react';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-island border border-amber-500/30 p-6 sm:p-10 shadow-2xl bg-[#08090f] text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300">
              System Architecture Blueprint
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified Telemetry
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            {project.overview}
          </p>
        </div>

        {/* 4-Stage Architecture Pipeline Data Flow */}
        <div className="py-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Layers className="w-4 h-4" />
            <span>End-to-End Dataflow &amp; Processing Pipeline</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs sm:text-sm text-amber-200/90 leading-relaxed overflow-x-auto">
            {project.architectureNote || "Client Request ➔ Authentication Gateway ➔ Context Ingestion ➔ Model Inference ➔ JSON Response Stream"}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2.5">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>Operational Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solutionImplemented}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-4 space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Production Capabilities &amp; Guardrails</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="py-4 space-y-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-rose-400" />
            <span>Telemetry &amp; Edge Case Mitigations</span>
          </h4>

          <div className="space-y-2.5">
            {project.challengesAndSolutions.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-xs font-mono font-bold text-amber-300">
                  Challenge #{idx + 1}: {item.challenge}
                </div>
                <div className="text-xs text-slate-300 pl-3 border-l-2 border-amber-500/50">
                  <strong className="text-white">Mitigation:</strong> {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Action Footer */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                {tech}
              </span>
            ))}
          </div>

          <a
            href="#terminal"
            onClick={() => {
              onClose();
              const term = document.getElementById('terminal');
              if (term) term.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold text-xs hover:scale-105 transition-all shadow-md shadow-amber-500/25 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Discuss This System</span>
          </a>
        </div>

      </div>
    </div>
  );
};
