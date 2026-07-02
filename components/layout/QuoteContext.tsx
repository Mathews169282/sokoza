'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import QuoteModal from '@/components/home/QuoteModal';

type QuoteContextType = {
  openQuote: () => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <div id="quote" />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
