import React from 'react';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    desc: 'We analyze your business goals, target audience, competitors, and technical requirements to build an airtight execution roadmap.',
    icon: Search,
    color: 'text-[#32C8BF]',
    border: 'border-[#32C8BF]/30',
    bg: 'bg-[#32C8BF]/10',
  },
  {
    step: '02',
    title: 'Creative Design & Prototyping',
    desc: 'Crafting conversion-optimized UI/UX designs, brand assets, and interactive clickable prototypes tailored for maximum engagement.',
    icon: PenTool,
    color: 'text-rose-600',
    border: 'border-rose-200',
    bg: 'bg-rose-50',
  },
  {
    step: '03',
    title: 'Development & AI Integration',
    desc: 'Engineering scalable full-stack applications, real-time AI chatbots, payment systems, and robust database architectures.',
    icon: Code2,
    color: 'text-blue-600',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
  },
  {
    step: '04',
    title: 'Launch, Marketing & Scaling',
    desc: 'Seamless deployment, performance monitoring, SEO indexing, viral influencer campaigns, and continuous revenue scaling.',
    icon: Rocket,
    color: 'text-emerald-600',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
  },
];

export const HowWeDoIt: React.FC = () => {
  return (
    <section id="how-we-do-it" className="py-20 sm:py-28 bg-[#FFFFFF] w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Raiseup "How we do it" Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#32C8BF] uppercase">
            ✦ PROVEN WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1f22] mt-2">
            How We Do It
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Trio Craft is a team of dedicated specialists working to bring notable and successful digital stories to brands, institutions, and personalities.
          </p>
        </div>

        {/* 4 Steps Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-hover-smooth card-shine p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm relative group flex flex-col justify-between hover:border-[#32C8BF] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-emerald-500 group-hover:text-[#32C8BF] transition-colors">
                      {item.step}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#1a1f22] mb-3 group-hover:text-[#32C8BF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-bold text-[#32C8BF]">
                  <span>Phase {item.step}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
