
import Script from 'next/script';

interface AIOptimizedContentSchemaProps {
  pageName: string;
  primaryKeywords: string[];
  semanticKeywords: string[];
  topicalAuthority: string;
  contentFreshness?: string;
  userIntent?: string;
}

export default function AIOptimizedContentSchema({ 
  pageName,
  primaryKeywords,
  semanticKeywords,
  topicalAuthority,
  contentFreshness = "daily",
  userIntent = "commercial"
}: AIOptimizedContentSchemaProps) {
  const currentDate = new Date().toISOString();
  
  const aiOptimizedSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://justlegalsolutions.org#${pageName.toLowerCase().replace(/\s+/g, '-')}`,
    "name": pageName,
    "description": `AI-optimized content for ${pageName} with comprehensive keyword targeting and semantic optimization`,
    "dateModified": currentDate,
    "lastReviewed": currentDate,
    "reviewedBy": {
      "@type": "Organization",
      "name": "Just Legal Solutions SEO Team"
    },
    
    // AI-specific optimization signals
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://justlegalsolutions.org/services?q={ai_query}",
          "actionPlatform": [
            "http://schema.org/VoiceApplication",
            "http://schema.org/MobileApplication",
            "http://schema.org/DesktopWebPlatform"
          ]
        },
        "query-input": "required name=ai_query"
      },
      {
        "@type": "ContactAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+15393676832",
          "actionPlatform": [
            "http://schema.org/VoiceApplication",
            "http://schema.org/MobileApplication"
          ]
        }
      }
    ],
    
    // Semantic keyword optimization for AI understanding
    "keywords": [...primaryKeywords, ...semanticKeywords].join(", "),
    "about": [
      {
        "@type": "Thing",
        "name": "Process Serving",
        "description": "Professional legal document delivery services",
        "sameAs": "https://en.wikipedia.org/wiki/Service_of_process"
      },
      {
        "@type": "Place",
        "name": "Oklahoma",
        "description": "US state where services are provided",
        "sameAs": "https://en.wikipedia.org/wiki/Oklahoma"
      }
    ],
    
    // Topical authority signals
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "description": topicalAuthority,
      "expertise": [
        "Process Serving",
        "Legal Document Delivery",
        "Court Filing Services",
        "Skip Tracing",
        "Emergency Legal Services"
      ],
      "serviceArea": {
        "@type": "State",
        "name": "Oklahoma"
      }
    },
    
    // Content freshness signals for AI crawlers
    "temporalCoverage": contentFreshness,
    "contentReferenceTime": currentDate,
    "expires": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 1 year
    
    // User intent optimization
    "audience": {
      "@type": "Audience",
      "audienceType": userIntent === "commercial" ? "Business and Legal Professionals" : "General Public",
      "geographicArea": {
        "@type": "Place",
        "name": "Oklahoma"
      }
    },
    
    // AI-friendly content structure
    "hasPart": [
      {
        "@type": "WebPageElement",
        "cssSelector": "h1, h2, h3",
        "description": "Hierarchical content structure optimized for AI parsing"
      },
      {
        "@type": "WebPageElement",
        "cssSelector": ".primary-answer, .voice-answer",
        "description": "Direct answers optimized for voice search and AI responses"
      },
      {
        "@type": "WebPageElement",
        "cssSelector": ".voice-optimized",
        "description": "Content specifically optimized for voice search queries"
      }
    ],
    
    // Speakable content for voice assistants
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".voice-optimized",
        ".primary-answer", 
        ".voice-answer",
        "h1",
        "h2"
      ],
      "xpath": [
        "//*[@class='voice-optimized']",
        "//*[@class='primary-answer']",
        "//*[@class='voice-answer']",
        "//h1",
        "//h2"
      ]
    },
    
    // Accessibility for AI understanding
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
    
    // Mobile-first optimization signals
    "isAccessibleForFree": true,
    "inLanguage": "en-US",
    "encoding": {
      "@type": "MediaObject",
      "encodingFormat": "text/html",
      "description": "Mobile-first responsive design optimized for all devices"
    }
  };

  return (
    <Script
      id={`ai-optimized-schema-${pageName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aiOptimizedSchema) }}
    />
  );
}

