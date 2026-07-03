'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { NAV_LINKS } from '@/data/content';
import { useQuote } from './QuoteContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-[#8B2D6E] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B2D6E] group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={openQuote}
            className="inline-flex items-center gap-2 rounded-full bg-[#8B2D6E] hover:bg-[#5E1E49] text-white text-xs font-semibold tracking-wide uppercase px-5 py-3 transition-colors"
          >
            Get a Quote <ChevronRight className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
              {[
                { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook' },
                { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sokoza-events-877356333?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-[#8B2D6E] hover:text-[#8B2D6E] flex items-center justify-center text-gray-600 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/254723672244"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#7A8B2E] hover:bg-[#65741f] flex items-center justify-center text-white transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <button className="lg:hidden text-gray-800" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-gray-700 font-medium hover:text-[#8B2D6E]"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openQuote();
            }}
            className="w-full mt-2 rounded-full bg-[#8B2D6E] text-white text-sm font-semibold py-3"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
