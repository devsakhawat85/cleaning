import React, { useState } from 'react';
import { Play, X, ExternalLink, Video as VideoIcon } from 'lucide-react';
import { VIDEOS, SITE_INFO } from '../data/siteData';
import { VideoItem } from '../types';

export const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
            Real Cleaning In Action
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance mb-4">
            See JMD In Action
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Watch our commercial cleaning team at work maintaining commercial facilities, deep cleaning restrooms, and preparing workspaces for high productivity.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {VIDEOS.map((vid) => {
            const thumbnailUrl = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;
            return (
              <div
                key={vid.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Video Thumbnail Container with Play Overlay */}
                <div
                  className="relative aspect-video bg-slate-950 cursor-pointer overflow-hidden"
                  onClick={() => setActiveVideo(vid)}
                >
                  <img
                    src={thumbnailUrl}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />
                  
                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FCB913] text-[#002244] shadow-2xl flex items-center justify-center group-hover:scale-110 active:scale-95 transition-all">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Video title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCB913] block mb-1">
                      Commercial Janitorial Demo
                    </span>
                    <h3 className="text-lg font-bold font-display line-clamp-1">
                      {vid.title}
                    </h3>
                  </div>
                </div>

                {/* Video Info Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-[#003D79] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {vid.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setActiveVideo(vid)}
                      className="text-xs font-bold text-[#003D79] hover:text-[#002244] flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Video</span>
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                    >
                      <span>Open on YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="bg-slate-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex items-center justify-between border-b border-white/10 bg-[#002244] text-white">
                <div className="flex items-center gap-2">
                  <VideoIcon className="w-4 h-4 text-[#FCB913]" />
                  <span className="font-bold text-sm font-display">{activeVideo.title}</span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-slate-900 text-xs text-slate-400 flex items-center justify-between">
                <span>JMD Janitorial on-site commercial cleaning footage</span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-white hover:text-[#FCB913] font-semibold"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
