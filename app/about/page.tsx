'use client';

import AboutContent from '@/components/home/About';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import { useQuote } from '@/components/layout/QuoteContext';

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="bg-[#FBFAF8] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">About Sokoza Events</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1E2024] leading-tight">
            We Create Experiences That Leave A <span className="text-[#8B2D6E]">Lasting Impact</span>
          </h1>
        </div>
      </section>
      <AboutContent />
      <WhyChooseUs />
      <Clients />
      <CTA onQuote={openQuote} />
    </>
  );
}
