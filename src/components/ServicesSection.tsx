import React from 'react';
import { SERVICES } from '../data/services';
import { 
  Globe, 
  FileText, 
  Bot, 
  Cpu, 
  LayoutDashboard, 
  Puzzle, 
  Sparkles, 
  Server, 
  ArrowRight,
  Zap
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  FileText,
  Bot,
  Cpu,
  LayoutDashboard,
  Puzzle,
  Sparkles,
  Server
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Specialized Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-gold">Client Services</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Delivering high-ROI software engineering for startups, founders, and enterprises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl glass-card-luxury p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between bg-[#0a0c13]"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="text-[10px] uppercase font-mono text-amber-400 font-semibold">
                      ROI Benefit
                    </div>
                    <div className="text-xs text-slate-300">
                      {service.businessBenefit}
                    </div>
                  </div>

                  <a
                    href="#terminal"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-white/5 hover:bg-amber-500/15 text-xs font-mono text-slate-300 hover:text-amber-300 transition-colors cursor-pointer border border-white/5 hover:border-amber-500/30"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
