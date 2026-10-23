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
    <div className="relative flex flex-col rounded-2xl glass-card p-6 md:p-8 bg-white/95 border border-slate-200/90 hover:border-indigo-400 transition-all duration-300 shadow-card-3d">
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-2xs font-mono">
          <Zap className="w-3 h-3 text-indigo-600" />
          High Demand
        </div>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-50 border border-indigo-200 text-indigo-600 mb-6 shadow-sm">
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Header */}
      <h3 className="text-xl font-bold font-display text-[#25263A] mb-2.5">
        {service.title}
      </h3>
      
      <p className="text-sm text-[#5B5D7A] leading-relaxed mb-4">
        {service.shortDescription}
      </p>

      {/* Business Benefit Box */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-indigo-700 mb-1 font-mono">
          Business Benefit
        </div>
        <p className="text-xs text-[#25263A] leading-relaxed font-medium">
          {service.businessBenefit}
        </p>
      </div>

      {/* Deliverables */}
      <div className="mb-6 flex-1">
        <div className="text-xs font-semibold text-[#5B5D7A] mb-2.5">
          Key Deliverables:
        </div>
        <ul className="space-y-2">
          {service.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#5B5D7A] leading-normal">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-slate-200 mb-6">
        <div className="flex flex-wrap gap-1.5">
          {service.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#25263A] border border-slate-200"
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
          className="w-full hover:border-indigo-400 justify-between"
          icon={ArrowRight}
        >
          Enquire About This
        </Button>
      </Link>
    </div>
  );
};
