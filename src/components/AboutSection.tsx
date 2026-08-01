import React, { useState } from 'react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/mockData';
import { Trophy, Star, MapPin, CheckCircle2, Quote, ChevronLeft, ChevronRight, Sparkles, Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <section id="about" className="py-24 bg-[#0c0d0e] relative overflow-hidden">
      
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Brand Story & World Cup Reference */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" />
              <span>Building Excellence On & Off The Field</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Rooted in BC. Driven by <span className="text-gold-gradient">Craftsmanship.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Based proudly in British Columbia, Canada, <strong>Darma Construction</strong> was founded on a simple principle: deliver high-end renovation work with absolute integrity, speed, and precision. Whether it is custom kitchen millwork, luxury bathroom tiling, or full-home drywall & paint, we treat every home as if it were our own.
            </p>

            {/* Special World Cup 2026 Vancouver Integration */}
            <div className="bg-gradient-to-r from-slate-900 to-[#141619] border border-amber-500/30 p-6 rounded-2xl space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">
                    Building Excellence On & Off The Field ⚽🇨🇦
                  </h4>
                  <span className="text-xs text-amber-400 font-semibold">
                    Proud BC Supporters as Vancouver Hosts World Cup 2026!
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-13">
                Just like world-class athletics, great construction takes team coordination, hard work, discipline, and stamina. As BC prepares to welcome the world for FIFA World Cup 2026 in Vancouver, Darma Construction brings that same championship energy and passion to every single renovation project in the province.
              </p>
            </div>

            {/* Service Areas & Credentials Pills */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase text-slate-400 block mb-3">
                Primary BC Service Areas:
              </span>
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.serviceAreas.map((city, idx) => (
                  <span key={idx} className="text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Social Connection Card & Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Instagram Connection Card */}
            <div className="bg-[#131518] rounded-3xl border border-amber-500/30 p-8 space-y-6 text-center shadow-xl relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                <Instagram className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  Connect With Us On Social
                </h3>
                <p className="text-xs text-amber-400 font-semibold mt-1">
                  @darma.construction
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                We post live behind-the-scenes videos, daily jobsite progress, and client transformations across Vancouver, Burnaby, Richmond, and beyond.
              </p>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow @darma.construction</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Facebook Profile Linked in Bio</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Client Reviews / Testimonials Section */}
        <div className="bg-[#111316] rounded-3xl border border-slate-800 p-8 sm:p-12 relative">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                Client Feedback
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
                Trusted Across British Columbia
              </h3>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-slate-200 italic font-light leading-relaxed">
              "{currentTestimonial.comment}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 border-t border-slate-800/80">
              <div>
                <span className="text-base font-bold text-white block">
                  {currentTestimonial.author}
                </span>
                <span className="text-xs text-amber-500 font-semibold">
                  {currentTestimonial.projectType} • {currentTestimonial.location}
                </span>
              </div>
              <span className="text-xs text-slate-500">
                Completed {currentTestimonial.date}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
