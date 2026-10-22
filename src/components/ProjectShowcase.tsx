import React, { useState, useRef } from 'react';
import { Layers, Database, Scan, Activity, Network, ExternalLink, X, GitMerge } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectData {
  id: string;
  category: 'genai' | 'vision' | 'enterprise';
  categoryLabel: string;
  subLabel: string;
  title: string;
  desc: string;
  endpoint: string;
  statusBadge: string;
  statusColor: 'amber' | 'rose' | 'emerald';
  image: string;
  hudIcon: React.ReactNode;
  hudTitle: string;
  hudMetric: string;
  hudMetricColor: string;
  metrics: { label: string; val: string; color: string }[];
  stack: string[];
  architecture: string;
  modalStatus: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'rag',
    category: 'genai',
    categoryLabel: 'GENERATIVE AI & RAG',
    subLabel: 'SOC2 Type II',
    title: 'Autonomous Enterprise RAG Platform',
    desc: 'Production-grade multi-vector retrieval system indexing 500k+ corporate documents with reciprocal rank fusion (RRF), cross-encoder neural rerankers, and sub-85ms latency SLA.',
    endpoint: 'rag-cluster.tharun.ai',
    statusBadge: 'SUB-85ms RERANK',
    statusColor: 'amber',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    hudIcon: <Database className="w-4 h-4 text-amber-400" />,
    hudTitle: 'Qdrant Vector Mesh',
    hudMetric: '12.5k QPS',
    hudMetricColor: 'text-emerald-400',
    metrics: [
      { label: 'Latency P95', val: '< 85ms', color: 'text-amber-400' },
      { label: 'Rerank Acc', val: '99.2%', color: 'text-emerald-400' },
      { label: 'Index Size', val: '4.8TB Vectors', color: 'text-white' },
    ],
    stack: ['vLLM', 'Qdrant', 'Cohere Rerank', 'FastAPI'],
    architecture: 'Ingress Gateway (Kong) → Rust Token Redactor → Qdrant Distributed HNSW Vector Mesh → Cohere Cross-Encoder Reranker → vLLM Continuous Batching Engine (Llama-3-70B-Instruct).',
    modalStatus: 'Production High-Availability',
  },
  {
    id: 'vision',
    category: 'vision',
    categoryLabel: 'COMPUTER VISION',
    subLabel: 'WASM + TensorRT',
    title: 'VisionAI Biometric & Document Intelligence',
    desc: 'Real-time edge neural inference for document classification, OCR parsing, and face liveness validation directly on client devices without transmitting sensitive raw PII.',
    endpoint: 'vision-edge.tharun.ai',
    statusBadge: '60 FPS EDGE INFERENCE',
    statusColor: 'rose',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80',
    hudIcon: <Scan className="w-4 h-4 text-rose-400" />,
    hudTitle: 'Wasm Neural Runtime',
    hudMetric: '0ms Server PII',
    hudMetricColor: 'text-rose-400',
    metrics: [
      { label: 'Frame Rate', val: '60 FPS Edge', color: 'text-rose-400' },
      { label: 'OCR Precision', val: '99.7% Exact', color: 'text-emerald-400' },
      { label: 'Model Weight', val: '4.2MB Wasm', color: 'text-white' },
    ],
    stack: ['YOLOv8', 'Grok Vision OCR', 'WebAssembly', 'Rust'],
    architecture: 'Client WebRTC Stream → WebAssembly YOLOv8 Worker → Spatial Feature Keypoint Alignment → Grok Vision OCR Normalizer → 256-Bit Encrypted Payload Dispatch.',
    modalStatus: 'Banking & FinTech Rollout',
  },
  {
    id: 'health',
    category: 'enterprise',
    categoryLabel: 'HEALTHCARE INFRASTRUCTURE',
    subLabel: 'HL7 FHIR & Kafka',
    title: 'Smart Clinical ERP & Healthcare Core',
    desc: 'High-throughput clinical data pipeline ingesting HL7 FHIR telemetry with gradient boosted XGBoost models for early triage warning and automated medical billing reconciliation.',
    endpoint: 'clinical-core.tharun.ai',
    statusBadge: 'HIPAA READY / FHIR API',
    statusColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    hudIcon: <Activity className="w-4 h-4 text-emerald-400" />,
    hudTitle: 'FHIR Data Stream',
    hudMetric: '1,800 Beds Monitored',
    hudMetricColor: 'text-emerald-400',
    metrics: [
      { label: 'Early Triage', val: '4.2 Hrs Lead', color: 'text-emerald-400' },
      { label: 'Stream Lag', val: '< 12ms WebSocket', color: 'text-amber-400' },
      { label: 'Billing Acc', val: '99.8% Compliant', color: 'text-white' },
    ],
    stack: ['XGBoost', 'Apache Kafka', 'HL7 / FHIR', 'TimescaleDB'],
    architecture: 'Bedside Monitor Telemetry → Apache Kafka Streaming Cluster → XGBoost Ensemble Inference Node → FHIR REST API → Real-Time ICU Clinician Alert WebSocket.',
    modalStatus: 'Hospital Intensive Care Live',
  },
  {
    id: 'erp',
    category: 'enterprise',
    categoryLabel: 'ENTERPRISE AUTONOMY',
    subLabel: 'Decentralized Mesh',
    title: 'Cloud ERP Multi-Agent Orchestrator',
    desc: 'Autonomous agent mesh synchronizing supply chain inventory and invoices across SAP & Oracle ERP clusters with deterministic state graphs and human-in-the-loop approvals.',
    endpoint: 'agent-mesh.tharun.ai',
    statusBadge: '100K ACTIONS / DAY',
    statusColor: 'amber',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    hudIcon: <Network className="w-4 h-4 text-amber-400" />,
    hudTitle: 'LangGraph State Loop',
    hudMetric: '42% Cost Saved',
    hudMetricColor: 'text-amber-400',
    metrics: [
      { label: 'Daily Runs', val: '100k+ Actions', color: 'text-amber-400' },
      { label: 'Cost Reduced', val: '42% Trimmed', color: 'text-emerald-400' },
      { label: 'Replay SLA', val: '100% Deterministic', color: 'text-white' },
    ],
    stack: ['LangGraph', 'Redis Streams', 'Docker Swarm', 'Kubernetes'],
    architecture: 'Event Bus (Redis Streams) → LangGraph State Loop → Human Approval Checkpoint → gRPC ERP Adapters → Automated Ledger Commit.',
    modalStatus: 'Fortune 100 Supply Chain',
  },
];

// Interactive 3D Card with Tilt
const TiltCard: React.FC<{
  project: ProjectData;
  onInspect: (p: ProjectData) => void;
}> = ({ project, onInspect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-item project-card-3d glass-card rounded-2xl p-4 sm:p-5 relative group shadow-card-3d"
    >
      <div className="preserve-3d flex flex-col h-full justify-between">
        {/* App Window Mockup Chrome */}
        <div className="translate-z-12 mb-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-xs font-mono">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              <span className="ml-1.5 text-slate-400 text-[10px] truncate hidden sm:inline font-mono">
                {project.endpoint}
              </span>
            </div>

            {/* Status Badge */}
            <div
              className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono border ${
                project.statusColor === 'rose'
                  ? 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                  : project.statusColor === 'emerald'
                  ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                  : 'text-amber-400 bg-amber-500/10 border-amber-500/30'
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full animate-pulse ${
                  project.statusColor === 'rose'
                    ? 'bg-rose-400'
                    : project.statusColor === 'emerald'
                    ? 'bg-emerald-400'
                    : 'bg-amber-400'
                }`}
              />
              <span>{project.statusBadge}</span>
            </div>
          </div>

          {/* High-Fidelity UI Mockup Visual Stage */}
          <div
            className={`relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mt-2 bg-[#0d0f17] border group-hover:border-amber-400 transition-colors ${
              project.statusColor === 'rose'
                ? 'border-rose-500/30'
                : project.statusColor === 'emerald'
                ? 'border-emerald-500/30'
                : 'border-amber-500/30'
            }`}
          >
            {/* Holographic Scanline Overlay */}
            <div className="absolute inset-0 scanlines-overlay z-10 opacity-40 pointer-events-none" />

            {/* High-Res Dashboard Image */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image-zoom w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-105"
              loading="lazy"
            />

            {/* Floating Glass Metric HUD */}
            <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 z-20 flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-1.5">
                {project.hudIcon}
                <span className="text-white text-xs">{project.hudTitle}</span>
              </div>
              <div className={`font-bold ${project.hudMetricColor}`}>{project.hudMetric}</div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="translate-z-16">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                project.statusColor === 'rose'
                  ? 'bg-rose-500/15 border-rose-500/30 text-rose-400'
                  : project.statusColor === 'emerald'
                  ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                  : 'bg-amber-500/15 border-amber-500/30 text-amber-400'
              }`}
            >
              {project.categoryLabel}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">{project.subLabel}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs mt-1.5 leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-3 gap-1.5 my-3 py-2 border-y border-white/[0.08] text-center font-mono">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <div className="text-[10px] text-slate-400">{m.label}</div>
                <div className={`text-xs font-bold ${m.color}`}>{m.val}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.stack.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-white/5 border border-amber-500/20 text-[10px] font-mono text-amber-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="translate-z-8 flex items-center gap-2 pt-1">
          <button
            onClick={() => onInspect(project)}
            className={`flex-1 py-2 px-3 rounded-lg font-display font-bold text-[11px] tracking-wider uppercase flex items-center justify-center gap-1.5 hover:opacity-90 transition-all cursor-pointer ${
              project.statusColor === 'rose'
                ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-glow-rose'
                : project.statusColor === 'emerald'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-black shadow-glow-emerald'
                : 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black shadow-glow-amber'
            }`}
          >
            <span>Inspect Architecture</span>
            <ExternalLink className="w-3 h-3" />
          </button>
          <a
            href="https://github.com/Tharun799337"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
            title="View Source on GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'genai' | 'vision' | 'enterprise'>('all');
  const [inspectProject, setInspectProject] = useState<ProjectData | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FLAGSHIP ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
            Project Showcase
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          Explore production-grade AI platforms and distributed systems. Hover to activate 3D dynamic tilt and click &quot;Inspect Architecture&quot; for system blueprints.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-amber-500/15">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
          }`}
        >
          ALL PROJECTS
        </button>
        <button
          onClick={() => setActiveFilter('genai')}
          className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
            activeFilter === 'genai'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
          }`}
        >
          GENERATIVE AI &amp; RAG
        </button>
        <button
          onClick={() => setActiveFilter('vision')}
          className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
            activeFilter === 'vision'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
          }`}
        >
          COMPUTER VISION
        </button>
        <button
          onClick={() => setActiveFilter('enterprise')}
          className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
            activeFilter === 'enterprise'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
          }`}
        >
          ENTERPRISE SYSTEMS
        </button>
      </div>

      {/* 3D Projects Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <TiltCard
            key={project.id}
            project={project}
            onInspect={(p) => setInspectProject(p)}
          />
        ))}
      </div>

      {/* Interactive Architectural Inspect Modal */}
      {inspectProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setInspectProject(null);
          }}
        >
          <div className="glass-card max-w-3xl w-full rounded-3xl p-6 sm:p-9 border border-amber-500/35 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setInspectProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-amber-500/30">
              <img
                src={inspectProject.image}
                alt={inspectProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono">
                  {inspectProject.categoryLabel}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-black/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {inspectProject.modalStatus}
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {inspectProject.title}
            </h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              {inspectProject.desc}
            </p>

            {/* Pipeline Dataflow Diagram */}
            <div className="my-6 p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                <GitMerge className="w-3.5 h-3.5" /> End-to-End Pipeline Dataflow
              </div>
              <div className="text-xs font-mono text-slate-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
                {inspectProject.architecture}
              </div>
            </div>

            {/* Metric Badges */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {inspectProject.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-amber-500/20 text-center"
                >
                  <div className={`text-base font-bold font-display ${m.color}`}>{m.val}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Stack Pills */}
            <div className="mb-6">
              <div className="text-xs uppercase font-mono text-amber-200/80 mb-2">
                Verified Production Stack:
              </div>
              <div className="flex flex-wrap gap-2">
                {inspectProject.stack.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-amber-100 border border-amber-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setInspectProject(null)}
                className="flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
