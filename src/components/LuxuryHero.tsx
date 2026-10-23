import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { DeveloperHero3D } from './DeveloperHero3D';

export const LuxuryHero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-16 sm:pb-24 w-full relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#FFFFFF]">
      {/* Curved crimson accent background wing on the right (Raiseup Banner Style) */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full pointer-events-none overflow-hidden z-0 opacity-90">
        <div className="absolute -right-24 -top-24 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#881337] via-[#991B1B] to-[#7F1D1D] opacity-95 blur-2xl transform rotate-12 scale-110" />
        <div className="absolute right-12 top-32 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#991B1B] to-[#BE123C] opacity-80 blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Bold Typography & Action Module (Raiseup Style) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Welcome Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>WELCOME TO TRIO CRAFT STUDIO</span>
            </div>

            {/* Giant Headline with Solid + Outline Effect */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#1a1f22] leading-[1.06]">
              GROW YOUR <br />
              <span className="text-[#991B1B]">BUSINESS</span> <br />
              <span className="text-outline-crimson tracking-wider">DIGITALLY</span>
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              From high-traffic web applications, festival puja platforms, and revenue tracking engines to hospital management systems, viral influencer marketing, and 24/7 real-time AI chatbots.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="btn-raiseup-gold px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-[#1a1f22] border border-slate-300 font-bold text-sm shadow-sm hover:border-amber-400 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Projects</span>
              </a>

              <a
                href="https://wa.me/917993370000?text=Hello%20TrioCraft%20Team,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-4 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-sm shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            {/* Trust Bullet Items */}
            <div className="mt-10 pt-6 border-t border-slate-200/90 w-full grid grid-cols-3 gap-4 text-xs font-semibold text-[#334155]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>50+ Shipped</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>99.8% Retention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Developer Sitting in Chair Working Animation */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            {/* The Interactive 3D Workstation */}
            <DeveloperHero3D />
          </div>

        </div>
      </div>
    </section>
  );
};
