import Script from 'next/script';

interface GoogleSpecificOptimizationProps {
  businessName?: string;
  primaryLocation?: string;
  serviceArea?: string[];
  businessHours?: string;
  emergencyService?: boolean;
}

export default function GoogleSpecificOptimization({ 
  businessName = "Just Legal Solutions",
  primaryLocation = "Tulsa, Oklahoma",
  serviceArea = ["Tulsa County", "Broken Arrow", "Sapulpa", "Owasso", "Bixby"],
  businessHours = "Mo-Su 00:00-23:59",
  emergencyService = true
}: GoogleSpecificOptimizationProps) {
  const googleOptimizedSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "alternateName": "JLS Process Server",
    "description": "Professional process serving and legal document delivery throughout Oklahoma with 24/7 emergency service availability",
    "url": "https://justlegalsolutions.org",
    "telephone": "+15393676832",
    "email": "info@justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tulsa",
      "addressRegion": "Oklahoma", 
      "addressCountry": "US",
      "areaServed": serviceArea.map(area => ({
        "@type": "City",
        "name": area,
        "containedInPlace": {
          "@type": "State",
          "name": "Oklahoma"
        }
      }))
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "specialOpeningHoursSpecification": emergencyService ? [
      {
        "@type": "OpeningHoursSpecification",
        "description": "Emergency Service Available",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ] : [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional legal document delivery within 3-5 business days"
          },
          "availability": "https://schema.org/InStock",
          "validFrom": new Date().toISOString().split('T')[0]
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Emergency 2-Hour Service",
            "description": "Critical legal document delivery when time-sensitive situations require immediate attention"
          },
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "description": "Professional process serving throughout Oklahoma",
        "availability": "https://schema.org/InStock",
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "slogan": "Professional Process Serving Throughout Oklahoma - Available 24/7",
    "knowsAbout": [
      "Process Serving",
      "Legal Document Delivery",
      "Court Filing",
      "Skip Tracing",
      "Emergency Legal Services",
      "Oklahoma Court Procedures"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Oklahoma Process Server Association"
    },
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://justlegalsolutions.org/card/calendar",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Schedule Process Serving"
        }
      },
      {
        "@type": "ContactAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+15393676832",
          "inLanguage": "en-US"
        }
      }
    ]
  };

  return (
    <Script
      id="google-specific-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(googleOptimizedSchema) }}
    />
  );
}
