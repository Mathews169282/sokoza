import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Award, Globe } from 'lucide-react';
import { STATS } from '@/data/content';

const ICONS = [Calendar, Users, Award, Globe];

const Counter: React.FC<{ target: number; suffix: string; text?: string; active: boolean }> = ({ target, suffix, text, active }) => {
  const [val, setVal] = useState(0);
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

  if (text) return <span className="font-serif text-3xl md:text-4xl font-bold text-[#7A8B2E]">{text}</span>;
  return <span className="font-serif text-4xl md:text-5xl font-bold text-[#7A8B2E]">{val}{suffix}</span>;
};

const Stats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-200">
      {STATS.map((s, i) => {
        const Icon = ICONS[i];
        return (
          <div key={s.label} className="flex flex-col items-center text-center px-4 py-8">
            <Icon className="w-8 h-8 text-[#8B2D6E] mb-4" strokeWidth={1.5} />
            <Counter target={s.value} suffix={s.suffix} text={(s as any).text} active={active} />
            <p className="mt-2 text-sm text-gray-600 font-medium">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
