import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface NavbarProps {
  onOpenEstimate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Results', href: '#results' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#002244] text-white text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FCB913]" />
              Fully Licensed & Insured Commercial Cleaning
            </span>
            <span className="text-slate-400">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#FCB913]" />
              Mon–Sat: 9:00 AM – 7:00 PM
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Serving Mercer County, NJ</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={SITE_INFO.social.workOrderForm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#FCB913] transition-colors flex items-center gap-1"
            >
              <span>Submit Work Order</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="font-semibold text-[#FCB913] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 fill-[#FCB913]" />
              <span>{SITE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#002244]/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5 border-b border-white/10'
            : 'bg-[#002244] py-3.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Exact JMD Janitorial Brand Asset */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCB913] rounded-lg p-1"
            aria-label="JMD Janitorial Home"
          >
            <div className="h-11 sm:h-12 flex items-center justify-center p-1 bg-white rounded-md shadow-sm">
              <img
                src="/brand/jmd_logo_trimmed.png"
                alt="JMD Janitorial Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
                width={120}
                height={40}
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block font-bold text-white tracking-tight text-base leading-tight font-display">
                JMD Janitorial
              </span>
              <span className="block text-[11px] font-medium text-[#FCB913] tracking-wide uppercase">
                Commercial Cleaning
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-200 hover:text-[#FCB913] rounded-md transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FCB913]" />
              <span>{SITE_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] active:scale-[0.98] rounded-lg shadow-md shadow-[#FCB913]/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCB913] focus:ring-offset-2 focus:ring-offset-[#002244]"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="p-2 text-[#FCB913] bg-white/5 rounded-lg border border-white/10"
              aria-label="Call JMD Janitorial"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCB913]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#002244] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-1 pt-1 pb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#FCB913] hover:bg-white/5 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-white/10 rounded-lg border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#FCB913]" />
                <span>Call {SITE_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] rounded-lg shadow-md"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
