import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'workplace.truehost.cloud';
const SMTP_PORT = Number(process.env.SMTP_PORT || '465');
const SMTP_SECURE = process.env.SMTP_SECURE !== 'false';
const SMTP_USER = process.env.SMTP_USER || 'rose@sokoza.co.ke';
const SMTP_PASS = process.env.SMTP_PASS || '';
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER;

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  if (!SMTP_PASS) {
    console.warn('SMTP_PASS not configured. Email not sent.');
    return { skipped: true };
  }

  try {
    const mailer = getTransporter();
    const info = await mailer.sendMail({
      from: EMAIL_FROM,
      to,
      subject,
      html,
    });
    console.log('Email sent:', info.messageId, 'status:', info.response);
    return { data: info };
  } catch (error) {
    console.error('Email send failed:', error);
    return { error };
  }
}
