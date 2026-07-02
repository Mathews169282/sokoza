'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ABOUT_IMG } from '@/data/content';
import WhyChooseUs from './WhyChooseUs';

const About = () => (
  <section id="about" className="bg-[#FBFAF8]">
    <div className="max-w-7xl mx-auto px-5 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
        <div>
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            About Sokoza Events
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight mb-6">
            We Create Experiences That Leave A <span className="text-[#8B2D6E]">Lasting Impact</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Sokoza Events is a professional event management company founded in 2020, dedicated to
            delivering seamless and impactful event experiences. The name “Sokoza,” meaning Leadership
            in Motion, reflects our commitment to excellence, innovation, and purposeful execution.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            We specialize in end-to-end event management, ensuring that every detail from concept
            development to execution is aligned with our clients’ goals. Our approach focuses on
            creating experiences that not only meet expectations but also generate measurable impact
            and meaningful engagement.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From intimate gatherings to large-scale continental summits, we blend creativity with
            rigorous logistics to bring every vision to life across Africa.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-[#8B2D6E] hover:bg-[#5E1E49] text-white text-xs font-semibold uppercase tracking-wide px-6 py-4 transition-colors"
          >
            Learn More About Us <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="relative">
          <img src={ABOUT_IMG} alt="About Sokoza" className="rounded-lg shadow-2xl w-full object-cover h-[420px]" />
          <div className="absolute -bottom-6 -left-6 hidden md:block bg-[#8B2D6E] text-white px-7 py-5 rounded-lg shadow-xl">
            <p className="font-serif text-3xl font-bold">14+</p>
            <p className="text-xs uppercase tracking-wide text-purple-100">Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Vision & Mission</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
            What Drives Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#FBFAF8] rounded-xl p-8 border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-[#8B2D6E] mb-4">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a leading event experience company in Africa, recognized for delivering
              innovative, high-impact events that inspire audiences and elevate brands.
            </p>
          </div>
          <div className="bg-[#FBFAF8] rounded-xl p-8 border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-[#8B2D6E] mb-4">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To design and execute exceptional events that align with client objectives, foster
              meaningful audience engagement, and deliver measurable results through creativity,
              strategy, and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
