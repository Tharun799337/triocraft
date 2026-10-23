import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

interface SubService {
  name: string;
  desc: string;
  href: string;
}

const servicesDropdown: SubService[] = [
  { name: 'Digital Marketing & SEO', desc: 'Google & Meta Ads, conversion funnels & ranking', href: '#services' },
  { name: 'Influencer Marketing', desc: 'Creator matchmaking, viral campaigns & rights', href: '#services' },
  { name: 'Website & App Development', desc: 'Modern React, Next.js, and high-speed web apps', href: '#services' },
  { name: 'Healthcare & Hospital HMS', desc: 'Patient portals, bed ward allocation & EHR', href: '#services' },
  { name: 'Real-Time AI & Chatbots', desc: '24/7 intelligent patient triage & support bots', href: '#services' },
  { name: 'Festival & Couple Experiences', desc: 'Temple puja portals & romantic surprise sites', href: '#projects' },
];

export const FloatingNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
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
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Raiseup Agency Style with Flame Spark) */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-black text-xl sm:text-2xl text-[#1a1f22] tracking-tight leading-none">
              trio<span className="text-amber-500">craft</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#5B5D7A] font-semibold mt-0.5">
              Digital &amp; AI Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-[#1a1f22]">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="hover:text-amber-500 transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#about');
            }}
            className="hover:text-amber-500 transition-colors"
          >
            About
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-amber-500 transition-colors cursor-pointer py-1"
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-80 p-3 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col space-y-1 animate-in fade-in slide-in-from-top-2">
                {servicesDropdown.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors group cursor-pointer block text-left"
                  >
                    <div className="text-xs font-bold text-[#1a1f22] group-hover:text-amber-600">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#5B5D7A] mt-0.5">{item.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#projects');
            }}
            className="hover:text-amber-500 transition-colors"
          >
            Projects
          </a>

          <a
            href="#how-we-do-it"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#how-we-do-it');
            }}
            className="hover:text-amber-500 transition-colors"
          >
            How We Do It
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="hover:text-amber-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button (Raiseup Iconic Golden Pill) */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#contact');
            }}
            className="btn-raiseup-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer"
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3 font-semibold text-sm text-[#1a1f22]">
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
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#services');
              }}
              className="py-2 border-b border-slate-100"
            >
              Services (Digital Marketing, Influencer, Web &amp; AI)
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('#projects');
              }}
              className="py-2 border-b border-slate-100"
            >
              Projects &amp; Case Studies
            </a>
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
