import React from 'react';
import { Cpu, Terminal, Zap, ShieldCheck, Box, Database, GitBranch, Server, Code2 } from 'lucide-react';

export const EcosystemBento: React.FC = () => {
  return (
    <section id="stack" className="py-24 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-200/90 text-indigo-700 text-xs font-mono font-semibold mb-3 shadow-sm">
          <Cpu className="w-3.5 h-3.5" />
          <span>✦ STUDIO DISCIPLINES &amp; ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#25263A]">
          End-to-End Digital Craft &amp; AI Engineering
        </h2>
        <p className="mt-3 text-[#5B5D7A] max-w-xl text-sm sm:text-base">
          From creative brand direction and spatial 3D interfaces to high-throughput AI microservices and certified healthcare software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Featured Principal Studio Card */}
        <div className="glass-card rounded-3xl p-7 md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group bg-white/90 border border-slate-200/90 shadow-card-3d">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/15 transition-all" />
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-indigo-700 font-semibold">
                Creative Strategy &amp; Systems Architecture
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-[#25263A]">
              Transforming Ambitious Ideas into Living Digital Products
            </h3>
            <p className="mt-3 text-[#5B5D7A] text-sm leading-relaxed">
              We bridge aesthetic refinement with deep computational power. Whether engineering multi-agent clinical copilots, architecting EHR hospital platforms, or designing award-worthy interactive WebGL spaces, we build for longevity and delight.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {['React 19', 'TypeScript', 'Three.js', 'FastAPI', 'PyTorch', 'PostgreSQL', 'Docker'].map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200/90 text-xs font-mono text-[#25263A] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Distributed Serving */}
        <div className="glass-card rounded-3xl p-7 flex flex-col justify-between relative group bg-white/90 border border-slate-200/90 shadow-card-3d hover:border-rose-300">
          <div>
            <div className="p-2.5 w-fit rounded-xl bg-rose-50 text-rose-500 border border-rose-200 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-display font-bold text-[#25263A]">Real-Time Streaming</h4>
            <p className="mt-2 text-[#5B5D7A] text-xs leading-relaxed">
              Sub-50ms token dispatch, continuous batch scheduling, and WebSocket bidirectional telemetry.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-[#5B5D7A]">
            <span>Throughput</span>
            <span className="text-indigo-600 font-bold">12,000+ RPS</span>
          </div>
        </div>

        {/* Zero-Trust Guardrails */}
        <div className="glass-card rounded-3xl p-7 flex flex-col justify-between group bg-white/90 border border-slate-200/90 shadow-card-3d hover:border-emerald-300">
          <div>
            <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-display font-bold text-[#25263A]">Zero-Trust Security</h4>
            <p className="mt-2 text-[#5B5D7A] text-xs leading-relaxed">
              HIPAA &amp; NABH compliant data masks with granular role-based access for medical &amp; enterprise data.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-[#5B5D7A]">
            <span>Compliance</span>
            <span className="text-emerald-600 font-bold">Audited Zero Leak</span>
          </div>
        </div>

        {/* Production Tech Ecosystem Bar */}
        <div className="glass-card rounded-3xl p-7 md:col-span-3 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/90 border border-slate-200/90 shadow-card-3d">
          <div className="max-w-md text-left">
            <h4 className="text-xl font-display font-bold text-[#25263A]">Production Tech Ecosystem</h4>
            <p className="text-xs text-[#5B5D7A] mt-1">
              Battle-tested tools, runtime compilers, and distributed databases running in production.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 transition-all text-xs font-mono text-[#25263A]">
              <Box className="w-4 h-4 text-indigo-600" /> Three.js / WebGL / Shaders
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-rose-400 transition-all text-xs font-mono text-[#25263A]">
              <Database className="w-4 h-4 text-rose-500" /> Qdrant / Redis / PostgreSQL
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all text-xs font-mono text-[#25263A]">
              <GitBranch className="w-4 h-4 text-emerald-600" /> LangChain / LlamaIndex
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all text-xs font-mono text-[#25263A]">
              <Server className="w-4 h-4 text-amber-500" /> Docker / Kubernetes / Nginx
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-400 transition-all text-xs font-mono text-[#25263A]">
              <Code2 className="w-4 h-4 text-indigo-600" /> React 19 / TypeScript / Vite
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
