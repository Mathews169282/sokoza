import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ABOUT_IMG } from '@/data/content';
import Stats from './Stats';

const About: React.FC<{ onQuote: () => void }> = ({ onQuote }) => (
  <section id="about" className="bg-[#FBFAF8] py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        <div>
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            About Sokoza Events
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight mb-6">
            We Create Experiences That Leave A <span className="text-[#8B2D6E]">Lasting Impact</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Founded in 2020, Sokoza Events is a professional event management company dedicated to
            delivering seamless and impactful event experiences. "Sokoza" means Leadership in
            Motion—a reflection of our commitment to excellence, innovation, and purposeful execution.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From intimate gatherings to large-scale continental summits, we blend creativity with
            rigorous logistics to bring every vision to life across Africa.
          </p>
          <button
            onClick={onQuote}
            className="inline-flex items-center gap-2 rounded bg-[#8B2D6E] hover:bg-[#5E1E49] text-white text-xs font-semibold uppercase tracking-wide px-6 py-4 transition-colors"
          >
            Learn More About Us <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative">
          <img src={ABOUT_IMG} alt="About Sokoza" className="rounded-lg shadow-2xl w-full object-cover h-[420px]" />
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-[#8B2D6E] text-white px-7 py-5 rounded-lg shadow-xl">
            <p className="font-serif text-3xl font-bold">14+</p>
            <p className="text-xs uppercase tracking-wide text-purple-100">Years of Excellence</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <Stats />
      </div>
    </div>
  </section>
);

export default About;
