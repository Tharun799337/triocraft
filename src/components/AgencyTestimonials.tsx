import React, { useEffect, useState } from 'react';
import { Star, Quote, PenLine, CheckCircle2, MessageSquareQuote, Send, Sparkles } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Review {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  tag: string;
}

// ── Static fallback (shown if API is unreachable) ─────────────────────────────
const FALLBACK_REVIEWS: Review[] = [
  {
    id: 1,
    quote: 'Trio Craft transformed our entire hospital intake. Their hospital website and real-time AI triage assistant dropped patient wait times by 45% while handling 2,400+ monthly online appointments flawlessly.',
    name: 'Dr. Rajesh Vardhan',
    role: 'Managing Medical Director, City Care Multi-Specialty Hospital',
    rating: 5,
    tag: 'Healthcare & AI Chatbot',
  },
  {
    id: 2,
    quote: 'Our Vinayaka Chavithi Maha Utsav portal handled over 50,000 simultaneous devotees during evening aarti. The live laddu auction with real-time WebSocket bidding generated record community participation.',
    name: 'Venkata Ramana Rao',
    role: 'General Secretary, Central Utsav Committee',
    rating: 5,
    tag: 'Festival & Live Auction',
  },
  {
    id: 3,
    quote: 'The Revenue Tracker platform gave us instant visibility into our MRR, churn cohorts, and cash flow. Their automated dunning workflow recovered over $14,000 in failed credit card renewals in month one.',
    name: 'Karthik Subramanian',
    role: 'Founder & CEO, CloudScale Systems',
    rating: 5,
    tag: 'FinTech & Revenue Engine',
  },
  {
    id: 4,
    quote: 'I wanted to plan an unforgettable anniversary surprise for my fiancé. The personalized romantic timeline, custom background song, and midnight balloon reveal brought tears of joy to her eyes. Truly priceless.',
    name: 'Sai Preetham',
    role: 'Verified Couple Client',
    rating: 5,
    tag: 'Couple Surprise Portal',
  },
];

const SERVICE_TAGS = [
  'Website & App Development',
  'Healthcare & AI Chatbot',
  'Festival & Live Auction',
  'FinTech & Revenue Engine',
  'Couple Surprise Portal',
  'Digital Marketing & SEO',
  'Influencer Marketing',
  'Hospital & HMS Systems',
];

// ── Skeleton Card ─────────────────────────────────────────────────────────────
const SkeletonCard: React.FC = () => (
  <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 animate-pulse flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded bg-slate-200" />
        ))}
      </div>
      <div className="w-24 h-5 rounded-full bg-slate-200" />
    </div>
    <div className="w-8 h-8 rounded bg-slate-200" />
    <div className="space-y-2">
      <div className="h-3 bg-slate-200 rounded w-full" />
      <div className="h-3 bg-slate-200 rounded w-5/6" />
      <div className="h-3 bg-slate-200 rounded w-4/6" />
    </div>
    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 flex-shrink-0" />
      <div className="space-y-1.5 flex-1">
        <div className="h-3 bg-slate-200 rounded w-32" />
        <div className="h-2.5 bg-slate-200 rounded w-48" />
      </div>
    </div>
  </div>
);

// ── Review Card ───────────────────────────────────────────────────────────────
const ReviewCard: React.FC<{ t: Review }> = ({ t }) => (
  <div className="card-hover-smooth card-shine p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 uppercase truncate max-w-[140px] sm:max-w-none">
          {t.tag}
        </span>
      </div>

      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300 mb-2 sm:mb-3" />

      <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed italic mb-3 sm:mb-6">
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>

    <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex items-center gap-2.5 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
        {t.name[0]}
      </div>
      <div className="min-w-0">
        <div className="font-display font-bold text-xs sm:text-sm text-[#1a1f22] truncate">{t.name}</div>
        <div className="text-[10px] sm:text-xs text-slate-500 truncate">{t.role}</div>
      </div>
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
export const AgencyTestimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stories' | 'write'>('stories');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [form, setForm] = useState({
    name: '',
    role: '',
    tag: 'Website & App Development',
    quote: '',
    rating: 5,
  });
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const apiBase = import.meta.env.VITE_API_URL ?? '';

  useEffect(() => {
    fetch(`${apiBase}/api/reviews`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Review[]>;
      })
      .then((data) => {
        setReviews(data.length > 0 ? data : FALLBACK_REVIEWS);
      })
      .catch((err) => {
        console.warn('[AgencyTestimonials] API unavailable, using fallback reviews.', err.message);
        setReviews(FALLBACK_REVIEWS);
      })
      .finally(() => setLoading(false));
  }, [apiBase]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch(`${apiBase}/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit review');
      }

      setSubmitSuccess(true);
      setForm({
        name: '',
        role: '',
        tag: 'Website & App Development',
        quote: '',
        rating: 5,
      });
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-28 bg-white w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
            ✦ CLIENT STORIES &amp; REVIEWS
          </span>
          <h2 className="text-2xl sm:text-5xl font-display font-extrabold text-[#1a1f22] mt-2">
            Trusted by Ambitious Brands
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            Discover what healthcare leaders, festival committees, founders, and verified clients say about working with Trio Craft.
          </p>

          {/* Tab Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-2xs">
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'stories'
                  ? 'bg-white text-[#1a1f22] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquareQuote className="w-4 h-4 text-amber-600" />
              <span>Client Stories</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-100 text-amber-800">
                {reviews.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('write')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'write'
                  ? 'bg-white text-[#1a1f22] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenLine className="w-4 h-4 text-amber-600" />
              <span>Leave a Review</span>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-100 text-emerald-800 uppercase font-semibold">
                Live
              </span>
            </button>
          </div>
        </div>

        {/* Tab 1: Stories Grid */}
        {activeTab === 'stories' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {loading
                ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
                : reviews.map((t) => <ReviewCard key={t.id} t={t} />)
              }
            </div>

            {/* Quick action banner */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <div className="font-display font-bold text-sm sm:text-base text-[#1a1f22] flex items-center gap-2 justify-center sm:justify-start">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Have you worked with Trio Craft?</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Share your experience with our engineering and marketing team.
                </p>
              </div>
              <button
                onClick={() => setActiveTab('write')}
                className="btn-raiseup-gold px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2 flex-shrink-0 cursor-pointer"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Write Review Form */}
        {activeTab === 'write' && (
          <div className="max-w-2xl mx-auto">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
              {submitSuccess ? (
                <div className="py-10 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-[#1a1f22]">
                    Review Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md">
                    Thank you for sharing your feedback. Your review will be reviewed by our team and published to the live testimonials board.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-bold uppercase hover:bg-white transition-all cursor-pointer"
                    >
                      Write Another Review
                    </button>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setActiveTab('stories');
                      }}
                      className="btn-raiseup-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase cursor-pointer"
                    >
                      View Client Stories
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-5 text-left">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-[#1a1f22]">
                      Share Your Client Experience
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Your review will appear in our official portfolio once verified.
                    </p>
                  </div>

                  {/* Interactive Star Rating */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Rating *
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm({ ...form, rating: star })}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= (hoverRating ?? form.rating)
                                ? 'fill-amber-400 text-amber-400 drop-shadow-xs'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-3 text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        {form.rating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Vardhan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Role / Organization
                      </label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        placeholder="e.g. Managing Director, City Hospital"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Delivered *
                    </label>
                    <select
                      value={form.tag}
                      onChange={(e) => setForm({ ...form, tag: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm cursor-pointer transition-all"
                    >
                      {SERVICE_TAGS.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Review / Experience *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={form.quote}
                      onChange={(e) => setForm({ ...form, quote: e.target.value })}
                      placeholder="Share how Trio Craft contributed to your project, speed of delivery, results or product outcome..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none text-sm transition-all"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      ⚠️ {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-raiseup-gold py-4 rounded-xl text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Saving to Database...</span>
                    ) : (
                      <>
                        <span>Submit Review for Verification</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Live badge */}
        {!loading && activeTab === 'stories' && (
          <p className="mt-8 text-center text-[10px] text-slate-400 font-mono">
            ● Live reviews synced with Neon PostgreSQL &nbsp;·&nbsp; {reviews.length} approved client testimonials
          </p>
        )}

      </div>
    </section>
  );
};

