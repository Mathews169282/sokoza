import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, SERVICES } from '@/data/content';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    try {
      await fetch('https://famous.ai/api/crm/6a43d3d8d03ffd9417a014d4/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'footer-signup',
          tags: ['newsletter', 'footer-signup'],
        }),
      });
      setSubscribed(true);
      setEmail('');
    } catch { /* ignore */ }
  };

  return (
    <footer className="bg-[#1E2024] text-gray-400">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo light />
          <p className="text-sm leading-relaxed mt-5 max-w-xs">
            Leadership in Motion. We design and execute exceptional events that connect
            audiences and brands across Africa.
          </p>
<div className="flex gap-3 mt-6">
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
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#8B2D6E] flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-[#9aae3a] transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold text-lg mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title}><a href="#services" className="hover:text-[#9aae3a] transition-colors">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif font-bold text-lg mb-5">Newsletter</h4>
          <p className="text-sm mb-4">Get event tips and Sokoza updates in your inbox.</p>
          {subscribed ? (
            <p className="text-sm text-[#9aae3a] font-medium">Thanks for subscribing!</p>
          ) : (
            <form onSubmit={subscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-l-lg bg-white/10 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#8B2D6E]"
              />
              <button type="submit" className="rounded-r-lg bg-[#8B2D6E] hover:bg-[#5E1E49] px-4 transition-colors">
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-sm">
          <p>© {new Date().getFullYear()} Sokoza Events. All rights reserved.</p>
          <p>Designed with purpose. Leadership in Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
