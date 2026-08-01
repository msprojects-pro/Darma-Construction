import React from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Hammer, Instagram, Facebook, Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070809] border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Upper Footer: Social Strip & CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-900">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/10">
              <Hammer className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider text-white uppercase block">
                DARMA <span className="text-amber-500">CONSTRUCTION</span>
              </span>
              <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Instagram className="w-4 h-4 text-amber-500" />
              <span>{COMPANY_INFO.instagram}</span>
            </a>

            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-400 transition-colors"
              title="Facebook Profile"
            >
              <Facebook className="w-4 h-4 text-amber-500" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/40 flex items-center justify-center transition-all ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Company Overview */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-widest">
              About Darma Construction
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premium residential renovation specialists serving Greater Vancouver and the Lower Mainland in BC, Canada. Custom kitchen cabinets, luxury bathrooms, flooring, drywall, and painting.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>BC Licensed & WCB Covered</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Renovation Services</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Recent Projects (Before & After)</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us & Estimator</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About & BC Community</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Get a Free Quote</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-widest">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Kitchen Cabinets & Counter Prep</li>
              <li>Luxury Bathroom Renovations</li>
              <li>Hardwood & LVP Flooring</li>
              <li>Drywall Framing & Mudding</li>
              <li>Interior & Exterior Painting</li>
              <li>Custom Trim & Installation</li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-white tracking-widest">
              BC Service Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.location} (Greater Vancouver)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400">{COMPANY_INFO.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amber-400">{COMPANY_INFO.instagram}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6 border-t border-slate-900 text-slate-500 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Darma Construction. All rights reserved. Quality Renovations Done Right in BC, Canada.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span>BC Licensed Contractor</span>
            <span>•</span>
            <span>Vancouver • Burnaby • Richmond</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
