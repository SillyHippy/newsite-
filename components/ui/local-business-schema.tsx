'use client';

import { useEffect, useMemo } from 'react';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  phone?: string;
  email?: string;
  url?: string;
  serviceArea?: string[];
  services?: string[];
}

export default function LocalBusinessSchema({
  name = "Just Legal Solutions",
  description = "Professional process serving and courier services in Tulsa, Oklahoma. Fast, reliable, and affordable legal document delivery.",
  address = {
    streetAddress: "Tulsa Metropolitan Area",
    addressLocality: "Tulsa",
    addressRegion: "Oklahoma",
    postalCode: "74101"
  },
  phone = "+1-(539) 367-6832",
  email = "info@justlegalsolutions.org",
  url = "https://justlegalsolutions.org",
  serviceArea = ["Tulsa", "Broken Arrow", "Owasso", "Bixby", "Jenks", "Sand Springs", "Sapulpa"],
  services = ["Process Serving", "Court Document Delivery", "Legal Courier Services", "Document Filing"]
}: LocalBusinessSchemaProps) {
  
  const schemaData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#business`,
    "name": name,
    "description": description,
    "url": url,
    "telephone": phone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    "areaServed": serviceArea.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State", 
        "name": "Oklahoma"
      }
    })),
    "serviceType": services,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} in Tulsa, Oklahoma`
        }
      }))
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Check, Online Payment",
    "priceRange": "$40-$200",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      // Add your social media profiles here
      // "https://www.facebook.com/justlegalsolutions",
      // "https://www.linkedin.com/company/justlegalsolutions"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/card/calendar`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Schedule Legal Service"
      }
    }
  }), [name, description, address, phone, email, url, serviceArea, services]);

  useEffect(() => {
    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData, null, 2);
    script.id = 'local-business-schema';
    
    // Remove existing schema if present
    const existing = document.getElementById('local-business-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const schemaScript = document.getElementById('local-business-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [schemaData]);

  return null; // This component doesn't render anything visible
}

// Enhanced Local Business Schema for SEO pages
export function LocalSEOSchema({ city, service }: { city?: string; service?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Just Legal Solutions${city ? ` - ${city}` : ''}`,
    "description": `Professional process serving${service ? ` and ${service}` : ''} in ${city || 'Oklahoma'}${city ? `, Oklahoma` : ''}. Licensed and bonded process servers.`,
    "url": "https://justlegalsolutions.org",
    "telephone": "(539) 367-6832",
    "email": "info@justlegalsolutions.org",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city || "Tulsa",
      "addressRegion": "Oklahoma",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city === "Tulsa" ? "36.1540" : "36.0766",
      "longitude": city === "Tulsa" ? "-95.9928" : "-95.8395"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 09:00-14:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
