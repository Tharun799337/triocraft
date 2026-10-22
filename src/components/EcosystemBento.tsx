import React from 'react';
import { Cpu, Terminal, Zap, ShieldCheck, Box, Database, GitBranch, Server, Code2 } from 'lucide-react';

export const EcosystemBento: React.FC = () => {
  return (
    <section id="stack" className="py-24 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>SYSTEM TOPOLOGY &amp; EXPERTISE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
          Full-Stack Intelligence Architecture
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
          Specializing in distributed model serving, zero-trust enterprise retrieval, and high-fidelity 3D spatial WebGL interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Featured Principal Architect Card */}
        <div className="glass-card rounded-3xl p-7 md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-amber-200/70">
                Principal Systems Architect
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Transforming Research into Bulletproof Production Microservices
            </h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">
              With deep expertise delivering distributed systems, I architect resilient, zero-downtime AI platforms. My systems integrate continuous batching, custom speculative decoders, and distributed vector databases with spatial 3D control dashboards.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['PyTorch', 'vLLM', 'Three.js', 'Qdrant', 'Kubernetes', 'Rust'].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/5 border border-amber-500/20 text-xs font-mono text-amber-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Distributed Serving */}
        <div className="glass-card rounded-3xl p-7 flex flex-col justify-between relative group">
          <div>
            <div className="p-2.5 w-fit rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-display font-bold text-white">Distributed Serving</h4>
            <p className="mt-2 text-slate-400 text-xs leading-relaxed">
              TensorRT-LLM and FlashAttention-3 kernels optimized for multi-GPU node clusters.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Throughput</span>
            <span className="text-amber-400 font-bold">12,000+ RPS</span>
          </div>
        </div>

        {/* Zero-Trust Guardrails */}
        <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group">
          <div>
            <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-display font-bold text-white">Zero-Trust Guardrails</h4>
            <p className="mt-2 text-slate-400 text-xs leading-relaxed">
              SOC2 &amp; HIPAA compliant token redact engines with semantic multi-tenant security filters.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Compliance</span>
            <span className="text-emerald-400 font-bold">Audited Zero Leak</span>
          </div>
        </div>

        {/* Production Tech Ecosystem Bar */}
        <div className="glass-card rounded-3xl p-7 md:col-span-3 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-left">
            <h4 className="text-xl font-display font-bold text-white">Production Tech Ecosystem</h4>
            <p className="text-xs text-slate-400 mt-1">
              High-performance tools, runtime compilers, and distributed databases tested in live environments.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-400 transition-all text-xs font-mono">
              <Box className="w-4 h-4 text-amber-400" /> Three.js / WebGL / Shaders
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-rose-500/20 hover:border-rose-400 transition-all text-xs font-mono">
              <Database className="w-4 h-4 text-rose-400" /> Milvus / Qdrant / Redis
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-400 transition-all text-xs font-mono">
              <GitBranch className="w-4 h-4 text-emerald-400" /> LangGraph / LlamaIndex
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-400 transition-all text-xs font-mono">
              <Server className="w-4 h-4 text-amber-400" /> Ray / Triton / Kubernetes
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-rose-500/20 hover:border-rose-400 transition-all text-xs font-mono">
              <Code2 className="w-4 h-4 text-rose-400" /> Next.js 15 / Tailwind / Go
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
