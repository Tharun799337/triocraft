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
        title="About Tharun | AI Engineer & Full-Stack Developer"
        description="Learn about Tharun's background in AI application engineering, full-stack web development, technical values, and problem-solving process."
      />

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Intro Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Engineering Background &amp; Philosophy
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">{PROFILE.name}</span>.
              </h1>

              <p className="text-xl text-slate-200 leading-relaxed font-normal">
                {PROFILE.bioIntro}
              </p>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                {PROFILE.bioDetailed.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon={Sparkles}>
                    Work With Me
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="secondary" size="lg" icon={ArrowRight}>
                    Explore My Work
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl glass-card p-4 border border-slate-700/80 shadow-2xl relative">
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-950 mb-4">
                  <img
                    src="/tharun-portrait-placeholder.svg"
                    alt="Tharun Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 px-2 pb-2">
                  <div className="text-base font-bold text-white">{PROFILE.name}</div>
                  <div className="text-xs text-cyan-400 font-mono">{PROFILE.role}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{PROFILE.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Problems I Solve */}
          <section className="py-12 border-t border-slate-800">
            <SectionHeading
              badge="Client Impact"
              title="What Real-World Problems"
              highlight="Do I Solve?"
              description="Technology is only valuable when it moves the needle for your business."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-2xl glass-card p-8 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Underperforming &amp; Slow Websites
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I replace sluggish templates with bespoke React/TypeScript applications that load in under 1 second, showcase your services clearly, and convert visitors into paying clients.
                </p>
              </div>

              <div className="rounded-2xl glass-card p-8 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Document Knowledge Fragmentation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I engineer custom RAG systems that allow your staff or customers to query complex company manuals and PDFs instantly with exact source citations and zero hallucinations.
                </p>
              </div>

              <div className="rounded-2xl glass-card p-8 border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Manual Workflow Bottlenecks
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I build custom Chrome extensions and automated API pipelines that eliminate repetitive copy-pasting, data extraction, and manual reporting across your tools.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills Deep Dive */}
          <section className="py-12 border-t border-slate-800">
            <SectionHeading
              badge="Skill Matrix"
              title="Tools &amp; Technologies"
              highlight="In My Toolkit"
              description="A breakdown of languages, frameworks, AI libraries, and cloud infrastructure I work with daily."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILL_GROUPS.map((group, idx) => (
                <div key={idx} className="rounded-2xl glass-card p-8 border border-slate-800">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border flex items-center gap-2 ${
                          skill.highlight
                            ? 'bg-cyan-950/40 border-cyan-500/30 text-white font-medium'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${skill.highlight ? 'text-cyan-400' : 'text-slate-500'}`} />
                        <span className="text-xs font-mono">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Values */}
          <section className="py-12 border-t border-slate-800">
            <SectionHeading
              badge="Professional Ethos"
              title="Standards &amp; Values I"
              highlight="Never Compromise On"
              description="Why founders and clients appreciate working with me directly."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((val, idx) => {
                const IconComp = iconValueMap[val.iconName] || ShieldCheck;
                return (
                  <div key={idx} className="rounded-2xl glass-card p-6 border border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Development Roadmap / Process */}
          <section className="py-12 border-t border-slate-800">
            <SectionHeading
              badge="Execution Flow"
              title="My 5-Step"
              highlight="Client Project Journey"
              description="How we move from your initial enquiry to a successful production deployment."
              align="center"
            />

            <div className="space-y-4 max-w-4xl mx-auto">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="text-4xl font-extrabold font-mono text-cyan-400/40 shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="p-8 sm:p-12 rounded-3xl glass-card border border-cyan-500/30 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to bring your website or AI concept to life?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              I am available for new freelance engagements. Tell me about your goals, and let's structure an actionable plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="glow" size="lg" icon={Sparkles}>
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
