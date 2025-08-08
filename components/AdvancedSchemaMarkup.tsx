
import React from 'react';

interface SchemaMarkupProps {
  pageType?: 'home' | 'service' | 'pricing' | 'contact';
  serviceName?: string;
}

export default function AdvancedSchemaMarkup({ pageType = 'home', serviceName }: SchemaMarkupProps) {
  const generatePageSpecificSchema = () => {
    switch (pageType) {
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceName || "Process Serving Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Just Legal Solutions",
            "telephone": "(539) 367-6832"
          }
        };
      case 'pricing':
        return {
          "@context": "https://schema.org",
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "name": "Process Serving Pricing"
        };
      default:
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Just Legal Solutions"
        };
    }
  };

  return (
    <div style={{ display: 'none' }} className="advanced-schema-markup">
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePageSpecificSchema()) }}
      />
      <div data-schema-type="LocalBusiness" data-business="Just Legal Solutions">
        <span data-schema-phone="(539) 367-6832"></span>
        <span data-schema-service="Process serving legal document delivery"></span>
        <span data-schema-area="Tulsa County Oklahoma"></span>
        <span data-schema-hours="24/7 Emergency Available"></span>
        <span data-schema-rating="5.0"></span>
        <span data-schema-reviews="50"></span>
      </div>
    </div>
  );
}
