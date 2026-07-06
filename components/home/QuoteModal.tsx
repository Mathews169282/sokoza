'use client';

import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const QuoteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: 'Corporate' });
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [err, setErr] = useState('');

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setErr('Please enter your name and a valid email.');
      return;
    }
    setStatus('loading');
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
           email: form.email,
           name: form.name,
           phone: form.phone || undefined,
           sms_opt_in: smsOptIn,
           source: 'quote',
           tags: ['quote-request', form.eventType.toLowerCase()],
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
    <div className="fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md p-7 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"><X className="w-6 h-6" /></button>
        {status === 'done' ? (
          <div className="text-center py-8">
            <CheckCircle className="w-14 h-14 text-[#7A8B2E] mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-[#1E2024] mb-2">Request Received!</h3>
            <p className="text-gray-600">Our team will reach out with a tailored quote soon.</p>
            <button onClick={onClose} className="mt-6 rounded-lg bg-[#8B2D6E] text-white font-semibold px-6 py-2.5">Close</button>
          </div>
        ) : (
          <>
            <h3 className="font-serif text-2xl font-bold text-[#1E2024] mb-1">Get a Quote</h3>
            <p className="text-sm text-gray-500 mb-6">Tell us a little about your event.</p>
            <form onSubmit={submit} className="space-y-4">
              <input type="text" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E]" />
              <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E]" />
              <input type="tel" placeholder="Phone number (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E]" />
              <select value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8B2D6E] bg-white">
                {['Corporate', 'Wedding', 'Brand Activation', 'Conference', 'Other'].map((o) => <option key={o}>{o}</option>)}
              </select>
              <label className="flex items-start gap-2.5 text-sm text-gray-600">
                <input type="checkbox" checked={smsOptIn} onChange={(e) => setSmsOptIn(e.target.checked)} className="mt-0.5 accent-[#8B2D6E]" />
                <span>Text me updates. Msg &amp; data rates may apply. Reply STOP to unsubscribe.</span>
              </label>
              {err && <p className="text-sm text-red-600">{err}</p>}
              <button type="submit" disabled={status === 'loading'} className="w-full rounded-lg bg-[#8B2D6E] hover:bg-[#5E1E49] text-white font-semibold py-3.5 transition-colors disabled:opacity-60">
                {status === 'loading' ? 'Submitting...' : 'Request Quote'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteModal;
