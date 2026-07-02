let resendPromise: Promise<any> | null = null;

function getResendClient() {
  if (!resendPromise) {
    resendPromise = import('resend').then((mod) => new mod.Resend(process.env.RESEND_API_KEY));
  }
  return resendPromise;
}

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured. Email not sent.');
    return { skipped: true };
  }

  try {
    const resend = await getResendClient();
    const { data, error } = await resend.emails.send({
      from: 'Sokoza Events <onboarding@resend.dev>',
      to,
      subject,
      html,
    });
    if (error) {
      console.error('Resend error:', error);
      return { error };
    }
    return { data };
  } catch (error) {
    console.error('Email send failed:', error);
    return { error };
  }
}
