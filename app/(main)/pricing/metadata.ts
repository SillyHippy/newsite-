import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Process Server Rates Tulsa County | Pricing Starting $60',
  description: 'Transparent process serving rates for Tulsa County, Broken Arrow, Sapulpa. Standard service $60, rush $100, same-day $150. Statewide Oklahoma coverage with competitive pricing and professional service.',
  keywords: ['Tulsa process server rates', 'process server pricing Tulsa County', 'Broken Arrow process server cost', 'Sapulpa document delivery rates', 'Wagoner County process serving', 'Creek County legal services', 'Oklahoma process server pricing', 'legal document delivery rates'],
  openGraph: {
    title: 'Process Server Rates Tulsa County | Starting $60 | Just Legal Solutions',
    description: 'Professional process serving rates for Tulsa County, Broken Arrow, Sapulpa. Standard $60, Rush $100, Same-day $150. Statewide Oklahoma coverage.',
    url: 'https://justlegalsolutions.org/pricing',
    images: [
      {
        url: '/images/jls-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Just Legal Solutions Process Server Pricing for Tulsa County'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process Server Rates Tulsa County | Starting $60',
    description: 'Professional process serving rates in Tulsa County, Broken Arrow, Sapulpa. Standard $60, Rush $100, Same-day $150.',
    images: ['/images/jls-logo.webp']
  },
  alternates: {
    canonical: 'https://justlegalsolutions.org/pricing/'
  }
};
