import React from 'react';
import { cn } from '../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'green' | 'amber' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  size = 'md',
  className
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium",
    md: "px-3 py-1 text-xs font-semibold"
  };

  const variantStyles = {
    cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
    purple: "bg-purple-500/10 text-purple-300 border border-purple-500/30",
    green: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    amber: "bg-amber-500/10 text-amber-300 border border-amber-500/30",
    slate: "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    outline: "bg-transparent text-slate-300 border border-slate-700 hover:border-slate-500"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
