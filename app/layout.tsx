import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import SiteLayout from '@/components/layout/SiteLayout';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Sokoza Events — Leadership in Motion',
  description: 'Design and execution of exceptional events across Africa.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Sokoza Events — Leadership in Motion',
    description: 'Design and execution of exceptional events across Africa.',
    url: 'https://sokozaevents.co.ke',
    siteName: 'Sokoza Events',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sokoza Events — Leadership in Motion',
    description: 'Design and execution of exceptional events across Africa.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sokoza Events',
  description: 'Professional event management company delivering seamless and impactful event experiences across Africa.',
  url: 'https://sokozaevents.co.ke',
  email: 'rose@sokoza.co.ke',
  telephone: '+254723672244',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-white text-[#1E2024]" suppressHydrationWarning>
        <SiteLayout>{children}</SiteLayout>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
