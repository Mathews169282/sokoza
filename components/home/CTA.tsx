'use client';

import React from 'react';
import { ArrowRight, CalendarClock } from 'lucide-react';

const CTA = ({ onQuote }: { onQuote: () => void }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#1E2024]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
        <p className="text-[#9aae3a] font-semibold tracking-[0.3em] text-xs uppercase mb-4">Let&apos;s Work Together</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Create Something<br className="hidden md:block" /> Unforgettable?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
          From corporate summits to brand activations, our team is ready to bring your vision to life across Africa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onQuote}
            className="inline-flex items-center gap-2 rounded bg-[#8B2D6E] hover:bg-[#5E1E49] text-white text-sm font-semibold uppercase tracking-wide px-8 py-4 transition-colors"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded border border-[#9aae3a] text-white hover:bg-[#9aae3a]/10 text-sm font-semibold uppercase tracking-wide px-8 py-4 transition-colors"
          >
            Book a Consultation <CalendarClock className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
