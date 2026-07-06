import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, CalendarClock } from 'lucide-react';

const BOOKING_URL = 'https://famous.ai/api/crm/6a43d3d8d03ffd9417a014d4/calendar/public?calendarId=b0251f28-3e7a-4912-9d23-61a4eda78491&view=booking';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [err, setErr] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setErr('Please enter your name and a valid email.');
      return;
    }
    setStatus('loading');
    try {
      await fetch('https://famous.ai/api/crm/6a43d3d8d03ffd9417a014d4/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          phone: form.phone || undefined,
          sms_opt_in: smsOptIn,
          source: 'contact-form',
          tags: ['contact', 'quote-request'],
          assign_to: 'rose@sokoza.co.ke',
        }),
      });
      setStatus('done');
    } catch {
      setStatus('idle');
      setErr('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-[#7A8B2E] font-semibold tracking-[0.2em] text-xs uppercase mb-4">Get In Touch</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1E2024] leading-tight mb-6">
            Let's Plan Your Next Unforgettable Event
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Tell us about your vision and our team will get back to you with a tailored proposal.
            Whether it's a corporate summit, a wedding, or a brand activation — we're ready.
          </p>

          <div className="space-y-5 mb-8">
            {[
              { icon: Phone, label: '+254 723 67 22 44' },
              { icon: Mail, label: 'rose@sokoza.co.ke' },
              { icon: MapPin, label: 'Nairobi, Kenya — Operating Across Africa' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#8B2D6E]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#8B2D6E]" />
                </div>
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#8B2D6E] text-[#8B2D6E] hover:bg-[#8B2D6E] hover:text-white font-semibold px-6 py-3 transition-colors"
          >
            <CalendarClock className="w-5 h-5" /> Book a Consultation
          </a>
        </div>

        <div className="bg-[#FBFAF8] rounded-2xl p-8 border border-gray-100">
          {status === 'done' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle className="w-16 h-16 text-[#7A8B2E] mb-4" />
              <h3 className="font-serif text-2xl font-bold text-[#1E2024] mb-2">Thank You!</h3>
              <p className="text-gray-600">We've received your message and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone number (optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E]"
                  placeholder="+254 ..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Tell us about your event</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E] resize-none"
                  placeholder="Event type, date, location, guest count..."
                />
              </div>
              <label className="flex items-start gap-2.5 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={smsOptIn}
                  onChange={(e) => setSmsOptIn(e.target.checked)}
                  className="mt-0.5 accent-[#8B2D6E]"
                />
                <span>Text me updates. Msg &amp; data rates may apply. Reply STOP to unsubscribe.</span>
              </label>
              {err && <p className="text-sm text-red-600">{err}</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-lg bg-[#8B2D6E] hover:bg-[#5E1E49] text-white font-semibold py-3.5 transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
