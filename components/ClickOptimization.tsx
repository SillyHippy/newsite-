import React from 'react';

interface ClickOptimizationProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function ClickOptimization({
  title = "🚀 Tulsa Process Server | Same-Day Service | Just Legal Solutions",
  description = "⚡ URGENT Process Serving in Tulsa OK | ✅ Same-Day Service | 💯 Professional & Reliable | 📞 Call Now for Instant Quote!",
  url = "https://justlegalsolutions.org",
  image = "https://justlegalsolutions.org/jls-logo.png"
}: ClickOptimizationProps) {
  const optimizedSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Just Legal Solutions - Tulsa Process Server",
    "description": "Oklahoma's fastest process serving company. Same-day service, professional staff, competitive rates.",
    "url": url,
    "image": image,
    "telephone": "(539) 367-6832",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tulsa",
      "addressRegion": "OK",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1540,
      "longitude": -95.9928
    },
    "areaServed": [
      "Tulsa, OK",
      "Broken Arrow, OK", 
      "Owasso, OK",
      "Bixby, OK",
      "Jenks, OK",
      "Sand Springs, OK"
    ],
    "serviceType": [
      "Process Serving",
      "Document Delivery", 
      "Legal Courier Services",
      "Subpoena Service",
      "Court Filing"
    ],
    "availableLanguage": ["English"],
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/justlegalsolutions"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Process Serving",
            "description": "Urgent document delivery within 24 hours"
          },
          "price": "75",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional document delivery within 3-5 business days"
          },
          "price": "45",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <>
      {/* Schema markup only - meta tags handled by Next.js metadata */}
      
      {/* Enhanced Schema for Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(optimizedSchema) }}
      />
      
      {/* Breadcrumb Schema for Better SERP Appearance */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://justlegalsolutions.org"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Process Server Tulsa",
                "item": "https://justlegalsolutions.org/process-server-tulsa"
              }
            ]
          })
        }}
      />
    </>
  );
}
