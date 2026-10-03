import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Sparkles, Building, GraduationCap, Dumbbell, ShieldAlert, Phone } from 'lucide-react';
import { SERVICES, SITE_INFO } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenEstimateForService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenEstimateForService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'office-cleaning':
        return Building;
      case 'school-cleaning':
        return GraduationCap;
      case 'gym-cleaning':
        return Dumbbell;
      case 'electrostatic-disinfecting':
        return ShieldAlert;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
            Commercial Janitorial Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance mb-6">
            Comprehensive Cleaning Tailored To Your Facility
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From scheduled corporate office sanitization to EPA-approved school disinfection and health club maintenance, JMD Janitorial provides reliable, hospital-grade care across Mercer County, NJ.
          </p>
        </div>

        {/* 2x2 / 4-Col Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#003D79]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Media with Overlay */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                    
                    {/* Category Label */}
                    <div className="absolute top-3.5 left-3.5 bg-[#002244]/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#FCB913] tracking-wide border border-white/10">
                      {service.category}
                    </div>

                    <div className="absolute bottom-3 left-3.5 flex items-center gap-2 text-white">
                      <div className="w-7 h-7 rounded bg-[#FCB913] text-[#002244] flex items-center justify-center font-bold text-xs">
                        0{index + 1}
                      </div>
                      <span className="text-xs font-semibold text-slate-200">Commercial Standard</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#003D79] transition-colors mb-2.5 font-display">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 mb-4">
                      {service.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#003D79] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold text-[#003D79] bg-[#E6F0FA] group-hover:bg-[#003D79] group-hover:text-white rounded-xl transition-all duration-200"
                  >
                    <span>View Service Checklist</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Estimate Strip */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#E6F0FA] text-[#003D79] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#003D79]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Need a customized scope or multi-building schedule?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                We formulate fair proposals tailored specifically to your facility's square footage and operating hours.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#003D79]" />
              <span>(609) 888-6809</span>
            </a>
            <button
              onClick={() => onOpenEstimateForService && onOpenEstimateForService('Custom Commercial Scope')}
              className="flex-1 sm:flex-initial px-5 py-2.5 text-xs sm:text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] rounded-lg shadow-sm"
            >
              Request Free Estimate
            </button>
          </div>
        </div>

        {/* Modal: In-Depth Service Checklist & Description */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-44 sm:h-52 bg-slate-900">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCB913]">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold font-display leading-tight text-white mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Scope of Work
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Detailed Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#003D79]" />
                    <span>Included Tasks & Protocol Standards</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.tasks.map((task, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#003D79] shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="p-4 rounded-xl bg-[#E6F0FA]/60 border border-[#003D79]/20">
                  <div className="text-xs font-bold text-[#003D79] uppercase tracking-wider mb-2">
                    JMD Service Guarantee
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                    {selectedService.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href={`tel:${SITE_INFO.phoneRaw}`}
                    className="text-xs font-semibold text-slate-600 hover:text-[#003D79] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#003D79]" />
                    <span>Questions? Call (609) 888-6809</span>
                  </a>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        const name = selectedService.title;
                        setSelectedService(null);
                        if (onOpenEstimateForService) {
                          onOpenEstimateForService(name);
                        }
                      }}
                      className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] rounded-lg shadow-sm"
                    >
                      Estimate This Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
