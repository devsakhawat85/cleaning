import React from 'react';
import { ShieldCheck, MapPin, Award, CheckCircle, Clock, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Fully Licensed & Insured',
      description: 'Comprehensive commercial liability coverage',
    },
    {
      icon: Award,
      title: 'EPA-Approved Disinfectants',
      description: 'Kills 99.9% of bacteria, flu & viruses',
    },
    {
      icon: MapPin,
      title: 'Serving Mercer County, NJ',
      description: 'Local business dedicated to NJ facilities',
    },
    {
      icon: Clock,
      title: 'Reliable & Flexible Schedules',
      description: 'Day porter, evening & weekend coverage',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200/80 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E6F0FA] flex items-center justify-center text-[#003D79] group-hover:bg-[#FCB913] group-hover:text-[#002244] transition-colors shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
