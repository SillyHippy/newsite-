import Script from 'next/script';

interface EntityRecognitionSchemaProps {
  entityType: "Person" | "Organization" | "Place" | "Service";
  entityName: string;
  entityDescription: string;
  relatedEntities: Array<{
    name: string;
    relationship: string;
    type: string;
  }>;
  knowledgeGraphData?: {
    sameAs?: string[];
    awards?: string[];
    certifications?: string[];
  };
}

export default function EntityRecognitionSchema({ 
  entityType,
  entityName,
  entityDescription,
  relatedEntities,
  knowledgeGraphData = {}
}: EntityRecognitionSchemaProps) {
  const entitySchema = {
    "@context": "https://schema.org",
    "@type": entityType,
    "name": entityName,
    "description": entityDescription,
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "BUSINESS_ENTITY",
      "value": `JLS_${entityName.replace(/\s+/g, '_').toUpperCase()}`
    },
    "sameAs": knowledgeGraphData.sameAs || [
      "https://justlegalsolutions.org",
      "https://www.facebook.com/people/Just-Legal-Solutions/61574881736527/",
      "https://www.linkedin.com/company/justlegalsolutionsok/"
    ],
    "knowsAbout": relatedEntities.map(entity => entity.name),
    "relatedTo": relatedEntities.map(entity => ({
      "@type": entity.type,
      "name": entity.name,
      "relationshipType": entity.relationship
    })),
    "hasCredential": knowledgeGraphData.certifications || [
      "Oklahoma Licensed Process Server",
      "Professional Document Delivery Service"
    ],
    "award": knowledgeGraphData.awards || [
      "Excellent Customer Service Rating",
      "Professional Process Server Certification"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Oklahoma Process Server Association"
    },
    "potentialAction": [
      {
        "@type": "ContactAction",
        "target": "tel:+15393676832"
      },
      {
        "@type": "EmailAction", 
        "target": "mailto:info@justlegalsolutions.org"
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://justlegalsolutions.org"
    }
  };

  return (
    <Script
      id="entity-recognition-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
    />
  );
}
