import Script from 'next/script';

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceArea: string;
  priceRange?: string;
  serviceType?: string;
}

export default function ServiceSchema({ 
  serviceName,
  serviceDescription,
  serviceArea,
  priceRange = "See pricing at justlegalsolutions.org/pricing",
  serviceType = "Process Serving"
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tulsa",
        "addressRegion": "Oklahoma",
        "addressCountry": "US"
      },
      "telephone": "(539) 367-6832",
      "url": "https://justlegalsolutions.org"
    },
    "areaServed": {
      "@type": "Place",
      "name": serviceArea
    },
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "category": "Legal Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional legal document delivery within 5-7 business days"
          },
          "price": "60",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving",
            "description": "Expedited legal document delivery within 24-48 hours"
          },
          "price": "100",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Same-Day Process Serving",
            "description": "Emergency legal document delivery within same business day"
          },
          "price": "150",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
