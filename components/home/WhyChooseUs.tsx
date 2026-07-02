'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Award, Globe } from 'lucide-react';
import { STATS, COLORS } from '@/data/content';

const ICONS = [Calendar, Users, Award, Globe];

const Counter = ({ target, suffix, text }: { target: number; suffix: string; text?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active || target === 0) return;
    let start = 0;
    const dur = 1500;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  if (text) return <span ref={ref} className="font-serif text-3xl md:text-4xl font-bold" style={{ color: COLORS.olive }}>{text}</span>;
  return <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold" style={{ color: COLORS.olive }}>{val}{suffix}</span>;
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Why Choose Us</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
            The Sokoza Difference
          </h2>
        </div>
        <div className="bg-[#FBFAF8] rounded-2xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200">
            {STATS.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <div key={s.label} className="flex flex-col items-center text-center px-4 py-8">
                  <Icon className="w-8 h-8 text-[#8B2D6E] mb-4" strokeWidth={1.5} />
                  <Counter target={s.value} suffix={s.suffix} text={(s as any).text} />
                  <p className="mt-2 text-sm text-gray-600 font-medium">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
