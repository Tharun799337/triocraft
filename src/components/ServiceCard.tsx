import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';
import { 
  Globe, 
  FileText, 
  Bot, 
  Cpu, 
  LayoutDashboard, 
  Puzzle, 
  Sparkles, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  service: Service;
}

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

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="relative flex flex-col rounded-2xl glass-card p-6 md:p-8 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300">
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/40">
          <Zap className="w-3 h-3 text-cyan-400" />
          High Demand
        </div>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 mb-6 shadow-inner">
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Header */}
      <h3 className="text-xl font-bold text-white mb-2.5">
        {service.title}
      </h3>
      
      <p className="text-sm text-slate-300 leading-relaxed mb-4">
        {service.shortDescription}
      </p>

      {/* Business Benefit Box */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 mb-5">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400 mb-1">
          Business Benefit
        </div>
        <p className="text-xs text-slate-200 leading-relaxed font-medium">
          {service.businessBenefit}
        </p>
      </div>

      {/* Deliverables */}
      <div className="mb-6 flex-1">
        <div className="text-xs font-semibold text-slate-400 mb-2.5">
          Key Deliverables:
        </div>
        <ul className="space-y-2">
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-slate-800/80 mb-6">
        <div className="flex flex-wrap gap-1.5">
          {service.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link to={`/contact?service=${service.id}`} className="block">
        <Button
          variant="secondary"
          size="md"
          className="w-full group-hover:border-cyan-400/50 justify-between"
          icon={ArrowRight}
        >
          Enquire About This
        </Button>
      </Link>
    </div>
  );
};
