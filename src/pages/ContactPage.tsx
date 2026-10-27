import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';
import { SEO } from '../components/SEO';
import { LinkedinIcon } from '../components/Icons';
import { 
  Mail, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const faqs = [
    {
      q: "How do we structure project pricing?",
      a: "I work primarily on a transparent, milestone-based fixed price for clearly scoped projects, so there are no surprises. For ongoing development or rapid iteration, sprint-based weekly contracts are also available."
    },
    {
      q: "What is your typical project delivery timeline?",
      a: "Standard business websites and landing pages are typically delivered within 5-10 business days. Custom full-stack web applications, RAG pipelines, or Chrome extensions usually take 2-4 weeks depending on feature complexity."
    },
    {
      q: "Do I get full ownership of the source code?",
      a: "Yes, 100%. Upon completion and final payment, complete intellectual property, GitHub repository access, deployment credentials, and documentation are transferred to you."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Every project includes 30 days of post-deployment bug fixing and performance monitoring to guarantee a seamless transition."
    }
  ];

  return (
    <>
      <SEO
        title="Contact TrioCraft | Hire Our Web Development & AI Agency in Hyderabad"
        description="Get in touch with TrioCraft to discuss your website, hospital management system, AI chatbot, influencer campaign, or digital marketing project. Fast 24-hour response guaranteed."
      />

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Heading */}
          <SectionHeading
            badge="Start a Project"
            title="Let's Build Something"
            highlight="Exceptional Together"
            description="Whether you have a fully scoped spec or an early-stage concept, fill out the form below or reach out via direct channels."
            align="center"
          />

          {/* Main Grid: Form (Left) & Contact Channels / Status (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Direct Channels & Availability Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Availability & Response Box */}
              <div className="rounded-2xl glass-card p-6 bg-white/95 border border-slate-200 shadow-card-3d space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-base font-bold font-display text-[#25263A]">Studio Availability</h3>
                </div>

                <p className="text-xs text-[#5B5D7A] leading-relaxed">
                  Currently accepting new projects for Q4 &amp; 2027. Available for direct contracts, advisory consultations, healthcare platforms, and rapid MVP builds.
                </p>

                <div className="pt-2 border-t border-slate-200 space-y-2.5 text-xs text-[#5B5D7A] font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Response Time: &lt; 24 hours guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{PROFILE.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NDA &amp; IP Protection Friendly</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels Cards */}
              <div className="rounded-2xl glass-card p-6 bg-white/95 border border-slate-200 shadow-card-3d space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#25263A] font-mono">
                  Direct Contact Channels
                </h3>

                {/* Email with copy */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-[#5B5D7A] font-medium font-mono">Direct Email</div>
                      <a href={`mailto:${PROFILE.email}`} className="text-xs font-semibold text-[#25263A] hover:text-indigo-600 truncate block">
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-[#25263A] transition-colors cursor-pointer shrink-0 shadow-2xs"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Profiles */}
                <div className="pt-2">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-xs text-[#25263A] hover:text-indigo-600 hover:border-indigo-400 transition-colors w-full"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#25263A]" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* FAQ Accordion Box */}
              <div className="rounded-2xl glass-card p-6 bg-white/95 border border-slate-200 shadow-card-3d space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#25263A] flex items-center gap-2 font-mono">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  Frequently Asked Questions
                </h3>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="text-xs font-bold text-[#25263A]">
                        {faq.q}
                      </div>
                      <div className="text-xs text-[#5B5D7A] leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};
