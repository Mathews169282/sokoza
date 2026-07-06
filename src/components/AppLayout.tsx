import React, { useState } from 'react';
import Header from './sokoza/Header';
import Hero from './sokoza/Hero';
import Clients from './sokoza/Clients';
import About from './sokoza/About';
import Services from './sokoza/Services';
import Portfolio from './sokoza/Portfolio';
import Team from './sokoza/Team';
import Testimonials from './sokoza/Testimonials';
import Blog from './sokoza/Blog';
import Contact from './sokoza/Contact';
import Footer from './sokoza/Footer';
import QuoteModal from './sokoza/QuoteModal';

const AppLayout: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Header onQuote={openQuote} />
      <main>
        <Hero />
        <Clients />
        <About onQuote={openQuote} />
        <Services onQuote={openQuote} />
        <Portfolio />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
};

export default AppLayout;
