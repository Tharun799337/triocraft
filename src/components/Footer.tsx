import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE } from '../data/profile';
import { SERVICES } from '../data/services';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  MessageSquare, 
  ArrowUpRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#03050a] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Ambient gradient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800/60">
          {/* Col 1: Identity & Bio (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-[#070b16] rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400">
                  T
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {PROFILE.name}
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Full-Stack &amp; AI Developer building high-performance websites, custom RAG pipelines, autonomous AI assistants, and enterprise automations for startups and businesses.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${PROFILE.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About &amp; Skills
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Articles &amp; Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Hire / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/contact?service=${srv.id}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{srv.title.split(' ')[0]} {srv.title.split(' ')[1]}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Work With Tharun */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Freelance Status
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">Accepting Clients</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Available for contract MVPs, full-stack website builds, and AI workflow integrations.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-1"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {PROFILE.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-cyan-400 font-mono">React 19 + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
