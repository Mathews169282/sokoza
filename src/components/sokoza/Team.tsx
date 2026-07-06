import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { TEAM } from '@/data/content';

const Team: React.FC = () => (
  <section className="py-20 lg:py-28 bg-[#FBFAF8]">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Our Team</p>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
          The People Behind the Magic
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {TEAM.map((m) => (
          <div key={m.name} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden aspect-square">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B2D6E]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center gap-3 pb-5">
                <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#8B2D6E]"><Linkedin className="w-4 h-4" /></a>
                <a href="#contact" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#8B2D6E]"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="font-serif text-lg font-bold text-[#1E2024]">{m.name}</h3>
              <p className="text-sm text-[#7A8B2E] font-medium">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
