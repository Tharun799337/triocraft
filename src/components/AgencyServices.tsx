import React from 'react';
import { TrendingUp, Users, Globe, Building2, Bot, Video, ArrowRight, Check } from 'lucide-react';

const agencyServices = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    subtitle: '360° Data-Driven Lead Generation',
    desc: 'Scale your business with high-converting Google & Meta ad campaigns, top-tier SEO keyword rankings, funnel optimization, and measurable customer acquisition.',
    deliverables: ['Google Search & Performance Max Ads', 'Meta (Instagram & FB) Ad Funnels', 'Technical & Local SEO Ranking', 'Weekly ROAS & CAC Analytics'],
    icon: TrendingUp,
    badgeColor: 'bg-amber-100 text-amber-800',
    iconColor: 'text-amber-600',
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    subtitle: 'Viral Reach & Brand Advocacy',
    desc: 'Leverage hyper-relevant micro and celebrity creators to generate massive brand trust, viral Instagram reels, YouTube integrations, and trackable sales.',
    deliverables: ['Creator Sourcing & Vetting', 'Viral Script Directing & Production', 'Contract Rights & Negotiations', 'UTM Promo Code Attribution'],
    icon: Users,
    badgeColor: 'bg-rose-100 text-rose-800',
    iconColor: 'text-rose-600',
  },
  {
    id: 'web-development',
    title: 'Website & Web App Development',
    subtitle: 'Custom Modern Web Engineering',
    desc: 'Fast, secure, responsive web applications built with modern React 19, Next.js, and Node.js. Optimized for 98+ Lighthouse scores and maximum conversion.',
    deliverables: ['Full-Stack React & Next.js Architecture', 'Festival & Community Puja Portals', 'SaaS Recurring Revenue Dashboards', 'Sub-second Page Load Speeds'],
    icon: Globe,
    badgeColor: 'bg-blue-100 text-blue-800',
    iconColor: 'text-blue-600',
  },
  {
    id: 'hospital-systems',
    title: 'Hospital & Healthcare Systems',
    subtitle: 'CareGrid Clinical ERP & Portals',
    desc: 'Enterprise hospital software unifying outpatient scheduling, inpatient bed ward occupancy, Electronic Health Records (EHR), and automated pharmacy billing.',
    deliverables: ['Floor-by-Floor Live Bed Telemetry', 'NABH/HIPAA Compliant Patient Portals', 'Doctor OPD Consultation Roster', 'Pharmacy POS & Inventory'],
    icon: Building2,
    badgeColor: 'bg-emerald-100 text-emerald-800',
    iconColor: 'text-emerald-600',
  },
  {
    id: 'ai-chatbots',
    title: 'Real-Time AI & Chatbots',
    subtitle: '24/7 Intelligent Automation',
    desc: 'Deploy autonomous conversational agents trained on clinical protocols and company knowledge. Handles patient triage, customer queries, and instant booking.',
    deliverables: ['Streaming WebSocket Conversational AI', 'Symptom Triage & Emergency Red Flags', 'WhatsApp & Web Widget Embeds', 'EHR & CRM Database Integrations'],
    icon: Bot,
    badgeColor: 'bg-purple-100 text-purple-800',
    iconColor: 'text-purple-600',
  },
  {
    id: 'video-design',
    title: 'Creative Design & Video Editing',
    subtitle: 'High-Impact Brand Visuals',
    desc: 'Stand out with viral short-form video editing, scroll-stopping social media creatives, modern UI/UX design systems, and unforgettable brand identities.',
    deliverables: ['Viral Reels & TikTok Video Edits', 'High-Converting Ad Creatives', 'Figma UI/UX Prototypes', 'Brand Styleguides & Assets'],
    icon: Video,
    badgeColor: 'bg-cyan-100 text-cyan-800',
    iconColor: 'text-cyan-600',
  },
];

export const AgencyServices: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#f8f9fc] w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Raiseup Digital Services Section Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
            ✦ FULL-SERVICE DIGITAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1f22] mt-2">
            Services Built to Grow Your Business
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From strategic digital marketing campaigns and influencer endorsements to custom software engineering and intelligent AI automation.
          </p>
        </div>

        {/* 6 Services Grid (Raiseup Service Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agencyServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card-hover-smooth card-shine p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${service.badgeColor}`}>
                      Verified Delivery
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#1a1f22] group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-400 mt-1 mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 bg-slate-50 hover:bg-amber-500 hover:text-white text-[#1a1f22] border border-slate-200 transition-all cursor-pointer group-hover:border-amber-500"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
