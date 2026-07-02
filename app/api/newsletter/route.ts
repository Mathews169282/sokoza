import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const crmPayload = {
      email,
      source: 'footer-signup',
      tags: ['newsletter', 'footer-signup'],
    };

    const crmRes = await fetch('https://famous.ai/api/crm/6a43d3d8d03ffd9417a014d4/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crmPayload),
    });

    if (!crmRes.ok) {
      const text = await crmRes.text();
      console.error('CRM error:', crmRes.status, text);
      return NextResponse.json({ error: 'CRM sync failed' }, { status: 502 });
    }

    await sendEmail({
      to: 'rose@sokoza.co.ke',
      subject: 'New Newsletter Subscription',
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
