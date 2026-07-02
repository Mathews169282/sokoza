import { Metadata } from 'next';
import { SERVICES, BLOG } from '@/data/content';
import { defaultSEO, jsonLd } from '@/lib/seo';

const SITE_URL = 'https://sokozaevents.co.ke';

export const pageMetadata: Record<string, Metadata> = {
  home: {
    ...defaultSEO,
    title: 'Sokoza Events — Leadership in Motion',
    description: 'Design and execution of exceptional events across Africa.',
    openGraph: {
      ...defaultSEO.openGraph,
      url: SITE_URL,
    },
  },
  about: {
    ...defaultSEO,
    title: 'About Sokoza Events | Leadership in Motion',
    description: 'Founded in 2020, Sokoza Events is a professional event management company dedicated to delivering seamless and impactful event experiences across Africa.',
    openGraph: {
      ...defaultSEO.openGraph,
      title: 'About Sokoza Events | Leadership in Motion',
      description: 'Founded in 2020, Sokoza Events is a professional event management company dedicated to delivering seamless and impactful event experiences across Africa.',
      url: `${SITE_URL}/about`,
    },
  },
  services: {
    ...defaultSEO,
    title: 'Our Services | End-to-End Event Solutions',
    description: 'A complete suite of services to plan, design, and deliver events that move audiences. From concept to execution across Africa.',
    openGraph: {
      ...defaultSEO.openGraph,
      title: 'Our Services | End-to-End Event Solutions',
      description: 'A complete suite of services to plan, design, and deliver events that move audiences.',
      url: `${SITE_URL}/services`,
    },
  },
  portfolio: {
    ...defaultSEO,
    title: 'Our Work | Featured Events & Projects',
    description: 'Explore our portfolio of corporate summits, weddings, brand activations, and conferences across Africa.',
    openGraph: {
      ...defaultSEO.openGraph,
      title: 'Our Work | Featured Events & Projects',
      description: 'Explore our portfolio of corporate summits, weddings, brand activations, and conferences.',
      url: `${SITE_URL}/portfolio`,
    },
  },
  blog: {
    ...defaultSEO,
    title: 'Blog | Insights & Event Tips from Sokoza',
    description: 'Latest insights, tips, and trends in event management from the Sokoza team.',
    openGraph: {
      ...defaultSEO.openGraph,
      title: 'Blog | Insights & Event Tips from Sokoza',
      description: 'Latest insights, tips, and trends in event management.',
      url: `${SITE_URL}/blog`,
    },
  },
  contact: {
    ...defaultSEO,
    title: 'Contact Us | Let\'s Plan Your Next Event',
    description: 'Get in touch with Sokoza Events to plan your next unforgettable event. Corporate summits, weddings, brand activations across Africa.',
    openGraph: {
      ...defaultSEO.openGraph,
      title: 'Contact Us | Let\'s Plan Your Next Event',
      description: 'Get in touch with Sokoza Events to plan your next unforgettable event.',
      url: `${SITE_URL}/contact`,
    },
  },
};

export function getServiceMetadata(service: typeof SERVICES[0]): Metadata {
  return {
    ...defaultSEO,
    title: `${service.title} | Sokoza Events`,
    description: service.desc,
    openGraph: {
      ...defaultSEO.openGraph,
      title: `${service.title} | Sokoza Events`,
      description: service.desc,
      url: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export function getBlogPostMetadata(post: typeof BLOG[0]): Metadata {
  return {
    ...defaultSEO,
    title: `${post.title} | Sokoza Journal`,
    description: post.excerpt,
    openGraph: {
      ...defaultSEO.openGraph,
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [post.img],
    },
    twitter: {
      ...defaultSEO.twitter,
      images: [post.img],
    },
  };
}

export { jsonLd };
