import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  glow = false,
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl glass-card p-6 md:p-8 overflow-hidden",
        hoverEffect && "hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
        glow && "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-cyan-500/10 before:via-transparent before:to-purple-500/10 before:rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
