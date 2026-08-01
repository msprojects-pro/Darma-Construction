import React from 'react';
import { COMPANY_INFO, HERO_IMAGE } from '../data/mockData';
import { ArrowRight, ShieldCheck, Star, MapPin, ChevronDown, Sparkles, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreWork }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0c0d0e]">
      
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Darma Construction Luxury Renovation" 
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/80 to-[#0c0d0e]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-70" />
        {/* Fine Architectural Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Location & Rating Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md mb-8 shadow-xl"
        >
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <Star className="w-3.5 h-3.5 fill-amber-400" />
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            {COMPANY_INFO.location} • Greater Vancouver & Lower Mainland
          </span>
        </motion.div>

        {/* Large Logo & Brand Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-tight">
            DARMA <span className="text-gold-gradient">CONSTRUCTION</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-amber-400 italic">
              "{COMPANY_INFO.tagline}"
            </p>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-amber-500 to-transparent" />
          </div>
        </motion.div>

        {/* Short Subtext / Services List */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 font-medium max-w-2xl tracking-wider uppercase bg-slate-950/60 py-2.5 px-6 rounded-xl border border-slate-800/80 backdrop-blur-sm"
        >
          Kitchen Cabinets <span className="text-amber-500">•</span> Bathroom <span className="text-amber-500">•</span> Floors <span className="text-amber-500">•</span> Drywall <span className="text-amber-500">•</span> Painting <span className="text-amber-500">•</span> Installation
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-get-quote-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-view-work-btn"
            onClick={onExploreWork}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-amber-500/60 text-slate-200 hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-md flex items-center justify-center gap-2 hover:bg-slate-800/80"
          >
            <span>View Our Work</span>
          </button>
        </motion.div>

        {/* Instagram DM Prompt Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex items-center gap-2 text-xs text-slate-400"
        >
          <Instagram className="w-4 h-4 text-amber-400" />
          <span>Prefer quick messaging? DM us on Instagram</span>
          <a 
            href={COMPANY_INFO.instagramUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="text-amber-400 font-bold underline hover:text-amber-300"
          >
            {COMPANY_INFO.instagram}
          </a>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-slate-800/80"
        >
          <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white uppercase">BC Licensed</span>
              <span className="text-[10px] text-slate-400">Full WCB & Liability</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
            <Star className="w-5 h-5 text-amber-500 shrink-0 fill-amber-500/20" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white uppercase">5-Star Rated</span>
              <span className="text-[10px] text-slate-400">100+ BC Renovations</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white uppercase">Fixed Pricing</span>
              <span className="text-[10px] text-slate-400">No Surprise Fees</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
            <div className="text-left">
              <span className="block text-xs font-bold text-white uppercase">Local BC Team</span>
              <span className="text-[10px] text-slate-400">Lower Mainland</span>
            </div>
          </div>
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <a href="#services" className="p-2 text-slate-500 hover:text-amber-400 transition-colors inline-block" aria-label="Scroll to services">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>

      </div>
    </section>
  );
};
