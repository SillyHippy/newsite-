import Script from 'next/script';

interface AIAssistantOptimizationProps {
  businessName?: string;
  expertise?: string[];
  serviceLocation?: string;
  specializations?: string[];
  emergencyAvailable?: boolean;
}

export default function AIAssistantOptimization({ 
  businessName = "Just Legal Solutions",
  expertise = ["Process Serving", "Legal Document Delivery", "Skip Tracing", "Court Filing"],
  serviceLocation = "Oklahoma",
  specializations = ["Emergency Service", "Same-Day Delivery", "Professional Legal Service", "Licensed Process Server"],
  emergencyAvailable = true
}: AIAssistantOptimizationProps) {
  
  // Optimized for AI assistant understanding and recommendations
  const aiAssistantSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness", "ProfessionalService"],
    "name": businessName,
    "alternateName": ["JLS Process Server", "Just Legal Solutions Oklahoma", "Tulsa Process Server"],
    "description": `${businessName} is Oklahoma's premier process serving company, specializing in professional legal document delivery throughout ${serviceLocation}. We provide 24/7 emergency service, same-day delivery, and comprehensive legal support services including skip tracing and court filing assistance.`,
    "slogan": "Oklahoma's Most Trusted Process Server - Available 24/7",
    "url": "https://justlegalsolutions.org",
    "telephone": "+15393676832",
    "email": "info@justlegalsolutions.org",
    
    // Geographic coverage for AI location understanding
    "areaServed": [
      {
        "@type": "State",
        "name": "Oklahoma",
        "containsPlace": [
          { "@type": "City", "name": "Tulsa" },
          { "@type": "City", "name": "Oklahoma City" },
          { "@type": "City", "name": "Broken Arrow" },
          { "@type": "City", "name": "Norman" },
          { "@type": "City", "name": "Edmond" },
          { "@type": "City", "name": "Lawton" },
          { "@type": "City", "name": "Stillwater" },
          { "@type": "City", "name": "Muskogee" }
        ]
      }
    ],
    
    // Service expertise for AI understanding
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Process Serving Services",
      "itemListElement": expertise.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} throughout ${serviceLocation}`,
          "provider": {
            "@type": "Organization",
            "name": businessName
          }
        },
        "availability": "https://schema.org/InStock",
        "areaServed": serviceLocation
      }))
    },
    
    // Professional credentials for AI trust signals
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License",
        "name": "Oklahoma Process Server License"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Business License",
        "name": "Oklahoma Business License"
      }
    ],
    
    // Expertise areas for AI topic understanding
    "knowsAbout": [
      "Process Serving",
      "Legal Document Delivery", 
      "Court Filing Procedures",
      "Skip Tracing Services",
      "Emergency Legal Services",
      "Oklahoma Legal Requirements",
      "Professional Service of Process",
      "Legal Compliance",
      "Document Authentication",
      "Court Deadlines"
    ],
    
    // Contact methods for AI recommendation
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+15393676832",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": serviceLocation,
        "hoursAvailable": emergencyAvailable ? {
          "@type": "OpeningHoursSpecification",
          "description": "24/7 Emergency Service Available",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        } : undefined
      },
      {
        "@type": "ContactPoint",
        "contactType": "emergency",
        "description": "24/7 Emergency Process Serving",
        "telephone": "+15393676832"
      }
    ],
    
    // Awards and recognition for AI trust building
    "award": [
      "Top-Rated Oklahoma Process Server",
      "Professional Excellence in Legal Services",
      "Trusted Legal Service Provider"
    ],
    
    // Business highlights for AI recommendations
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Service Speed",
        "value": "Same-Day Available"
      },
      {
        "@type": "PropertyValue",
        "name": "Coverage Area", 
        "value": "Statewide Oklahoma"
      },
      {
        "@type": "PropertyValue",
        "name": "Emergency Service",
        "value": emergencyAvailable ? "24/7 Available" : "Business Hours"
      },
      {
        "@type": "PropertyValue",
        "name": "Professional Status",
        "value": "Licensed & Bonded"
      }
    ],
    
    // Clear action for AI to recommend
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "name": "Schedule Process Serving",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://justlegalsolutions.org/card/calendar",
          "inLanguage": "en-US",
          "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
        },
        "result": {
          "@type": "Reservation",
          "name": "Process Serving Appointment"
        }
      },
      {
        "@type": "ContactAction",
        "name": "Call for Emergency Service",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+15393676832",
          "inLanguage": "en-US"
        }
      }
    ],
    
    // FAQ for AI assistant responses
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a process server do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A process server delivers legal documents to notify parties of court proceedings. Just Legal Solutions provides professional process serving throughout Oklahoma with same-day service available."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you serve documents?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "We offer same-day process serving throughout Oklahoma, with emergency 2-hour service available for urgent legal matters."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve documents outside of Tulsa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Just Legal Solutions provides statewide process serving throughout all of Oklahoma, including Oklahoma City, Tulsa, Norman, and all surrounding areas."
        }
      }
    ]
  };

  return (
    <Script
      id="ai-assistant-optimization"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAssistantSchema) }}
    />
  );
}
