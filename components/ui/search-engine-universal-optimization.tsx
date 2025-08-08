import Script from 'next/script';

interface SearchEngineUniversalOptimizationProps {
  businessName?: string;
  primaryService?: string;
  location?: string;
  emergencyAvailable?: boolean;
}

export default function SearchEngineUniversalOptimization({ 
  businessName = "Just Legal Solutions",
  primaryService = "Process Serving",
  location = "Oklahoma",
  emergencyAvailable = true
}: SearchEngineUniversalOptimizationProps) {
  const universalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://justlegalsolutions.org/#organization",
        "name": businessName,
        "url": "https://justlegalsolutions.org",
        "sameAs": [
          "https://justlegalsolutions.org/services",
          "https://justlegalsolutions.org/tulsa-process-server"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://justlegalsolutions.org/images/logo.png",
          "width": 200,
          "height": 60
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://justlegalsolutions.org/#website", 
        "url": "https://justlegalsolutions.org",
        "name": `${businessName} - Professional ${primaryService} in ${location}`,
        "description": `Professional ${primaryService.toLowerCase()} and legal document delivery throughout ${location}${emergencyAvailable ? ' with 24/7 emergency service' : ''}`,
        "publisher": {
          "@id": "https://justlegalsolutions.org/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://justlegalsolutions.org/services?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://justlegalsolutions.org/#localbusiness",
        "name": businessName,
        "image": [
          "https://justlegalsolutions.org/images/process-server-tulsa.jpg",
          "https://justlegalsolutions.org/images/legal-documents.jpg"
        ],
        "telephone": "+15393676832",
        "email": "info@justlegalsolutions.org",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tulsa",
          "addressRegion": location,
          "addressCountry": "US"
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
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": ["Cash", "Credit Card", "Check"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        }
      },
      {
        "@type": "Service",
        "@id": "https://justlegalsolutions.org/#service",
        "name": primaryService,
        "description": `Professional ${primaryService.toLowerCase()} throughout ${location} with guaranteed delivery and professional handling of all legal documents`,
        "provider": {
          "@id": "https://justlegalsolutions.org/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": location
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${primaryService} Options`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": `Standard ${primaryService}`,
                "description": "Professional legal document delivery within 3-5 business days"
              }
            },
            ...(emergencyAvailable ? [{
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": `Emergency ${primaryService}`,
                "description": "Urgent legal document delivery when time-sensitive situations require immediate attention"
              }
            }] : [])
          ]
        }
      },
      {
        "@type": "ContactPoint",
        "@id": "https://justlegalsolutions.org/#contact",
        "telephone": "+15393676832",
        "contactType": "customer service",
        "areaServed": location,
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification", 
          "description": emergencyAvailable ? "24/7 Emergency Service Available" : "Business Hours",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ]
  };

  return (
    <Script
      id="search-engine-universal-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(universalSchema) }}
    />
  );
}
