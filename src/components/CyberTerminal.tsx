import React, { useState } from 'react';
import { Radio, Copy, ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

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
    navigator.clipboard.writeText('tharunchundi799@gmail.com');
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
          <Radio className="w-3.5 h-3.5" />
          <span>SECURE PROTOCOL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
          Direct Transmission
        </h2>
        <p className="mt-3 text-slate-400 max-w-md text-sm sm:text-base">
          Available for strategic technical advisory, AI systems leadership, and large-scale architectural projects.
        </p>
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <div className="glass-card rounded-3xl p-6 sm:p-10 relative">
          {/* Terminal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-amber-500/15 mb-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-2 text-amber-100 truncate">
                terminal://triocraft.studio/secure-session
              </span>
            </div>

            {/* Quick Copy Email Button */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-amber-400 border border-amber-500/30 transition-colors cursor-pointer text-xs font-mono"
            >
              <Copy className="w-3 h-3" />
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'tharunchundi799@gmail.com'}</span>
            </button>
          </div>

          {/* Contact Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-mono text-amber-200/80 mb-2 uppercase tracking-wider">
                Your Name or Organization
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Elena Rostova // VP of AI Infrastructure"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-amber-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-amber-200/80 mb-2 uppercase tracking-wider">
                Return Frequency (Email)
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@enterprise-scale.io"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-amber-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-amber-200/80 mb-2 uppercase tracking-wider">
                Transmission Payload (Message)
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Discussing distributed multi-agent deployment and 3D telemetry integration..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-amber-500/20 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-display font-bold text-sm tracking-wider uppercase shadow-glow-amber hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
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
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Transmission dispatched successfully! The TrioCraft team will review and respond within 24 hours.</span>
            </div>
          )}

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-amber-500/15 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-mono">
            <a
              href="https://github.com/Tharun799337"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 flex items-center gap-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://wa.me/917993376939"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" /> +91 7993376939
            </a>
            <a
              href="mailto:tharunchundi799@gmail.com"
              className="hover:text-amber-400 flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" /> Email Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
