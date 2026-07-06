import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { sendWhatsAppNotification } from '@/lib/whatsapp';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, source } = body;

    if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

const crmPayload = {
      email,
      name,
      phone: phone || undefined,
      sms_opt_in: body.sms_opt_in ?? true,
      source: source || 'contact-form',
      tags: ['contact', 'quote-request'],
      assign_to: 'rose@sokoza.co.ke',
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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided'}</p>
      `,
    });

    if (phone) {
      await sendWhatsAppNotification({
        phone,
        message: `Hi ${name}, thanks for reaching out to Sokoza Events! We've received your message and will be in touch shortly.`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
