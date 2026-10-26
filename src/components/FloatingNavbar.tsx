import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Megaphone,
  Globe,
  Building2,
  Bot,
  Video,
  HeartPulse,
  Sparkles,
  LineChart,
  Heart,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

interface SubItem {
  name: string;
  desc: string;
  href: string;
  icon: React.ElementType;
}

// ONLY Services in the Services Dropdown
const servicesList: SubItem[] = [
  {
    name: 'Digital Marketing & SEO',
    desc: 'Google Search, Meta Ads, and ROI conversion funnels',
    href: '#services',
    icon: TrendingUp
  },
  {
    name: 'Influencer Marketing',
    desc: 'Verified creator matchmaking & viral short-form reels',
    href: '#services',
    icon: Megaphone
  },
  {
    name: 'Website & App Development',
    desc: 'Modern React 19, Next.js, and high-performance apps',
    href: '#services',
    icon: Globe
  },
  {
    name: 'Hospital & Healthcare HMS',
    desc: 'CareGrid clinical ERP, bed telemetry & patient portal',
    href: '#services',
    icon: Building2
  },
  {
    name: 'Real-Time AI & Chatbots',
    desc: '24/7 autonomous triage copilot & WhatsApp automation',
    href: '#services',
    icon: Bot
  },
  {
    name: 'Creative Design & Video',
    desc: 'Viral reels video editing, brand identity & UI/UX',
    href: '#services',
    icon: Video
  },
];

// Dedicated Projects Dropdown
const projectsList: SubItem[] = [
  {
    name: 'Hospital Management System',
    desc: 'Enterprise bed telemetry, EHR records & pharmacy POS',
    href: '#projects',
    icon: Building2
  },
  {
    name: 'Hospital Website',
    desc: '24/7 OPD doctor booking & encrypted medical records',
    href: '#projects',
    icon: HeartPulse
  },
  {
    name: 'Vinayaka Chavithi Maha Utsav Portal',
    desc: 'Online puja bookings, 4K aarti stream & laddu auction',
    href: '#projects',
    icon: Sparkles
  },
  {
    name: 'Revenue Tracker',
    desc: 'Real-time MRR/ARR analytics & Stripe webhook sync',
    href: '#projects',
    icon: LineChart
  },
  {
    name: 'ForeverAfter Couple Surprise & Apology',
    desc: 'Romantic milestone journeys & midnight music reveals',
    href: '#projects',
    icon: Heart
  },
  {
    name: 'Real-Time Chatbots',
    desc: '18ms streaming conversational triage & symptom check',
    href: '#projects',
    icon: Cpu
  },
];

export const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [projectsOpen, setProjectsOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setProjectsOpen(false);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleProjectsEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setServicesOpen(false);
    setProjectsOpen(true);
  };

  const handleProjectsLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setProjectsOpen(false);
    }, 150);
  };

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
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Official Transparent Emblem */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src="/triocraft-emblem.png"
            alt="TrioCraft Official Emblem"
            className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
          />
          <div className="flex flex-col text-left">
            <span className="font-display font-medium text-2xl sm:text-[26px] text-slate-900 tracking-tight leading-none">
              Trio<span className="text-amber-600 font-semibold">Craft</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500 font-medium mt-1">
              Design &amp; Development
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Attractive Medium Weight & Modern Spacing */}
        <nav className="hidden lg:flex items-center space-x-7 text-[16px] font-medium text-slate-700">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="hover:text-amber-600 transition-colors py-1.5 px-1 relative group"
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#about');
            }}
            className="hover:text-amber-600 transition-colors py-1.5 px-1 relative group"
          >
            <span>About</span>
            <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
          </a>

          {/* 1. SERVICES DROPDOWN (ONLY SERVICES) — BUTTERY SMOOTH HOVER */}
          <div
            className="relative py-1.5"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 py-0.5 px-1 transition-colors cursor-pointer ${
                servicesOpen ? 'text-amber-600' : 'hover:text-amber-600'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-out ${
                  servicesOpen ? 'rotate-180 text-amber-600' : ''
                }`}
              />
            </button>

            {/* Smooth Animated Dropdown Container */}
            <div
              className={`absolute top-full left-0 w-[420px] p-3 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/90 transition-all duration-200 ease-out z-50 ${
                servicesOpen
                  ? 'opacity-100 translate-y-2 pointer-events-auto visible scale-100'
                  : 'opacity-0 translate-y-0 pointer-events-none invisible scale-[0.98]'
              }`}
            >
              {/* Invisible Hover Bridge to prevent gap jitter */}
              <div className="absolute -top-3 left-0 w-full h-3" />

              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 border-b border-slate-100 mb-1 flex items-center justify-between">
                <span>Our Capabilities</span>
                <span className="text-[10px] text-slate-400 font-normal">Full-Service Studio</span>
              </div>

              <div className="space-y-1">
                {servicesList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.href);
                      }}
                      className="p-2.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-all duration-150 group cursor-pointer flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100/70 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14.5px] font-medium text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-600" />
                        </div>
                        <div className="text-[12px] text-slate-500 font-normal mt-0.5 leading-snug line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. PROJECTS DROPDOWN (ONLY PROJECTS) — BUTTERY SMOOTH HOVER */}
          <div
            className="relative py-1.5"
            onMouseEnter={handleProjectsEnter}
            onMouseLeave={handleProjectsLeave}
          >
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className={`flex items-center gap-1.5 py-0.5 px-1 transition-colors cursor-pointer ${
                projectsOpen ? 'text-amber-600' : 'hover:text-amber-600'
              }`}
            >
              <span>Projects</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-300 ease-out ${
                  projectsOpen ? 'rotate-180 text-amber-600' : ''
                }`}
              />
            </button>

            {/* Smooth Animated Dropdown Container */}
            <div
              className={`absolute top-full left-0 w-[440px] p-3 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/90 transition-all duration-200 ease-out z-50 ${
                projectsOpen
                  ? 'opacity-100 translate-y-2 pointer-events-auto visible scale-100'
                  : 'opacity-0 translate-y-0 pointer-events-none invisible scale-[0.98]'
              }`}
            >
              {/* Invisible Hover Bridge to prevent gap jitter */}
              <div className="absolute -top-3 left-0 w-full h-3" />

              <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-600 border-b border-slate-100 mb-1 flex items-center justify-between">
                <span>Featured Case Studies</span>
                <span className="text-[10px] text-slate-400 font-normal">Recent Work</span>
              </div>

              <div className="space-y-1">
                {projectsList.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.href);
                      }}
                      className="p-2.5 rounded-xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-all duration-150 group cursor-pointer flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100/70 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14.5px] font-medium text-slate-900 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                          <span className="truncate pr-2">{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-600 flex-shrink-0" />
                        </div>
                        <div className="text-[12px] text-slate-500 font-normal mt-0.5 leading-snug line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <a
            href="#how-we-do-it"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#how-we-do-it');
            }}
            className="hover:text-amber-600 transition-colors py-1.5 px-1 relative group"
          >
            <span>How We Do It</span>
            <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="hover:text-amber-600 transition-colors py-1.5 px-1 relative group"
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
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
            className="btn-raiseup-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
            className="btn-raiseup-gold px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center"
          >
            Get Started
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-2xl animate-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto text-left">
          <div className="flex flex-col space-y-3 font-medium text-[16px] text-slate-800">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#hero');
              }}
              className="py-2 border-b border-slate-100 hover:text-amber-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#about');
              }}
              className="py-2 border-b border-slate-100 hover:text-amber-600 transition-colors"
            >
              About
            </a>

            {/* Mobile Services List */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-amber-600 uppercase text-xs font-semibold tracking-wider block mb-2">
                Services
              </span>
              <div className="space-y-1.5 pl-2">
                {servicesList.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(s.href);
                    }}
                    className="block py-1 text-sm text-slate-600 hover:text-amber-600 font-medium"
                  >
                    • {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Projects List */}
            <div className="py-2 border-b border-slate-100">
              <span className="text-amber-600 uppercase text-xs font-semibold tracking-wider block mb-2">
                Projects
              </span>
              <div className="space-y-1.5 pl-2">
                {projectsList.map((p, i) => (
                  <a
                    key={i}
                    href={p.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(p.href);
                    }}
                    className="block py-1 text-sm text-slate-600 hover:text-amber-600 font-medium"
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
              className="py-2 border-b border-slate-100 hover:text-amber-600 transition-colors"
            >
              How We Do It
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#contact');
              }}
              className="py-2 hover:text-amber-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
