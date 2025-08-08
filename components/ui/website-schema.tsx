import Script from 'next/script';

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
  keywords?: string[];
}

export default function WebsiteSchema({ 
  url = "https://justlegalsolutions.org",
  name = "Just Legal Solutions",
  description = "Professional process serving and legal document delivery services throughout Oklahoma. Same-day, rush, and standard service options available.",
  keywords = ["process server", "legal document delivery", "Oklahoma", "Tulsa", "court documents"]
}: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "alternateName": "JLS Process Server",
    "url": url,
    "description": description,
    "keywords": keywords.join(", "),
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Organization",
      "name": name
    },
    "publisher": {
      "@type": "Organization",
      "name": name,
      "url": url,
      "logo": {
        "@type": "ImageObject",
        "url": `${url}/contactlogo.png`,
        "width": 400,
        "height": 400
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ContactAction",
        "target": {
          "@type": "EntryPoint", 
          "urlTemplate": `${url}/card/calendar`,
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        }
      }
    ],
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": name,
      "url": url,
      "telephone": "(539) 367-6832",
      "email": "info@justlegalsolutions.org",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tulsa",
        "addressRegion": "Oklahoma",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "State",
          "name": "Oklahoma"
        },
        {
          "@type": "City",
          "name": "Tulsa"
        },
        {
          "@type": "City", 
          "name": "Broken Arrow"
        },
        {
          "@type": "City",
          "name": "Sapulpa"
        }
      ],
      "serviceType": [
        "Process Serving",
        "Legal Document Delivery", 
        "Court Document Filing",
        "Skip Tracing Services"
      ]
    },
    "hasPart": [
      {
        "@type": "WebPage",
        "name": "Process Serving Services",
        "url": `${url}/services`,
        "description": "Professional process serving throughout Oklahoma"
      },
      {
        "@type": "WebPage",
        "name": "Pricing Information",
        "url": `${url}/pricing`,
        "description": "Transparent pricing for all process serving services"
      },
      {
        "@type": "WebPage",
        "name": "Service Areas",
        "url": `${url}/tulsa-process-server`,
        "description": "Complete coverage throughout Oklahoma with priority service in Tulsa County"
      }
    ]
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
