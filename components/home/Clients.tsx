'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PARTNERS } from '@/data/content';

const SLIDES_PER_VIEW = 5;
const AUTO_PLAY_INTERVAL = 4000;

const Clients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(PARTNERS.length / SLIDES_PER_VIEW);

  const next = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const getCurrentPartners = () => {
    const start = currentSlide * SLIDES_PER_VIEW;
    return PARTNERS.slice(start, start + SLIDES_PER_VIEW);
  };

  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="hidden sm:block h-px w-12 bg-[#7A8B2E]" />
          <p className="text-center text-[#8B2D6E] font-semibold tracking-[0.25em] text-xs uppercase">
            Trusted by Leading Organizations
          </p>
          <span className="hidden sm:block h-px w-12 bg-[#7A8B2E]" />
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {getCurrentPartners().map((src, i) => (
              <div
                key={`${currentSlide}-${i}`}
                className="flex items-center justify-center"
              >
                <img
                  src={src}
                  alt="Partner logo"
                  className="max-h-16 w-auto object-contain transition-all duration-500"
                />
              </div>
            ))}
          </div>

          {totalSlides > 1 && (
            <>
              <button
                onClick={prev}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-[#8B2D6E] hover:border-[#8B2D6E] transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center text-gray-600 hover:text-[#8B2D6E] hover:border-[#8B2D6E] transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentSlide ? 'w-6 bg-[#8B2D6E]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
