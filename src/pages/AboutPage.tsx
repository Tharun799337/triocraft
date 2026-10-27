import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE, VALUES, PROCESS_STEPS, SKILL_GROUPS } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  MessageSquareCheck, 
  TrendingUp, 
  Mail
} from 'lucide-react';

const iconValueMap: Record<string, React.ElementType> = {
  ShieldCheck,
  MessageSquareCheck,
  Code2,
  TrendingUp
};

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About TrioCraft | Web Design & AI Development Agency in Hyderabad"
        description="Learn about TrioCraft — a full-service web design, development, and AI agency in Hyderabad. We build custom websites, HMS systems, AI chatbots, and influencer marketing campaigns for businesses."
      />

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Intro Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-indigo-200/90 text-xs font-semibold text-indigo-700 shadow-2xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                ✦ Studio Background &amp; Philosophy
              </div>

              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[#25263A] tracking-tight leading-tight">
                Engineering <span className="text-gradient-extraordinary">Extraordinary Digital Experiences</span>.
              </h1>

              <p className="text-xl text-[#25263A] leading-relaxed font-normal">
                {PROFILE.bioIntro}
              </p>

              <div className="space-y-4 text-[#5B5D7A] text-base leading-relaxed">
                {PROFILE.bioDetailed.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon={Sparkles}>
                    Work With Trio Craft
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="secondary" size="lg" icon={ArrowRight}>
                    Explore Selected Works
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl glass-card p-4 bg-white/95 border border-slate-200 shadow-card-3d relative">
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-100 mb-4 border border-slate-200">
                  <img
                    src="/tharun-portrait-placeholder.svg"
                    alt="Vijay Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 px-2 pb-2">
                  <div className="text-base font-bold font-display text-[#25263A]">{PROFILE.name}</div>
                  <div className="text-xs text-indigo-600 font-mono font-semibold">{PROFILE.role}</div>
                  <div className="text-xs text-[#5B5D7A] flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{PROFILE.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Problems I Solve */}
          <section className="py-12 border-t border-slate-200">
            <SectionHeading
              badge="Client Impact"
              title="What Real-World Problems"
              highlight="Do We Solve?"
              description="Technology is only valuable when it moves the needle for your business."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl glass-card p-8 bg-white/95 border border-slate-200 shadow-card-3d">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#25263A] mb-3">
                  Underperforming Websites
                </h3>
                <p className="text-sm text-[#5B5D7A] leading-relaxed">
                  We replace sluggish templates with bespoke React/TypeScript applications that load in under 1 second, showcase your services clearly, and convert visitors into clients.
                </p>
              </div>

              <div className="rounded-2xl glass-card p-8 bg-white/95 border border-slate-200 shadow-card-3d">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#25263A] mb-3">
                  Knowledge Fragmentation
                </h3>
                <p className="text-sm text-[#5B5D7A] leading-relaxed">
                  We engineer custom RAG systems that allow your staff or customers to query complex company manuals and clinical records instantly with exact source citations.
                </p>
              </div>

              <div className="rounded-2xl glass-card p-8 bg-white/95 border border-slate-200 shadow-card-3d">
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-[#25263A] mb-3">
                  Manual Workflow Bottlenecks
                </h3>
                <p className="text-sm text-[#5B5D7A] leading-relaxed">
                  We build custom Chrome extensions and automated API pipelines that eliminate repetitive copy-pasting, data extraction, and manual reporting across tools.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills Deep Dive */}
          <section className="py-12 border-t border-slate-200">
            <SectionHeading
              badge="Skill Matrix"
              title="Tools &amp; Technologies"
              highlight="In Our Toolkit"
              description="A breakdown of languages, frameworks, AI libraries, and cloud infrastructure we work with daily."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="rounded-2xl glass-card p-8 bg-white/95 border border-slate-200 shadow-card-3d">
                  <h3 className="text-xl font-bold font-display text-[#25263A] mb-6 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border flex items-center gap-2 ${
                          skill.highlight
                            ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold'
                            : 'bg-slate-50 border-slate-200 text-[#5B5D7A]'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${skill.highlight ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span className="text-xs font-mono">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Values */}
          <section className="py-12 border-t border-slate-200">
            <SectionHeading
              badge="Professional Ethos"
              title="Standards &amp; Values We"
              highlight="Never Compromise On"
              description="Why founders and enterprise clients appreciate working with Trio Craft."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val, idx) => {
                const IconComp = iconValueMap[val.iconName] || ShieldCheck;
                return (
                  <div key={idx} className="rounded-2xl glass-card p-6 bg-white/95 border border-slate-200 shadow-card-3d">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold font-display text-[#25263A] mb-2">{val.title}</h4>
                    <p className="text-xs text-[#5B5D7A] leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Development Roadmap / Process */}
          <section className="py-12 border-t border-slate-200">
            <SectionHeading
              badge="Execution Flow"
              title="Our 5-Step"
              highlight="Client Project Journey"
              description="How we move from your initial enquiry to a successful production deployment."
              align="center"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl glass-card p-6 sm:p-8 bg-white/95 border border-slate-200 flex flex-col sm:flex-row gap-6 items-start shadow-card-3d"
                >
                  <div className="text-4xl font-extrabold font-mono text-indigo-600/40 shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-display text-[#25263A] mb-2">{step.title}</h4>
                    <p className="text-sm text-[#5B5D7A] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="p-8 sm:p-12 rounded-3xl glass-card bg-white/95 border border-slate-200 text-center space-y-6 shadow-card-3d">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#25263A]">
              Ready to bring your digital concept to life?
            </h3>
            <p className="text-[#5B5D7A] text-sm sm:text-base max-w-xl mx-auto">
              We are available for new client engagements. Tell us about your goals, and let&apos;s structure an actionable plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg" icon={Sparkles}>
                  Start a Conversation
                </Button>
              </Link>
              <a href={`mailto:${PROFILE.email}`}>
                <Button variant="secondary" size="lg" icon={Mail}>
                  Direct Email
                </Button>
              </a>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};
