import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

interface SubItem {
  name: string;
  desc: string;
  href: string;
}

// ONLY Services in the Services Dropdown
const servicesList: SubItem[] = [
  { name: 'Digital Marketing & SEO', desc: 'Google Search, Meta Ads, and ROI conversion funnels', href: '#services' },
  { name: 'Influencer Marketing', desc: 'Verified creator matchmaking & viral short-form reels', href: '#services' },
  { name: 'Website & App Development', desc: 'Modern React 19, Next.js, and high-performance apps', href: '#services' },
  { name: 'Hospital & Healthcare HMS', desc: 'CareGrid clinical ERP, bed telemetry & patient portal', href: '#services' },
  { name: 'Real-Time AI & Chatbots', desc: '24/7 autonomous triage copilot & WhatsApp automation', href: '#services' },
  { name: 'Creative Design & Video', desc: 'Viral reels video editing, brand identity & UI/UX', href: '#services' },
];

// Dedicated Projects Dropdown
const projectsList: SubItem[] = [
  { name: 'CareGrid Hospital Management System', desc: 'Enterprise bed telemetry, EHR records & pharmacy POS', href: '#projects' },
  { name: 'NovaCare Hospital & Telehealth Portal', desc: '24/7 OPD doctor booking & encrypted medical records', href: '#projects' },
  { name: 'Vinayaka Chavithi Maha Utsav Portal', desc: 'Online puja bookings, 4K aarti stream & laddu auction', href: '#projects' },
  { name: 'RevPulse SaaS Revenue Intelligence', desc: 'Real-time MRR/ARR analytics & Stripe webhook sync', href: '#projects' },
  { name: 'ForeverAfter Couple Surprise & Apology', desc: 'Romantic milestone journeys & midnight music reveals', href: '#projects' },
  { name: 'MediPulse Real-Time Clinical AI Bot', desc: '18ms streaming conversational triage & symptom check', href: '#projects' },
];

export const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-black text-2xl sm:text-3xl text-[#1a1f22] tracking-tight leading-none">
              trio<span className="text-amber-500">craft</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#5B5D7A] font-bold mt-0.5">
              Digital &amp; AI Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — LARGER FONT (16px / font-bold) */}
        <nav className="hidden lg:flex items-center space-x-8 text-base font-bold text-[#1a1f22]">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="hover:text-amber-600 transition-colors py-1"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#about');
            }}
            className="hover:text-amber-600 transition-colors py-1"
          >
            About
          </a>

          {/* 1. SERVICES DROPDOWN (ONLY SERVICES) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-amber-600' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-84 p-3 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col space-y-1 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1 text-[11px] font-mono font-bold uppercase text-amber-600 tracking-wider">
                  Our Capabilities
                </div>
                {servicesList.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="p-2.5 rounded-xl hover:bg-amber-50 transition-colors group cursor-pointer block text-left"
                  >
                    <div className="text-sm font-bold text-[#1a1f22] group-hover:text-amber-600">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 2. PROJECTS DROPDOWN (ONLY PROJECTS) */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsOpen(true)}
            onMouseLeave={() => setProjectsOpen(false)}
          >
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center gap-1.5 hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              <span>Projects</span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${projectsOpen ? 'rotate-180 text-amber-600' : ''}`} />
            </button>

            {projectsOpen && (
              <div className="absolute top-full left-0 w-88 p-3 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col space-y-1 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-1 text-[11px] font-mono font-bold uppercase text-amber-600 tracking-wider">
                  Featured Case Studies
                </div>
                {projectsList.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="p-2.5 rounded-xl hover:bg-amber-50 transition-colors group cursor-pointer block text-left"
                  >
                    <div className="text-sm font-bold text-[#1a1f22] group-hover:text-amber-600">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#how-we-do-it"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#how-we-do-it');
            }}
            className="hover:text-amber-600 transition-colors py-1"
          >
            How We Do It
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="hover:text-amber-600 transition-colors py-1"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="btn-raiseup-gold px-7 py-3 rounded-full text-sm uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="btn-raiseup-gold px-4 py-2 rounded-full text-xs font-bold inline-flex items-center"
          >
            Get Started
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-[#1a1f22] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-2xl animate-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto text-left">
          <div className="flex flex-col space-y-3 font-bold text-base text-[#1a1f22]">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#hero');
              }}
              className="py-2 border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#about');
              }}
              className="py-2 border-b border-slate-100"
            >
              About
            </a>

            {/* Mobile Services List */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-amber-600 uppercase text-xs font-mono font-bold tracking-wider block mb-2">
                Services
              </span>
              <div className="space-y-1 pl-2">
                {servicesList.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(s.href);
                    }}
                    className="block py-1 text-sm text-slate-700 hover:text-amber-600 font-medium"
                  >
                    • {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Projects List */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-amber-600 uppercase text-xs font-mono font-bold tracking-wider block mb-2">
                Projects
              </span>
              <div className="space-y-1 pl-2">
                {projectsList.map((p, i) => (
                  <a
                    key={i}
                    href={p.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(p.href);
                    }}
                    className="block py-1 text-sm text-slate-700 hover:text-amber-600 font-medium"
                  >
                    • {p.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#how-we-do-it"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#how-we-do-it');
              }}
              className="py-2 border-b border-slate-100"
            >
              How We Do It
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
