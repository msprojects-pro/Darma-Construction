import React, { useState } from 'react';
import { WHY_US_PILLARS, COMPANY_INFO } from '../data/mockData';
import { Award, Clock, ShieldCheck, DollarSign, Calculator, ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceId } from '../types';

interface WhyChooseUsProps {
  onOpenQuoteWithDetails: (service: string, sqft: string, estRange: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteWithDetails }) => {
  // Calculator state
  const [calcService, setCalcService] = useState<ServiceId | 'full-home'>('kitchen-cabinets');
  const [calcSqft, setCalcSqft] = useState<number>(250);
  const [calcTier, setCalcTier] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Estimate calculation logic for BC renovation rates
  const getRatePerSqft = (service: string, tier: string) => {
    const baseRates: Record<string, { standard: number; premium: number; luxury: number }> = {
      'kitchen-cabinets': { standard: 65, premium: 95, luxury: 150 },
      'bathroom-renovations': { standard: 85, premium: 130, luxury: 210 },
      'flooring': { standard: 8, premium: 14, luxury: 24 },
      'drywall': { standard: 6, premium: 10, luxury: 16 },
      'painting': { standard: 4, premium: 7, luxury: 12 },
      'installation': { standard: 12, premium: 20, luxury: 35 },
      'full-home': { standard: 45, premium: 75, luxury: 120 }
    };
    return baseRates[service]?.[tier as 'standard' | 'premium' | 'luxury'] || 50;
  };

  const rate = getRatePerSqft(calcService, calcTier);
  const estimatedCost = calcSqft * rate;
  const lowEst = Math.round(estimatedCost * 0.9);
  const highEst = Math.round(estimatedCost * 1.15);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-8 h-8 text-amber-400" />;
      case 'Clock': return <Clock className="w-8 h-8 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-amber-400" />;
      case 'DollarSign': return <DollarSign className="w-8 h-8 text-amber-400" />;
      default: return <ShieldCheck className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#0e1012] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Darma Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Why Choose <span className="text-gold-gradient">Darma Construction</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We operate with complete accountability, clear communication, and uncompromising quality standards from project kickoff to final cleanup.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WHY_US_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#131518] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                <span>Guaranteed Workmanship</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Renovation Cost Estimator Box */}
        <div className="bg-gradient-to-br from-[#14161a] via-[#101215] to-[#14161a] rounded-3xl border border-amber-500/30 p-8 sm:p-10 shadow-2xl relative">
          
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden lg:block">
            <Calculator className="w-48 h-48 text-amber-500" />
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Instant BC Estimator Tool</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              Estimate Your Renovation Budget
            </h3>

            <p className="text-slate-300 text-sm">
              Select your service type, room size, and desired finish quality to calculate a preliminary BC project price range.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              
              {/* Service Select */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-slate-300">
                  Renovation Type
                </label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value as any)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="kitchen-cabinets">Kitchen Cabinets & Prep</option>
                  <option value="bathroom-renovations">Bathroom Renovation</option>
                  <option value="flooring">Flooring Installation</option>
                  <option value="drywall">Drywall & Framing</option>
                  <option value="painting">Interior / Exterior Paint</option>
                  <option value="installation">Custom Millwork & Trim</option>
                  <option value="full-home">Full Home Renovation</option>
                </select>
              </div>

              {/* Square Footage Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-xs font-bold uppercase text-slate-300">
                    Est. Area (Sq Ft)
                  </label>
                  <span className="text-xs font-extrabold text-amber-400">{calcSqft} sq ft</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="25"
                  value={calcSqft}
                  onChange={(e) => setCalcSqft(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Finish Quality */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-slate-300">
                  Finish Quality
                </label>
                <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  {(['standard', 'premium', 'luxury'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setCalcTier(tier)}
                      className={`py-2 text-[11px] font-bold uppercase rounded-lg transition-all ${
                        calcTier === tier 
                          ? 'bg-amber-500 text-slate-950 shadow' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Calculated Output Result */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-950/80 p-6 rounded-2xl border border-amber-500/20">
              <div>
                <span className="text-xs font-bold uppercase text-slate-400 block">
                  Estimated Project Budget Range (CAD)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-gold-gradient tracking-tight mt-1">
                  ${lowEst.toLocaleString()} – ${highEst.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  *Preliminary estimate based on standard BC labor & material averages. Includes consultation.
                </span>
              </div>

              <button
                onClick={() => onOpenQuoteWithDetails(calcService, `${calcSqft} sqft`, `$${lowEst.toLocaleString()} - $${highEst.toLocaleString()}`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 whitespace-nowrap"
              >
                <span>Lock In Official Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
