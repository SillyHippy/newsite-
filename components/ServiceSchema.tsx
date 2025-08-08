import Script from 'next/script';

export default function ServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Process Serving Services",
    "description": "Professional legal document delivery and process serving throughout Tulsa County, Oklahoma.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "telephone": "(539) 367-6832",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tulsa",
        "addressRegion": "OK",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Process Serving",
            "description": "Professional document delivery within 3-5 business days"
          },
          "price": "40",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Rush Process Serving",
            "description": "Expedited document delivery within 1-2 business days"
          },
          "price": "60",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Same-Day Process Serving",
            "description": "Urgent document delivery on the same day"
          },
          "price": "75",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Process Serving", 
            "description": "Critical document delivery within 2 hours"
          },
          "price": "100",
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
