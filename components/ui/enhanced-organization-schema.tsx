'use client';

import Script from 'next/script';

interface OrganizationSchemaProps {
  countyName?: string;
}

export default function EnhancedOrganizationSchema({ countyName }: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `Just Legal Solutions${countyName ? ` - ${countyName}` : ''}`,
    "url": "https://justlegalsolutions.org",
    "logo": "https://justlegalsolutions.org/logo.png",
    "image": "https://justlegalsolutions.org/logo.png",
    "telephone": "+15393676832",
    "email": "info@justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tulsa",
      "addressRegion": "Oklahoma",
      "postalCode": "74101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1540,
      "longitude": -95.9928
    },
    "areaServed": {
      "@type": "State",
      "name": "Oklahoma"
    },
    "serviceType": [
      "Process Serving",
      "Legal Document Delivery", 
      "Skip Tracing",
      "Court Filing",
      "Subpoena Service"
    ],
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent service! They served my documents quickly and professionally. Highly recommend for anyone needing process serving in Oklahoma."
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Fast, reliable, and professional. Used them for multiple legal documents and they always deliver on time."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Jennifer L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Outstanding process serving company. They handled a difficult serve with skill and persistence. Great communication throughout."
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Oklahoma Secretary of State"
        }
      }
    ],
    "award": [
      "Licensed Process Server",
      "Bonded & Insured",
      "BBB Accredited Business"
    ],
    "knowsAbout": [
      "Oklahoma Civil Procedure",
      "Legal Document Service",
      "Court Filing Requirements",
      "Skip Tracing Techniques",
      "Process Serving Laws"
    ]
  };

  return (
    <Script id={`organization-schema${countyName ? `-${countyName.toLowerCase().replace(/\s+/g, '-')}` : ''}`} type="application/ld+json">
      {JSON.stringify(organizationSchema)}
    </Script>
  );
}
