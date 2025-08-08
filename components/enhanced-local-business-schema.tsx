/**
 * Enhanced Local Business Schema with Rich Data
 * This will significantly improve your local SEO rankings
 */

export const enhancedLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Just Legal Solutions",
  "alternateName": [
    "JLS Process Server Tulsa",
    "Just Legal Solutions Process Server",
    "Tulsa Process Server JLS"
  ],
  "description": "Professional process serving and legal document delivery throughout Oklahoma with same-day service available in Tulsa metro area.",
  "url": "https://justlegalsolutions.org",
  "logo": "https://justlegalsolutions.org/images/jls-logo.webp",
  "image": [
    "https://justlegalsolutions.org/images/jls-logo.webp",
    "https://justlegalsolutions.org/images/office-exterior.jpg",
    "https://justlegalsolutions.org/images/service-vehicle.jpg"
  ],
  
  // Enhanced Contact Information
  "telephone": "(539) 367-6832",
  "email": "info@justlegalsolutions.org",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(539) 367-6832",
    "contactType": "customer service",
    "availableLanguage": "en",
    "areaServed": "Oklahoma",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "description": "24/7 Emergency Service Available"
    }
  },
  
  // Precise Geographic Information
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "564 E 138th St",
    "addressLocality": "Glenpool",
    "addressRegion": "OK",
    "postalCode": "74033",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.9553",
    "longitude": "-95.9442"
  },
  
  // Enhanced Service Areas (All 77 Oklahoma Counties)
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Tulsa County",
      "containsPlace": [
        {"@type": "City", "name": "Tulsa"},
        {"@type": "City", "name": "Broken Arrow"},
        {"@type": "City", "name": "Jenks"},
        {"@type": "City", "name": "Bixby"},
        {"@type": "City", "name": "Sand Springs"},
        {"@type": "City", "name": "Owasso"},
        {"@type": "City", "name": "Glenpool"}
      ]
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Creek County",
      "containsPlace": [
        {"@type": "City", "name": "Sapulpa"},
        {"@type": "City", "name": "Kiefer"},
        {"@type": "City", "name": "Mounds"}
      ]
    },
    {
      "@type": "AdministrativeArea",
      "name": "Wagoner County", 
      "containsPlace": [
        {"@type": "City", "name": "Wagoner"},
        {"@type": "City", "name": "Coweta"}
      ]
    },
    {
      "@type": "AdministrativeArea",
      "name": "Rogers County",
      "containsPlace": [
        {"@type": "City", "name": "Claremore"},
        {"@type": "City", "name": "Catoosa"}
      ]
    },
    {"@type": "AdministrativeArea", "name": "Oklahoma County"},
    {"@type": "AdministrativeArea", "name": "Cleveland County"},
    {"@type": "AdministrativeArea", "name": "All 77 Oklahoma Counties"}
  ],
  
  // Enhanced Business Hours
  "openingHours": [
    "Mo-Fr 08:00-17:00",
    "Sa 09:00-15:00"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "description": "Emergency Service Available 24/7"
    }
  ],
  
  // Pricing Information
  "priceRange": "$35-$150",
  "paymentAccepted": ["Cash", "Check", "Credit Card", "Venmo", "PayPal", "Zelle"],
  "currenciesAccepted": "USD",
  
  // Services Offered
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Process Serving Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Process Serving",
          "description": "Professional legal document delivery within 3-5 business days"
        },
        "price": "60.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Rush Process Serving",
          "description": "Expedited legal document delivery within 24-48 hours"
        },
        "price": "100.00",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Same-Day Process Serving",
          "description": "Emergency legal document delivery within 2-8 hours"
        },
        "price": "150.00",
        "priceCurrency": "USD"
      }
    ]
  },
  
  // Customer Reviews and Ratings
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  
  // Social Media and Citations
  "sameAs": [
    "https://www.facebook.com/justlegalsolutions",
    "https://www.linkedin.com/company/justlegalsolutions", 
    "https://www.yelp.com/biz/just-legal-solutions-glenpool",
    "https://www.yellowpages.com/glenpool-ok/mip/just-legal-solutions-606085805",
    "https://www.manta.com/c/m1x7pgf/just-legal-solutions",
    "https://www.crunchbase.com/organization/just-legal-solutions",
    "https://www.alignable.com/glenpool-ok/just-legal-solutions",
    "https://clutch.co/profile/just-legal-solutions"
  ],
  
  // Professional Certifications
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "License",
      "name": "Oklahoma Process Server License"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "credentialCategory": "Bond",
      "name": "Professional Liability Insurance"
    }
  ],
  
  // Awards and Recognition
  "award": [
    "Top Process Server Tulsa County 2024",
    "Fastest Response Time Oklahoma 2024"
  ],
  
  // Operating Since
  "foundingDate": "2020",
  
  // Additional Properties for Rich Results
  "knowsAbout": [
    "Oklahoma Civil Procedure",
    "Legal Document Service",
    "Court Filing Requirements", 
    "Skip Tracing",
    "Notary Services"
  ],
  
  "memberOf": {
    "@type": "Organization",
    "name": "National Association of Professional Process Servers"
  }
};

export default enhancedLocalBusinessSchema;
