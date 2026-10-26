import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f8f9fc] w-full border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Circular Character Feature (Raiseup Style) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Warm Yellow/Amber Circular Backdrop */}
            <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-amber-300 relative flex items-center justify-center p-4 shadow-2xl">
              
              {/* Inner Decorative Circle */}
              <div className="w-full h-full rounded-full border-4 border-white/60 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-white/90 via-amber-50/90 to-white/90 backdrop-blur-sm">
                
                <div className="w-24 h-24 rounded-3xl bg-white/95 shadow-xl border border-amber-200/60 flex items-center justify-center p-3 mb-3 group hover:scale-105 transition-transform">
                  <img
                    src="/triocraft-emblem.png"
                    alt="TrioCraft Official Emblem"
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>

                <h3 className="font-display font-medium text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Trio<span className="text-amber-600 font-semibold">Craft</span>
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold text-amber-700 uppercase tracking-[0.2em] mt-1">
                  Design &amp; Development
                </p>

                <p className="text-xs text-slate-500 mt-3 max-w-[220px]">
                  Engineered with perfection for ambitious businesses, festivals &amp; founders worldwide.
                </p>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-[#1a1f22]">100%</div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Commitment</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-[#1a1f22]">Verified</div>
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">Architecture</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Details (Raiseup Style) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
              ✦ ABOUT TRIO CRAFT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1a1f22] mt-2 leading-tight">
              Crafting High-Performance Digital Experiences That Drive Growth
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our solution delivery style enables brands to hear from their customers, engage with relevant audiences, and enhance revenue opportunities at every level by integrating digital brand strategy, custom engineering, and AI automation into everything we do.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              In order to provide demonstrable outcomes for all of our clients, we strategize to create digital solutions that are driven by a combination of consultative strategy, modern technology tactics, incredibly creative concepts, and cutting-edge engineering.
            </p>

            {/* 4 Counter Metrics Cards */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1f22]">
                  100<span className="text-amber-500">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Projects Delivered</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1f22]">
                  99<span className="text-rose-500">%</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Client Satisfaction</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1f22]">
                  24<span className="text-blue-500">/7</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Rapid Support</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1f22]">
                  10<span className="text-emerald-500">X</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Client ROI Driven</div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="mt-8">
              <a
                href="#contact"
                className="btn-raiseup-gold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
