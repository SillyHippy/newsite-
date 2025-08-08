import React from 'react';

export default function ReviewAggregateSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "name": "Just Legal Solutions Customer Reviews",
    "description": "Aggregated customer reviews from multiple verified platforms and direct client feedback",
    "aggregateRating": {
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Just Legal Solutions",
        "url": "https://justlegalsolutions.org"
      },
      "ratingValue": "4.9",
      "ratingCount": "127",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "4",
      "description": "Reviews collected from Google Business Profile, Yelp, Facebook Business Page, phone consultations, and direct client testimonials"
    },
    "reviewAspect": [
      "Service Quality",
      "Response Time", 
      "Professionalism",
      "Reliability",
      "Communication",
      "Documentation",
      "Same-Day Service",
      "Emergency Availability"
    ],
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Just Legal Solutions",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    },
    "provider": [
      {
        "@type": "Organization",
        "name": "Google Business Profile",
        "url": "https://www.google.com/maps/place/Just+Legal+Solutions"
      },
      {
        "@type": "Organization", 
        "name": "Yelp Business",
        "url": "https://www.yelp.com/biz/just-legal-solutions"
      },
      {
        "@type": "Organization",
        "name": "Facebook Business Page",
        "url": "https://www.facebook.com/justlegalsolutions"
      },
      {
        "@type": "Organization",
        "name": "Direct Client Feedback",
        "description": "Phone consultations and written testimonials"
      }
    ]
  };

  return (
    <>
      <script
        id="review-aggregate-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
