import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from '@/data/content';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  const open = lightbox !== null ? items[lightbox] : null;
  const go = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + items.length) % items.length);
  };

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#1E2024]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#9aae3a] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Our Work</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
            Events We've Brought to Life
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10" id="gallery">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => { setFilter(c); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === c ? 'bg-[#8B2D6E] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] text-left"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 p-5">
                <span className="text-[#9aae3a] text-xs font-semibold uppercase tracking-wide">{p.category}</span>
                <h3 className="text-white font-serif text-lg font-bold mt-1">{p.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 md:left-10 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); go(-1); }}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={open.img} alt={open.title} className="w-full max-h-[75vh] object-contain rounded-lg" />
            <div className="text-center mt-4">
              <span className="text-[#9aae3a] text-xs font-semibold uppercase tracking-wide">{open.category}</span>
              <h3 className="text-white font-serif text-2xl font-bold">{open.title}</h3>
            </div>
          </div>
          <button className="absolute right-4 md:right-10 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); go(1); }}>
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
