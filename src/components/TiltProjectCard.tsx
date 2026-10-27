import React, { useState, useRef } from 'react';
import type { Project } from '../types';
import { Cpu, Activity } from 'lucide-react';

interface TiltProjectCardProps {
  project: Project;
  onInspect: (project: Project) => void;
}

export const TiltProjectCard: React.FC<TiltProjectCardProps> = ({ project, onInspect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation limits (-12 deg to +12 deg)
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  // Simulated internal endpoint for realism
  const getEndpoint = (id: string) => {
    switch (id) {
      case 'rag-pdf-assistant': return 'rag-core.internal.ai/v2';
      case 'oracle-ai-role-advisor': return 'ext.manifest-v3://oracle-advisor';
      case 'hospital-management-system': return 'medcore.clinical.mesh/live';
      case 'face-recognition-attendance': return 'vision-embed.stream:8080';
      case 'stock-market-prediction': return 'quant-engine.telemetry/lstm';
      case 'ganesh-committee-management': return 'community.portal/sync';
      case 'couples-milestone-website': return 'celebration.interactive/rsvp';
      default: return 'internal.system.service';
    }
  };

  const getMetricPill = (id: string) => {
    switch (id) {
      case 'rag-pdf-assistant': return '< 110ms Vector Search';
      case 'oracle-ai-role-advisor': return '0ms Overhead (V3)';
      case 'hospital-management-system': return '99.99% Uptime SLA';
      case 'face-recognition-attendance': return '99.4% Face Precision';
      case 'stock-market-prediction': return 'LSTM R²: 0.89';
      case 'ganesh-committee-management': return 'Offline Firestore Sync';
      case 'couples-milestone-website': return 'Real-Time RSVP Stream';
      default: return 'Sub-150ms Latency';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 group relative rounded-2xl transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Ambient cursor-tracking radial glare */}
      <div
        className="pointer-events-none absolute -inset-0.5 rounded-2xl transition-opacity duration-300 -z-10 blur-xl"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(245, 158, 11, 0.45), rgba(244, 63, 94, 0.2), transparent 70%)`,
          opacity: glarePosition.opacity
        }}
      />

      {/* Main Glassmorphic Card Container */}
      <div className="relative rounded-2xl glass-card-luxury overflow-hidden border border-white/10 group-hover:border-amber-500/40 transition-colors shadow-2xl flex flex-col h-full bg-[#0a0c13]/90">
        
        {/* macOS Style Realistic Chrome Window Top Bar */}
        <div
          className="px-4 py-2.5 bg-[#0e111a] border-b border-white/10 flex items-center justify-between gap-3"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Traffic light control dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/90 shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/90 shadow-sm" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/90 shadow-sm" />
          </div>

          {/* Internal simulated hostname */}
          <div className="flex-1 max-w-[200px] truncate text-center">
            <span className="text-[11px] font-mono text-slate-400 select-none">
              {getEndpoint(project.id)}
            </span>
          </div>

          {/* SLA badge */}
          <div className="flex items-center gap-1.5 shrink-0 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">
              Operational
            </span>
          </div>
        </div>

        {/* 16:9 Realistic Preview Viewport */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-white/5 hologram-scanline"
          style={{ transform: 'translateZ(25px)' }}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c13] via-[#0a0c13]/25 to-transparent" />

          {/* Real-time telemetry metric overlay pill */}
          <div className="absolute top-3 right-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300 shadow-md">
              <Activity className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>{getMetricPill(project.id)}</span>
            </div>
          </div>

          {/* Category micro badge */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#050508]/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Body Content with 3D Depth Layering */}
        <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between space-y-3">
          <div style={{ transform: 'translateZ(30px)' }}>
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1.5">
              {project.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div
            className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5"
            style={{ transform: 'translateZ(25px)' }}
          >
            {project.techStack.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Dual Action Triggers */}
          <div
            className="pt-4 border-t border-white/10 flex items-center justify-between gap-3"
            style={{ transform: 'translateZ(35px)' }}
          >
            {/* Primary: Inspect Architecture Blueprint */}
            <button
              onClick={() => onInspect(project)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 text-xs font-semibold transition-all hover:scale-[1.01] cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Inspect Architecture Blueprint</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
