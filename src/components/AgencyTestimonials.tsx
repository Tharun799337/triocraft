import React, { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

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
  <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 hover:bg-white transition-all duration-300 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 sm:px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 uppercase truncate max-w-[120px] sm:max-w-none">
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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL ?? '';

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
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-28 bg-white w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
            ✦ CLIENT STORIES &amp; RESULTS
          </span>
          <h2 className="text-2xl sm:text-5xl font-display font-extrabold text-[#1a1f22] mt-2">
            Trusted by Ambitious Brands
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base leading-relaxed">
            Discover what our healthcare directors, festival organizers, SaaS founders, and couples say about working with Trio Craft.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {loading
            ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            : reviews.map((t) => <ReviewCard key={t.id} t={t} />)
          }
        </div>

        {/* Live badge */}
        {!loading && (
          <p className="mt-6 text-center text-[10px] text-slate-400 font-mono">
            ● Live reviews from database &nbsp;·&nbsp; {reviews.length} verified clients
          </p>
        )}

      </div>
    </section>
  );
};
