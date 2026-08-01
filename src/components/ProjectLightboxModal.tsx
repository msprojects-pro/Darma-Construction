import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, Calendar, CheckCircle2, ArrowUpDown, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: (serviceId: string) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  onClose,
  onOpenQuote
}) => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  if (!project) return null;

  const activeImg = viewMode === 'before' && project.imageBefore ? project.imageBefore : project.imageAfter;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
        
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#121417] rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
        >
          {/* Top Bar with Title & Close */}
          <div className="p-4 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                {project.categoryLabel} Project Showcase
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-900 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image & Controls Zone */}
          <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden shrink-0">
            <img
              src={activeImg}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Before / After Toggle Button */}
            {project.imageBefore && (
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/70 px-3 py-1.5 rounded-full backdrop-blur-md">
                  Status: <span className="text-amber-400">{viewMode.toUpperCase()} RENOVATION</span>
                </span>

                <button
                  onClick={() => setViewMode(viewMode === 'after' ? 'before' : 'after')}
                  className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xl"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span>Switch to {viewMode === 'after' ? 'BEFORE' : 'AFTER'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Details Body */}
          <div className="p-6 space-y-6 overflow-y-auto">
            
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 border-b border-slate-800 pb-4">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="w-4 h-4 text-amber-500" />
                Duration: {project.duration}
              </span>
              <span className="text-slate-500">
                Completed in {project.year}
              </span>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
                Project Summary
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                Work Completed & Materials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <span className="text-xs text-slate-400">
              Want a similar transformation for your home in BC?
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(project.category);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Request Similar Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
