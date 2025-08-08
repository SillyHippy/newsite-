import Script from 'next/script';

interface DuckDuckGoOptimizationProps {
  businessName?: string;
  focusKeywords?: string[];
  privacyFocused?: boolean;
  quickAnswers?: boolean;
}

export default function DuckDuckGoOptimization({ 
  businessName = "Just Legal Solutions",
  focusKeywords = ["process server tulsa", "legal document delivery", "oklahoma process serving", "emergency legal service"],
  privacyFocused = true,
  quickAnswers = true
}: DuckDuckGoOptimizationProps) {
  const duckDuckGoSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "description": "Professional process serving and legal document delivery throughout Oklahoma with guaranteed privacy and confidential handling",
    "url": "https://justlegalsolutions.org",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://justlegalsolutions.org",
      "name": "Just Legal Solutions - Professional Process Server in Oklahoma",
      "description": "Confidential process serving with professional legal document delivery throughout Oklahoma. Available 24/7 for emergency service.",
      "keywords": focusKeywords.join(", "),
      "inLanguage": "en-US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+15393676832",
      "contactType": "customer service",
      "areaServed": "Oklahoma"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tulsa",
      "addressRegion": "Oklahoma",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    ...(quickAnswers && {
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is process serving?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Process serving is the legal delivery of court documents to notify parties of legal proceedings. Professional process servers ensure proper legal notification according to state requirements."
          }
        },
        {
          "@type": "Question", 
          "name": "How much does process serving cost in Oklahoma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Process serving costs vary based on urgency and complexity. Contact Just Legal Solutions for a professional quote tailored to your specific legal document delivery needs."
          }
        },
        {
          "@type": "Question",
          "name": "Is emergency process serving available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Just Legal Solutions provides 24/7 emergency process serving throughout Oklahoma when time-sensitive situations require immediate legal document delivery."
          }
        }
      ]
    }),
    "offers": {
      "@type": "Offer",
      "description": "Professional process serving throughout Oklahoma",
      "areaServed": {
        "@type": "State",
        "name": "Oklahoma"
      },
      "availability": "https://schema.org/InStock"
    },
    ...(privacyFocused && {
      "privacyPolicy": "https://justlegalsolutions.org/security-policy",
      "termsOfService": "https://justlegalsolutions.org/security-policy",
      "dataProtection": {
        "@type": "DataProtection",
        "description": "All client information and legal documents are handled with strict confidentiality and professional discretion"
      }
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Process Serving Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Standard Process Serving",
          "description": "Professional legal document delivery within 3-5 business days throughout Oklahoma"
        },
        {
          "@type": "Service",
          "name": "Emergency Process Serving", 
          "description": "Urgent legal document delivery when time-sensitive situations require immediate attention"
        },
        {
          "@type": "Service",
          "name": "Skip Tracing Services",
          "description": "Professional location services to find individuals for legal document delivery"
        }
      ]
    }
  };

  return (
    <Script
      id="duckduckgo-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(duckDuckGoSchema) }}
    />
  );
}
