'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '@/data/content';

const Portfolio = () => {
  const [filter, setFilter] = React.useState('All');
  const items = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#1E2024]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            Our Work
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" id="gallery">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === c ? 'bg-[#8B2D6E] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left block"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-serif text-lg font-bold">{p.title}</h3>
                {p.desc && <p className="text-gray-300 text-xs mt-1 leading-snug">{p.desc}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
