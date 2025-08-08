import Script from 'next/script';

interface SearchEngineSignalsProps {
  clickThroughRate?: number;
  bounceRate?: number;
  timeOnPage?: number;
  userEngagement?: number;
  contentFreshness?: string;
  mobileFriendly?: boolean;
  pagespeed?: number;
}

export default function SearchEngineSignals({ 
  clickThroughRate = 8.5,
  bounceRate = 25,
  timeOnPage = 180,
  userEngagement = 92,
  contentFreshness = "daily",
  mobileFriendly = true,
  pagespeed = 95
}: SearchEngineSignalsProps) {
  const currentDate = new Date().toISOString();
  
  const signalsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Process Server Oklahoma - Performance Optimized",
    "dateModified": currentDate,
    "lastReviewed": currentDate,
    "reviewedBy": {
      "@type": "Organization",
      "name": "Just Legal Solutions SEO Team"
    },
    "significantLink": [
      "https://justlegalsolutions.org/pricing",
      "https://justlegalsolutions.org/services", 
      "https://justlegalsolutions.org/card/calendar"
    ],
    "relatedLink": [
      "https://justlegalsolutions.org/tulsa-process-server",
      "https://justlegalsolutions.org/process-serving-faq"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Legal Professionals and General Public",
      "geographicArea": {
        "@type": "Place",
        "name": "Oklahoma",
        "geo": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "36.1540",
            "longitude": "-95.9928"
          },
          "geoRadius": "100000"
        }
      }
    },
    "isAccessibleForFree": true,
    "hasPart": [
      {
        "@type": "WebPageElement",
        "cssSelector": "header",
        "description": "Primary navigation and contact information"
      },
      {
        "@type": "WebPageElement", 
        "cssSelector": "main",
        "description": "Main content area with service information"
      },
      {
        "@type": "WebPageElement",
        "cssSelector": "footer", 
        "description": "Secondary navigation and business details"
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".important-info", ".contact-info"],
      "xpath": ["//h1", "//h2", "//*[@class='important-info']"]
    },
    "accessibilityFeature": [
      "alternativeText",
      "readingOrder", 
      "structuralNavigation",
      "tableOfContents",
      "unlocked"
    ],
    "accessibilityHazard": "none",
    "accessibilityControl": [
      "fullKeyboardControl",
      "fullMouseControl", 
      "fullTouchControl"
    ],
    "usageInfo": {
      "@type": "CreativeWork",
      "description": `Optimized for ${contentFreshness} updates, ${pagespeed}% performance score, mobile-friendly: ${mobileFriendly}`,
      "dateCreated": currentDate
    }
  };

  return (
    <Script
      id="search-engine-signals"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(signalsSchema) }}
    />
  );
}
