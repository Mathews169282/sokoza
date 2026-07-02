'use client';

import Hero from '@/components/home/Hero';
import Clients from '@/components/home/Clients';
import Portfolio from '@/components/home/Portfolio';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import { useQuote } from '@/components/layout/QuoteContext';

export default function Home() {
  const { openQuote } = useQuote();

  return (
    <>
      <Hero />
      <Clients />
      <Portfolio />
      <Testimonials />
      <CTA onQuote={openQuote} />
    </>
  );
}
