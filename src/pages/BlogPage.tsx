import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogs';
import type { BlogPost } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { Clock, ArrowRight, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <SEO
        title="Technical Articles & AI Engineering Guides | Tharun Portfolio"
        description="Practical tutorials and architectural case study notes on RAG systems, Chrome extensions, LLM guardrails, and full-stack development."
      />

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            badge="Engineering Insights"
            title="Technical Articles &amp;"
            highlight="Architecture Guides"
            description="Deep dives into building production RAG pipelines, Manifest V3 extensions, and automation systems. Clearly identified technical walkthroughs by Tharun."
            align="center"
          />

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="cyan" size="sm">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-700/80 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Transparent Publishing Note */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 max-w-2xl mx-auto text-center space-y-2">
            <div className="text-xs font-mono text-cyan-400">
              💡 Content Transparency Notice
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              These articles reflect authentic engineering practices implemented across my projects. Real-time RSS feeds and tutorial syndication will be updated as new articles go live.
            </p>
          </div>

        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl glass-card p-6 sm:p-10 border border-cyan-500/40 shadow-2xl bg-slate-950">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="cyan" size="sm">
                  {selectedPost.category}
                </Badge>
                <span className="text-xs font-mono text-slate-400">
                  {selectedPost.date} • {selectedPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedPost.title}
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                {selectedPost.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 font-mono">
                  Written by Tharun • Full-Stack &amp; AI Developer
                </div>
                <Link to="/contact">
                  <Button variant="primary" size="sm" icon={Sparkles}>
                    Discuss This Tech
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
