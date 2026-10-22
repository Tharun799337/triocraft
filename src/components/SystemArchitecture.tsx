import React from 'react';
import { GitMerge, Fingerprint, Database, Cpu, Activity } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
          <GitMerge className="w-3.5 h-3.5" />
          <span>PIPELINE ORCHESTRATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
          System Dataflow Architecture
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Real-time processing nodes governing client requests, vector transformations, and low-latency token streaming.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {/* Stage 01 */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400">STAGE 01</span>
              <Fingerprint className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="font-display font-bold text-white text-base">Ingress &amp; Semantic Filter</h4>
            <p className="text-xs text-slate-400 mt-2">
              Zero-trust token verification, prompt injection defense, and query intent taxonomy.
            </p>
            <div className="mt-4 text-[11px] font-mono text-amber-200/60">
              Kong / Redis / Rust Guard
            </div>
          </div>

          {/* Stage 02 */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-rose-500/20 hover:border-rose-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rose-400">STAGE 02</span>
              <Database className="w-4 h-4 text-rose-400" />
            </div>
            <h4 className="font-display font-bold text-white text-base">Hierarchical Retrieval</h4>
            <p className="text-xs text-slate-400 mt-2">
              High-dimensional vector lookup merged with graph-structured entity relations.
            </p>
            <div className="mt-4 text-[11px] font-mono text-rose-200/60">
              Qdrant / Neo4j / Cohere
            </div>
          </div>

          {/* Stage 03 */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-emerald-400">STAGE 03</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="font-display font-bold text-white text-base">Distributed Inference</h4>
            <p className="text-xs text-slate-400 mt-2">
              Speculative decoding with continuous batch scheduling across clustered H100 GPUs.
            </p>
            <div className="mt-4 text-[11px] font-mono text-emerald-200/60">
              vLLM / Triton / TensorRT
            </div>
          </div>

          {/* Stage 04 */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-400">STAGE 04</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="font-display font-bold text-white text-base">3D Spatial Stream</h4>
            <p className="text-xs text-slate-400 mt-2">
              Server-Sent Events delivering token streams and real-time interactive 3D WebGL telemetry.
            </p>
            <div className="mt-4 text-[11px] font-mono text-amber-200/60">
              WebSockets / Three.js
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-amber-500/15 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Cluster Status: <strong className="text-emerald-400">All Nodes Synchronized</strong>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>P95 Roundtrip: <strong className="text-white">48ms</strong></span>
            <span>GPU Occupancy: <strong className="text-white">92.4%</strong></span>
            <span>Token Throughput: <strong className="text-white">3,400 tok/s</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
