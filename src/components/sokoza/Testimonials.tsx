import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';

const Testimonials: React.FC = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Testimonials</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
          What Our Clients Say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-7">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="bg-[#FBFAF8] rounded-xl p-8 border border-gray-100 relative">
            <Quote className="w-10 h-10 text-[#8B2D6E]/20 mb-4" />
            <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="font-serif font-bold text-[#1E2024]">{t.name}</p>
              <p className="text-sm text-gray-500">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
