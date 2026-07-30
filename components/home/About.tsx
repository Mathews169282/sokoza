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
          <p className="text-gray-600 leading-relaxed mb-5 text-center">
            We are a Nairobi-based event strategy and delivery partner specializing in
            conferences, exhibitions, and high-impact brand experiences across Africa.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5 text-center">
            We work with organizations delivering multi-stakeholder events; where precision,
            structure, and execution matter.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-center">
            Our role goes beyond planning. We bring clarity to complexity, ensuring every
            event is intentional, coordinated, and built to perform.
          </p>
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
    <div className="bg-[#FBFAF8]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">
            Leadership
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
            Our Team &amp; Network
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="/rose-wanjohi.jpeg"
              alt="Rose N. Wanjohi, Founder and Event Lead of Sokoza Events"
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1E2024] mb-1">
              Rose N. Wanjohi
            </h3>
            <p className="text-[#8B2D6E] font-semibold uppercase tracking-wide text-sm mb-6">
              Founder / Event Lead
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sokoza Events is led by Rose Wanjohi, a commercial and business development leader with over 14 years’ experience across sales, partnerships, and large-scale event execution.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Her strength lies in structuring complex projects, managing diverse stakeholders, and ensuring events are both operationally sound and commercially effective.
            </p>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 leading-relaxed mb-6">
                Sokoza Events operates through a strong network of experienced professionals, trusted partners, and specialized vendors across the events ecosystem.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Depending on the scope and scale of each project, we assemble the right team; bringing together expertise in:
              </p>
              <ul className="text-gray-600 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                <li>Event management and coordination</li>
                <li>Exhibition design and build</li>
                <li>Production and technical delivery</li>
                <li>Guest experience and registration</li>
                <li>Branding, communication, and logistics</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We operate as a coordinated team, aligned to deliver seamless, high-quality events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Our Ecosystem</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight">
            OUR ECOSYSTEM
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed mb-6">
            Sokoza Events operates within a dynamic corporate events ecosystem; working with
            organizations, brands, and partners who deliver conferences, exhibitions, launches,
            and business experiences across Africa.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">We collaborate with:</p>
          <ul className="text-gray-600 text-left leading-relaxed mb-6 space-y-2 list-disc list-inside">
            <li>Corporate organizations and brand teams</li>
            <li>Conference and exhibition organizers</li>
            <li>Marketing and communications agencies</li>
            <li>Production and technical partners</li>
            <li>Regional and international event companies</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            This allows us to plug in at different levels; whether as a lead delivery partner,
            a local execution team, or a strategic support partner.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
