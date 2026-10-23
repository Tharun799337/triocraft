import React from 'react';
import { GitMerge, Fingerprint, Database, Cpu, Activity } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-200/90 text-indigo-700 text-xs font-mono font-semibold mb-3 shadow-sm">
          <GitMerge className="w-3.5 h-3.5" />
          <span>✦ PIPELINE ORCHESTRATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#25263A]">
          System Dataflow Architecture
        </h2>
        <p className="mt-3 text-[#5B5D7A] max-w-xl text-sm sm:text-base">
          Real-time processing nodes governing client requests, vector transformations, and low-latency token streaming.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-white/90 border border-slate-200 shadow-card-3d">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
          {/* Stage 01 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-indigo-200 hover:border-indigo-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-indigo-700 font-bold">STAGE 01</span>
              <Fingerprint className="w-4 h-4 text-indigo-600" />
            </div>
            <h4 className="font-display font-bold text-[#25263A] text-base">Ingress &amp; Semantic Filter</h4>
            <p className="text-xs text-[#5B5D7A] mt-2 leading-relaxed">
              Zero-trust token verification, prompt injection defense, and query intent taxonomy.
            </p>
            <div className="mt-4 text-[11px] font-mono text-indigo-800 font-medium bg-white px-2.5 py-1 rounded-lg border border-indigo-100 inline-block">
              Kong / Redis / Rust Guard
            </div>
          </div>

          {/* Stage 02 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-rose-200 hover:border-rose-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-rose-600 font-bold">STAGE 02</span>
              <Database className="w-4 h-4 text-rose-500" />
            </div>
            <h4 className="font-display font-bold text-[#25263A] text-base">Hierarchical Retrieval</h4>
            <p className="text-xs text-[#5B5D7A] mt-2 leading-relaxed">
              High-dimensional vector lookup merged with graph-structured clinical &amp; enterprise relations.
            </p>
            <div className="mt-4 text-[11px] font-mono text-rose-700 font-medium bg-white px-2.5 py-1 rounded-lg border border-rose-100 inline-block">
              Qdrant / Neo4j / Cohere
            </div>
          </div>

          {/* Stage 03 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-emerald-200 hover:border-emerald-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-emerald-700 font-bold">STAGE 03</span>
              <Cpu className="w-4 h-4 text-emerald-600" />
            </div>
            <h4 className="font-display font-bold text-[#25263A] text-base">Distributed Inference</h4>
            <p className="text-xs text-[#5B5D7A] mt-2 leading-relaxed">
              Continuous batch scheduling, custom speculative decoding, and scalable GPU clusters.
            </p>
            <div className="mt-4 text-[11px] font-mono text-emerald-800 font-medium bg-white px-2.5 py-1 rounded-lg border border-emerald-100 inline-block">
              vLLM / Triton / TensorRT
            </div>
          </div>

          {/* Stage 04 */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-amber-200 hover:border-amber-400 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-amber-700 font-bold">STAGE 04</span>
              <Activity className="w-4 h-4 text-amber-500" />
            </div>
            <h4 className="font-display font-bold text-[#25263A] text-base">3D Spatial Stream</h4>
            <p className="text-xs text-[#5B5D7A] mt-2 leading-relaxed">
              Server-Sent Events delivering token streams and real-time interactive 3D WebGL telemetry.
            </p>
            <div className="mt-4 text-[11px] font-mono text-amber-800 font-medium bg-white px-2.5 py-1 rounded-lg border border-amber-100 inline-block">
              WebSockets / Three.js
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs font-mono text-[#5B5D7A] gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Cluster Status: <strong className="text-emerald-700">All Nodes Synchronized</strong>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span>P95 Roundtrip: <strong className="text-[#25263A]">48ms</strong></span>
            <span>GPU Occupancy: <strong className="text-[#25263A]">92.4%</strong></span>
            <span>Token Throughput: <strong className="text-[#25263A]">3,400 tok/s</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
