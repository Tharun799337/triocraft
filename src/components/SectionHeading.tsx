import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className
}) => {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === 'center' ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
      className
    )}>
      {badge && (
        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-cyan-950/60 text-cyan-400 border border-cyan-500/30",
          align === 'center' && "mx-auto"
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
