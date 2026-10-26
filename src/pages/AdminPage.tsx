import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, LogOut, Star, Trash2, CheckCircle, XCircle,
  MessageSquare, Users, Clock, Mail, Phone, ChevronDown, ChevronUp, Eye
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Review {
  id: number; name: string; role: string; quote: string;
  rating: number; tag: string; approved: boolean; created_at: string;
}
interface Contact {
  id: number; name: string; email: string; phone: string;
  service: string; message: string; read: boolean; created_at: string;
}

const API = import.meta.env.VITE_API_URL ?? '';
const TOKEN_KEY = 'tc_admin_token';

// ── Login Screen ──────────────────────────────────────────────────────────────
const LoginScreen: React.FC<{ onLogin: (token: string) => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      sessionStorage.setItem(TOKEN_KEY, data.token);
      onLogin(data.token);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-slate-400 text-sm mt-1">Trio Craft — Secure Access</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Username</label>
            <input
              type="text" required value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter admin username"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Password</label>
            <input
              type="password" required value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-all"
            />
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}
          <button
            type="submit" disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all disabled:opacity-50 shadow-lg shadow-amber-500/20"
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

// ── Stat Card ─────────────────────────────────────────────────────────────────
const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: number; color: string }> = ({ icon, label, value, color }) => (
  <div className={`bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 shadow-sm`}>
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>{icon}</div>
    <div>
      <div className="text-2xl font-bold text-[#1a1f22]">{value}</div>
      <div className="text-xs text-slate-500 font-medium">{label}</div>
    </div>
  </div>
);

// ── Review Row ────────────────────────────────────────────────────────────────
const ReviewRow: React.FC<{ r: Review; token: string; onRefresh: () => void }> = ({ r, token, onRefresh }) => {
  const [expanded, setExpanded] = useState(false);

  const approve = async (approved: boolean) => {
    await fetch(`${API}/api/admin/reviews/${r.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
      body: JSON.stringify({ approved }),
    });
    onRefresh();
  };

  const remove = async () => {
    if (!confirm('Delete this review permanently?')) return;
    await fetch(`${API}/api/admin/reviews/${r.id}`, {
      method: 'DELETE', headers: { 'x-admin-token': token },
    });
    onRefresh();
  };

  return (
    <div className={`border rounded-2xl p-4 transition-all ${r.approved ? 'border-emerald-200 bg-emerald-50/40' : 'border-amber-200 bg-amber-50/40'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {r.name[0]}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-sm text-[#1a1f22]">{r.name}</div>
            <div className="text-xs text-slate-500 truncate">{r.role}</div>
            <div className="flex items-center gap-2 mt-1">
              {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              <span className="text-[10px] font-mono bg-white border border-slate-200 px-2 py-0.5 rounded-full">{r.tag}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.approved ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {r.approved ? '✓ Approved' : '⏳ Pending'}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg hover:bg-white text-slate-500 transition-colors" title="Expand">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {!r.approved ? (
            <button onClick={() => approve(true)} className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-700 transition-colors" title="Approve">
              <CheckCircle className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => approve(false)} className="p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors" title="Unapprove">
              <XCircle className="w-4 h-4" />
            </button>
          )}
          <button onClick={remove} className="p-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-colors" title="Delete">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-3 pl-12 text-sm text-slate-700 italic border-t border-slate-200/60 pt-3">
          "{r.quote}"
          <div className="text-xs text-slate-400 mt-2 font-mono">
            {new Date(r.created_at).toLocaleString('en-IN')}
          </div>
        </div>
      )}
    </div>
  );
};

// ── Contact Row ───────────────────────────────────────────────────────────────
const ContactRow: React.FC<{ c: Contact; token: string; onRefresh: () => void }> = ({ c, token, onRefresh }) => {
  const [expanded, setExpanded] = useState(false);

  const remove = async () => {
    if (!confirm('Delete this contact request?')) return;
    await fetch(`${API}/api/admin/contacts/${c.id}`, {
      method: 'DELETE', headers: { 'x-admin-token': token },
    });
    onRefresh();
  };

  return (
    <div className="border border-slate-200 bg-white rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            {c.name[0]}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-sm text-[#1a1f22]">{c.name}</div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <a href={`mailto:${c.email}`} className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3" />{c.email}
              </a>
              {c.phone && (
                <a href={`tel:${c.phone}`} className="text-xs text-emerald-600 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />{c.phone}
                </a>
              )}
              <span className="text-[10px] font-mono bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">{c.service}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button onClick={() => setExpanded(!expanded)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button onClick={remove} className="p-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      {expanded && (
        <div className="mt-3 pl-12 text-sm text-slate-700 border-t border-slate-200/60 pt-3">
          <p className="text-slate-600">{c.message}</p>
          <div className="text-xs text-slate-400 mt-2 font-mono">
            {new Date(c.created_at).toLocaleString('en-IN')}
          </div>
        </div>
      )}
    </div>
  );
};

// ── Main Admin Dashboard ──────────────────────────────────────────────────────
export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem(TOKEN_KEY));
  const [tab, setTab] = useState<'reviews' | 'contacts'>('contacts');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (t: string) => {
    setLoading(true);
    try {
      const [revRes, conRes] = await Promise.all([
        fetch(`${API}/api/admin/reviews`, { headers: { 'x-admin-token': t } }),
        fetch(`${API}/api/admin/contacts`, { headers: { 'x-admin-token': t } }),
      ]);
      if (revRes.status === 401 || conRes.status === 401) {
        sessionStorage.removeItem(TOKEN_KEY);
        setToken(null);
        return;
      }
      setReviews(await revRes.json());
      setContacts(await conRes.json());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchData(token);
  }, [token, fetchData]);

  const handleLogout = async () => {
    if (token) {
      await fetch(`${API}/api/admin/logout`, {
        method: 'POST', headers: { 'x-admin-token': token },
      });
    }
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  if (!token) {
    return <LoginScreen onLogin={t => setToken(t)} />;
  }

  const pendingReviews = reviews.filter(r => !r.approved);
  const approvedReviews = reviews.filter(r => r.approved);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] text-white px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm">Trio Craft Admin</div>
              <div className="text-xs text-slate-400">Management Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/')} className="text-xs text-slate-400 hover:text-white transition-colors">
              ← Back to Site
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<MessageSquare className="w-5 h-5 text-blue-600" />} label="Total Requests" value={contacts.length} color="bg-blue-50" />
          <StatCard icon={<Clock className="w-5 h-5 text-amber-600" />} label="Pending Reviews" value={pendingReviews.length} color="bg-amber-50" />
          <StatCard icon={<CheckCircle className="w-5 h-5 text-emerald-600" />} label="Live Reviews" value={approvedReviews.length} color="bg-emerald-50" />
          <StatCard icon={<Users className="w-5 h-5 text-purple-600" />} label="Total Reviews" value={reviews.length} color="bg-purple-50" />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white border border-slate-200 rounded-2xl p-1 w-fit shadow-sm">
          <button
            onClick={() => setTab('contacts')}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'contacts' ? 'bg-[#0f172a] text-white shadow' : 'text-slate-500 hover:text-[#1a1f22]'}`}
          >
            📥 Quote Requests
            {contacts.length > 0 && <span className="ml-2 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{contacts.length}</span>}
          </button>
          <button
            onClick={() => setTab('reviews')}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'reviews' ? 'bg-[#0f172a] text-white shadow' : 'text-slate-500 hover:text-[#1a1f22]'}`}
          >
            ⭐ Reviews
            {pendingReviews.length > 0 && <span className="ml-2 bg-amber-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{pendingReviews.length}</span>}
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
          </div>
        ) : tab === 'contacts' ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-[#1a1f22]">Quote Requests ({contacts.length})</h2>
              <button onClick={() => fetchData(token)} className="text-xs text-amber-600 hover:underline">↻ Refresh</button>
            </div>
            {contacts.length === 0 ? (
              <div className="text-center py-16 text-slate-400 text-sm">No contact requests yet.</div>
            ) : (
              contacts.map(c => <ContactRow key={c.id} c={c} token={token} onRefresh={() => fetchData(token)} />)
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-[#1a1f22]">All Reviews ({reviews.length})</h2>
              <button onClick={() => fetchData(token)} className="text-xs text-amber-600 hover:underline">↻ Refresh</button>
            </div>
            {reviews.length === 0 ? (
              <div className="text-center py-16 text-slate-400 text-sm">No reviews yet.</div>
            ) : (
              reviews.map(r => <ReviewRow key={r.id} r={r} token={token} onRefresh={() => fetchData(token)} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
};
