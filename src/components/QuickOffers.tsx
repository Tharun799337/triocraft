import React from 'react';
import { TrendingUp, Globe, HeartHandshake, Bot, ArrowRight } from 'lucide-react';

const offers = [
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    desc: 'SEO, Google & Meta performance ad campaigns, and high-converting sales funnels.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    href: '#services',
  },
  {
    icon: Globe,
    title: 'Website & App Development',
    desc: 'Modern, high-performance React & Next.js platforms, festival portals, and custom apps.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    href: '#services',
  },
  {
    icon: HeartHandshake,
    title: 'Influencer Marketing',
    desc: 'Targeted creator matchmaking, viral short-form reels, and brand positioning campaigns.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    href: '#services',
  },
  {
    icon: Bot,
    title: 'Hospital & AI Solutions',
    desc: 'Complete Hospital Management Systems (HMS), doctor booking, and 24/7 clinical AI triage.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    href: '#services',
  },
];

export const QuickOffers: React.FC = () => {
  return (
    <section className="py-16 bg-white w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
            ✦ WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1a1f22] mt-2">
            Top Digital Solutions &amp; Development
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Drive more leads, sales, and brand visibility with data-driven digital solutions tailored for your business.
          </p>
        </div>

        {/* 4 Cards Grid (Raiseup Service Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 block text-left cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#1a1f22] group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
