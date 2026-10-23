import React, { useState, useRef } from 'react';
import { Layers, Activity, ExternalLink, X, Heart, TrendingUp, Sparkles, Building2, Flame } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectData {
  id: string;
  category: 'festival' | 'fintech' | 'couple' | 'healthcare' | 'genai';
  categoryLabel: string;
  subLabel: string;
  title: string;
  desc: string;
  endpoint: string;
  statusBadge: string;
  statusColor: 'amber' | 'rose' | 'emerald' | 'purple' | 'orange';
  image: string;
  hudIcon: React.ReactNode;
  hudTitle: string;
  hudMetric: string;
  hudMetricColor: string;
  metrics: { label: string; val: string; color: string }[];
  stack: string[];
  architecture: string;
  modalStatus: string;
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'vinayaka-utsav',
    category: 'festival',
    categoryLabel: 'FESTIVAL & COMMUNITY PUJA',
    subLabel: 'High-Concurrency Event Portal',
    title: 'Vinayaka Chavithi Maha Utsav Festival & Puja Portal',
    desc: 'Interactive temple & pandal festival platform featuring online puja booking, 4K live aarti video stream, UPI digital hundi donations, real-time Maha Laddu auction bidding, and volunteer schedules.',
    endpoint: 'ganeshutsav-live.triocraft.studio',
    statusBadge: 'LIVE STREAM & DIGITAL HUNDI',
    statusColor: 'orange',
    image: '/projects/vinayaka-chaturthi.svg',
    hudIcon: <Flame className="w-4 h-4 text-amber-500" />,
    hudTitle: 'Devotee Stream Ingress',
    hudMetric: '50k+ Concurrent',
    hudMetricColor: 'text-amber-600',
    metrics: [
      { label: 'Live Aarti Stream', val: '4K Ultra-Low Latency', color: 'text-amber-600' },
      { label: 'Digital Hundi', val: '₹8.4L+ via UPI', color: 'text-emerald-600' },
      { label: 'Laddu Auction', val: 'WebSocket Bidding', color: 'text-orange-600' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'WebSockets', 'Razorpay', 'Redis'],
    architecture: 'Devotee Web Client → Cloudflare Edge / WAF → Node.js WebSocket Cluster → Redis Mutex Bidding Engine → PostgreSQL Financial Ledger → Instant WhatsApp/SMS Receipt Worker.',
    modalStatus: 'Live Festive Production Deployment',
  },
  {
    id: 'revenue-pulse',
    category: 'fintech',
    categoryLabel: 'SAAS & FINANCIAL INTELLIGENCE',
    subLabel: 'Real-Time MRR & Churn Analytics',
    title: 'RevPulse SaaS Revenue & Financial Intelligence Platform',
    desc: 'Mission-critical recurring revenue telemetry platform with automated Stripe & PayPal webhook sync, MRR/ARR growth charts, net churn prediction, and automated failed payment dunning.',
    endpoint: 'revpulse.triocraft.studio',
    statusBadge: 'STRIPE & PAYPAL WEBHOOK SYNC',
    statusColor: 'emerald',
    image: '/projects/revenue-tracker.svg',
    hudIcon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
    hudTitle: 'Financial Ingress Mesh',
    hudMetric: '< 40ms Query P95',
    hudMetricColor: 'text-emerald-600',
    metrics: [
      { label: 'Annualized ARR', val: '$579,000 Tracked', color: 'text-emerald-600' },
      { label: 'Churn Detection', val: '0.82% Net Risk', color: 'text-emerald-700' },
      { label: 'Dunning Recovery', val: '+45% Failed Subs', color: 'text-blue-600' },
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'TimescaleDB', 'Chart.js'],
    architecture: 'Stripe/PayPal Payment Gateways → Webhook Ingestion Buffer → TimescaleDB Continuous Aggregates → Redis Financial Cache → Real-Time Analytics UI.',
    modalStatus: 'Live FinTech SaaS Operations',
  },
  {
    id: 'couple-surprise',
    category: 'couple',
    categoryLabel: 'ROMANTIC COUPLE EXPERIENCES',
    subLabel: 'Surprise & Apology Portals',
    title: 'ForeverAfter — Romantic Couple Surprise & Apology Web Portals',
    desc: 'Cinematic, deeply personal couple web experiences featuring romantic milestone timelines, sincere interactive apology letters with forgiveness actions, secret memory vaults, and midnight music reveals.',
    endpoint: 'foreverwithyou.triocraft.studio',
    statusBadge: 'INTERACTIVE FORGIVENESS & REVEAL',
    statusColor: 'rose',
    image: '/projects/couple-surprise.svg',
    hudIcon: <Heart className="w-4 h-4 text-rose-500" />,
    hudTitle: 'Romance Engine',
    hudMetric: '100% Forgiveness Rate',
    hudMetricColor: 'text-rose-600',
    metrics: [
      { label: 'Midnight Surprise', val: 'Auto-Trigger 00:00', color: 'text-rose-600' },
      { label: 'Memory Vault', val: 'Encrypted & Private', color: 'text-purple-600' },
      { label: 'Emotional Score', val: '5/5 Love & Tears', color: 'text-amber-600' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas Confetti', 'Howler.js'],
    architecture: 'Client Responsive SPA → Cloudinary Media Optimization CDN → Localized Midnight Trigger → Interactive Music Player Engine → Confetti Burst Reveal.',
    modalStatus: 'Live Emotional Customer Delights',
  },
  {
    id: 'hospital-hms',
    category: 'healthcare',
    categoryLabel: 'ENTERPRISE HOSPITAL MANAGEMENT',
    subLabel: 'CareGrid Clinical ERP & EHR',
    title: 'CareGrid End-to-End Hospital Management System (HMS)',
    desc: 'Enterprise-grade clinical OS unifying floor-by-floor bed ward telemetry, emergency triage queues, Electronic Health Records (EHR), pharmacy point-of-sale, and insurance TPA settlement.',
    endpoint: 'caregrid-hms.triocraft.studio',
    statusBadge: 'BED WARDS, EHR & PHARMACY',
    statusColor: 'amber',
    image: '/projects/hospital-hms.svg',
    hudIcon: <Building2 className="w-4 h-4 text-blue-600" />,
    hudTitle: 'Inpatient Core',
    hudMetric: '200 Beds Monitored',
    hudMetricColor: 'text-blue-600',
    metrics: [
      { label: 'Bed Occupancy', val: '184 / 200 Live', color: 'text-blue-600' },
      { label: 'OPD Queue Wait', val: '14 mins average', color: 'text-emerald-600' },
      { label: 'Billing Speed', val: '< 90s Discharge', color: 'text-amber-600' },
    ],
    stack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    architecture: 'Ward Terminals → Secure SSL Reverse Proxy → Node.js HMS API Cluster → PostgreSQL Clinical Relational Store → Redis Ward Mutex Cache → Thermal Receipt & Lab Printers.',
    modalStatus: 'Multi-Specialty Hospital Live System',
  },
  {
    id: 'hospital-web',
    category: 'healthcare',
    categoryLabel: 'HEALTHCARE WEB & PATIENT PORTAL',
    subLabel: 'NABH & JCI Compliant',
    title: 'NovaCare Multi-Specialty Hospital Website & Patient Portal',
    desc: 'High-converting healthcare platform with live doctor rosters, specialty departments, real-time outpatient (OPD) booking, and encrypted patient telehealth reports portal.',
    endpoint: 'novacare-health.triocraft.studio',
    statusBadge: '24/7 OPD & TELEHEALTH',
    statusColor: 'emerald',
    image: '/projects/hospital-website.svg',
    hudIcon: <Activity className="w-4 h-4 text-emerald-600" />,
    hudTitle: 'Telehealth Gateway',
    hudMetric: '0m ER Wait Queue',
    hudMetricColor: 'text-emerald-600',
    metrics: [
      { label: 'OPD Bookings', val: '2,400+ / mo', color: 'text-emerald-600' },
      { label: 'Patient CSAT', val: '99.4% Verified', color: 'text-amber-600' },
      { label: 'Lighthouse Score', val: '98 / 100 Mobile', color: 'text-blue-600' },
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'WebSockets'],
    architecture: 'Client React Portal → Cloudflare Edge Ingress → Express Healthcare Gateway → Doctor Schedule Mutex Lock → Patient SMS/WhatsApp Dispatcher.',
    modalStatus: 'Live Healthcare Web Platform',
  },
  {
    id: 'health-bot',
    category: 'genai',
    categoryLabel: 'CLINICAL AI & STREAMING TRIAGE',
    subLabel: 'Autonomous Intake Agent',
    title: 'MediPulse Real-Time Clinical AI Chatbot & Triage Assistant',
    desc: 'Autonomous 24/7 patient triage and conversational copilot providing clinical symptom checks, doctor appointment matching, lab test FAQs, and multi-lingual voice/text streaming.',
    endpoint: 'medipulse.triocraft.studio',
    statusBadge: '18ms WEBSOCKET STREAM',
    statusColor: 'purple',
    image: '/projects/hospital-chatbot.svg',
    hudIcon: <Sparkles className="w-4 h-4 text-purple-600" />,
    hudTitle: 'Clinical LLM Engine',
    hudMetric: '18ms Stream Latency',
    hudMetricColor: 'text-purple-600',
    metrics: [
      { label: 'Triage Accuracy', val: '99.1% Protocol', color: 'text-purple-600' },
      { label: 'Response P95', val: '18ms Streaming', color: 'text-amber-600' },
      { label: 'Languages', val: '12+ Supported', color: 'text-emerald-600' },
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'WebSockets', 'Llama-3', 'Redis Streams'],
    architecture: 'Patient Client (Web/WhatsApp) → WebSocket Gateway → HIPAA Token Redactor → RAG Clinical Protocol Retriever → Streaming Medical LLM → Doctor Booking Dispatch.',
    modalStatus: 'Live 24/7 Clinical Triage Bot',
  },
];

// Interactive 3D Card with Tilt
const TiltCard: React.FC<{
  project: ProjectData;
  onInspect: (p: ProjectData) => void;
}> = ({ project, onInspect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="project-item rounded-3xl p-5 relative group bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Browser Top Window Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            <span className="ml-2 text-slate-500 text-[11px] font-mono truncate hidden sm:inline">
              https://{project.endpoint}
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200">
            {project.statusBadge}
          </span>
        </div>

        {/* High Quality Visual Graphic Preview */}
        <div
          onClick={() => onInspect(project)}
          className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 cursor-pointer bg-slate-50 border border-slate-100 group-hover:border-amber-300 transition-colors"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Category & Title */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-600">
            {project.categoryLabel}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[11px] text-slate-500 font-medium">
            {project.subLabel}
          </span>
        </div>

        <h3 className="font-display font-extrabold text-xl text-[#1a1f22] group-hover:text-amber-600 transition-colors leading-snug mb-2.5">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-left">
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-[10px] text-slate-500">{m.label}</div>
              <div className={`text-xs font-bold mt-0.5 ${m.color}`}>{m.val}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((item, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[10px] font-mono text-[#1a1f22] font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <button
          onClick={() => onInspect(project)}
          className="flex-1 py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 bg-[#1a1f22] hover:bg-amber-600 text-white shadow-sm transition-all cursor-pointer"
        >
          <span>View Blueprint &amp; Specs</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>

        <a
          href="https://github.com/Tharun799337"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#1a1f22] transition-all cursor-pointer shadow-sm"
          title="Source Code"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'festival' | 'fintech' | 'couple' | 'healthcare' | 'genai'>('all');
  const [inspectProject, setInspectProject] = useState<ProjectData | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 w-full bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Raiseup Portfolio Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800 text-xs font-mono font-semibold mb-3 shadow-sm">
              <Layers className="w-3.5 h-3.5" />
              <span>✦ FEATURED WORK &amp; REAL CLIENT PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1f22]">
              Our Featured Projects
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Explore festival puja platforms, SaaS revenue tracking engines, heartfelt couple surprise portals, and end-to-end hospital management systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {[
            { id: 'all', label: 'ALL PROJECTS' },
            { id: 'festival', label: 'FESTIVAL & COMMUNITY' },
            { id: 'fintech', label: 'SAAS & REVENUE' },
            { id: 'couple', label: 'COUPLE & SURPRISE' },
            { id: 'healthcare', label: 'HOSPITAL & HMS' },
            { id: 'genai', label: 'AI & CHATBOTS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-white font-bold shadow-md'
                  : 'text-slate-600 hover:text-[#1a1f22] hover:bg-slate-100 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              project={project}
              onInspect={(p) => setInspectProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Blueprint Architecture Modal */}
      {inspectProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#1a1f22]">
                  {inspectProject.title}
                </h3>
              </div>
              <button
                onClick={() => setInspectProject(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src={inspectProject.image}
                  alt={inspectProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-amber-600 uppercase mb-1">
                  Architecture Dataflow &amp; Engineering Specs
                </h4>
                <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-xl font-mono leading-relaxed border border-slate-200">
                  {inspectProject.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">
                  Integrated Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {inspectProject.stack.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-emerald-700 font-semibold">
                  Status: {inspectProject.modalStatus}
                </span>
                <button
                  onClick={() => setInspectProject(null)}
                  className="btn-raiseup-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase cursor-pointer"
                >
                  Done Inspecting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
