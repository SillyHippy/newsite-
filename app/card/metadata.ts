import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Business Card',
  description: 'Connect with Joseph Iannazzi at Just Legal Solutions. Download contact details, schedule reminders, and get in touch easily. Process serving and legal support services in Oklahoma.',
  keywords: ['Joseph Iannazzi contact', 'digital business card', 'Just Legal Solutions contact', 'process server contact Oklahoma'],
  alternates: {
    canonical: 'https://justlegalsolutions.org/card/'
  },
  openGraph: {
    title: 'Digital Business Card | Just Legal Solutions',
    description: 'Connect with Joseph Iannazzi at Just Legal Solutions. Download contact details, schedule reminders, and get in touch easily.',
    url: 'https://justlegalsolutions.org/card',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Joseph Iannazzi Digital Business Card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Business Card | Just Legal Solutions',
    description: 'Connect with Joseph Iannazzi at Just Legal Solutions.',
    images: ['/images/jls-logo.webp']
  }
};
