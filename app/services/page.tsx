'use client';

import Services from '@/components/services/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CTA from '@/components/home/CTA';
import { useQuote } from '@/components/layout/QuoteContext';

export default function ServicesPage() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="bg-[#FBFAF8] pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Our Services</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1E2024] leading-tight">
            End-to-End Event Solutions
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A complete suite of services to plan, design, and deliver events that move audiences.
          </p>
        </div>
      </section>
      <Services />
      <WhyChooseUs />
      <CTA onQuote={openQuote} />
    </>
  );
}
