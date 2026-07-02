export async function sendWhatsAppNotification({ phone, message }: { phone: string; message: string }) {
  if (!process.env.WHATSAPP_API_KEY || !process.env.WHATSAPP_PHONE_NUMBER_ID) {
    console.warn('WhatsApp API not configured. Notification not sent.');
    return { skipped: true };
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v17.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phone,
        type: 'text',
        text: { body: message },
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('WhatsApp API error:', data);
      return { error: data };
    }
    return { data };
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
    return { error };
  }
}
