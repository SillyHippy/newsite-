import Script from 'next/script';

interface BingYahooOptimizationProps {
  businessName?: string;
  serviceTypes?: string[];
  expertise?: string[];
  serviceRadius?: number;
}

export default function BingYahooOptimization({ 
  businessName = "Just Legal Solutions",
  serviceTypes = ["Process Serving", "Legal Document Delivery", "Court Filing", "Skip Tracing"],
  expertise = ["Emergency Service", "Professional Delivery", "Statewide Coverage", "24/7 Availability"],
  serviceRadius = 100
}: BingYahooOptimizationProps) {
  const bingOptimizedSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness", "ProfessionalService"],
    "name": businessName,
    "alternateName": ["JLS Process Server", "Just Legal Solutions Oklahoma"],
    "description": "Oklahoma's premier process serving company providing professional legal document delivery with 24/7 emergency service throughout the state",
    "url": "https://justlegalsolutions.org",
    "sameAs": [
      "https://justlegalsolutions.org/services",
      "https://justlegalsolutions.org/process-server-tulsa",
      "https://justlegalsolutions.org/tulsa-process-server"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15393676832",
      "contactType": "customer service",
      "areaServed": "Oklahoma",
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      },
      "geoRadius": `${serviceRadius} miles`
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Oklahoma Process Server Certification"
      }
    ],
    "knowsAbout": expertise,
    "areaServed": [
      {
        "@type": "State",
        "name": "Oklahoma",
        "containsPlace": [
          {
            "@type": "City",
            "name": "Tulsa"
          },
          {
            "@type": "City", 
            "name": "Oklahoma City"
          },
          {
            "@type": "City",
            "name": "Broken Arrow"
          },
          {
            "@type": "City",
            "name": "Edmond"
          },
          {
            "@type": "City",
            "name": "Sapulpa"
          }
        ]
      }
    ],
    "serviceType": serviceTypes,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://justlegalsolutions.org"
    },
    "potentialAction": [
      {
        "@type": "ScheduleAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://justlegalsolutions.org/card/calendar",
          "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
        },
        "object": {
          "@type": "Service",
          "name": "Process Serving Appointment"
        }
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": businessName,
      "slogan": "Professional Process Serving - Available 24/7"
    },
    "award": "Top-Rated Oklahoma Process Server",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "3-10"
    }
  };

  return (
    <Script
      id="bing-yahoo-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(bingOptimizedSchema) }}
    />
  );
}
