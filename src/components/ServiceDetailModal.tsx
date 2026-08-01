import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#121417] rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image Bar */}
          <div className="relative h-48 sm:h-64 w-full bg-slate-950 overflow-hidden shrink-0">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover filter brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-[#121417]/40 to-black/60" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-amber-400 px-3 py-1 rounded-full">
                {service.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 border-b border-slate-800 pb-4">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Clock className="w-4 h-4" />
                Est. Completion: {service.timeline}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                BC Licensed & Insured
              </span>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase text-slate-300 tracking-wider mb-2">
                Service Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase text-slate-300 tracking-wider mb-3">
                Included Workmanship Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our 4-Step Renovation Process */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                The Darma Renovation Process
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="block font-bold text-white">1. Consultation</span>
                  <span className="text-slate-500">Free Site Visit</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="block font-bold text-white">2. Fixed Quote</span>
                  <span className="text-slate-500">Transparent Cost</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="block font-bold text-white">3. Precision Build</span>
                  <span className="text-slate-500">On-Time Execution</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="block font-bold text-white">4. Final Walkthrough</span>
                  <span className="text-slate-500">100% Sign-off</span>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <span className="text-xs text-slate-400">
              Ready to schedule your {service.title} consultation?
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(service.id);
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
