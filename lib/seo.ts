import { Metadata } from 'next';
import { COLORS } from '@/data/content';

const SITE_URL = 'https://www.sokoza.co.ke';

export const defaultSEO: Metadata = {
  title: 'Sokoza Events — Leadership in Motion',
  description: 'Design and execution of exceptional events across Africa. Corporate summits, events, and conferences.',
  keywords: ['events', 'event management', 'corporate events', 'conferences', 'Africa', 'Kenya', 'Nairobi'],
  authors: [{ name: 'Sokoza Events' }],
  creator: 'Sokoza Events',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: SITE_URL,
    title: 'Sokoza Events — Leadership in Motion',
    description: 'Design and execution of exceptional events across Africa.',
    siteName: 'Sokoza Events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sokoza Events — Leadership in Motion',
    description: 'Design and execution of exceptional events across Africa.',
  },
  icons: {
    apple: '/apple-icon.png',
  },
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sokoza Events',
  description: 'Professional event management company delivering seamless and impactful event experiences across Africa.',
  url: SITE_URL,
  email: 'rose@sokoza.co.ke',
  telephone: '+254723672244',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.facebook.com',
    'https://www.instagram.com',
    'https://www.linkedin.com',
    'https://twitter.com',
  ],
};
