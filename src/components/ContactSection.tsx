import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { QuoteFormData } from '../types';
import { Send, Instagram, Facebook, Phone, Mail, MapPin, CheckCircle2, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  initialServiceId?: string;
  initialSqft?: string;
  initialEstRange?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId,
  initialSqft,
  initialEstRange
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    projectType: initialServiceId || 'kitchen-cabinets',
    city: 'Vancouver',
    squareFootage: initialSqft || '',
    budgetRange: initialEstRange || '',
    timeframe: 'As soon as possible',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({
        ...prev,
        projectType: initialServiceId,
        squareFootage: initialSqft || prev.squareFootage,
        budgetRange: initialEstRange || prev.budgetRange
      }));
    }
  }, [initialServiceId, initialSqft, initialEstRange]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'DC-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setSubmitted(true);
    console.log('Darma Construction Quote Form Submitted:', { ...formData, refCode: code });
  };

  return (
    <section id="contact" className="py-24 bg-[#090a0b] relative overflow-hidden">
      
      {/* Background Lighting Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Project Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Ready to Transform <span className="text-gold-gradient">Your Space?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Submit your project details below or <strong>DM us on Instagram @darma.construction</strong> to book your free consultation across BC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social CTAs */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#121417] rounded-3xl border border-slate-800 p-8 space-y-6">
              <h3 className="text-xl font-bold uppercase text-white tracking-wide border-b border-slate-800 pb-4">
                Direct Contact & DM
              </h3>

              {/* Instagram Direct Prompt */}
              <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 p-5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Instagram className="w-5 h-5" />
                  <span>Fastest Response: Direct Message</span>
                </div>
                <p className="text-xs text-slate-300">
                  Send photos of your current kitchen, bathroom, or floors directly to <strong className="text-white">@darma.construction</strong> on Instagram for quick feedback!
                </p>
                <a 
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-1"
                >
                  <span>Open Instagram App</span>
                  <Send className="w-3 h-3" />
                </a>
              </div>

              {/* Phone & Email Cards */}
              <div className="space-y-4">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Call or Text</span>
                    <span className="text-sm font-bold text-white">{COMPANY_INFO.phone}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Email Inquiries</span>
                    <span className="text-sm font-bold text-white">{COMPANY_INFO.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Service Region</span>
                    <span className="text-sm font-bold text-white">BC, Canada (Greater Vancouver)</span>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-xs font-semibold text-slate-300 hover:text-amber-400 flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-amber-500" />
                  <span>Instagram</span>
                </a>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-xs font-semibold text-slate-300 hover:text-amber-400 flex items-center justify-center gap-2 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-amber-500" />
                  <span>Facebook</span>
                </a>
              </div>

            </div>

            {/* Response Time Guarantee */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
              <Clock className="w-5 h-5 text-amber-500 shrink-0" />
              <span>We reply to all quote requests and DMs within 2–4 business hours.</span>
            </div>

          </div>

          {/* Right Column: Quote Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#131518] rounded-3xl border border-amber-500/30 p-8 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      Quote Request Received
                    </span>
                    <h3 className="text-3xl font-black uppercase text-white tracking-tight">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Your consultation request has been successfully registered. A Darma Construction project estimator in BC will reach out via call or text shortly.
                    </p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 inline-block text-left max-w-xs w-full space-y-1">
                    <span className="text-[10px] uppercase text-slate-500 font-bold block">Reference Code</span>
                    <span className="text-lg font-extrabold text-amber-400 tracking-wider block font-mono">{refCode}</span>
                    <span className="text-[11px] text-slate-400 block">Or DM this code on IG @darma.construction</span>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'kitchen-cabinets',
                        city: 'Vancouver',
                        squareFootage: '',
                        budgetRange: '',
                        timeframe: 'As soon as possible',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                        Get Your Free Renovation Quote
                      </h3>
                      <p className="text-xs text-slate-400">
                        No obligations • Fixed scope guarantee • BC Licensed
                      </p>
                    </div>
                    <ShieldCheck className="w-6 h-6 text-amber-500 hidden sm:block" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-300">
                        Your Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-300">
                        Phone Number <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(604) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      />
                    </div>

                    {/* BC Location City */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-300">
                        City / Region in BC
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      >
                        {COMPANY_INFO.serviceAreas.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-300">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      >
                        <option value="kitchen-cabinets">Kitchen Cabinets & Millwork</option>
                        <option value="bathroom-renovations">Bathroom Renovation</option>
                        <option value="flooring">Flooring Installation</option>
                        <option value="drywall">Drywall & Framing</option>
                        <option value="painting">Interior / Exterior Paint</option>
                        <option value="installation">Custom Trim & Installation</option>
                        <option value="full-home">Full Home Transformation</option>
                      </select>
                    </div>

                    {/* Timeframe */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase text-slate-300">
                        Target Start Date
                      </label>
                      <select
                        value={formData.timeframe}
                        onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                      >
                        <option value="As soon as possible">As Soon As Possible</option>
                        <option value="Within 1 month">Within 1 Month</option>
                        <option value="1 to 3 months">1 to 3 Months</option>
                        <option value="Planning / Flexible">Flexible / Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Message & Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-300">
                      Project Details & Room Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what you want renovated (e.g. replacing old kitchen cabinets with dark charcoal matte, quartz island, or tiling a master bath...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-xl p-4 text-sm text-white focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Book Your Free Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    🔒 Your information is confidential and used solely for providing your Darma Construction quote.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
