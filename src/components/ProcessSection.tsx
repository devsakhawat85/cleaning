import React from 'react';
import { ClipboardList, FileSpreadsheet, Sparkles, Smile, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

interface ProcessSectionProps {
  onOpenEstimate: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenEstimate }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return ClipboardList;
      case 1:
        return FileSpreadsheet;
      case 2:
        return Sparkles;
      case 3:
        return Smile;
      default:
        return Sparkles;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
            Streamlined Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance mb-4">
            How Simple It Is To Work With JMD
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From the initial on-site walkthrough to ongoing quality checks, we keep commercial facility maintenance completely seamless.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={step.step}
                className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#003D79]/40 hover:bg-white transition-all duration-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#E6F0FA] text-[#003D79] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6 text-[#003D79]" />
                    </div>
                    <span className="text-2xl font-black font-display text-slate-300">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#003D79] block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-slate-400">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] active:scale-[0.98] rounded-xl shadow-md transition-all"
          >
            <span>Start Step 01: Schedule A Free Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
