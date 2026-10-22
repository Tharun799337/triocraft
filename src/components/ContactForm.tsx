import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICES } from '../data/services';
import { PROFILE } from '../data/profile';
import { Button } from './Button';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: serviceParam,
    budget: '$500 - $1,500',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [endpointConfigured, setEndpointConfigured] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Auto-sync search param service if set
  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  // Check if live API endpoint is configured in env
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const customApiUrl = import.meta.env.VITE_CONTACT_API_URL;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a primary service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a few details about your project';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Project description must be at least 15 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Case 1: Web3Forms configured
      if (web3FormsKey) {
        setEndpointConfigured(true);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Freelance Enquiry from ${formData.name} - ${formData.service}`,
            from_name: formData.name,
            ...formData
          })
        });
        const data = await res.json();
        if (data.success) {
          triggerSuccess();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } 
      // Case 2: Formspree configured
      else if (formspreeEndpoint) {
        setEndpointConfigured(true);
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          triggerSuccess();
        } else {
          throw new Error('Formspree endpoint returned error');
        }
      }
      // Case 3: Custom API configured
      else if (customApiUrl) {
        setEndpointConfigured(true);
        const res = await fetch(customApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          triggerSuccess();
        } else {
          throw new Error('API server returned error');
        }
      }
      // Case 4: No third-party API key yet (Local / Direct Email mode)
      else {
        // Honest disclosure: Form validated locally, provide direct email & whatsapp links
        setEndpointConfigured(false);
        triggerSuccess();
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to send message. Please reach out directly.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerSuccess = () => {
    setSubmitSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const getSelectedServiceTitle = () => {
    const s = SERVICES.find(srv => srv.id === formData.service);
    return s ? s.title : formData.service || 'Website / AI Project';
  };

  const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Freelance Project Enquiry: ${getSelectedServiceTitle()}`
  )}&body=${encodeURIComponent(
    `Hi Tharun,\n\nName: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nEmail: ${formData.email}\nService: ${getSelectedServiceTitle()}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}\n`
  )}`;

  const cleanWhatsapp = PROFILE.whatsapp.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${cleanWhatsapp.replace('+', '')}?text=${encodeURIComponent(
    `Hi Tharun, I'm reaching out about a freelance project:\n\n*Name:* ${formData.name}\n*Service:* ${getSelectedServiceTitle()}\n*Budget:* ${formData.budget}\n*Details:* ${formData.message}`
  )}`;

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl glass-card p-6 sm:p-10 border border-slate-800">
      {submitSuccess ? (
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Enquiry Prepared Successfully!
            </h3>
            {endpointConfigured ? (
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your message has been sent directly to my inbox. I will review your requirements and respond within 24 hours.
              </p>
            ) : (
              <div className="space-y-4 max-w-md mx-auto text-left">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>! Your details have been validated. To ensure instant delivery, please choose your preferred direct channel:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/20"
                  >
                    <Mail className="w-4 h-4" />
                    Send via Email App
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send via WhatsApp
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
                  💡 <strong>Deployment Note:</strong> To receive form messages automatically to your email without opening an email client, add your free key to <code>VITE_WEB3FORMS_ACCESS_KEY</code> in <code>.env</code>.
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                service: '',
                budget: '$500 - $1,500',
                message: ''
              });
            }}
            className="text-xs text-cyan-400 hover:underline inline-block pt-2"
          >
            ← Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {submitError && (
            <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/30 flex items-start gap-3 text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              <div>
                <p className="font-semibold">Unable to submit form</p>
                <p className="text-xs mt-1 text-red-300/80">{submitError}</p>
                <p className="text-xs mt-2">
                  You can email me directly at{' '}
                  <a href={`mailto:${PROFILE.email}`} className="underline font-bold text-white">
                    {PROFILE.email}
                  </a>
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Rivera"
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.name 
                    ? 'border-red-500/60 focus:ring-red-400/40' 
                    : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400/20'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Your Email <span className="text-cyan-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.email 
                    ? 'border-red-500/60 focus:ring-red-400/40' 
                    : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400/20'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Company (Optional) */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Company / Organization <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Acme Studio"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Select Service <span className="text-cyan-400">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 text-white text-sm border focus:outline-none focus:ring-2 transition-all ${
                  errors.service
                    ? 'border-red-500/60 focus:ring-red-400/40'
                    : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400/20'
                }`}
                aria-invalid={!!errors.service}
              >
                <option value="">-- Choose a service --</option>
                {SERVICES.map(srv => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title}
                  </option>
                ))}
                <option value="other-custom">Other / Custom AI &amp; Web Project</option>
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.service}
                </p>
              )}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Estimated Budget <span className="text-slate-500 text-[11px] font-normal">(Optional)</span>
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white text-sm border border-slate-700/80 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            >
              <option value="< $500">&lt; $500 (Small Task / Prototype)</option>
              <option value="$500 - $1,500">$500 - $1,500 (Standard MVP / Landing Page)</option>
              <option value="$1,500 - $3,000">$1,500 - $3,000 (Full-Stack Web App / Custom RAG)</option>
              <option value="$3,000+">$3,000+ (End-to-End Enterprise Solution)</option>
              <option value="Flexible / Need Advice">Flexible / Need Consultation</option>
            </select>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Project Description <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about what you are building, target timeline, key technical requirements, or problems you need solved..."
              className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                errors.message 
                  ? 'border-red-500/60 focus:ring-red-400/40' 
                  : 'border-slate-700/80 focus:border-cyan-400 focus:ring-cyan-400/20'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit CTA */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            icon={Send}
            className="w-full"
          >
            Send Project Enquiry
          </Button>

          <p className="text-center text-xs text-slate-400 font-mono">
            ⚡ Quick turnaround • 24-hour response guarantee • 100% confidential
          </p>
        </form>
      )}
    </div>
  );
};
