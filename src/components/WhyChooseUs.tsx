import React from 'react';
import { Headphones, BadgeDollarSign, HeartHandshake, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Headphones;
      case 1:
        return BadgeDollarSign;
      case 2:
        return HeartHandshake;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#002244] text-white relative overflow-hidden">
      {/* Subtle decorative geometric glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003D79]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FCB913]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FCB913] mb-3">
            How We Care For Our Clients
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance mb-6">
            Why Leading Facilities Choose JMD Janitorial
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We are dedicated to building long-term commercial relationships grounded in absolute reliability, honest budget alignment, and genuine community investment.
          </p>
        </div>

        {/* 3 Premium Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComp = getIcon(index);
            return (
              <div
                key={item.number}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FCB913]/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#FCB913] group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-display text-white/20 group-hover:text-[#FCB913]/50 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 font-display group-hover:text-[#FCB913] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed font-medium">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
