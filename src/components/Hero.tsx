import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#002244] overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_commercial_cleaning_1791015724898.jpg"
          alt="Gleaming modern commercial corporate office facility maintained by JMD Janitorial"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered corporate navy scrim to guarantee 5:1+ text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#002244]/88 to-[#002244]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002244] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          {/* Unboxed Brand Kicker */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FCB913]">
            <Sparkles className="w-4 h-4 text-[#FCB913]" />
            <span>Commercial Cleaning & Janitorial Specialists</span>
            <span className="text-white/40">·</span>
            <span className="text-slate-300">Mercer County, NJ</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-display text-balance">
            Cleaner Spaces. <br className="hidden sm:inline" />
            <span className="text-[#FCB913]">Healthier Workplaces.</span> <br />
            Better Impressions.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
            JMD Janitorial delivers full-service commercial cleaning, corporate facility maintenance, and hospital-grade electrostatic disinfecting tailored to the demands of modern businesses across Mercer County.
          </p>

          {/* Call to Actions & Direct Phone */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            <button
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] active:scale-[0.98] rounded-xl shadow-lg shadow-[#FCB913]/25 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCB913] focus:ring-offset-2 focus:ring-offset-[#002244]"
            >
              <span>Request a Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white hover:text-[#FCB913] bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl border border-white/15 transition-colors"
            >
              <span>Explore Our Services</span>
            </a>

            <div className="pt-2 sm:pt-0 sm:pl-3 flex items-center justify-center sm:justify-start">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="group inline-flex items-center gap-2 text-white hover:text-[#FCB913] transition-colors"
                aria-label={`Call ${SITE_INFO.phone}`}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[#FCB913] group-hover:bg-[#FCB913]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#FCB913]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-medium">Direct Line</span>
                  <span className="block text-sm sm:text-base font-bold text-white group-hover:text-[#FCB913] tabular-nums">
                    {SITE_INFO.phone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Credibility Features */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FCB913] shrink-0" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FCB913] shrink-0" />
              <span>EPA-Approved Disinfectants</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#FCB913] shrink-0" />
              <span>Serving Mercer County Since 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
