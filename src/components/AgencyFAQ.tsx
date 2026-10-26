import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What services does Trio Craft specialize in?',
    a: 'We provide end-to-end digital solutions: custom full-stack web and app development, hospital web portals & Hospital Management Systems (HMS), 24/7 clinical AI triage chatbots, 360-degree digital marketing (SEO & performance ads), influencer marketing campaigns, and specialized community/couple web portals.',
  },
  {
    q: 'How do you build festival portals like the Vinayaka Chavithi Maha Utsav website?',
    a: 'We engineer high-concurrency event portals equipped with live low-latency WebRTC video streaming (for 4K aartis), digital hundi with direct UPI & QR payment integrations, real-time WebSocket bidding for laddu auctions, and automated SMS/WhatsApp token generation for crowd-managed darshan.',
  },
  {
    q: 'Can you develop personalized couple websites for surprises and apologies?',
    a: 'Yes! We craft bespoke, emotional couple web experiences featuring romantic milestone timelines, photo journeys, password-protected memory vaults, custom audio soundtracks, interactive apology notes with forgiveness buttons, and midnight surprise countdown reveals.',
  },
  {
    q: 'What is the implementation timeline for a Hospital Management System (HMS)?',
    a: 'A modular hospital website with doctor scheduling and patient portal can launch in 2 to 3 weeks. Full-scale enterprise hospital management systems (with live bed ward telemetry, OPD/IPD workflows, pharmacy POS, and EHR integration) typically take 4 to 8 weeks depending on department scope.',
  },
  {
    q: 'How does your influencer marketing & digital marketing service work?',
    a: 'We identify and vet top creators across your industry (micro, macro, and celebrity influencers), manage creative direction, draft contracts, track UTM promo code attribution, and run high-ROI retargeting ads to ensure maximum viral reach and profitable customer acquisition.',
  },
  {
    q: 'Do you offer ongoing maintenance and support after launch?',
    a: 'Yes, every project includes comprehensive deployment support, cloud performance monitoring, 99.9% uptime guarantees, regular security patches, and dedicated monthly maintenance packages.',
  },
];

export const AgencyFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#f8f9fc] w-full border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-800 text-xs font-mono font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>✦ GOT QUESTIONS? WE HAVE ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1f22]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about working with Trio Craft, our timelines, and technology stack.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="card-hover-smooth rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-amber-400 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#1a1f22]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
