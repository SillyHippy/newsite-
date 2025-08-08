import React from 'react';

export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Just Legal Solutions",
    "description": "Professional process serving and legal document delivery throughout Tulsa County, Oklahoma. Over 50 years' combined team and partner experience. Same-day service available.",
    "slogan": "Over 50 Years' Combined Experience Serving Oklahoma's Legal Community",
    "url": "https://justlegalsolutions.org",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    "founder": {
      "@type": "Person",
      "name": "Joseph Iannazzi",
      "jobTitle": "Founder & CEO",
      "description": "Leading a team and partner network with over 50 years' combined experience in Oklahoma legal document delivery and process serving."
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Joseph Iannazzi",
        "jobTitle": "Lead Process Server and Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "564 E 138th St",
      "addressLocality": "Glenpool",
      "addressRegion": "OK",
      "postalCode": "74033",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.9553",
      "longitude": "-95.9442"
    },
    "areaServed": [
      "Tulsa County",
      "Rogers County", 
      "Wagoner County",
      "Creek County",
      "Mayes County"
    ],
    "serviceType": [
      "Process Serving",
      "Legal Document Delivery",
      "Court Filing Services",
      "Courier Services",
      "Skip Tracing"
    ],
    "priceRange": "$40-$150",
    "openingHours": ["Mo-Fr 08:00-17:00", "Sa 09:00-15:00"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "description": "Emergency Service Available 24/7"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/justlegalsolutions",
      "https://www.linkedin.com/company/just-legal-solutions",
      "https://www.manta.com/c/m1x7pgf/just-legal-solutions",
      "https://www.showmelocal.com/38832951-just-legal-solutions-glenpool",
      "https://www.crunchbase.com/organization/just-legal-solutions",
      "https://www.alignable.com/glenpool-ok/just-legal-solutions",
      "https://www.elocal.com/profile/just-legal-solutions-21951593",
      "https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805",
      "https://www.dnb.com/business-directory/company-profiles.just_legal_solutions_llc.html",
      "https://clutch.co/profile/just-legal-solutions"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Excellent process serving. Professional, fast, and reliable. Highly recommend for any legal document delivery needs."
      }
    ]
  };

  return (
    <>
      <script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
