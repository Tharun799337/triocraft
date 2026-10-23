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
        <div className={cn("inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-4 bg-white text-indigo-700 border border-indigo-200/90 shadow-2xs font-mono",
          align === 'center' && "mx-auto"
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-[#25263A] mb-4 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-extraordinary">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#5B5D7A] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
