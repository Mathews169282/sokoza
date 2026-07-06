import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/sokoza/Logo';
import Footer from '@/components/sokoza/Footer';
import Portfolio from '@/components/sokoza/Portfolio';

const WorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E2024]">
      <header className="sticky top-0 z-50 bg-[#1E2024]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
          <Logo />
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#9aae3a]">
            Back to Home
          </Link>
        </div>
      </header>

      <Portfolio />

      <Footer />
    </div>
  );
};

export default WorkPage;
