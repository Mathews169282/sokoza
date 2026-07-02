'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from '@/components/home/Footer';
import { QuoteProvider } from './QuoteContext';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </QuoteProvider>
  );
}
