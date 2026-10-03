import React, { useState } from 'react';
import { Building2, Warehouse, GraduationCap, Dumbbell, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { INDUSTRIES, SITE_INFO } from '../data/siteData';

interface IndustriesSectionProps {
  onOpenEstimate: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenEstimate }) => {
  const [activeTab, setActiveTab] = useState(0);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'Warehouse':
        return Warehouse;
      case 'GraduationCap':
        return GraduationCap;
      case 'Dumbbell':
        return Dumbbell;
      case 'Stethoscope':
        return Stethoscope;
      default:
        return Building2;
    }
  };

  const getIndustryImage = (id: string) => {
    switch (id) {
      case 'office-buildings':
        return '/images/hero_commercial_cleaning_1791015724898.jpg';
      case 'schools':
        return '/images/service_school_cleaning_1791015737141.jpg';
      case 'fitness-centers':
        return '/images/service_gym_cleaning_1791015749118.jpg';
      case 'warehouses':
        return '/images/hero_commercial_cleaning_1791015724898.jpg';
      case 'medical-facilities':
        return '/brand/jmd_about.jpg';
      default:
        return '/images/hero_commercial_cleaning_1791015724898.jpg';
    }
  };

  const currentIndustry = INDUSTRIES[activeTab];
  const CurrentIcon = getIndustryIcon(currentIndustry.iconName);

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
            Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance mb-4">
            Specialized Care for High-Performance Workspaces
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every industry has unique sanitary codes, traffic patterns, and operational hours. We customize protocol checklists to align with your facility’s exact commercial requirements.
          </p>
        </div>

        {/* Industry Selectors (Functional Tab Strip) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {INDUSTRIES.map((ind, index) => {
            const Icon = getIndustryIcon(ind.iconName);
            const isActive = activeTab === index;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#002244] text-white border-[#002244] shadow-md shadow-slate-900/10'
                    : 'bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FCB913]' : 'text-[#003D79]'}`} />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Industry Detail Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Media (5 cols) */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[300px] bg-slate-900">
              <img
                src={getIndustryImage(currentIndustry.id)}
                alt={currentIndustry.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCB913] bg-[#002244]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
                  {currentIndustry.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display mt-2">
                  {currentIndustry.title}
                </h3>
              </div>
            </div>

            {/* Description & Requirements (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0FA] flex items-center justify-center text-[#003D79]">
                    <CurrentIcon className="w-5 h-5 text-[#003D79]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      {currentIndustry.title}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500">
                      {currentIndustry.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {currentIndustry.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Standard Facility Protocols Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentIndustry.keyRequirements.map((req, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 text-xs font-medium text-slate-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#003D79] shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-medium">
                  Custom frequency available: Daily, Bi-Weekly, or On-Demand Deep Clean.
                </div>
                <button
                  onClick={onOpenEstimate}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] rounded-xl shadow-sm transition-all"
                >
                  <span>Get Estimate for {currentIndustry.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
