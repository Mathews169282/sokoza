import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { sendWhatsAppNotification } from '@/lib/whatsapp';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType } = body;

    if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const crmPayload = {
      email,
      name,
      phone: phone || undefined,
      sms_opt_in: body.sms_opt_in ?? true,
      source: 'quote',
      tags: ['quote-request', (eventType || 'other').toLowerCase()],
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
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Event Type:</strong> ${eventType || 'Not specified'}</p>
      `,
    });

    if (phone) {
      await sendWhatsAppNotification({
        phone,
        message: `Hi ${name}, thanks for requesting a quote from Sokoza Events! We'll get back to you within 24 hours with a tailored proposal.`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
