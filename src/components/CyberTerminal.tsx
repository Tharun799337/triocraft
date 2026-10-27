import React, { useState } from 'react';
import { Radio, Copy, ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export const CyberTerminal: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [dispatched, setDispatched] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText('trioocraaft@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDispatched(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setDispatched(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-200/90 text-indigo-700 text-xs font-mono font-semibold mb-3 shadow-sm">
          <Radio className="w-3.5 h-3.5" />
          <span>✦ INITIATE PROJECT OR ADVISORY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#25263A]">
          Direct Studio Transmission
        </h2>
        <p className="mt-3 text-[#5B5D7A] max-w-md text-sm sm:text-base">
          Available for strategic technical advisory, AI systems leadership, and large-scale architectural projects.
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <div className="glass-card rounded-3xl p-6 sm:p-10 relative bg-white/95 border border-slate-200 shadow-card-3d">
          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 font-mono text-xs text-[#5B5D7A]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-2 text-[#25263A] font-semibold truncate hidden sm:inline">
                studio://triocraft.io/inquiry-channel
              </span>
            </div>

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#25263A] border border-slate-200 transition-colors cursor-pointer text-xs font-mono font-medium shadow-2xs"
            >
              <Copy className="w-3 h-3" />
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'trioocraaft@gmail.com'}</span>
            </button>
          </div>

          {/* Contact Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-mono text-[#25263A] mb-2 uppercase tracking-wider font-semibold">
                Your Name or Organization
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Elena Rostova // VP of Digital Strategy"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#25263A] placeholder-[#8E90A6] focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#25263A] mb-2 uppercase tracking-wider font-semibold">
                Return Frequency (Email)
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@enterprise-scale.io"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#25263A] placeholder-[#8E90A6] focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#25263A] mb-2 uppercase tracking-wider font-semibold">
                Transmission Payload (Message)
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discussing distributed multi-agent deployment, hospital platform architecture, or brand redesign..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#25263A] placeholder-[#8E90A6] focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-[#25263A] hover:bg-indigo-600 text-white font-display font-bold text-sm tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {submitting ? (
                <span className="animate-pulse">Encrypting &amp; Transmitting...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Feedback alert */}
          {dispatched && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono text-center flex items-center justify-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Transmission dispatched successfully! The Trio Craft team will respond within 24 hours.</span>
            </div>
          )}

          {/* Contact Direct */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-sm text-[#5B5D7A] font-mono">
            <a
              href="mailto:trioocraaft@gmail.com"
              className="hover:text-indigo-600 flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" /> trioocraaft@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
