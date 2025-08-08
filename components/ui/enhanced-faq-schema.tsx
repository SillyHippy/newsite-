'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLd from '../JsonLd'; 
import defaultFaqs from '@/data/default-faqs.json';
// Import useState and useEffect from React to control client-side rendering
import { useState, useEffect } from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface EnhancedFaqSchemaProps {
  faqs?: Faq[];
  pageTitle?: string; 
}

export default function EnhancedFaqSchema({ faqs }: EnhancedFaqSchemaProps) {
  // --- This is the critical fix for the hydration error ---
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // ---------------------------------------------------------

  const finalFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  if (!finalFaqs || finalFaqs.length === 0) {
    return null;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: finalFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // --- This ensures the accordion only renders on the client ---
  if (!isMounted) {
    return (
      <div>
        <JsonLd data={faqSchema} />
        {/* Render a static, non-interactive version on the server */}
        {finalFaqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <p className="font-medium">{faq.question}</p>
          </div>
        ))}
      </div>
    );
  }
  // -----------------------------------------------------------

  return (
    <div>
      <JsonLd data={faqSchema} />
      <Accordion type="single" collapsible className="w-full">
        {finalFaqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}