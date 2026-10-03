import React from 'react';
import { ShieldCheck, Users, Sparkles, HeartPulse, ArrowRight, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface AboutSectionProps {
  onOpenEstimate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEstimate }) => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      description: 'Total peace of mind with verified commercial liability protection.',
    },
    {
      icon: Sparkles,
      title: 'Commercial Cleaning Expertise',
      description: 'Years of hands-on experience handling complex facility demands.',
    },
    {
      icon: Users,
      title: 'Professional Cleaning Team',
      description: 'Extensively trained custodians who respect your workplace and privacy.',
    },
    {
      icon: HeartPulse,
      title: 'Health & Safety Focus',
      description: 'EPA-registered disinfectants killing 99.9% of bacteria and viruses.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Authentic Brand Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Brand Accent Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#003D79]/10 via-[#FCB913]/20 to-transparent rounded-2xl transform -rotate-1 hidden sm:block" />
              
              {/* Primary Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 aspect-[4/3] sm:aspect-[5/4]">
                <img
                  src="/brand/jmd_about.jpg"
                  alt="JMD Janitorial professional cleaning personnel on site"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to hero image if asset load encounters an issue
                    (e.target as HTMLImageElement).src = '/images/hero_commercial_cleaning_1791015724898.jpg';
                  }}
                />
                
                {/* Subtle bottom gradient for image caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-slate-100">
                      <span className="w-2 h-2 rounded-full bg-[#FCB913] animate-ping" />
                      Active On-Site Staff
                    </span>
                    <span className="text-[#FCB913] font-semibold">Mercer County, NJ</span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Stamp Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#002244] text-white p-4 sm:p-5 rounded-xl shadow-xl border border-white/10 max-w-[220px]">
                <div className="text-[#FCB913] font-bold text-xl sm:text-2xl font-display leading-tight">
                  Since 2018
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-snug">
                  Dedicated commercial cleaning and facility sanitation excellence.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 lg:pl-4">
            {/* Unboxed Eyebrow */}
            <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
              About JMD Janitorial
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-display text-balance">
              Professional Cleaning Built Around Your Business
            </h2>

            {/* Real Text Description from live website */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              We are a fully licensed and insured janitorial company with years of experience in all aspects of commercial janitorial cleaning. Our team is skilled in providing health and safety solutions for office buildings, warehouses, schools, fitness centers, medical facilities, and more.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.title} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 hover:border-[#003D79]/30 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[#E6F0FA] flex items-center justify-center text-[#003D79] shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 pl-9 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#003D79] hover:bg-[#002e5b] rounded-xl shadow-md transition-colors"
              >
                <span>Schedule A Free Walkthrough</span>
                <ArrowRight className="w-4 h-4 text-[#FCB913]" />
              </button>

              <a
                href={SITE_INFO.social.walkthroughForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-[#003D79] transition-colors"
              >
                <span>Online Walkthrough Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
