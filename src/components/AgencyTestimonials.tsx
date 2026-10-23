import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Trio Craft transformed our entire hospital intake. Their NovaCare patient portal and real-time AI triage assistant dropped patient wait times by 45% while handling 2,400+ monthly online appointments flawlessly.',
    name: 'Dr. Rajesh Vardhan',
    role: 'Managing Medical Director, NovaCare Hospital',
    rating: 5,
    tag: 'Healthcare & AI Chatbot',
  },
  {
    quote: 'Our Vinayaka Chavithi Maha Utsav portal handled over 50,000 simultaneous devotees during evening aarti. The live laddu auction with real-time WebSocket bidding generated record community participation.',
    name: 'Venkata Ramana Rao',
    role: 'General Secretary, Central Utsav Committee',
    rating: 5,
    tag: 'Festival & Live Auction',
  },
  {
    quote: 'The Revenue Tracker platform gave us instant visibility into our MRR, churn cohorts, and cash flow. Their automated dunning workflow recovered over $14,000 in failed credit card renewals in month one.',
    name: 'Karthik Subramanian',
    role: 'Founder & CEO, CloudScale Systems',
    rating: 5,
    tag: 'FinTech & Revenue Engine',
  },
  {
    quote: 'I wanted to plan an unforgettable anniversary surprise for my fiancé. The personalized romantic timeline, custom background song, and midnight balloon reveal brought tears of joy to her eyes. Truly priceless.',
    name: 'Sai Preetham',
    role: 'Verified Couple Client',
    rating: 5,
    tag: 'Couple Surprise Portal',
  },
];

export const AgencyTestimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
            ✦ CLIENT STORIES &amp; RESULTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1f22] mt-2">
            Trusted by Ambitious Brands
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover what our healthcare directors, festival organizers, SaaS founders, and couples say about working with Trio Craft.
          </p>
        </div>

        {/* 4 Cards Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 uppercase">
                    {t.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-300 mb-3" />

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-[#1a1f22]">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
