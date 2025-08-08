
import Script from 'next/script';

interface LocationFAQProps {
  city: string;
  county: string;
  isNewLocation?: boolean;
}

export default function EnhancedLocationFAQ({ city, county, isNewLocation = false }: LocationFAQProps) {
  // Only generate FAQ for cities that don't have extensive existing coverage
  const newLocationQuestions = [
    {
      question: `How quickly can you serve legal documents in ${city}, Oklahoma?`,
      answer: `We provide same-day and emergency process serving in ${city}, ${county}. Standard service takes 3-5 business days, rush service 24-48 hours, and emergency service within 2 hours when needed.`
    },
    {
      question: `Do you offer weekend process serving in ${city}?`,
      answer: `Yes, we provide weekend and after-hours process serving in ${city} for urgent legal matters. Our 24/7 availability ensures critical documents are delivered when needed.`
    },
    {
      question: `What makes Just Legal Solutions different from other ${city} process servers?`,
      answer: `We're licensed statewide in Oklahoma, offering 24/7 service with GPS tracking, professional affidavits, and multi-service capabilities including skip tracing and courier services throughout ${city} and ${county}.`
    },
    {
      question: `How much does process serving cost in ${city}, Oklahoma?`,
      answer: `Our competitive process serving rates start at $60 for standard service in ${city}. Visit our pricing page for detailed rates on rush service, same-day delivery, and emergency options.`
    },
    {
      question: `Do you handle court filing services in ${city}?`,
      answer: `Yes, we provide complete court filing services in ${city} including document preparation, filing assistance, and court transfers throughout ${county} courts.`
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": newLocationQuestions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
        "author": {
          "@type": "Organization",
          "name": "Just Legal Solutions",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressRegion": "Oklahoma",
            "addressCountry": "US"
          }
        }
      }
    }))
  };

  return (
    <>
      <Script
        id={`faq-schema-${city.toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Frequently Asked Questions - {city} Process Server
        </h2>
        <div className="space-y-4">
          {newLocationQuestions.map((item, index) => (
            <div key={index} className="border-b border-blue-200 pb-4 last:border-b-0">
              <h3 className="font-semibold text-blue-700 mb-2 voice-optimized">
                {item.question}
              </h3>
              <p className="text-blue-600 voice-answer primary-answer">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="/pricing" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block font-semibold transition-colors"
          >
            View Complete Pricing Guide
          </a>
        </div>
      </div>
    </>
  );
}
