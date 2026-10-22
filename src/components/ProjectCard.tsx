import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { Badge } from './Badge';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl glass-card overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300">
      {/* Visual Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950/80 border-b border-slate-800/60">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        {/* Top Badges overlay */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
          <Badge variant="cyan" size="sm" className="backdrop-blur-md bg-slate-950/80 text-[10px]">
            {project.category}
          </Badge>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900/90 text-slate-300 border border-slate-700/60">
            {project.status === 'Live Demo Available' ? '🟢 Live' : '📋 Case Study'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-1.5">
          {project.title}
        </h3>
        
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-400">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group/btn"
          >
            <span>View Architecture &amp; Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Link>
          
          <span className="text-[11px] text-slate-400 font-mono">
            Verified Build
          </span>
        </div>
      </div>
    </div>
  );
};
