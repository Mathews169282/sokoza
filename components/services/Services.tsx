'use client';

import React from 'react';
import { Lightbulb, ClipboardList, MapPin, Users, Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/data/content';
import { useQuote } from '@/components/layout/QuoteContext';

const ICONS: Record<string, React.ElementType> = { Lightbulb, ClipboardList, MapPin, Users, Megaphone };

const Services = () => {
  const { openQuote } = useQuote();

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <div
                key={s.title}
                className="group bg-[#FBFAF8] hover:bg-[#8B2D6E] rounded-xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-lg bg-white group-hover:bg-white/15 flex items-center justify-center mb-6 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-[#8B2D6E] group-hover:text-white transition-colors" strokeWidth={1.5} />}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E2024] group-hover:text-white mb-3 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 group-hover:text-purple-100 text-sm leading-relaxed mb-5 transition-colors">
                  {s.desc}
                </p>
                <ul className="text-gray-600 group-hover:text-purple-100 text-sm leading-relaxed mb-5 space-y-1 list-disc list-inside transition-colors">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <button
                  onClick={openQuote}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B2D6E] group-hover:text-white transition-colors"
                >
                  Enquire <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
