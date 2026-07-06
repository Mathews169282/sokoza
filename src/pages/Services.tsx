import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/sokoza/Logo';
import Footer from '@/components/sokoza/Footer';
import Services from '@/components/sokoza/Services';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
          <Logo />
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#8B2D6E]">
            Back to Home
          </Link>
        </div>
      </header>

      <Services onQuote={() => {}} />

      <Footer />
    </div>
  );
};

export default ServicesPage;
