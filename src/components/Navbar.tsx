import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { Menu, X, Instagram, Facebook, Phone, Hammer, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer if screen is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-amber-500/20 py-2.5 sm:py-3 shadow-2xl' 
          : 'bg-gradient-to-b from-[#0c0d0e] via-[#0c0d0e]/90 to-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo Brand */}
          <a 
            href="#" 
            className="flex items-center gap-2 sm:gap-3 group shrink min-w-0"
            aria-label="Darma Construction Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Hammer className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg lg:text-xl font-black tracking-tight sm:tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors whitespace-nowrap leading-tight truncate">
                DARMA <span className="text-amber-500">CONSTRUCTION</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-widest text-slate-400 uppercase leading-none hidden sm:block truncate -mt-0.5">
                Quality Renovations Done Right
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Medium and Up) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors tracking-wide py-1 border-b-2 border-transparent hover:border-amber-400/50 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Social Links (Large Screens) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            {/* Social Icons */}
            <div className="flex items-center gap-2 border-r border-slate-800 pr-4">
              <a 
                href={COMPANY_INFO.instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                title="Instagram @darma.construction"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={COMPANY_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Phone */}
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* CTA Button */}
            <button
              id="nav-quote-btn"
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-amber-500/20 flex items-center gap-1.5 shrink-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions (Mobile & Tablet < lg) */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:bg-slate-800 transition-colors"
              title="Call Us"
              aria-label="Call Us"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenQuote}
              className="px-2.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm hover:from-amber-400 hover:to-amber-500 flex items-center gap-1 active:scale-95 transition-transform shrink-0"
            >
              <span>Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/40 active:scale-95 transition-transform shrink-0"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer & Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 top-[56px] sm:top-[64px] bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Slide-down Drawer */}
          <div 
            className="absolute top-full left-0 right-0 z-50 lg:hidden bg-[#0c0d0e]/98 backdrop-blur-2xl border-b border-amber-500/20 px-4 pt-4 pb-6 shadow-2xl space-y-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-slate-200 hover:text-amber-400 py-3 px-3 rounded-lg hover:bg-slate-900/80 border-b border-slate-800/60 flex items-center justify-between transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-amber-500/70" />
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 font-semibold text-amber-400 hover:underline">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <span className="text-slate-400 text-[11px] truncate">{COMPANY_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                >
                  <Instagram className="w-4 h-4 text-amber-500" />
                  <span>@darma.construction</span>
                </a>
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4 text-amber-500" />
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-98 transition-transform"
              >
                <span>Book Your Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

