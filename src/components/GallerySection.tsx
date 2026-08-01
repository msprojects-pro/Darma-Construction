import React, { useState } from 'react';
import { PROJECTS, COMPANY_INFO } from '../data/mockData';
import { ProjectItem } from '../types';
import { SlidersHorizontal, MapPin, Eye, Calendar, Sparkles, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GallerySectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeViewMode, setActiveViewMode] = useState<{ [key: string]: 'after' | 'before' }>({});

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen-cabinets', label: 'Kitchens' },
    { id: 'bathroom-renovations', label: 'Bathrooms' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'drywall', label: 'Drywall & Framing' },
    { id: 'painting', label: 'Painting' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const toggleBeforeAfter = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    setActiveViewMode(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section id="gallery" className="py-24 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real BC Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Our Recent <span className="text-gold-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore our portfolio of kitchen, bathroom, flooring, drywall, and painting renovations completed across Greater Vancouver and BC. Toggle the Before & After view on any card!
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const currentMode = activeViewMode[project.id] || 'after';
              const displayImg = currentMode === 'before' && project.imageBefore 
                ? project.imageBefore 
                : project.imageAfter;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject(project)}
                  className="group relative bg-[#131518] rounded-2xl border border-slate-800 hover:border-amber-500/50 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <img
                      src={displayImg}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131518] via-transparent to-black/40" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-950 bg-amber-400 px-3 py-1 rounded-full shadow-md">
                        {project.categoryLabel}
                      </span>
                      
                      {project.imageBefore && (
                        <button
                          onClick={(e) => toggleBeforeAfter(e, project.id)}
                          className="pointer-events-auto px-3 py-1 rounded-full bg-slate-950/80 hover:bg-amber-500 border border-amber-500/40 hover:border-amber-400 text-amber-400 hover:text-slate-950 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg"
                        >
                          <ArrowUpDown className="w-3 h-3" />
                          <span>Showing: {currentMode.toUpperCase()}</span>
                        </button>
                      )}
                    </div>

                    {/* Hover Inspect Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1 text-amber-500/90">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-wide line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.scope.slice(0, 2).map((item, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-md">
                          {item}
                        </span>
                      ))}
                      {project.scope.length > 2 && (
                        <span className="text-[10px] font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                          +{project.scope.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Footer Prompt */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm">
            Want to see more project transformations or discuss a specific room design?
          </p>
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-amber-400 font-bold hover:text-amber-300 text-sm tracking-wide group"
          >
            <span>Follow @darma.construction on Instagram for daily jobsite updates</span>
            <SlidersHorizontal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
