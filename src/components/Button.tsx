import React from 'react';
import { cn } from '../lib/utils';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles = 
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: 
      "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-110 border border-cyan-400/30",
    secondary: 
      "bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700/60 hover:border-cyan-400/40 shadow-sm",
    outline: 
      "bg-transparent text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400",
    ghost: 
      "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60",
    glow:
      "relative bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] hover:scale-[1.02]"
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          {children}
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
        </>
      )}
    </button>
  );
};
