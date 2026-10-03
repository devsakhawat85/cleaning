import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface CallToActionSectionProps {
  onOpenEstimate: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#002244] via-[#003D79] to-[#001730] text-white relative overflow-hidden">
      {/* Decorative Brand Accent Circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FCB913]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FCB913]">
            <ShieldCheck className="w-4 h-4 text-[#FCB913]" />
            <span>Mercer County Commercial Janitorial</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance mb-6">
            Ready For A Cleaner, Healthier Workplace?
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Let's build a cleaning solution that fits your facility. Schedule your free on-site walkthrough and receive a transparent, competitive proposal.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] active:scale-[0.98] rounded-xl shadow-xl shadow-[#FCB913]/20 transition-all duration-200"
            >
              <span>Request A Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-bold text-white hover:text-[#FCB913] bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FCB913]" />
              <span>Call (609) 888-6809</span>
            </a>
          </div>

          {/* Fast reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FCB913]" />
              No Obligation Walkthrough
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FCB913]" />
              Fair & Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FCB913]" />
              Fully Licensed & Insured
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
