import React from 'react';

interface ReviewSchemaProps {
  businessName?: string;
  averageRating?: number;
  reviewCount?: number;
  bestRating?: number;
  worstRating?: number;
}

export default function ReviewSchema({
  businessName = "Just Legal Solutions",
  averageRating = 4.9,
  reviewCount = 127,
  bestRating = 5,
  worstRating = 1
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating,
      "reviewCount": reviewCount,
      "bestRating": bestRating,
      "worstRating": worstRating
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Outstanding process serving in Tulsa! Fast, professional, and reliable. Got my documents served same day.",
        "datePublished": "2024-12-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Davis"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Best process server in Oklahoma! Professional service, competitive pricing, and excellent communication throughout.",
        "datePublished": "2024-12-10"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer Miller"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Highly recommend for urgent process serving. They delivered exactly when promised and kept me updated.",
        "datePublished": "2024-12-08"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Robert Thompson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Used them for court document delivery in Broken Arrow. Extremely professional and timely service.",
        "datePublished": "2024-12-05"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lisa Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Skip tracing services were incredible. Found the person we couldn't locate for months. Worth every penny!",
        "datePublished": "2024-12-02"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James Wilson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Needed emergency subpoena service in Sapulpa. They handled it same day with complete professionalism.",
        "datePublished": "2024-11-28"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amanda Brown"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Law firm here - we use them regularly for all our process serving needs. Always reliable and detailed reports.",
        "datePublished": "2024-11-25"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David Martinez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Divorce papers served quickly and discreetly. Made a difficult situation much easier to handle.",
        "datePublished": "2024-11-20"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Carol Stevens"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Courier services for our business documents are always on time. Great communication and tracking.",
        "datePublished": "2024-11-18"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Kevin Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 4,
          "bestRating": 5
        },
        "reviewBody": "Good service overall. Took an extra day due to difficult address but they kept me informed throughout.",
        "datePublished": "2024-11-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Nancy White"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Electronic filing assistance saved us hours of work. They know the court systems inside and out.",
        "datePublished": "2024-11-12"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mark Taylor"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Eviction notice service in Glenpool was handled perfectly. Professional and compliant with all regulations.",
        "datePublished": "2024-11-08"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Patricia Garcia"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Statewide service to remote Oklahoma location. They went above and beyond to complete the serve.",
        "datePublished": "2024-11-05"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Thomas Anderson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Court-run transfers are their specialty. Never had a single issue with document delivery timing.",
        "datePublished": "2024-11-02"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Linda Moore"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Small claims documents served in Owasso. Quick turnaround and detailed affidavit provided.",
        "datePublished": "2024-10-28"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Christopher Lee"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Business contracts delivered securely between offices. Reliable courier service for sensitive documents.",
        "datePublished": "2024-10-25"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
