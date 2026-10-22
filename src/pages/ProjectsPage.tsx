import React, { useState } from 'react';
import { PROJECTS, CATEGORIES } from '../data/projects';
import type { ProjectCategory } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { Filter, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All Projects');

  const filterCategories: ProjectCategory[] = ['All Projects', ...CATEGORIES];

  const filteredProjects = selectedCategory === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter(project => {
        if (project.category === selectedCategory) return true;
        // Also match cross-cutting categories like Agentic AI or Automation in tech stack/descriptions
        if (selectedCategory === 'Agentic AI' && (project.id === 'rag-pdf-assistant' || project.id === 'oracle-ai-role-advisor')) return true;
        if (selectedCategory === 'Automation' && (project.id === 'face-recognition-attendance' || project.id === 'ganesh-committee-management')) return true;
        return false;
      });

  return (
    <>
      <SEO
        title="Projects & Case Studies | Tharun Portfolio"
        description="Browse real-world projects and case studies by Tharun across Web Development, Generative AI, RAG Systems, Chrome Extensions, and Computer Vision."
      />

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Page Heading */}
          <SectionHeading
            badge="Featured Portfolio"
            title="Projects &amp;"
            highlight="Engineering Case Studies"
            description="Explore my work spanning full-stack web platforms, retrieval-augmented generation pipelines, browser extensions, and machine learning models."
            align="center"
          />

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-4xl">
              {filterCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Showing <strong>{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'} in <strong>{selectedCategory}</strong></span>
            </div>
            <span>All entries verified</span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty state fallback (if any filter returned 0) */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 rounded-2xl glass-card border border-slate-800 space-y-4">
              <Layers className="w-12 h-12 text-slate-500 mx-auto" />
              <h3 className="text-xl font-bold text-white">No projects found in this category</h3>
              <p className="text-sm text-slate-400">Try selecting "All Projects" to view the complete catalog.</p>
              <Button variant="secondary" size="sm" onClick={() => setSelectedCategory('All Projects')}>
                Reset Filters
              </Button>
            </div>
          )}

          {/* Bottom Consultation Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-card border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Need a custom project tailored to your tech stack?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Have a unique idea or need a specific architecture? I can architect, code, and deploy an end-to-end solution for your business.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button variant="primary" size="md" icon={Sparkles}>
                Discuss Your Requirements
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
