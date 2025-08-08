import Script from 'next/script';

interface EnhancedServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceArea: string;
  priceRange?: string;
  serviceType?: string;
  additionalServices?: string[];
  businessHours?: string;
  contactInfo?: {
    phone: string;
    email: string;
  };
}

export default function EnhancedServiceSchema({ 
  serviceName,
  serviceDescription,
  serviceArea,
  priceRange = "Contact for Quote",
  serviceType = "Process Serving",
  additionalServices = [],
  businessHours = "Mo-Su 00:00-23:59",
  contactInfo = { phone: "(539) 367-6832", email: "info@justlegalsolutions.org" }
}: EnhancedServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": serviceType,
    "category": "Legal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tulsa",
        "addressRegion": "Oklahoma",
        "addressCountry": "US"
      },
      "telephone": contactInfo.phone,
      "email": contactInfo.email,
      "url": "https://justlegalsolutions.org",
      "openingHours": businessHours,
      "priceRange": priceRange,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": serviceArea,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://justlegalsolutions.org/card/calendar",
      "serviceName": "Online Scheduling",
      "availableLanguage": "English"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional legal document service with competitive rates based on urgency and location",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "seller": {
        "@type": "LocalBusiness",
        "name": "Just Legal Solutions"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceType} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Service",
            "description": "Professional service within 3-5 business days"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Contact for competitive rates"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Service",
            "description": "Expedited service within 1-2 business days"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD", 
            "description": "Premium rates for expedited service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Same-Day Service",
            "description": "Emergency service within same business day"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Emergency rates for immediate service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency 2-Hour Service",
            "description": "Critical delivery when time-sensitive situations require immediate attention"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Expedited rates for 2-hour service"
          }
        },
        ...additionalServices.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service,
            "description": `Professional ${service.toLowerCase()} services`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Contact for service-specific rates"
          }
        }))
      ]
    },
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Legal Document Delivery",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Just Legal Solutions"
        }
      },
      {
        "@type": "Service", 
        "name": "Court Filing Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Just Legal Solutions"
        }
      }
    ]
  };

  return (
    <Script
      id="enhanced-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
