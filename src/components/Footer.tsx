import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Linkedin, Youtube, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { SITE_INFO, SERVICES } from '../data/siteData';

interface FooterProps {
  onOpenEstimate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimate }) => {
  return (
    <footer className="bg-[#001730] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner: Brand + Estimate Action */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-xl shadow-md shrink-0">
              <img
                src="/brand/jmd_logo_trimmed.png"
                alt="JMD Janitorial"
                className="h-12 w-auto object-contain"
                width={120}
                height={48}
              />
            </div>
            <div>
              <span className="block text-xl font-bold text-white font-display">
                JMD Janitorial
              </span>
              <span className="block text-xs font-semibold text-[#FCB913] uppercase tracking-wider">
                Commercial Cleaning & Janitorial Services · Mercer County, NJ
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:text-[#FCB913] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FCB913]" />
              <span>(609) 888-6809</span>
            </a>

            <button
              onClick={onOpenEstimate}
              className="px-6 py-3 rounded-xl bg-[#FCB913] hover:bg-[#e5a50a] text-[#002244] text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
            >
              <span>Request A Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-Column Main Navigation Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1: About Blurb & Licensing (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              About JMD Janitorial
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              A fully licensed and insured commercial cleaning company based in Mercer County, NJ. We specialize in general office cleaning, educational campus sanitization, fitness center maintenance, and electrostatic pathogen disinfection.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#FCB913]">
              <ShieldCheck className="w-4 h-4" />
              <span>Fully Licensed & Insured · Serving Since 2018</span>
            </div>
            <div className="pt-3 flex items-center space-x-3">
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FCB913] hover:border-[#FCB913] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FCB913] hover:border-[#FCB913] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.social.youtubePodcast}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#FCB913] hover:border-[#FCB913] transition-colors"
                aria-label="Clean Sweep Podcast on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5"
                >
                  Warehouse Sanitation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5"
                >
                  Deep Restroom Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Client Portals */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5">
                  About Us
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#results" className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5">
                  Before & After Results
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#videos" className="text-slate-400 hover:text-[#FCB913] transition-colors block py-0.5">
                  Cleaning Videos
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.social.workOrderForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FCB913] hover:underline flex items-center gap-1 py-0.5"
                >
                  <span>Submit Work Order</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.social.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#FCB913] flex items-center gap-1 py-0.5"
                >
                  <span>Google Review</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-white hover:text-[#FCB913] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FCB913]" />
                <span className="font-semibold tabular-nums">{SITE_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#FCB913] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#FCB913] shrink-0" />
                <span>{SITE_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#FCB913] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Monday – Saturday</span>
                  <span>9:00 AM – 7:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FCB913] shrink-0 mt-0.5" />
                <span>Mercer County, NJ</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} JMD Janitorial. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-slate-400">
            <span>Commercial Cleaning Specialists</span>
            <span>·</span>
            <span>Mercer County, NJ</span>
            <span>·</span>
            <span>Fully Licensed & Insured</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
