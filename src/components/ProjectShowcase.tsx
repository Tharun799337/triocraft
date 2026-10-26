import React, { useState, useEffect, useRef } from 'react';
import { Layers, ExternalLink, X, ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

// ── Modern High-Tech Corner HUD Accents (Harmonious with Trio Craft Theme) ─────
const ModernCornerBracket: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br' }> = ({ position }) => {
  const posClasses = {
    tl: 'top-2.5 left-2.5 border-t-2 border-l-2 rounded-tl-[4px]',
    tr: 'top-2.5 right-2.5 border-t-2 border-r-2 rounded-tr-[4px]',
    bl: 'bottom-2.5 left-2.5 border-b-2 border-l-2 rounded-bl-[4px]',
    br: 'bottom-2.5 right-2.5 border-b-2 border-r-2 rounded-br-[4px]',
  }[position];

  return (
    <span
      className={`absolute ${posClasses} w-3 h-3 border-[#32C8BF] pointer-events-none z-30 transition-all opacity-85 shadow-[0_0_8px_rgba(50,200,191,0.5)]`}
    />
  );
};

interface ProjectItem {
  id: string;
  category: 'all' | 'festival' | 'fintech' | 'couple' | 'healthcare' | 'genai';
  categoryLabel: string;
  title: string;
  desc: string;
  image: string;
  badge: string;
  badgeColor: string;
  metric: string;
  stack: string[];
  architecture: string;
  status: string;
}

const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'hospital-hms',
    category: 'healthcare',
    categoryLabel: 'Healthcare & HMS',
    title: 'Hospital Management System',
    desc: 'Clinical OS with floor-by-floor live bed ward tracking, emergency triage, electronic health records (EHR), and automated pharmacy POS.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    badge: 'Live Hospital ERP',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    metric: '184 / 200 Beds Monitored',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    architecture: 'Ward Terminals → Secure SSL Reverse Proxy → Node.js HMS API Cluster → PostgreSQL Clinical Relational Store → Redis Ward Mutex Cache → Thermal Receipt & Lab Printers.',
    status: 'Live Multi-Specialty Hospital ERP',
  },
  {
    id: 'hospital-web',
    category: 'healthcare',
    categoryLabel: 'Hospital Portal',
    title: 'Hospital Website',
    desc: 'High-converting hospital web platform with live doctor rosters, specialty departments, real-time OPD booking, and telehealth portal.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    badge: '24/7 OPD & Telehealth',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    metric: '2,400+ Monthly Bookings',
    stack: ['React 19', 'Next.js', 'Tailwind', 'Node.js', 'WebSockets'],
    architecture: 'Client React Portal → Edge CDN Ingress → Express Healthcare Gateway → Doctor Schedule Mutex Lock → Patient SMS/WhatsApp Dispatcher.',
    status: 'NABH & HIPAA Compliant Healthcare Portal',
  },
  {
    id: 'vinayaka-utsav',
    category: 'festival',
    categoryLabel: 'Festival & Community',
    title: 'Vinayaka Chavithi Maha Utsav Portal',
    desc: 'Temple & pandal festival portal with online puja bookings, 4K live aarti streaming, UPI digital hundi, and real-time laddu auction.',
    image: 'https://images.unsplash.com/photo-1613422954567-8eade6e47038?auto=format&fit=crop&w=1200&q=80',
    badge: 'Live Puja & Auction',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    metric: '50,000+ Concurrent Devotees',
    stack: ['React', 'TypeScript', 'WebSockets', 'UPI Gateway', 'Redis'],
    architecture: 'Devotee Web Client → Cloudflare Edge CDN → Node.js WebSocket Cluster → Redis Mutex Bidding Engine → PostgreSQL Financial Ledger → Instant WhatsApp/SMS E-Receipts.',
    status: 'Festive High-Traffic Production Platform',
  },
  {
    id: 'revenue-pulse',
    category: 'fintech',
    categoryLabel: 'Fintech & SaaS',
    title: 'Revenue Tracker',
    desc: 'Recurring revenue telemetry platform with Stripe/PayPal webhook sync, MRR/ARR analytics, churn prediction, and automated dunning.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    badge: 'Stripe & PayPal Sync',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    metric: '$579,000 Annualized ARR',
    stack: ['React 19', 'FastAPI', 'TimescaleDB', 'PostgreSQL', 'Chart.js'],
    architecture: 'Stripe/PayPal Payment Gateways → Webhook Ingestion Buffer → TimescaleDB Continuous Aggregates → Redis Financial Cache → Real-Time Analytics UI.',
    status: 'Live FinTech SaaS Operations',
  },
  {
    id: 'couple-surprise',
    category: 'couple',
    categoryLabel: 'Couple & Lifestyle',
    title: 'ForeverAfter Couple Surprise & Apology',
    desc: 'Personalized couple web experiences featuring romantic milestone timelines, sincere interactive apology notes, and midnight music reveals.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80',
    badge: 'Surprise & Apology',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    metric: '100% Forgiveness & Delight',
    stack: ['React', 'Framer Motion', 'Canvas Confetti', 'Howler.js'],
    architecture: 'Client Responsive SPA → Cloudinary Media Optimization CDN → Localized Midnight Trigger → Interactive Music Player Engine → Confetti Burst Reveal.',
    status: 'Bespoke Emotional Couple Portals',
  },
  {
    id: 'health-bot',
    category: 'genai',
    categoryLabel: 'AI & Chatbots',
    title: 'Real-Time Chatbots',
    desc: 'Autonomous 24/7 patient triage conversational copilot providing symptom checks, doctor matching, and multi-lingual voice/text streaming.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    badge: '18ms Streaming AI',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    metric: '18ms Stream Latency (12+ Langs)',
    stack: ['Python', 'FastAPI', 'LangChain', 'WebSockets', 'Llama-3'],
    architecture: 'Patient Client (Web/WhatsApp) → WebSocket Gateway → HIPAA Token Redactor → RAG Clinical Protocol Retriever → Streaming Medical LLM → Doctor Booking Dispatch.',
    status: '24/7 Live Clinical Intake Bot',
  },
];

export const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [inspectProject, setInspectProject] = useState<ProjectItem | null>(null);
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeFilter);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  // Smooth Automatic Continuous Auto-Scroll Timer (no play/pause button needed)
  useEffect(() => {
    if (isCardHovered || filteredProjects.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isCardHovered, filteredProjects.length]);

  // Smoothly center the active card directly in the middle of the viewport
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !container.children || container.children.length === 0) return;

    const targetCard = container.children[currentIndex] as HTMLElement | undefined;
    if (targetCard) {
      const scrollPos = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollPos),
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#FFFFFF] w-full border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>✦ REAL-WORLD PROJECTS &amp; CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1a1f22]">
              Our Featured Projects
            </h2>
          </div>

          {/* Controls: Left & Right Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-700 transition-all cursor-pointer shadow-xs active:scale-95"
              aria-label="Next Project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-100">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'healthcare', label: 'Hospital & Healthcare' },
            { id: 'festival', label: 'Festival & Puja' },
            { id: 'fintech', label: 'SaaS & Revenue' },
            { id: 'couple', label: 'Couple Surprises' },
            { id: 'genai', label: 'AI & Chatbots' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-[#1a1f22] hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Minimal Auto-Scrolling Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto scrollbar-none scroll-smooth py-12 px-6 sm:px-16 -mx-4 sm:mx-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProjects.map((project, idx) => {
            const isMiddle = idx === currentIndex;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                onClick={() => setInspectProject(project)}
                className={`flex-shrink-0 transition-all duration-500 ease-out cursor-pointer relative ${
                  isMiddle
                    ? 'w-[260px] sm:w-[295px] scale-[1.04] z-20'
                    : 'w-[230px] sm:w-[265px] scale-[0.96] opacity-75 hover:opacity-100 z-10'
                }`}
              >
                {/* Modern High-End Spotlight Frame (Trio Craft Theme: #32C8BF Teal & Amber Dual-Glow) */}
                <div
                  className={`w-full h-full flex flex-col justify-between transition-all duration-500 relative ${
                    isMiddle
                      ? 'p-[2.5px] rounded-3xl bg-gradient-to-br from-[#32C8BF] via-amber-400 to-[#32C8BF] shadow-[0_20px_50px_-10px_rgba(50,200,191,0.38),0_10px_30px_-5px_rgba(245,158,11,0.22)] ring-2 ring-[#32C8BF]/30 overflow-visible'
                      : 'rounded-2xl bg-white border border-slate-200/90 shadow-sm card-hover-smooth card-shine overflow-hidden'
                  }`}
                >
                  {isMiddle && (
                    <>
                      <ModernCornerBracket position="tl" />
                      <ModernCornerBracket position="tr" />
                      <ModernCornerBracket position="bl" />
                      <ModernCornerBracket position="br" />
                      {/* Modern High-Tech Spotlight Pill */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1 rounded-full bg-slate-900 border border-[#32C8BF]/60 text-white shadow-[0_4px_16px_rgba(50,200,191,0.35)] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#32C8BF] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#32C8BF]"></span>
                        </span>
                        <span className="font-mono font-bold text-[9.5px] tracking-widest uppercase bg-gradient-to-r from-white via-amber-200 to-[#32C8BF] bg-clip-text text-transparent">
                          SPOTLIGHT
                        </span>
                        <Sparkles className="w-3 h-3 text-amber-400 fill-amber-400" />
                      </div>
                    </>
                  )}

                  {/* Card Interior */}
                  <div className={`w-full h-full bg-white flex flex-col justify-between overflow-hidden ${isMiddle ? 'rounded-[21px]' : 'rounded-2xl'}`}>
                    <div>
                      {/* Compact Photographic Image */}
                      <div className="relative w-full h-36 sm:h-40 overflow-hidden bg-slate-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                        
                        {/* Category Pill Over Image */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/95 text-[#1a1f22] shadow-sm backdrop-blur-xs">
                            {project.categoryLabel}
                          </span>
                        </div>

                        {/* Status Badge Over Image */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                          <span className="text-[11px] font-bold drop-shadow-sm truncate">
                            {project.metric}
                          </span>
                          <span className="px-1.5 py-0.5 rounded-full text-[8.5px] font-mono font-bold border backdrop-blur-xs bg-white/90 text-slate-800">
                            {project.badge}
                          </span>
                        </div>
                      </div>

                      {/* Compact Card Body */}
                      <div className="p-4 sm:p-5">
                        <h3 className={`font-display font-bold text-sm sm:text-base mb-1.5 line-clamp-1 transition-colors ${
                          isMiddle ? 'text-[#1a1f22] font-extrabold group-hover:text-[#32C8BF]' : 'text-[#1a1f22] group-hover:text-amber-600'
                        }`}>
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                          {project.desc}
                        </p>

                        {/* Concise Tech Stack */}
                        <div className="flex flex-wrap gap-1">
                          {project.stack.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[9px] font-mono text-slate-700"
                            >
                              {item}
                            </span>
                          ))}
                          {project.stack.length > 3 && (
                            <span className="px-1.5 py-0.5 rounded bg-slate-50 text-[9px] font-mono text-slate-400">
                              +{project.stack.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Compact Card Footer Action */}
                    <div className="p-4 sm:p-5 pt-0">
                      <div className={`pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold ${
                        isMiddle ? 'text-[#32C8BF] group-hover:text-amber-500' : 'text-amber-600 group-hover:text-amber-700'
                      }`}>
                        <span className="flex items-center gap-1.5">
                          <span>View Specs</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className={`text-[9px] font-mono uppercase ${isMiddle ? 'text-[#32C8BF] font-semibold' : 'text-slate-400'}`}>
                          {isMiddle ? '★ Spotlight' : 'Live Demo'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Pagination Dot Indicators & Hint */}
        <div className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? 'w-7 bg-amber-500 shadow-xs'
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">● Auto-advancing carousel</span>
            <span>{filteredProjects.length} Projects Live</span>
          </div>
        </div>

      </div>

      {/* Blueprint Architecture Modal */}
      {inspectProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-display font-bold text-lg text-[#1a1f22]">
                  {inspectProject.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectProject(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div className="rounded-2xl overflow-hidden h-56 bg-slate-100">
                <img
                  src={inspectProject.image}
                  alt={inspectProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold text-amber-600 uppercase">
                  Overview &amp; Impact
                </span>
                <p className="text-sm text-slate-700 leading-relaxed mt-1">
                  {inspectProject.desc}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold text-amber-600 uppercase">
                  Architecture &amp; Dataflow
                </span>
                <p className="text-xs text-slate-800 bg-slate-50 p-4 rounded-xl font-mono leading-relaxed border border-slate-200 mt-1">
                  {inspectProject.architecture}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase mb-2 block">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {inspectProject.stack.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{inspectProject.status}</span>
                </span>
                <button
                  onClick={() => setInspectProject(null)}
                  className="btn-raiseup-gold px-6 py-2 rounded-full text-xs font-bold uppercase cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
