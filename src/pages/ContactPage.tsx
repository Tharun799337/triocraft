import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';
import { SEO } from '../components/SEO';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { 
  Mail, 
  MessageSquare, 
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

  const cleanWhatsapp = PROFILE.whatsapp.replace(/[^0-9+]/g, '');

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
        title="Hire Tharun | Contact for Web Development & AI Engineering"
        description="Get in touch with Tharun to discuss your website design, full-stack React app, RAG pipeline, or custom AI automation project. Fast 24-hour response."
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
              <div className="rounded-2xl glass-card p-6 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="text-base font-bold text-white">Freelance Availability</h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Currently accepting new freelance projects for Q4 &amp; 2027. Available for direct contracts, advisory consultations, and rapid MVP builds.
                </p>

                <div className="pt-2 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Response Time: &lt; 24 hours guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{PROFILE.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>NDA &amp; IP Protection Friendly</span>
                  </div>
                </div>
              </div>

              {/* Direct Channels Cards */}
              <div className="rounded-2xl glass-card p-6 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Direct Contact Channels
                </h3>

                {/* Email with copy */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-400 font-medium">Direct Email</div>
                      <a href={`mailto:${PROFILE.email}`} className="text-xs font-semibold text-white hover:text-cyan-400 truncate block">
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${cleanWhatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-medium">WhatsApp Chat</div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {PROFILE.whatsapp}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold font-mono">Chat ➔</span>
                </a>

                {/* Social Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

              {/* FAQ Accordion Box */}
              <div className="rounded-2xl glass-card p-6 border border-slate-800 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400" />
                  Frequently Asked Questions
                </h3>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                      <div className="text-xs font-bold text-white">
                        {faq.q}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">
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
