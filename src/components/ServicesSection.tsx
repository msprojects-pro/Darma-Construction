import React from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { ChefHat, Bath, Layers, SquareStack, Paintbrush, Wrench, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteWithService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onOpenQuoteWithService 
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ChefHat': return <ChefHat className="w-7 h-7 text-amber-400" />;
      case 'Bath': return <Bath className="w-7 h-7 text-amber-400" />;
      case 'Layers': return <Layers className="w-7 h-7 text-amber-400" />;
      case 'SquareStack': return <SquareStack className="w-7 h-7 text-amber-400" />;
      case 'Paintbrush': return <Paintbrush className="w-7 h-7 text-amber-400" />;
      case 'Wrench': return <Wrench className="w-7 h-7 text-amber-400" />;
      default: return <Wrench className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0e1012] relative overflow-hidden">
      
      {/* Background Subtle Highlights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Craftsmen Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Renovation Services <span className="text-gold-gradient">Done Right</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From single-room transformations to full home remodels across BC. Every project is backed by licensed experts, fixed quotes, and uncompromising craftsmanship.
          </p>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#131518] rounded-2xl border border-slate-800/80 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5"
            >
              <div>
                {/* Header Row: Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-wide">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Feature Bullet Checklist */}
                <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>Est: {service.timeline}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-slate-800 transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onOpenQuoteWithService(service.id)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 text-amber-400 hover:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-amber-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white uppercase tracking-wide">
              Have a Custom Renovation Requirement?
            </h4>
            <p className="text-sm text-slate-400">
              We combine kitchen, bathroom, flooring, drywall, and painting into seamless full-home makeover packages across BC.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteWithService('full-home')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap flex items-center gap-2"
          >
            <span>Discuss Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
