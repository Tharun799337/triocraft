import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';

const API = import.meta.env.VITE_API_URL ?? '';

export const AgencyContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website & App Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Agency Contact Details (Raiseup Contact Style) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
              ✦ LET&apos;S TALK BUSINESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1f22] mt-2">
              Ready to Build Something Extraordinary?
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you need a full hospital management system, a festival event portal, viral influencer marketing, or a custom AI bot, our team is ready to deliver.
            </p>

            <div className="mt-8 space-y-6 w-full">
              {/* Channel 1: Location */}
              <div className="card-hover-smooth card-shine flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">Studio Headquarters</div>
                  <div className="text-sm font-bold text-[#1a1f22] mt-0.5">Hyderabad, Telangana, India</div>
                  <div className="text-xs text-slate-500">Delivering for clients globally (US, UK, UAE, India)</div>
                </div>
              </div>

              {/* Channel 2: Consultation */}
              <a
                href="mailto:trioocraaft@gmail.com?subject=Project%20Discovery%20Call%20Request"
                className="card-hover-smooth card-shine flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs block text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">Consultation &amp; Scoping</div>
                  <div className="text-sm font-bold text-[#1a1f22] group-hover:text-emerald-700 transition-colors mt-0.5">
                    Schedule Discovery Call
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold">Free architecture &amp; feasibility session ➔</div>
                </div>
              </a>

              {/* Channel 3: Email */}
              <a
                href="mailto:trioocraaft@gmail.com"
                className="card-hover-smooth card-shine flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs block text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">Official Inquiries</div>
                  <div className="text-sm font-bold text-[#1a1f22] group-hover:text-amber-600 transition-colors mt-0.5">
                   trioocraaft@gmail.com
                  </div>
                  <div className="text-xs text-slate-500">Fast 2-hour response guarantee</div>
                </div>
              </a>

              {/* Guarantee Pill */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600 pt-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>NDA &amp; Intellectual Property Protection Guaranteed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Consultation Form (Raiseup Style) */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#1a1f22]">
                    Proposal Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md">
                    Thank you, <strong className="text-[#1a1f22]">{formData.name}</strong>. Our senior solutions architect will contact you at <strong className="text-[#1a1f22]">{formData.email}</strong> within 2 hours with project estimates.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError('');
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Website & App Development',
                        message: '',
                      });
                    }}
                    className="btn-raiseup-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase mt-4 cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <h3 className="font-display font-extrabold text-2xl text-[#1a1f22] mb-1">
                    Request a Free Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Fill out your requirements below and receive an architectural scope &amp; budget estimate.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Required *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm bg-white cursor-pointer transition-all"
                      >
                        <option value="Website & App Development">Website &amp; App Development</option>
                        <option value="Digital Marketing & SEO">Digital Marketing &amp; SEO Growth</option>
                        <option value="Influencer Marketing">Influencer Marketing &amp; Campaigns</option>
                        <option value="Hospital & HMS Systems">Hospital &amp; Healthcare Management System (HMS)</option>
                        <option value="Real-Time AI & Chatbots">Real-Time Clinical &amp; Customer AI Chatbots</option>
                        <option value="Festival & Community Portal">Vinayaka Chavithi / Festival Puja Portal</option>
                        <option value="SaaS Revenue Engine">SaaS Recurring Revenue &amp; Churn Analytics</option>
                        <option value="Couple Surprise Website">Couple Surprise / Apology Web Experience</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your timeline, expected features, goals, or current bottlenecks..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
                      <span>⚠️</span> {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-raiseup-gold py-4 rounded-xl text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Transmitting Query...</span>
                    ) : (
                      <>
                        <span>Get Free Consultation &amp; Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
