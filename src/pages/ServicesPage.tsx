import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services | Web Development, AI Chatbots & Digital Marketing — TrioCraft"
        description="Explore TrioCraft's full service portfolio: custom websites, hospital management systems, real-time AI chatbots, influencer marketing campaigns, RAG pipelines, Chrome extensions, and workflow automations."
      />

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header */}
          <SectionHeading
            badge="What I Offer"
            title="High-Impact Services for"
            highlight="Founders &amp; Businesses"
            description="Whether you need a high-converting web presence or an intelligent AI copilot, I deliver production-grade software engineered for reliability."
            align="center"
          />

          {/* Services Grid (All 8 services) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* How Pricing & Scope Are Determined (Honest Section) */}
          <section className="rounded-3xl glass-card p-8 sm:p-12 bg-white/95 border border-slate-200 shadow-card-3d space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700 shadow-2xs font-mono">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                Transparent Studio Scoping
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#25263A]">
                How We Determine Scope &amp; Deliverables
              </h2>
              <p className="text-sm sm:text-base text-[#5B5D7A] leading-relaxed">
                Every project is scoped individually with fixed milestones so you never encounter unexpected costs or bloated delivery timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-indigo-600 font-mono text-sm font-bold mb-2">01. Discovery Audit</div>
                <h4 className="text-base font-bold font-display text-[#25263A] mb-2">Requirement Analysis</h4>
                <p className="text-xs text-[#5B5D7A] leading-relaxed">
                  We clarify your exact functional requirements, target audience, integration points, and UI preferences.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-indigo-600 font-mono text-sm font-bold mb-2">02. Fixed Proposal</div>
                <h4 className="text-base font-bold font-display text-[#25263A] mb-2">Milestone Breakdown</h4>
                <p className="text-xs text-[#5B5D7A] leading-relaxed">
                  You receive a transparent statement of work specifying exact screens, APIs, test deliverables, and delivery date.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-indigo-600 font-mono text-sm font-bold mb-2">03. Production Launch</div>
                <h4 className="text-base font-bold font-display text-[#25263A] mb-2">Handoff &amp; Support</h4>
                <p className="text-xs text-[#5B5D7A] leading-relaxed">
                  Complete repository ownership, automated cloud deployment on Render or Vercel, and 30 days post-launch support.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" icon={Sparkles}>
                  Request a Tailored Project Quote
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
