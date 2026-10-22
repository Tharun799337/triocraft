import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { TrioCraft3DLogo } from './TrioCraft3DLogo';

interface NavLink {
  name: string;
  href: string;
  id: string;
}

const navLinks: NavLink[] = [
  { name: 'Hero', href: '#hero', id: 'hero' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Ecosystem', href: '#stack', id: 'stack' },
  { name: 'Architecture', href: '#architecture', id: 'architecture' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export const FloatingNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const sections = ['hero', 'projects', 'stack', 'architecture', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY >= el.offsetTop - 220) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
        <nav className="relative flex items-center justify-between gap-3 md:gap-6 px-4 md:px-7 py-2.5 rounded-full bg-[#080910]/85 backdrop-blur-2xl border border-amber-500/25 shadow-2xl shadow-black max-w-4xl w-full">
          {/* TrioCraft Brand Logo with 3D Animated Emblem */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            {/* Live 3D Animated TrioCraft Emblem */}
            <div className="relative flex items-center justify-center p-0.5 rounded-xl bg-gradient-to-tr from-amber-500/20 via-transparent to-cyan-500/20 border border-white/10 group-hover:border-cyan-400/50 transition-colors">
              <TrioCraft3DLogo size="sm" showGlow={false} />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-baseline font-display font-black text-base sm:text-lg tracking-tight leading-none">
                <span className="text-white">Trio</span>
                <span className="text-gradient-copper">Cr</span>
                <span className="text-gradient-teal">aft</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.22em] text-slate-400 uppercase mt-0.5">
                Design &amp; Development
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 font-medium text-xs tracking-wider uppercase font-mono">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'text-white bg-amber-500/15 border border-amber-500/35 font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'text-slate-400 hover:text-amber-400 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Items: Status Pill & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">Available for Projects</span>
              <span className="sm:hidden">Available</span>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-300 hover:text-white p-1 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-4 top-20 z-40 flex flex-col p-5 rounded-2xl bg-[#090b12]/95 backdrop-blur-2xl border border-amber-500/25 shadow-2xl space-y-3 font-medium text-sm md:hidden animate-in fade-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-slate-300 hover:text-amber-400 py-2 flex items-center justify-between cursor-pointer border-b border-white/5 last:border-b-0"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
        </div>
      )}
    </>
  );
};
