import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Tharun Portfolio"
        description="The requested page could not be found. Return to Tharun's portfolio homepage."
      />

      <div className="py-24 sm:py-32 flex items-center justify-center min-h-[60vh]">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            Error 404 • Resource Not Found
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Lost in Cyberspace?
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The page you're trying to access doesn't exist or has been relocated. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link to="/home">
              <Button variant="primary" size="md" icon={Home} iconPosition="left">
                Return Home
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="secondary" size="md">
                Browse Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
