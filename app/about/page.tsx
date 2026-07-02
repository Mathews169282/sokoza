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
      <AboutContent />
      <WhyChooseUs />
      <Clients />
      <CTA onQuote={openQuote} />
    </>
  );
}
