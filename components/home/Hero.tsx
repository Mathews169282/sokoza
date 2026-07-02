'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { HERO_IMG } from '@/data/content';

const Hero = () => (
  <section id="home" className="relative pt-20 min-h-[88vh] flex items-center overflow-hidden bg-[#1E2024]">
    <img
      src={HERO_IMG}
      alt="Sokoza event"
      className="absolute inset-0 w-full h-full object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1E2024] via-[#1E2024]/85 to-transparent" />

    <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full">
      <div className="max-w-2xl py-20 animate-fade-up">
        <p className="text-[#9aae3a] font-semibold tracking-[0.3em] text-sm uppercase mb-5">
          Leadership in Motion
        </p>
        <h1 className="font-serif text-white text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          Your Partner in Corporate Event Planning, Sponsorship and Audience Engagement
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-9">
          We support organizations in planning and delivering high-impact professional events
          that enhance brand visibility, stakeholder engagement, and partnership opportunities.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded bg-[#8B2D6E] hover:bg-[#5E1E49] text-white text-sm font-semibold uppercase tracking-wide px-7 py-4 transition-colors"
          >
            Our Services <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded border border-[#9aae3a] text-white hover:bg-[#9aae3a]/10 text-sm font-semibold uppercase tracking-wide px-7 py-4 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
