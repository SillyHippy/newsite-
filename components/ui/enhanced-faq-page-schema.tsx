'use client';

import Script from 'next/script';

interface FAQ {
  question: string;
  answer: string;
}

interface EnhancedFAQPageSchemaProps {
  faqs: FAQ[];
  pageTitle: string;
  pageUrl: string;
}

export default function EnhancedFAQPageSchema({ faqs, pageTitle, pageUrl }: EnhancedFAQPageSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle,
    "url": pageUrl,
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Script id={`faq-schema-${pageUrl.replace(/[^a-zA-Z0-9]/g, '-')}`} type="application/ld+json">
      {JSON.stringify(faqSchema)}
    </Script>
  );
}
