import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG } from '@/data/content';

const Blog: React.FC = () => (
  <section id="blog" className="py-20 lg:py-28 bg-[#FBFAF8]">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Insights & Blog</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight max-w-xl">
            Latest from the Sokoza Journal
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {BLOG.map((b) => (
          <article key={b.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col">
            <Link to={`/blog/${b.slug}`} className="overflow-hidden aspect-[16/10] block">
              <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-[#8B2D6E] bg-[#8B2D6E]/10 px-3 py-1 rounded-full">{b.category}</span>
                <span className="flex items-center gap-1 text-xs text-gray-400"><Calendar className="w-3.5 h-3.5" />{b.date}</span>
              </div>
              <Link to={`/blog/${b.slug}`}>
                <h3 className="font-serif text-lg font-bold text-[#1E2024] mb-2 group-hover:text-[#8B2D6E] transition-colors">{b.title}</h3>
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{b.excerpt}</p>
              <Link to={`/blog/${b.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B2D6E]">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
