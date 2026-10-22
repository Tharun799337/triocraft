import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { SEO } from '../components/SEO';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">
          The requested project case study could not be located.
        </p>
        <Link to="/projects">
          <Button variant="primary" size="md" icon={ArrowLeft} iconPosition="left">
            Back to Projects Catalog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} | Tharun Portfolio Case Study`}
        description={project.shortDescription}
      />

      <div className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation Bar */}
          <div className="flex items-center justify-between">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all projects</span>
            </Link>

            <Badge variant="cyan" size="md">
              {project.category}
            </Badge>
          </div>

          {/* Project Title & Overview Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300">
                {project.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Engineered by Tharun
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Main Visual Preview */}
          <div className="relative rounded-2xl overflow-hidden glass-card border border-slate-700/80 shadow-2xl">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-auto object-cover max-h-[550px]"
            />
          </div>

          {/* Action Links & Tech Bar */}
          <div className="p-6 rounded-2xl glass-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link to={`/contact?service=${project.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} className="flex-1 sm:flex-initial">
                <Button variant="primary" size="md" icon={Sparkles} className="w-full sm:w-auto">
                  Discuss Similar Project
                </Button>
              </Link>
            </div>
          </div>

          {/* Problem & Solution Deep Dive (Two Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <div className="rounded-2xl glass-card p-6 sm:p-8 border border-red-500/20 bg-gradient-to-br from-red-950/10 to-transparent">
              <div className="flex items-center gap-2.5 text-red-400 font-bold text-lg mb-4">
                <AlertTriangle className="w-5 h-5" />
                <h3>The Business &amp; Technical Problem</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl glass-card p-6 sm:p-8 border border-emerald-500/20 bg-gradient-to-br from-emerald-950/10 to-transparent">
              <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-lg mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <h3>The Engineering Solution</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.solutionImplemented}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Note */}
          {project.architectureNote && (
            <div className="rounded-2xl glass-card p-6 sm:p-8 border border-cyan-500/30">
              <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-base mb-3">
                <Layers className="w-5 h-5" />
                <h3>System Architecture &amp; Data Flow</h3>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm text-cyan-300 border border-slate-800 leading-relaxed overflow-x-auto">
                {project.architectureNote}
              </div>
            </div>
          )}

          {/* Key Features Implemented */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Key Features &amp; Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-normal">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Challenges & Solutions */}
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Technical Challenges Overcome
            </h3>

            <div className="space-y-4">
              {project.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
                  <div className="text-xs font-bold text-amber-300 font-mono uppercase tracking-wider">
                    Challenge {idx + 1}: {item.challenge}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-cyan-400">
                    <strong className="text-white">Solution:</strong> {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honest Demo / Source Code Availability Note */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Source Code &amp; Architecture Walkthrough
              </div>
              <p className="text-xs text-slate-400">
                To protect client privacy and proprietary algorithms, code repositories and interactive sandboxes are provided during technical interviews and discovery calls upon request.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button variant="outline" size="sm">
                Request Code Walkthrough
              </Button>
            </Link>
          </div>

          {/* Bottom Project Conversion CTA */}
          <div className="p-8 sm:p-12 rounded-3xl glass-card border border-cyan-500/40 text-center space-y-6 bg-gradient-to-b from-cyan-950/20 to-transparent">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Interested in implementing a solution like this for your company?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              I can build a custom variation tailored to your exact data models, workflow rules, and branding. Let's discuss your timeline and technical scope.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="glow" size="lg" icon={Sparkles}>
                  Discuss a Similar Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="secondary" size="lg">
                  Browse More Projects
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
