import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, SITE_INFO } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
              Client Testimonials & Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
              Trusted by Essential Workers & Facility Managers
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Read authentic feedback from corporate tenants and building officers who experience our standards daily in Mercer County.
            </p>
          </div>

          <div>
            <a
              href={SITE_INFO.social.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#003D79] bg-[#E6F0FA] hover:bg-[#003D79] hover:text-white rounded-xl transition-all duration-200 border border-[#003D79]/20"
            >
              <span>Leave A Review On Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="relative p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#FCB913]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#003D79]/15" />
                </div>

                {/* Highlight Callout */}
                <div className="text-base font-bold text-slate-900 mb-4 font-display leading-snug">
                  "{review.highlight}"
                </div>

                {/* Full Quote */}
                <blockquote className="text-sm sm:text-base text-slate-600 leading-relaxed italic mb-8">
                  "{review.quote}"
                </blockquote>
              </div>

              {/* Author & Verification */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-base font-display">
                    {review.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {review.role}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Feedback</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Sweep Podcast Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#002244] to-[#003D79] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCB913]">
              Official Community Media
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Tune into the "Clean Sweep Podcast"
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Listen to JMD Janitorial discuss industry best practices, facility management insights, and local business leadership in Mercer County.
            </p>
          </div>

          <a
            href={SITE_INFO.social.youtubePodcast}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] rounded-xl shadow-md transition-colors shrink-0"
          >
            <span>Listen on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
