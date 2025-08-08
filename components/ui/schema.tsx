import { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Just Legal Solutions",
  "legalName": "Just Legal Solutions",
  "alternateName": "JLS Process Server Tulsa",
  "url": "https://justlegalsolutions.org",
  "logo": "https://justlegalsolutions.org/images/jls-logo.webp",
  "image": "https://justlegalsolutions.org/images/jls-logo.webp",
  "description": "Professional process server services in Tulsa County. Same-day, secure delivery of legal documents, court transfers, and skip tracing services throughout Oklahoma.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th Pl",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.9473",
    "longitude": "-96.0006"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Oklahoma",
      "description": "Statewide process serving available with travel surcharge outside primary service area"
    },
    {
      "@type": "City",
      "name": "Tulsa",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Primary service area - standard rates, same-day and rush delivery available"
    },
    {
      "@type": "City", 
      "name": "Glenpool",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Headquarters location - immediate service availability at standard rates"
    },
    {
      "@type": "City",
      "name": "Broken Arrow",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Primary service area in Wagoner County - standard rates apply"
    },
    {
      "@type": "City",
      "name": "Sapulpa",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Primary service area in Creek County - standard rates apply"
    },
    {
      "@type": "City",
      "name": "Bixby",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Tulsa metro area - standard rates apply"
    },
    {
      "@type": "City",
      "name": "Oklahoma City",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Statewide service available with travel surcharge - contact for quote"
    },
    {
      "@type": "City",
      "name": "Norman",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "description": "Statewide service available with travel surcharge"
    },
    {
      "@type": "City",
      "name": "Lawton",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Edmond",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Stillwater",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    {
      "@type": "City",
      "name": "Muskogee",
      "containedInPlace": {
        "@type": "State",
        "name": "Oklahoma"
      }
    }
  ],
  "telephone": "+15393676832",
  "email": "info@justlegalsolutions.org",
  "founder": {
    "@type": "Person",
    "name": "Joseph Iannazzi",
    "jobTitle": "Process Server"
  },
  "sameAs": [
    "https://justlegalsolutions.org",
    "https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/",
    "https://g.co/kgs/vMgnxex",
    "https://www.yelp.com/biz/just-legal-solutions-glenpool",
    "https://www.linkedin.com/company/justlegalsolutionsok/",
    "https://local.yahoo.com/info-238748413-just-legal-solutions-glenpool",
    "https://www.manta.com/c/m1x7pgf/just-legal-solutions"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Online Payment"],
  "currenciesAccepted": "USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Support Services",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Process Serving",
        "description": "Professional process serving with standard, rush, and same-day options",
        "provider": {
          "@type": "LegalService",
          "name": "Just Legal Solutions"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma",
          "description": "Serving all of Oklahoma with priority service in the Tulsa Metropolitan Area"
        },
        "offers": {
          "@type": "Offer",
          "price": "60.00",
          "priceCurrency": "USD",
          "description": "Standard process serving - see pricing at justlegalsolutions.org/pricing in Tulsa County"
        }
      },
      {
        "@type": "Service",
        "name": "Rush Process Serving",
        "description": "Expedited process serving for urgent legal documents in Tulsa County",
        "provider": {
          "@type": "LegalService",
          "name": "Just Legal Solutions"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        },
        "offers": {
          "@type": "Offer",
          "price": "100.00",
          "priceCurrency": "USD",
          "description": "Rush process serving $100 in Tulsa County area"
        }
      },
      {
        "@type": "Service",
        "name": "Same-Day Process Serving",
        "description": "Same-day legal document delivery in Tulsa County, Broken Arrow, and Sapulpa",
        "provider": {
          "@type": "LegalService",
          "name": "Just Legal Solutions"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        },
        "offers": {
          "@type": "Offer",
          "price": "150.00",
          "priceCurrency": "USD",
          "description": "Same-day process serving - see pricing at justlegalsolutions.org/pricing in Tulsa County area"
        }
      },
      {
        "@type": "Service",
        "name": "Document Delivery",
        "description": "Secure and timely document delivery services",
        "provider": {
          "@type": "LegalService",
          "name": "Just Legal Solutions"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma",
          "description": "Statewide service with expedited options in the Tulsa Metropolitan Area"
        }
      },
      {
        "@type": "Service",
        "name": "Court Transfers",
        "description": "Reliable court document transfer services",
        "provider": {
          "@type": "LegalService",
          "name": "Just Legal Solutions"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma",
          "description": "Available at all Oklahoma courts with specialized service in Tulsa County courts"
        }
      },
      {
        "@type": "Service",
        "name": "Skip Tracing",
        "description": "Professional skip tracing services to locate individuals",
        "provider": {
          "@type": "LegalService",
          "name": "Just Legal Solutions"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma",
          "description": "Comprehensive skip tracing throughout Oklahoma"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "45",
    "bestRating": "5",
    "worstRating": "1"
  }
};
