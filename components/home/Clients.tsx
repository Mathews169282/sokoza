'use client';

import React from 'react';
import { PARTNERS } from '@/data/content';

const Clients = () => (
  <section className="bg-white py-12 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="flex items-center justify-center gap-4 mb-9">
        <span className="hidden sm:block h-px w-12 bg-[#7A8B2E]" />
        <p className="text-center text-[#8B2D6E] font-semibold tracking-[0.25em] text-xs uppercase">
          Trusted by Leading Organizations
        </p>
        <span className="hidden sm:block h-px w-12 bg-[#7A8B2E]" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8 items-center">
        {PARTNERS.map((src) => (
          <div
            key={src}
            className="flex items-center justify-center"
          >
            <img
              src={src}
              alt="Partner logo"
              className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
