import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, RotateCcw, CheckCircle2 } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clampedX / rect.width) * 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section id="results" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FCB913] mb-3">
            Our Results · Verified On-Site Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance mb-4">
            See The Difference
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Professional cleaning that delivers visible results. Drag the slider to compare commercial surfaces before and after JMD Janitorial deep sanitation.
          </p>
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-4xl mx-auto">
          {/* Controls Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="font-semibold text-slate-200">Before: Heavy Grime & Buildup</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-slate-400">
                Drag slider or click anywhere to compare ({sliderPosition}%)
              </span>
              <button
                onClick={() => setSliderPosition(50)}
                className="flex items-center gap-1 text-[#FCB913] hover:text-white transition-colors"
                title="Reset to 50%"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-slate-200">After: Deep Restored Finish</span>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            className="relative h-[380px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-ew-resize touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDragging}
          >
            {/* AFTER Image (Full container background) */}
            <div className="absolute inset-0">
              <img
                src="/brand/jmd_before_after_2.jpg"
                alt="After commercial deep cleaning by JMD Janitorial"
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              {/* After Badge */}
              <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AFTER (Clean)</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full" style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}>
                <img
                  src="/brand/jmd_before_after_1.jpg"
                  alt="Before cleaning condition"
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
              {/* Before Badge */}
              <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-lg bg-rose-950/80 backdrop-blur-md border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider shadow-lg">
                <span>BEFORE</span>
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FCB913] text-[#002244] shadow-xl border-2 border-white flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
          </div>

          {/* Quick preset buttons */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setSliderPosition(10)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${sliderPosition <= 15 ? 'bg-white text-slate-900 font-bold' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              Show Full After
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${sliderPosition === 50 ? 'bg-white text-slate-900 font-bold' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              Split View 50/50
            </button>
            <button
              onClick={() => setSliderPosition(90)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${sliderPosition >= 85 ? 'bg-white text-slate-900 font-bold' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`}
            >
              Show Full Before
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
